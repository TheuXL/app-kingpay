import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function SalesMetricsCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métricas de vendas</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleContainer}>
              <Feather name="refresh-ccw" size={16} color="#666" />
              <Text style={styles.cardTitle}>Chargeback</Text>
            </View>
            <Text style={styles.cardValue}>R$ 4.689,36</Text>
            <View style={styles.percentageContainer}>
              <Feather name="arrow-up" size={14} color="black" />
              <Text style={styles.cardPercentageGood}>+7,8%</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTitleContainer}>
              <MaterialCommunityIcons name="qrcode" size={16} color="#666" />
              <Text style={styles.cardTitle}>Vendas PIX</Text>
            </View>
            <Text style={styles.cardValue}>R$ 64.689,36</Text>
            <View style={styles.percentageContainer}>
              <Feather name="arrow-up" size={14} color="black" />
              <Text style={styles.cardPercentageGood}>+15%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '48%',
  },
  cardTextContainer: {
    // marginLeft: 15,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardPercentageGood: {
    fontSize: 14,
    color: 'green',
    marginLeft: 5,
  },
});
