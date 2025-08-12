import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { WalletData } from '../../services/api';

interface BalanceCardsProps {
  walletData: WalletData | null;
  loading: boolean;
}

// Função para formatar valores monetários
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100); // Assumindo que os valores vêm em centavos
};

export default function BalanceCards({ walletData, loading }: BalanceCardsProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000FF" />
        <Text style={styles.loadingText}>Carregando dados da carteira...</Text>
      </View>
    );
  }

  const balanceData = [
    {
      type: 'Saldo disponível (Pix)',
      amount: formatCurrency(walletData?.balance_pix || 0),
      icon: 'diamond',
      color: '#0000FF',
      action: 'Solicitar saque',
    },
    {
      type: 'Saldo disponível (Cartão)',
      amount: formatCurrency(walletData?.balance_card || 0),
      icon: 'card',
      color: '#00008B',
      action: 'Solicitar saque',
    },
    {
      type: 'A receber',
      amount: formatCurrency(walletData?.pending_amount || 0),
      icon: 'cash',
      color: '#2E8B57',
      action: 'Solicitar saque',
    },
    {
      type: 'Reserva Financeira',
      amount: formatCurrency(walletData?.reserva_financeira || 0),
      icon: 'shield-checkmark',
      color: '#FFFFFF',
      textColor: '#000000',
      description: 'Valor retido para garantir a segurança de suas transações.',
    },
  ];
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
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
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
