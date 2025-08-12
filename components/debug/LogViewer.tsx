/**
 * 🔍 Visualizador de Logs - KingPay Mobile
 * ========================================
 * 
 * Componente de debug para visualizar logs em tempo real durante o desenvolvimento.
 * Apenas visível em modo de desenvolvimento (__DEV__).
 */

import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
  Alert
} from 'react-native';
import { logger } from '../../services/logger';

interface LogViewerProps {
  visible: boolean;
  onClose: () => void;
}

export const LogViewer: React.FC<LogViewerProps> = ({ visible, onClose }) => {
  const [logs, setLogs] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({});
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    if (visible && autoRefresh) {
      const interval = setInterval(() => {
        setLogs(logger.getLogs());
        setStats(logger.getStats());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [visible, autoRefresh]);

  useEffect(() => {
    if (visible) {
      setLogs(logger.getLogs());
      setStats(logger.getStats());
    }
  }, [visible]);

  const handleExportLogs = async () => {
    try {
      const logsText = logger.exportLogs();
      await Share.share({
        message: logsText,
        title: 'KingPay Mobile - Logs de Debug'
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível exportar os logs');
    }
  };

  const handleClearLogs = () => {
    Alert.alert(
      'Limpar Logs',
      'Tem certeza que deseja limpar todos os logs?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: () => {
            logger.clearLogs();
            setLogs([]);
            setStats({ total: 0, requests: 0, responses: 0, errors: 0, avgDuration: 0 });
          }
        }
      ]
    );
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case 'REQUEST': return '#FFA500';
      case 'RESPONSE': return '#00FF00';
      case 'ERROR': return '#FF0000';
      case 'INFO': return '#0080FF';
      default: return '#FFFFFF';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return timestamp.split(' ')[1] || timestamp;
  };

  if (!__DEV__) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.title}>🔍 Debug Logs</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => setAutoRefresh(!autoRefresh)}
              style={[styles.actionButton, autoRefresh && styles.activeButton]}
            >
              <Ionicons name="refresh" size={20} color={autoRefresh ? "#000" : "#FFF"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleExportLogs} style={styles.actionButton}>
              <Ionicons name="share" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClearLogs} style={styles.actionButton}>
              <Ionicons name="trash" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.total || 0}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.requests || 0}</Text>
            <Text style={styles.statLabel}>Requests</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.responses || 0}</Text>
            <Text style={styles.statLabel}>Responses</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.errors || 0}</Text>
            <Text style={styles.statLabel}>Errors</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{stats.avgDuration || 0}ms</Text>
            <Text style={styles.statLabel}>Avg Time</Text>
          </View>
        </View>

        {/* Logs */}
        <ScrollView 
          style={styles.logsContainer}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.logsContent}
        >
          {logs.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="document-text-outline" size={48} color="#666" />
              <Text style={styles.emptyText}>Nenhum log disponível</Text>
              <Text style={styles.emptySubtext}>Os logs aparecerão aqui conforme você usa o app</Text>
            </View>
          ) : (
            logs.slice().reverse().map((log, index) => (
              <View key={index} style={styles.logItem}>
                <View style={styles.logHeader}>
                  <Text style={[styles.logType, { color: getLogColor(log.type) }]}>
                    {log.type}
                  </Text>
                  <Text style={styles.logTime}>
                    {formatTimestamp(log.timestamp)}
                  </Text>
                  {log.duration && (
                    <Text style={styles.logDuration}>
                      {log.duration}ms
                    </Text>
                  )}
                </View>
                
                {log.method && log.url && (
                  <Text style={styles.logUrl}>
                    {log.method} {log.url}
                  </Text>
                )}
                
                {log.status && (
                  <Text style={[styles.logStatus, {
                    color: log.status >= 200 && log.status < 300 ? '#00FF00' : '#FF0000'
                  }]}>
                    Status: {log.status}
                  </Text>
                )}
                
                {log.error && (
                  <Text style={styles.logError}>
                    ❌ {log.error}
                  </Text>
                )}
                
                {log.data && (
                  <Text style={styles.logData} numberOfLines={3}>
                    📦 {typeof log.data === 'string' ? log.data : JSON.stringify(log.data)}
                  </Text>
                )}
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    marginRight: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButton: {
    marginLeft: 12,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#333',
  },
  activeButton: {
    backgroundColor: '#FFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  logsContainer: {
    flex: 1,
  },
  logsContent: {
    padding: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    color: '#999',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  emptySubtext: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  logItem: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#0080FF',
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  logType: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  logTime: {
    color: '#999',
    fontSize: 11,
  },
  logDuration: {
    color: '#FFA500',
    fontSize: 11,
    fontWeight: 'bold',
  },
  logUrl: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  logStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  logError: {
    color: '#FF6B6B',
    fontSize: 12,
    marginBottom: 4,
  },
  logData: {
    color: '#B8B8B8',
    fontSize: 11,
    fontFamily: 'monospace',
    backgroundColor: '#1a1a1a',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
});

export default LogViewer;