import { ThemedText } from '@/components/ThemedText';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { BalanceCard } from '@/components/wallet/BalanceCard';
import { TransactionList } from '@/components/wallet/TransactionList';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function TransactionsScreen() {
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
    {
      name: 'Capa Notebook Acer Nitro 5',
      email: 'gabrielsantos@gmail.com',
      amount: '+ R$ 245,50',
      date: '13 de jul',
      icon: require('../../assets/images/icon.png'),
    },
    {
      name: 'Capa Notebook Acer Nitro 5',
      email: 'gabrielsantos@gmail.com',
      amount: '+ R$ 245,50',
      date: '12 de jul',
      icon: require('../../assets/images/icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScreenHeader title="Transações" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <BalanceCard
            approvedSales={789}
            totalAmount="R$ 8.236,17"
            percentageIncrease="+2,8%"
            pixAmount="R$ 5.313,00"
            cardAmount="R$ 6.341,97"
            boletoAmount="R$ 956,13"
          />

          <View style={styles.transactionsHeader}>
            <ThemedText style={styles.transactionsTitle}>Transações</ThemedText>
          <TouchableOpacity style={styles.viewAllContainer}>
            <ThemedText style={styles.viewAll}>Ver tudo</ThemedText>
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
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <TransactionList transactions={transactions} />
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
});
