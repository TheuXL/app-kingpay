import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

type BalanceCardProps = {
  approvedSales: number;
  totalAmount: string;
  percentageIncrease: string;
  pixAmount: string;
  cardAmount: string;
  boletoAmount: string;
};

export function BalanceCard({
  approvedSales,
  totalAmount,
  percentageIncrease,
  pixAmount,
  cardAmount,
  boletoAmount,
}: BalanceCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryHeader}>
        <ThemedText style={styles.summaryTitle}>{approvedSales} vendas aprovadas</ThemedText>
      </View>
      <View style={styles.amountContainer}>
        <View>
          <ThemedText style={styles.summaryAmount}>{totalAmount}</ThemedText>
          <ThemedText style={styles.summaryPercentage}>{percentageIncrease}</ThemedText>
        </View>
        <View style={styles.divider} />
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={120}
          height={60}
          withDots={true}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(40, 167, 69, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#28a745',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.summaryDetails}>
        <View style={styles.summaryRow}>
          <ThemedText style={styles.detailText}>Pix</ThemedText>
          <ThemedText style={styles.detailValue}>{pixAmount}</ThemedText>
        </View>
        <View style={styles.summaryRow}>
          <ThemedText style={styles.detailText}>Cartão</ThemedText>
          <ThemedText style={styles.detailValue}>{cardAmount}</ThemedText>
        </View>
        <View style={styles.summaryRow}>
          <ThemedText style={styles.detailText}>Boleto</ThemedText>
          <ThemedText style={styles.detailValue}>{boletoAmount}</ThemedText>
        </View>
      </View>
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#E0E0E0',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#666',
  },
  summaryAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  summaryPercentage: {
    fontSize: 16,
    color: '#28a745',
  },
  detailText: {
    color: '#666',
  },
  detailValue: {
    color: '#000',
    fontWeight: '500',
  },
  summaryDetails: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4A90E2',
  },
});