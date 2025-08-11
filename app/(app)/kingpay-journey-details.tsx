import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const KingpayJourneyDetails = () => {
  const router = useRouter();

  const journeyLevels = [
    { name: 'Aspirante à Realeza', locked: false, completed: true },
    { name: 'Nível 2', locked: false, completed: false, progress: 70 },
    { name: 'Príncipe do Comércio', locked: true },
    { name: 'Rei da KingPay', locked: true },
  ];

  return (
    <LinearGradient colors={['#f0f2f5', '#f0f2f5']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.headerTitle}>Jornada KingPay</Text>
          <Ionicons name="help-circle-outline" size={24} color="white" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Image source={require('../../assets/images/Container.png')} style={styles.starImage} />
            <Text style={styles.journeyTitle}>Sua jornada</Text>
            {journeyLevels.map((level, index) => (
              <View
                key={index}
                style={[
                  styles.levelContainer,
                  level.locked ? styles.lockedLevel : styles.unlockedLevel,
                  !level.locked && !level.completed ? styles.activeLevel : null,
                ]}
              >
                <View style={styles.levelIconContainer}>
                  {level.locked ? (
                    <Ionicons name="lock-closed" size={24} color="#98A2B3" />
                  ) : level.completed ? (
                    <View style={styles.checkContainer}>
                      <Ionicons name="checkmark" size={18} color="white" />
                    </View>
                  ) : (
                    <Ionicons name="trophy" size={24} color="white" />
                  )}
                </View>
                <View style={styles.levelInfo}>
                  <Text style={styles.levelName}>{level.name}</Text>
                  {level.progress !== undefined && (
                    <View style={styles.progressBarBackground}>
                      <View style={[styles.progressBar, { width: `${level.progress}%` }]} />
                    </View>
                  )}
                </View>
                <Ionicons name="chevron-forward" size={24} color={level.locked ? '#98A2B3' : 'white'} />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  starImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  journeyTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  lockedLevel: {
    backgroundColor: '#101828',
    borderWidth: 1,
    borderColor: '#344054',
  },
  unlockedLevel: {
    backgroundColor: '#101828',
    borderWidth: 1,
    borderColor: '#344054',
  },
  activeLevel: {
    backgroundColor: '#4B4DED',
    borderColor: '#4B4DED',
  },
  levelIconContainer: {
    marginRight: 15,
  },
  levelInfo: {
    flex: 1,
  },
  levelName: {
    color: 'white',
    fontSize: 16,
  },
  progressBarBackground: {
    backgroundColor: '#344054',
    height: 8,
    borderRadius: 4,
    marginTop: 5,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 4,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#32D583',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KingpayJourneyDetails;
