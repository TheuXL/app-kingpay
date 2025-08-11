import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AccountSwitcher({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const currentAccount = {
    name: 'Gabriel Souza',
    type: 'Conta empresarial',
    avatar: require('@/assets/images/logo.png'),
  };

  const otherAccounts = [
    { name: 'Smart Tech', type: 'Conta empresarial' },
    { name: 'Sommar Tech', type: 'Conta empresarial' },
    { name: 'MultiHills', type: 'Conta empresarial' },
  ];

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

          <Text style={styles.title}>Outras contas</Text>
          {otherAccounts.map((account, index) => (
            <TouchableOpacity key={index} style={styles.otherAccount}>
              <View style={styles.otherAvatar} />
              <View>
                <Text style={styles.otherAccountName}>{account.name}</Text>
                <Text style={styles.otherAccountType}>{account.type}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="blue" />
            </TouchableOpacity>
          ))}
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
});
