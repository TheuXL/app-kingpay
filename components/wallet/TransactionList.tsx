import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Transaction = {
  name: string;
  email: string;
  amount: string;
  date: string;
  icon: any;
};

type TransactionListProps = {
  transactions: Transaction[];
};

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <View>
      {transactions.map((transaction, index) => (
        <View key={index} style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Ionicons name="scan-outline" size={24} color="#28a745" />
          </View>
          <View style={styles.transactionDetails}>
            <ThemedText style={styles.transactionName}>{transaction.name}</ThemedText>
            <ThemedText style={styles.transactionEmail}>{transaction.email}</ThemedText>
            <ThemedText style={styles.transactionAmount}>{transaction.amount}</ThemedText>
          </View>
          <ThemedText style={styles.transactionDate}>{transaction.date}</ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
