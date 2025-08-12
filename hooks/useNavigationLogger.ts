/**
 * 🧭 Hook para Logging de Navegação - KingPay Mobile
 * =================================================
 * 
 * Hook personalizado que captura e registra todas as mudanças de navegação
 * no app, fornecendo insights sobre o comportamento do usuário.
 */

import { usePathname } from 'expo-router';
import { useEffect, useRef } from 'react';
import { logger } from '../services/logger';

export const useNavigationLogger = () => {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (previousPathname.current && previousPathname.current !== pathname) {
      // Log da navegação
      logger.logNavigation(previousPathname.current, pathname);
      
      // Log adicional com informações da tela
      const screenInfo = getScreenInfo(pathname);
      logger.info(`📱 Tela carregada: ${screenInfo.name}`, {
        path: pathname,
        category: screenInfo.category,
        requiresAuth: screenInfo.requiresAuth
      });
    }
    
    previousPathname.current = pathname;
  }, [pathname]);

  return {
    currentPath: pathname,
    previousPath: previousPathname.current
  };
};

// Função auxiliar para obter informações da tela
function getScreenInfo(pathname: string) {
  const screenMap: Record<string, { name: string; category: string; requiresAuth: boolean }> = {
    '/': { name: 'Tela Inicial', category: 'auth', requiresAuth: false },
    '/login': { name: 'Login', category: 'auth', requiresAuth: false },
    '/forgot-password': { name: 'Esqueci a Senha', category: 'auth', requiresAuth: false },
    '/verify-code': { name: 'Verificar Código', category: 'auth', requiresAuth: false },
    '/home': { name: 'Dashboard', category: 'main', requiresAuth: true },
    '/wallet': { name: 'Carteira', category: 'financial', requiresAuth: true },
    '/transactions': { name: 'Transações', category: 'financial', requiresAuth: true },
    '/create-payment-link': { name: 'Criar Link de Pagamento', category: 'payment', requiresAuth: true },
    '/create-payment-link-personalize': { name: 'Personalizar Link', category: 'payment', requiresAuth: true },
    '/payment-link-success': { name: 'Link Criado com Sucesso', category: 'payment', requiresAuth: true },
    '/payment-link': { name: 'Links de Pagamento', category: 'payment', requiresAuth: true },
    '/kingpay-journey': { name: 'Jornada KingPay', category: 'onboarding', requiresAuth: true },
    '/kingpay-journey-details': { name: 'Detalhes da Jornada', category: 'onboarding', requiresAuth: true },
    '/settings': { name: 'Configurações', category: 'settings', requiresAuth: true },
    '/settings/personal-data': { name: 'Dados Pessoais', category: 'settings', requiresAuth: true },
    '/settings/company-data': { name: 'Dados da Empresa', category: 'settings', requiresAuth: true },
    '/settings/rates': { name: 'Tarifas', category: 'settings', requiresAuth: true },
  };

  return screenMap[pathname] || {
    name: pathname.split('/').pop() || 'Tela Desconhecida',
    category: 'unknown',
    requiresAuth: true
  };
}

export default useNavigationLogger;