import { Dimensions, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { WalletData, FinancialData } from '../../services/api';

interface SalesSummaryCardProps {
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

export default function SalesSummaryCard({ walletData, financialData, loading }: SalesSummaryCardProps) {
  // Calcular valores baseados nos dados reais
  const totalSales = walletData ? walletData.total : 0;
  const pendingAmount = walletData ? walletData.a_receber : 0;
  const availableBalance = walletData ? walletData.balance : 0;
  
  // Dados para o gráfico (por enquanto usando dados simulados baseados nos valores reais)
  const chartData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        data: [
          totalSales * 0.2,
          totalSales * 0.3,
          totalSales * 0.25,
          totalSales * 0.25,
        ],
      },
    ],
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#2A2AFF" />
        <Text style={styles.loadingText}>Carregando dados de vendas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.totalSales}>{formatCurrency(totalSales)}</Text>
      <Text style={styles.salesPeriod}>Últimos 30 dias</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(42, 42, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#2A2AFF',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2A2AFF' }]} />
          <Text>Vendas</Text>
          <Text style={styles.legendValue}>{formatCurrency(availableBalance)}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFA500' }]} />
          <Text>Pendente</Text>
          <Text style={styles.legendValue}>{formatCurrency(pendingAmount)}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF0000' }]} />
          <Text>Estorno</Text>
          <Text style={styles.legendValue}>R$ 0,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  totalSales: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  salesPeriod: {
    fontSize: 14,
    color: '#666',
  },
  legendContainer: {
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  legendValue: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
});
