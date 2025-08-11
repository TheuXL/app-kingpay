import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function SalesSummaryCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.totalSales}>R$ 138.241,15</Text>
      <Text style={styles.salesPeriod}>Últimos 30 dias</Text>
      <LineChart
        data={{
          labels: ['27 de Jun/25', '27 de Jul/25'],
          datasets: [
            {
              data: [
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,
              ],
            },
          ],
        }}
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
          <Text style={styles.legendValue}>R$ 7.724,23</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFA500' }]} />
          <Text>Pendente</Text>
          <Text style={styles.legendValue}>R$ 2.822,91</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF0000' }]} />
          <Text>Estorno</Text>
          <Text style={styles.legendValue}>R$ 609,87</Text>
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
});
