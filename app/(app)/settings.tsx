import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FloatingMenu from '@/components/ui/FloatingMenu';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  const infoItems = [
    {
      icon: 'person-outline',
      label: 'Meus dados',
      screen: '/settings/personal-data',
    },
    {
      icon: 'business-outline',
      label: 'Dados da empresa',
      screen: '/settings/company-data',
    },
    {
      icon: 'pricetag-outline',
      label: 'Taxas',
      screen: '/settings/rates',
    },
    {
      icon: 'log-out-outline',
      label: 'Sair da conta',
      screen: '',
      textColor: '#dc3545',
    },
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
          </View>
          <Text style={styles.profileName}>Soutech Tecnologia de Pagamentos</Text>
          <Text style={styles.profileId}>69635d93-560a-4161-8a46-67e4eb58c</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoSectionTitle}>Informações</Text>
          {infoItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.infoItem}
              onPress={() => item.screen && router.push(item.screen as any)}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={item.textColor || '#0052FF'}
                style={{ marginRight: 15 }}
              />
              <Text style={[styles.infoItemText, item.textColor && { color: item.textColor }]}>
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={24} color={item.textColor || '#0052FF'} />
            </TouchableOpacity>
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
    backgroundColor: '#f0f4ff',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  profileCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0052FF',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileId: {
    fontSize: 14,
    color: 'gray',
  },
  infoSection: {
    marginHorizontal: 20,
  },
  infoSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#495057',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  infoItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#495057',
  },
  iconContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
