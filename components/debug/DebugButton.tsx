/**
 * 🐛 Botão de Debug - KingPay Mobile
 * =================================
 * 
 * Botão flutuante que aparece apenas em modo de desenvolvimento
 * para acessar ferramentas de debug como o visualizador de logs.
 */

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Alert
} from 'react-native';
import { LogViewer } from './LogViewer';
import { logger } from '../../services/logger';

export const DebugButton: React.FC = () => {
  const [showLogViewer, setShowLogViewer] = useState(false);
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePress = () => {
    // Animação de feedback
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setShowLogViewer(true);
  };

  const handleLongPress = () => {
    // Menu de opções de debug
    Alert.alert(
      '🐛 Debug Menu',
      'Escolha uma opção:',
      [
        {
          text: '📊 Ver Logs',
          onPress: () => setShowLogViewer(true)
        },
        {
          text: '📈 Ver Estatísticas',
          onPress: () => {
            const stats = logger.getStats();
            Alert.alert(
              '📈 Estatísticas dos Logs',
              `Total: ${stats.total}\n` +
              `Requests: ${stats.requests}\n` +
              `Responses: ${stats.responses}\n` +
              `Errors: ${stats.errors}\n` +
              `Tempo Médio: ${stats.avgDuration}ms`
            );
          }
        },
        {
          text: '🧹 Limpar Logs',
          style: 'destructive',
          onPress: () => {
            Alert.alert(
              'Confirmar',
              'Limpar todos os logs?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Limpar',
                  style: 'destructive',
                  onPress: () => {
                    logger.clearLogs();
                    Alert.alert('✅', 'Logs limpos com sucesso!');
                  }
                }
              ]
            );
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    );
  };

  // Só renderizar em modo de desenvolvimento
  if (!__DEV__) {
    return null;
  }

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          onLongPress={handleLongPress}
          activeOpacity={0.8}
        >
          <Ionicons name="bug" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </Animated.View>

      <LogViewer
        visible={showLogViewer}
        onClose={() => setShowLogViewer(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 9999,
    elevation: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DebugButton;