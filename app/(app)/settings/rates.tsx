import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FloatingMenu from '@/components/ui/FloatingMenu';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RatesScreen() {
  const router = useRouter();

  const rates = [
    { name: 'Pix', value: 'R$ 0,50' },
    { name: 'Cartão', value: 'R$ 2,99 + 5.9%' },
    { name: 'Boleto', value: 'R$ 3,00 + 1.99%' },
    { name: 'Saque', value: 'R$ 1,00' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>Configurações</ThemedText>
          <View style={{ width: 24 }} />
        </ThemedView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configuração das taxas</Text>
          <Text style={styles.sectionSubtitle}>
            Gerencie suas taxas e faça simulações de transações em tempo real.
          </Text>
          <View style={styles.ratesGrid}>
            {rates.map((rate, index) => (
              <View key={index} style={styles.rateCard}>
                <TouchableOpacity style={styles.rateIcon}>
                  <Ionicons name="arrow-down" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.rateName}>{rate.name}</Text>
                <Text style={styles.rateValue}>{rate.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Simulador de Taxas</Text>
          <View style={styles.simulatorCard}>
            <Text style={styles.label}>Digite o valor da transação</Text>
            <TextInput style={styles.input} placeholder="R$ 0,00" keyboardType="numeric" />
            <Text style={styles.label}>Selecione a forma de pagamento</Text>
            {/* TODO: Add payment method selector */}
          </View>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  ratesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rateCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  rateIcon: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
  rateName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rateValue: {
    fontSize: 14,
    color: 'gray',
  },
  simulatorCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
});
