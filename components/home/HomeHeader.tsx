import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountSwitcher from './AccountSwitcher';
import { useAuth } from '../../contexts/AuthContext';

export default function HomeHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();

  // Extrair o primeiro nome do email ou usar fullname se disponível
  const getUserName = () => {
    if (user?.user_metadata?.fullname) {
      return user.user_metadata.fullname.split(' ')[0];
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'Usuário';
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.userName}>Olá, {getUserName()}!</Text>
        <Ionicons name="chevron-forward" size={24} color="#2A2AFF" />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="eye" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <AccountSwitcher visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
});
