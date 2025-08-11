import { Ionicons } from '@expo/vector-icons';
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function AccountSwitcher({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Confirmar logout',
      'Tem certeza que deseja sair da sua conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            onClose();
          },
        },
      ]
    );
  };

  const currentAccount = {
    name: user?.user_metadata?.fullname || user?.email?.split('@')[0] || 'Usuário',
    type: 'Conta empresarial',
    avatar: require('@/assets/images/logo.png'),
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Conta atual</Text>
          <TouchableOpacity style={styles.currentAccount}>
            <Image source={currentAccount.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.accountName}>{currentAccount.name}</Text>
              <Text style={styles.accountType}>{currentAccount.type}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#FF3333" />
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  currentAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  accountName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountType: {
    color: 'white',
    fontSize: 14,
  },
  otherAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'space-between',
  },
  otherAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    marginRight: 15,
  },
  otherAccountName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  otherAccountType: {
    fontSize: 14,
    color: 'gray',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3333',
    marginLeft: 10,
    fontWeight: '500',
  },
});
