import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreatePaymentLinkPersonalizeScreen() {
  const router = useRouter();

  const colors = [
    '#ff4d4d',
    '#ff7a4d',
    '#ffc54d',
    '#4dff7a',
    '#4dffff',
    '#4d7aff',
    '#7a4dff',
    '#ff4dff',
    '#ff4d7a',
    '#7aff4d',
    '#4dffc5',
    '#4dc5ff',
    '#7a4dff',
    '#c54dff',
    '#ff4dc5',
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Criar link de pagamento</ThemedText>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </ThemedView>
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Estamos quase lá! Vamos personalizar seu link de pagamento.</Text>
          <View style={styles.uploadContainer}>
            <Ionicons name="cloud-upload-outline" size={48} color="#1A237E" />
            <Text style={styles.uploadText}>Envie seu logotipo aqui</Text>
            <TouchableOpacity>
              <Text style={styles.uploadButton}>Pesquisar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Escolha a cor do seu link</Text>
          <TouchableOpacity style={styles.colorSelector}>
            <Text>Selecione a cor</Text>
            <Ionicons name="color-palette-outline" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.colorGrid}>
            {colors.map((color, index) => (
              <TouchableOpacity key={index} style={[styles.colorSwatch, { backgroundColor: color }]}>
                {index === 0 && <Ionicons name="checkmark" size={24} color="white" />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/payment-link-success')}>
            <Text style={styles.nextButtonText}>Criar link</Text>
            <Ionicons name="checkmark" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    margin: 15,
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#6200EE',
    alignSelf: 'flex-start',
  },
  uploadContainer: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    marginVertical: 10,
  },
  uploadButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  nextButtonText: {
    color: 'white',
    marginRight: 10,
    fontWeight: 'bold',
  },
});
