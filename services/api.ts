import { supabase } from './supabase';
import { logger } from './logger';

const EDGE_FUNCTIONS_URL = process.env.EXPO_PUBLIC_EDGE_FUNCTIONS_URL || '';

if (!EDGE_FUNCTIONS_URL) {
  throw new Error('EXPO_PUBLIC_EDGE_FUNCTIONS_URL não configurada');
}

// Função para obter o token de acesso atual
const getAccessToken = async (): Promise<string | null> => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token || null;
};

// Função base para fazer requisições autenticadas
const makeAuthenticatedRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const startTime = Date.now();
  const method = options.method || 'GET';
  const fullUrl = `${EDGE_FUNCTIONS_URL}${endpoint}`;
  
  const token = await getAccessToken();
  
  if (!token) {
    const error = 'Token de acesso não encontrado. Usuário não autenticado.';
    logger.logError(method, fullUrl, error);
    throw new Error(error);
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };

  // Log da requisição
  const requestData = options.body ? JSON.parse(options.body as string) : undefined;
  const headersForLog: Record<string, string> = {
    'Content-Type': headers['Content-Type'],
    'Authorization': headers['Authorization']
  };
  const requestId = logger.logRequest(method, fullUrl, requestData, headersForLog);

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers,
    });

    const duration = Date.now() - startTime;
    
    if (!response.ok) {
      const errorText = await response.text();
      logger.logError(method, fullUrl, `${response.status} ${response.statusText}: ${errorText}`, response.status, duration);
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    
    // Log da resposta bem-sucedida
    logger.logResponse(method, fullUrl, response.status, responseData, duration, requestId);
    
    return responseData;
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    logger.logError(method, fullUrl, errorMessage, undefined, duration);
    throw error;
  }
};

// Interfaces para tipagem dos dados
export interface WalletData {
  w: string;
  balance: number;
  balance_card: number;
  total: number;
  a_receber: number;
  disponivel_para_antecipacao: number;
  reserva_financeira: number;
}

export interface FinancialData {
  total_balances: {
    total_balance: number;
    total_balance_card: number;
    total_financial_reserve: number;
  };
  pending_withdrawals: {
    pending_withdrawals_amount: number;
    pending_withdrawals_count: number;
  };
}

export interface ExtractItem {
  id: string;
  created_at: string;
  tipo: string;
  valor: number;
  status: string;
  descricao?: string;
}

// Serviços da API
export const apiService = {
  // Obter dados da carteira
  async getWallet(userId: string): Promise<WalletData> {
    return makeAuthenticatedRequest(`/functions/v1/wallet?userId=${userId}`);
  },

  // Obter dados financeiros do dashboard
  async getFinancialData(): Promise<FinancialData> {
    return makeAuthenticatedRequest('/functions/v1/whitelabel-financeiro', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  },

  // Obter extrato do usuário
  async getExtract(userId: string): Promise<{ extrato: ExtractItem[] }> {
    return makeAuthenticatedRequest(`/functions/v1/extrato/${userId}`);
  },

  // Obter dados do dashboard (se necessário)
  async getDashboardData(filters: any = {}): Promise<any> {
    return makeAuthenticatedRequest('/functions/v1/dados-dashboard', {
      method: 'POST',
      body: JSON.stringify(filters),
    });
  },
};