import { Feather, Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Checkbox from '../../components/Checkbox';

export default function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <Image source={require('../../assets/images/obj3d.png')} style={styles.logo} />
      <View style={styles.form}>
        <Text style={styles.label}>Seu email</Text>
        <TextInput
          style={styles.input}
          placeholder="joaodasilva@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            secureTextEntry
          />
          <TouchableOpacity>
            <Feather name="eye-off" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Lembrar acesso</Text>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/home' as any)}>
        <Text style={styles.loginButtonText}>Fazer login</Text>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: [{ translateX: -12 }],
    fontFamily: 'SpaceMono',
  },
  logo: {
    width: 400,
    height: 450,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#000000ff',
    marginBottom: 8,
    fontFamily: 'SpaceMono',
  },
  input: {
    backgroundColor: '#f0f4ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'SpaceMono',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    fontFamily: 'SpaceMono',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberText: {
    fontSize: 16,
    fontFamily: 'SpaceMono',
  },
  loginButton: {
    backgroundColor: '#2A2AFF',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
  },
});
