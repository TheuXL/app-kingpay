import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BalanceCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Saldo disponível</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceText}>R$ 138.241,45</Text>
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Antecipar Saque</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2AFF',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  balanceText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 50,
  },
  withdrawButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  withdrawButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
});
