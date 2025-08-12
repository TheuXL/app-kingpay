import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { apiService, WalletData, FinancialData, ExtractItem } from '../services/api';

interface TransactionsScreenData {
  wallet: WalletData | null;
  financial: FinancialData | null;
  extract: ExtractItem[];
  loading: boolean;
  error: string | null;
}

export const useTransactionsData = () => {
  const { user } = useAuth();
  const [data, setData] = useState<TransactionsScreenData>({
    wallet: null,
    financial: null,
    extract: [],
    loading: true,
    error: null,
  });

  const fetchTransactionsData = async () => {
    if (!user?.id) {
      setData(prev => ({ ...prev, loading: false, error: 'Usuário não encontrado' }));
      return;
    }

    try {
      setData(prev => ({ ...prev, loading: true, error: null }));

      // Fazer as requisições em paralelo
      const [walletResponse, financialResponse, extractResponse] = await Promise.allSettled([
        apiService.getWallet(user.id),
        apiService.getFinancialData(),
        apiService.getExtract(user.id),
      ]);

      const newData: Partial<TransactionsScreenData> = {};

      // Processar resposta da carteira
      if (walletResponse.status === 'fulfilled') {
        newData.wallet = walletResponse.value;
      } else {
        console.error('Erro ao buscar dados da carteira:', walletResponse.reason);
      }

      // Processar resposta financeira
      if (financialResponse.status === 'fulfilled') {
        newData.financial = financialResponse.value;
      } else {
        console.error('Erro ao buscar dados financeiros:', financialResponse.reason);
      }

      // Processar resposta do extrato
      if (extractResponse.status === 'fulfilled') {
        newData.extract = extractResponse.value.extrato || [];
      } else {
        console.error('Erro ao buscar extrato:', extractResponse.reason);
      }

      setData(prev => ({
        ...prev,
        ...newData,
        loading: false,
      }));

    } catch (error: any) {
      console.error('Erro ao buscar dados das transações:', error);
      setData(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Erro ao carregar dados',
      }));
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchTransactionsData();
    }
  }, [user?.id]);

  const refetch = () => {
    fetchTransactionsData();
  };

  return {
    ...data,
    refetch,
  };
};