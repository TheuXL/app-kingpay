import { Feather, Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Checkbox from '../../components/Checkbox';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await signIn(email.trim(), password);
      
      if (error) {
        Alert.alert('Erro no Login', error);
      } else {
        // O redirecionamento será tratado pelo sistema de navegação
        router.push('/home' as any);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro inesperado durante o login');
    } finally {
      setIsLoading(false);
    }
  };

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
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
        />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            editable={!isLoading}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="black" />
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
      <TouchableOpacity 
        style={[styles.loginButton, isLoading && styles.loginButtonDisabled]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.loginButtonText}>Fazer login</Text>
        )}
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
  loginButtonDisabled: {
    backgroundColor: '#9999FF',
  },
});
