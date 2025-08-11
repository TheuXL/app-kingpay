import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const filters = [
  {
    label: 'Extrato',
    icon: 'document-text-outline',
  },
  {
    label: 'Antecipações',
    icon: 'time-outline',
  },
  {
    label: 'Transferências',
    icon: 'cash-outline',
  },
];

interface TransactionFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function TransactionFilter({ activeFilter, setActiveFilter }: TransactionFilterProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.filterButton,
            activeFilter === filter.label && styles.activeFilter,
          ]}
          onPress={() => setActiveFilter(filter.label)}
        >
          <Ionicons
            name={filter.icon as any}
            size={18}
            color={activeFilter === filter.label ? '#000000' : '#8E8E93'}
          />
          <Text
            style={[
              styles.filterText,
              activeFilter === filter.label && styles.activeFilterText,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#E0E0E0',
  },
  filterText: {
    marginLeft: 8,
    color: '#8E8E93',
    fontWeight: '500',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
