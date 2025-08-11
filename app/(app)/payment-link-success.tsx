import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentLinkSuccessScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/corrente.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.card}>
        <Text style={styles.title}>Seu link de pagamento foi gerado com sucesso.</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText} numberOfLines={2}>
            https://app.kingpaybr.com/pay/27a8d0f5-8967-42c5-8f45-c51d4b377748
          </Text>
          <TouchableOpacity style={styles.copyButton}>
            <Ionicons name="copy-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/home')}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    paddingTop: 40,
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#434343',
    width: '100%',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 20,
    width: '100%',
  },
  linkText: {
    flex: 1,
    fontSize: 16,
    color: '#4B5563',
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: '#1D4ED8',
    padding: 12,
    borderRadius: 10,
  },
  continueButton: {
    backgroundColor: '#111827',
    paddingVertical: 18,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
