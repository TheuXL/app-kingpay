import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { apiService, WalletData, ExtractItem } from '../services/api';

interface WalletScreenData {
  wallet: WalletData | null;
  extract: ExtractItem[];
  loading: boolean;
  error: string | null;
}

export const useWalletData = () => {
  const { user } = useAuth();
  const [data, setData] = useState<WalletScreenData>({
    wallet: null,
    extract: [],
    loading: true,
    error: null,
  });

  const fetchWalletData = async () => {
    if (!user?.id) {
      setData(prev => ({ ...prev, loading: false, error: 'Usuário não encontrado' }));
      return;
    }

    try {
      setData(prev => ({ ...prev, loading: true, error: null }));

      // Fazer as requisições em paralelo
      const [walletResponse, extractResponse] = await Promise.allSettled([
        apiService.getWallet(user.id),
        apiService.getExtract(user.id),
      ]);

      const newData: Partial<WalletScreenData> = {};

      // Processar resposta da carteira
      if (walletResponse.status === 'fulfilled') {
        newData.wallet = walletResponse.value;
      } else {
        console.error('Erro ao buscar dados da carteira:', walletResponse.reason);
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
      console.error('Erro ao buscar dados da carteira:', error);
      setData(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Erro ao carregar dados',
      }));
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchWalletData();
    }
  }, [user?.id]);

  const refetch = () => {
    fetchWalletData();
  };

  return {
    ...data,
    refetch,
  };
};