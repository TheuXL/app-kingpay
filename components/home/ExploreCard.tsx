import { Image, StyleSheet, Text, View } from 'react-native';

export default function ExploreCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar outras funcionalidades</Text>
      <Image source={require('../../assets/images/FeaturesDetails.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: 50,
  },
});
