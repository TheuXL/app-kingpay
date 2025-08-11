import { supabase } from './supabase';

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
  const token = await getAccessToken();
  
  if (!token) {
    throw new Error('Token de acesso não encontrado. Usuário não autenticado.');
  }

  const response = await fetch(`${EDGE_FUNCTIONS_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
  }

  return response.json();
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