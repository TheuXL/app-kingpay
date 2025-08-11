import { ThemedText } from '@/components/ThemedText';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import BalanceCards from '@/components/wallet/BalanceCards';
import TransactionFilter from '@/components/wallet/TransactionFilter';
import { TransactionList } from '@/components/wallet/TransactionList';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WalletScreen() {
  const [activeFilter, setActiveFilter] = useState('Extrato');

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
        return <TransactionList transactions={transactions} />;
      case 'Antecipações':
        return (
          <View style={styles.emptyStateContainer}>
            <Image source={require('../../assets/images/obj3d.png')} style={styles.emptyStateImage} />
            <Text style={styles.emptyStateText}>Ainda não há nada por aqui...</Text>
          </View>
        );
      case 'Transferências':
        return <TransactionList transactions={transactions} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Carteira" />
      <ScrollView style={styles.scrollContainer}>
        <BalanceCards />
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
