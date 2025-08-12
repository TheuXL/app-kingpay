import { ThemedText } from '@/components/ThemedText';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import BalanceCards from '@/components/wallet/BalanceCards';
import TransactionFilter from '@/components/wallet/TransactionFilter';
import { TransactionList } from '@/components/wallet/TransactionList';
import { useWalletData } from '@/hooks/useWalletData';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WalletScreen() {
  const [activeFilter, setActiveFilter] = useState('Extrato');
  const { wallet, extract, loading, error, refetch } = useWalletData();

  const transactions = [
    {
      name: 'Capa Notebook Acer Nitro 5',
      email: 'gabrielsantos@gmail.com',
      amount: '+ R$ 245,50',
      date: 'Hoje',
      icon: require('../../assets/images/icon.png'),
    },
    {
      name: 'Capa Notebook Acer Nitro 5',
      email: 'gabrielsantos@gmail.com',
      amount: '+ R$ 245,50',
      date: 'Ontem',
      icon: require('../../assets/images/icon.png'),
    },
  ];

  const renderContent = () => {
    switch (activeFilter) {
      case 'Extrato':
        return (
          <TransactionList 
            extractData={extract} 
            loading={loading} 
            useRealData={true}
            transactions={transactions}
          />
        );
      case 'Entradas':
        return (
          <TransactionList 
            extractData={extract?.filter(item => item.type === 'credit')} 
            loading={loading} 
            useRealData={true}
            transactions={transactions.filter(() => true)}
          />
        );
      case 'Saídas':
        return (
          <TransactionList 
            extractData={extract?.filter(item => item.type === 'debit')} 
            loading={loading} 
            useRealData={true}
            transactions={[]}
          />
        );
      default:
        return (
          <TransactionList 
            extractData={extract} 
            loading={loading} 
            useRealData={true}
            transactions={transactions}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Carteira" />
      <ScrollView style={styles.scrollContainer}>
        <BalanceCards walletData={wallet} loading={loading} />
        <View style={styles.transactionsHeader}>
        <ThemedText type="subtitle">Movimentações</ThemedText>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Ver tudo</Text>
          <Ionicons name="arrow-forward" size={20} color="#0000FF" />
        </TouchableOpacity>
      </View>
      <TransactionFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      {renderContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#0000FF',
    marginRight: 5,
    fontWeight: 'bold',
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyStateText: {
    color: 'gray',
    fontSize: 16,
  },
});
