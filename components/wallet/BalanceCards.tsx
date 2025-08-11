import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const balanceData = [
  {
    type: 'Saldo disponível (Pix)',
    amount: 'R$ 138.241,15',
    icon: 'diamond',
    color: '#0000FF',
    action: 'Solicitar saque',
  },
  {
    type: 'Saldo disponível (Cartão)',
    amount: 'R$ 138.241,15',
    icon: 'card',
    color: '#00008B',
    action: 'Solicitar saque',
  },
  {
    type: 'A receber',
    amount: 'R$ 138.241,15',
    icon: 'cash',
    color: '#2E8B57',
    action: 'Solicitar saque',
  },
  {
    type: 'Reserva Financeira',
    amount: 'R$ 138.241,15',
    icon: 'shield-checkmark',
    color: '#FFFFFF',
    textColor: '#000000',
    description: 'Valor retido para garantir a segurança de suas transações.',
  },
];

export default function BalanceCards() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {balanceData.map((card, index) => (
        <View key={index} style={[styles.card, { backgroundColor: card.color }]}>
          <View style={styles.cardHeader}>
            <Ionicons name={card.icon as any} size={20} color={card.textColor || 'white'} />
            <Text style={[styles.cardType, { color: card.textColor || 'white' }]}>{card.type}</Text>
          </View>
          <Text style={[styles.amount, { color: card.textColor || 'white' }]}>{card.amount}</Text>
          {card.action ? (
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={[styles.actionText, { color: card.textColor || 'white' }]}>{card.action}</Text>
                <Ionicons name="arrow-forward" size={20} color={card.textColor || 'white'} />
              </View>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.description, { color: card.textColor }]}>{card.description}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 20,
    padding: 20,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardType: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 14,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
  },
});
