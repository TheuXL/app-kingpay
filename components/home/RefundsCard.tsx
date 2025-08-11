import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { FinancialData } from '../../services/api';

interface RefundsCardProps {
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

export default function RefundsCard({ financialData, loading }: RefundsCardProps) {
  // Usar dados de saques pendentes como proxy para reembolsos
  const pendingWithdrawals = financialData?.pending_withdrawals?.pending_withdrawals_amount || 0;
  const pendingCount = financialData?.pending_withdrawals?.pending_withdrawals_count || 0;
  
  // Simular dados de reembolso baseados nos saques pendentes
  const totalRefunds = pendingWithdrawals;
  const processedRefunds = totalRefunds * 0.7; // 70% processados
  const pendingRefunds = totalRefunds * 0.3; // 30% pendentes
  const progressPercentage = totalRefunds > 0 ? 30 : 0;

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#2A2AFF" />
        <Text style={styles.loadingText}>Carregando dados de reembolsos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reembolsos</Text>
      <Text style={styles.totalRefunds}>{formatCurrency(totalRefunds)}</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={styles.progressText}>{progressPercentage}% do limite</Text>
      </View>
      <View style={styles.refundDetails}>
        <View style={styles.refundItem}>
          <Text style={styles.refundLabel}>Processados</Text>
          <Text style={styles.refundValue}>{formatCurrency(processedRefunds)}</Text>
        </View>
        <View style={styles.refundItem}>
          <Text style={styles.refundLabel}>Pendentes ({pendingCount})</Text>
          <Text style={styles.refundValue}>{formatCurrency(pendingRefunds)}</Text>
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
    marginTop: 20,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalRefunds: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  progressBarContainer: {
    marginTop: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E6E9FF',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2A2AFF',
    borderRadius: 5,
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  refundDetails: {
    marginTop: 30,
  },
  refundItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  refundLabel: {
    fontSize: 16,
    color: '#666',
  },
  refundValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
