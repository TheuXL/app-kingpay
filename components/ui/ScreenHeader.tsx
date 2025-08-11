import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type ScreenHeaderProps = {
  title: string;
  showAccountSwitcher?: boolean;
};

export function ScreenHeader({ title, showAccountSwitcher = false }: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <ThemedText style={styles.title}>{title}</ThemedText>
      {showAccountSwitcher ? (
        <TouchableOpacity style={styles.accountSwitcher}>
          <ThemedText style={styles.accountText}>KingPay</ThemedText>
          <Ionicons name="chevron-down" size={16} color="gray" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  accountSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  accountText: {
    marginRight: 4,
    fontSize: 14,
  },
  placeholder: {
    width: 40, // to balance the back button
  },
});