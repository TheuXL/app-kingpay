import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function KingPayJourneyCard() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push('/kingpay-journey')}>
      <View style={styles.iconContainer}>
        <Ionicons name="trophy" size={24} color="white" />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Jornada KingPay</Text>
          <Ionicons name="chevron-forward" size={24} color="#2A2AFF" />
        </View>
        <Text style={styles.progressText}>R$ 8.974,00 / 10.000,00</Text>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarForeground} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 50,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#2A2AFF',
    padding: 20,
    borderRadius: 30,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  progressBarBackground: {
    backgroundColor: '#E6E9FF',
    height: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  progressBarForeground: {
    backgroundColor: '#2A2AFF',
    height: 10,
    borderRadius: 5,
    width: '89.74%',
  },
});
