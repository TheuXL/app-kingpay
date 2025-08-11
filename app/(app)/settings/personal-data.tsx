import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FloatingMenu from '@/components/ui/FloatingMenu';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PersonalDataScreen() {
  const router = useRouter();

  const fields = [
    { label: 'Nome completo', value: 'Gabriel Sobral dos Santos' },
    { label: 'Email', value: 'gabrielsantos@gmail.com' },
    { label: 'Telefone', value: '+55 (11) 9 1234-5678' },
    { label: 'CPF', value: '012.123.456-70' },
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

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>ST</Text>
            <TouchableOpacity style={styles.addIcon}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Gabriel Sobral dos Santos</Text>
          <Text style={styles.profileId}>69635d93-560a-4161-8a46-67e4eb58c</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formSectionTitle}>Informações pessoais</Text>
          <Text style={styles.formSectionSubtitle}>Atualize seus dados pessoais</Text>
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
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileId: {
    fontSize: 14,
    color: 'gray',
  },
  formSection: {
    marginHorizontal: 20,
  },
  formSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formSectionSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
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
