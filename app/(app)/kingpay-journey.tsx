import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function KingPayJourneyScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bolas.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.bottomSheet}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.sheetTitle}>
          Bem vindo(a) a <Text style={styles.sheetTitleHighlight}>Jornada KingPay.</Text>
        </Text>
        <Text style={styles.sheetSubtitle}>
          Grandes resultados merecem reconhecimento! A KingPay transforma seu
          desempenho em prêmios exclusivos.
        </Text>
        <Link href={'kingpay-journey-details' as any} asChild>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continuar</Text>
            <Feather name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  sheetTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  sheetTitleHighlight: {
    color: '#4a44e4',
  },
  sheetSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  continueButton: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingVertical: 18,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
