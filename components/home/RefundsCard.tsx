import { StyleSheet, Text, View } from 'react-native';

export default function RefundsCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reembolsos</Text>
      <Text style={styles.totalRefunds}>R$ 12.547,16</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarSegment, { backgroundColor: '#FFA500', width: '60%' }]} />
        <View style={[styles.progressBarSegment, { backgroundColor: '#A020F0', width: '20%' }]} />
        <View style={[styles.progressBarSegment, { backgroundColor: '#32CD32', width: '20%' }]} />
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFA500' }]} />
          <Text>Estornos</Text>
          <Text style={styles.legendValue}>R$ 9.724,23</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#A020F0' }]} />
          <Text>Cashback</Text>
          <Text style={styles.legendValue}>R$ 2.822,91</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#32CD32' }]} />
          <Text>Taxa de estorno</Text>
          <Text style={styles.legendValue}>12,8%</Text>
        </View>
      </View>
      <View style={styles.paginationContainer}>
        <View style={[styles.paginationDot, styles.paginationDotActive]} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
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
    flexDirection: 'row',
    height: 10,
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressBarSegment: {
    height: '100%',
  },
  legendContainer: {
    marginTop: 30,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E6E9FF',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#2A2AFF',
  },
});
