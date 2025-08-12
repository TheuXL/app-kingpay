import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { ExtractItem } from '../../services/api';

type Transaction = {
  name: string;
  email: string;
  amount: string;
  date: string;
  icon: any;
};

type TransactionListProps = {
  transactions?: Transaction[];
  extractData?: ExtractItem[];
  loading?: boolean;
  useRealData?: boolean;
};

// Função para formatar valores monetários
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);
};

// Função para formatar data
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Hoje';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Ontem';
  } else {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  }
};

export function TransactionList({ transactions, extractData, loading, useRealData = false }: TransactionListProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#28a745" />
        <Text style={styles.loadingText}>Carregando transações...</Text>
      </View>
    );
  }

  // Usar dados reais do extrato se disponível
  const dataToShow = useRealData && extractData ? extractData : transactions || [];

  if (dataToShow.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="receipt-outline" size={48} color="#ccc" />
        <Text style={styles.emptyText}>Nenhuma transação encontrada</Text>
      </View>
    );
  }
  return (
    <View>
      {useRealData && extractData ? (
        extractData.map((item, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.iconContainer}>
              <Ionicons 
                name={item.type === 'credit' ? "arrow-down-circle" : "arrow-up-circle"} 
                size={40} 
                color={item.type === 'credit' ? "#28a745" : "#dc3545"} 
              />
            </View>
            <View style={styles.transactionDetails}>
              <ThemedText style={styles.transactionName}>
                {item.type === 'credit' ? 'Recebimento' : 'Pagamento'}
              </ThemedText>
              <ThemedText style={styles.transactionEmail}>
                {item.description || 'Transação via KingPay'}
              </ThemedText>
            </View>
            <View style={styles.transactionAmount}>
              <ThemedText style={[styles.amount, { color: item.type === 'credit' ? '#28a745' : '#dc3545' }]}>
                {item.type === 'credit' ? '+' : '-'}{formatCurrency(Math.abs(item.amount))}
              </ThemedText>
              <ThemedText style={styles.date}>{formatDate(item.date)}</ThemedText>
            </View>
          </View>
        ))
      ) : (
        transactions?.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-circle" size={40} color="#ccc" />
            </View>
            <View style={styles.transactionDetails}>
              <ThemedText style={styles.transactionName}>{transaction.name}</ThemedText>
              <ThemedText style={styles.transactionEmail}>{transaction.email}</ThemedText>
            </View>
            <View style={styles.transactionAmount}>
              <ThemedText style={styles.amount}>{transaction.amount}</ThemedText>
              <ThemedText style={styles.date}>{transaction.date}</ThemedText>
            </View>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 20,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
    backgroundColor: '#E8F5E9', // a light green background for the icon
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionEmail: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
});
