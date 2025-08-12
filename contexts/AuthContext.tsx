import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../services/supabase';
import { logger } from '../services/logger';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  signIn: async () => ({ error: 'Context not initialized' }),
  signOut: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão existente
    logger.info('🔍 Verificando sessão existente...');
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (session) {
        logger.logAuth('LOGIN', session.user.id);
        logger.info('✅ Sessão existente encontrada', { userId: session.user.id, email: session.user.email });
      } else {
        logger.info('❌ Nenhuma sessão existente encontrada');
      }
    });

    // Escutar mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      logger.info(`🔄 Mudança de autenticação: ${event}`, { userId: session?.user?.id });
      
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (event === 'SIGNED_IN' && session) {
        logger.logAuth('LOGIN', session.user.id);
      } else if (event === 'SIGNED_OUT') {
        logger.logAuth('LOGOUT');
      } else if (event === 'TOKEN_REFRESHED' && session) {
        logger.logAuth('TOKEN_REFRESH', session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      logger.info('🔐 Tentativa de login iniciada', { email });
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        logger.logError('AUTH', 'signInWithPassword', `Erro no login: ${error.message}`);
        return { error: error.message };
      }

      logger.info('✅ Login realizado com sucesso', { userId: data.user?.id, email: data.user?.email });
      // A sessão será automaticamente definida pelo listener onAuthStateChange
      return {};
    } catch (error: any) {
      const errorMessage = error.message || 'Erro inesperado durante o login';
      logger.logError('AUTH', 'signIn', errorMessage);
      return { error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      logger.info('🚪 Iniciando logout...');
      
      await supabase.auth.signOut();
      logger.info('✅ Logout realizado com sucesso');
      // A sessão será automaticamente limpa pelo listener onAuthStateChange
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido durante logout';
      logger.logError('AUTH', 'signOut', errorMessage);
      console.error('Erro durante logout:', error);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    session,
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
