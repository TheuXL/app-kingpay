import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function PaymentLinkScreen() {
  const router = useRouter();

  const links = [
    { name: 'Capa Notebook', price: 'R$ 245,45', active: true },
    { name: 'Capa Notebook', price: 'R$ 245,50', active: false },
    { name: 'Capa Notebook', price: 'R$ 245,45', active: true },
    { name: 'Capa Notebook', price: 'R$ 245,45', active: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Link de Pagamento</ThemedText>
        <View style={{ width: 24 }} />
      </ThemedView>

      <View style={styles.content}>
        <Image source={require('@/assets/images/corrente.png')} style={styles.mainImage} />

        <ThemedText style={styles.title}>Links criados</ThemedText>
        <ThemedText style={styles.subtitle}>
          Gerencie seus links de pagamento e acompanhe suas vendas
        </ThemedText>

        <TouchableOpacity
          style={styles.createLinkButton}
          onPress={() => router.push('/create-payment-link')}
        >
          <ThemedText style={styles.createLinkButtonText}>Criar novo link</ThemedText>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar links de pagamento"
              placeholderTextColor="#888"
            /><Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {links.map((link, index) => (
          <View key={index} style={styles.linkItem}>
            <View style={styles.linkIconContainer}>
              <Ionicons name="link" size={24} color="#000" />
            </View>
            <View style={styles.linkDetails}>
              <ThemedText style={styles.linkName}>{link.name}</ThemedText>
              <ThemedText style={styles.linkPrice}>{link.price}</ThemedText>
              <View style={styles.linkActions}>
                <View style={[styles.statusBadge, link.active ? styles.activeBadge : styles.inactiveBadge]}>
                  <Ionicons name={link.active ? "checkmark-circle" : "close-circle"} size={16} color={link.active ? '#28a745' : '#dc3545'} />
                  <ThemedText style={[styles.statusText, link.active ? styles.activeText : styles.inactiveText]}>
                    {link.active ? 'Ativo' : 'Inativo'}
                  </ThemedText>
                </View>
                <TouchableOpacity style={[styles.copyButton, !link.active && styles.disabledCopyButton]}>
                  <Ionicons name="copy-outline" size={16} color={link.active ? '#007bff' : '#aaa'} />
                  <ThemedText style={[styles.copyButtonText, !link.active && styles.disabledCopyButtonText]}>Copiar link</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#007bff" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#0c0c0cff',
  },
  content: {
    padding: 16,
  },
  mainImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0c0c0cff',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  createLinkButton: {
    backgroundColor: '#0000ff',
    borderRadius: 25,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  createLinkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  filterButton: {
    marginLeft: 16,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 25,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  linkIconContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 25,
    marginRight: 16,
  },
  linkDetails: {
    flex: 1,
  },
  linkName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5B5B5B',
  },
  linkPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  linkActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 8,
  },
  activeBadge: {
    backgroundColor: '#eaf7ec',
  },
  inactiveBadge: {
    backgroundColor: '#fce8e6',
  },
  statusText: {
    marginLeft: 4,
    fontSize: 12,
  },
  activeText: {
    color: '#28a745',
  },
  inactiveText: {
    color: '#dc3545',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  disabledCopyButton: {
    backgroundColor: '#f0f0f0',
  },
  copyButtonText: {
    marginLeft: 4,
    color: '#007bff',
    fontSize: 12,
  },
  disabledCopyButtonText: {
    color: '#aaa',
  },
});
