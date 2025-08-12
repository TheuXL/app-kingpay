import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { BalanceCard } from '@/components/wallet/BalanceCard';
import { TransactionList } from '@/components/wallet/TransactionList';
import { useTransactionsData } from '@/hooks/useTransactionsData';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const mockTransactions = [
  {
    name: 'João Silva',
    email: 'joao@email.com',
    amount: 'R$ 250,00',
    date: 'Hoje',
    icon: 'person-circle',
  },
  {
    name: 'Maria Santos',
    email: 'maria@email.com',
    amount: 'R$ 180,50',
    date: 'Ontem',
    icon: 'person-circle',
  },
  {
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    amount: 'R$ 320,75',
    date: '15 Nov',
    icon: 'person-circle',
  },
];

export default function TransactionsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const { wallet, financial, extract, loading, error, refetch } = useTransactionsData();

  // Filtrar transações baseado na busca e filtro selecionado
  const filteredExtract = extract?.filter(item => {
    const matchesSearch = !searchQuery || 
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'Todos' ||
      (selectedFilter === 'Entradas' && item.type === 'credit') ||
      (selectedFilter === 'Saídas' && item.type === 'debit');
    
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      <ScreenHeader title="Transações" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <BalanceCard walletData={wallet} financialData={financial} loading={loading} />

          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transações</Text>
          <TouchableOpacity style={styles.viewAllContainer}>
            <Text style={styles.viewAll}>Ver tudo</Text>
            <Ionicons name="arrow-forward" size={16} color="#007bff" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar transações"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.filterContainer}>
          {['Todos', 'Entradas', 'Saídas', 'Pendentes'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterChip,
                filter === selectedFilter && styles.activeFilterChip,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === selectedFilter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TransactionList 
          extractData={filteredExtract} 
          loading={loading} 
          useRealData={true}
          transactions={mockTransactions}
        />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  transactionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 16,
    color: '#4A90E2',
    marginRight: 4,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  filterButton: {
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeFilterChip: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
});
