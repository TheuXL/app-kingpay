import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    { icon: <FontAwesome5 name="wallet" size={24} color="blue" />, label: 'Carteira', screen: '/wallet' },
    {
      icon: <MaterialCommunityIcons name="cash-plus" size={24} color="blue" />,
      label: 'Transações',
      screen: '/transactions',
    },
    {
      icon: <MaterialCommunityIcons name="link-variant" size={24} color="blue" />,
      label: 'Link de Pagamento',
      screen: '/payment-link',
    },
    { icon: <MaterialCommunityIcons name="qrcode" size={24} color="blue" />, label: 'Área Pix', screen: '' },
  ];

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          style={styles.actionButton}
          onPress={() => action.screen && router.push(action.screen as any)}
        >
          <View style={styles.iconContainer}>{action.icon}</View>
          <Text style={styles.actionLabel}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  actionLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
});
