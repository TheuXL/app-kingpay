import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { WalletData, FinancialData } from '../../services/api';

interface SalesMetricsCardProps {
  walletData: WalletData | null;
  financialData: FinancialData | null;
  loading: boolean;
}

// Função para formatar valores monetários
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100); // Assumindo que os valores vêm em centavos
};

export default function SalesMetricsCard({ walletData, financialData, loading }: SalesMetricsCardProps) {
  // Calcular métricas baseadas nos dados reais
  const reservaFinanceira = walletData ? walletData.reserva_financeira : 0;
  const balanceCard = walletData ? walletData.balance_card : 0;
  
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Métricas de vendas</Text>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2A2AFF" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métricas de vendas</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleContainer}>
              <Feather name="shield" size={16} color="#666" />
              <Text style={styles.cardTitle}>Reserva</Text>
            </View>
            <Text style={styles.cardValue}>{formatCurrency(reservaFinanceira)}</Text>
            <View style={styles.percentageContainer}>
              <Feather name="info" size={14} color="#666" />
              <Text style={styles.cardPercentageNeutral}>Financeira</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleContainer}>
              <MaterialCommunityIcons name="credit-card" size={16} color="#666" />
              <Text style={styles.cardTitle}>Cartão</Text>
            </View>
            <Text style={styles.cardValue}>{formatCurrency(Math.abs(balanceCard))}</Text>
            <View style={styles.percentageContainer}>
              <Feather name={balanceCard >= 0 ? "arrow-up" : "arrow-down"} size={14} color={balanceCard >= 0 ? "green" : "red"} />
              <Text style={balanceCard >= 0 ? styles.cardPercentageGood : styles.cardPercentageBad}>
                {balanceCard >= 0 ? 'Positivo' : 'Negativo'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '48%',
  },
  cardTextContainer: {
    // marginLeft: 15,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardPercentageGood: {
    fontSize: 14,
    color: 'green',
    marginLeft: 5,
  },
  cardPercentageBad: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
  },
  cardPercentageNeutral: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
