import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BalanceCard from '../../components/home/BalanceCard';
import ExploreCard from '../../components/home/ExploreCard';
import HomeHeader from '../../components/home/HomeHeader';
import KingPayJourneyCard from '../../components/home/KingPayJourneyCard';
import QuickActions from '../../components/home/QuickActions';
import RefundsCard from '../../components/home/RefundsCard';
import SalesMetricsCard from '../../components/home/SalesMetricsCard';
import SalesSummaryCard from '../../components/home/SalesSummaryCard';
import FloatingMenu from '../../components/ui/FloatingMenu';
import { useHomeData } from '../../hooks/useHomeData';

export default function HomeScreen() {
  const { walletData, financialData, extractData, loading, error } = useHomeData();

  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <BalanceCard walletData={walletData} loading={loading} />
        <QuickActions />
        <KingPayJourneyCard />
      <View style={styles.salesSummaryHeader}>
        <Text style={styles.salesSummaryTitle}>Resumo de vendas</Text>
        <View style={styles.dateSelector}>
          <Text>30 dias</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <SalesSummaryCard 
        walletData={walletData} 
        financialData={financialData} 
        loading={loading} 
      />
      <RefundsCard financialData={financialData} loading={loading} />
      <SalesMetricsCard 
        walletData={walletData} 
        financialData={financialData} 
        loading={loading} 
      />
      <ExploreCard />
      </ScrollView>
      <FloatingMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  salesSummaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  salesSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },
});
