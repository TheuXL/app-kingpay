import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function VerifyCodeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/forgot-password" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Esqueci a senha</Text>
      </View>
      <Text style={styles.title}>Digite o código enviado para seu email</Text>
      
      <View style={styles.codeContainer}>
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: [{ translateX: -12 }],
    fontFamily: 'SpaceMono',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'SpaceMono',
    color: '#2A2AFF',
  },
 
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: '20',
    marginBottom: 40,
  },
  codeInput: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#f0f4ff',
    fontFamily: 'SpaceMono',
  },
  verifyButton: {
    backgroundColor: '#2A2AFF',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    top: '50',
    marginBottom: 40,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
  },
});
