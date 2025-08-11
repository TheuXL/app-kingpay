import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FloatingMenu from '@/components/ui/FloatingMenu';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CompanyDataScreen() {
  const router = useRouter();

  const fields = [
    { label: 'Razão Social', value: 'Soutech LTDA' },
    { label: 'Nome Fantasia', value: '' },
    { label: 'CNPJ', value: '12.345.678/0001-01' },
    { label: 'Website', value: '' },
    { label: 'Endereço', value: 'Rua dos Palmares' },
    { label: 'Número', value: '81' },
    { label: 'Bairro', value: 'Laranjeiras' },
    { label: 'Cidade', value: 'São Paulo' },
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

        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>Dados da empresa</Text>
          <Text style={styles.formSectionSubtitle}>Atualize as informações da sua empresa.</Text>
          {fields.map((field, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{field.label}</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={field.value} />
                <TouchableOpacity>
                  <Ionicons name="pencil" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <FloatingMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#f0f4ff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formSection: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  formSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 8,
  },
  formSectionSubtitle: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
