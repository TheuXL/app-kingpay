import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { WalletData } from '../../services/api';

interface BalanceCardProps {
  walletData: WalletData | null;
  loading: boolean;
}

// Função para formatar valores monetários
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100); // Assumindo que os valores vêm em centavos
};

export default function BalanceCard({ walletData, loading }: BalanceCardProps) {
  const displayBalance = walletData ? formatCurrency(walletData.balance) : 'R$ 0,00';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Saldo disponível</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <Text style={styles.balanceText}>{displayBalance}</Text>
      )}
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Antecipar Saque</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2AFF',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  balanceText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 50,
  },
  withdrawButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  withdrawButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  loadingContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
});
