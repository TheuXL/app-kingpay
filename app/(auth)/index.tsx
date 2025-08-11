import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InitialScreen() {
  return (
    <LinearGradient
      colors={['#E6E9FF', '#F0F4FF']}
      style={styles.container}
    >
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>
      Tudo que seu negócio precisa,
      {"\n"}
      em <Text style={styles.bold}>um só lugar.</Text>
      </Text>
      <Image source={require('../../assets/images/cards.png')} style={styles.cards} />
      <View style={styles.buttonContainer}>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Fazer login</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/forgot-password" asChild>
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotButtonText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  title: {
    position: 'absolute',
    top: '14%',
    left: 20,
    fontSize: 42,
    fontWeight: '300',
    color: '#6c95adff',
    fontFamily: 'SpaceMono',
    lineHeight: 50,
    zIndex: 1,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2A2AFF',
  },
  cards: {
    position: 'absolute',
    width: '115%',
    height: '90%',
    resizeMode: 'contain',
    right: -10,
    top: '20%',
    zIndex: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#2A2AFF',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
  },
  forgotButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E6E9FF',
    alignItems: 'center',
  },
  forgotButtonText: {
    color: '#2A2AFF',
    fontSize: 18,
    fontFamily: 'SpaceMono',
  },
});
