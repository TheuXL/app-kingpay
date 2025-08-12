/**
 * 🔍 Serviço de Logging Detalhado - KingPay Mobile
 * ===============================================
 * 
 * Sistema de logging similar ao Next.js para capturar:
 * - Todas as requisições HTTP
 * - Respostas da API
 * - Tempos de resposta
 * - Dados enviados e recebidos
 * - Erros e status codes
 */

interface LogEntry {
  timestamp: string;
  type: 'REQUEST' | 'RESPONSE' | 'ERROR' | 'INFO';
  method?: string;
  url?: string;
  status?: number;
  duration?: number;
  data?: any;
  error?: string;
  headers?: Record<string, string>;
}

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs = 1000; // Limite de logs em memória
  private colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
  };

  private formatTimestamp(): string {
    return new Date().toISOString().replace('T', ' ').slice(0, -5);
  }

  private colorize(color: keyof typeof this.colors, text: string): string {
    if (__DEV__) {
      return `${this.colors[color]}${text}${this.colors.reset}`;
    }
    return text;
  }

  private addLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift(); // Remove o log mais antigo
    }
  }

  // Log de informações gerais
  info(message: string, data?: any): void {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      type: 'INFO',
      data: data
    };
    
    this.addLog(entry);
    
    if (__DEV__) {
      console.log(
        this.colorize('cyan', `[${entry.timestamp}]`),
        this.colorize('blue', '[INFO]'),
        message
      );
      if (data) {
        console.log(this.colorize('white', '  -> Dados:'), data);
      }
    }
  }

  // Log de início de requisição
  logRequest(method: string, url: string, data?: any, headers?: Record<string, string>): string {
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      type: 'REQUEST',
      method,
      url,
      data,
      headers
    };
    
    this.addLog(entry);
    
    if (__DEV__) {
      console.log(
        this.colorize('cyan', `[${entry.timestamp}]`),
        this.colorize('yellow', `[${method}]`),
        this.colorize('white', url)
      );
      
      if (headers && Object.keys(headers).length > 0) {
        console.log(this.colorize('magenta', '  -> Headers:'), headers);
      }
      
      if (data) {
        const dataStr = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        console.log(this.colorize('blue', '  -> Payload:'), dataStr);
      }
    }
    
    return requestId;
  }

  // Log de resposta bem-sucedida
  logResponse(method: string, url: string, status: number, data: any, duration: number, requestId?: string): void {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      type: 'RESPONSE',
      method,
      url,
      status,
      duration,
      data
    };
    
    this.addLog(entry);
    
    if (__DEV__) {
      const statusColor = status >= 200 && status < 300 ? 'green' : status >= 400 ? 'red' : 'yellow';
      
      console.log(
        this.colorize('cyan', `[${entry.timestamp}]`),
        this.colorize(statusColor, `[${status}]`),
        this.colorize('yellow', `[${method}]`),
        this.colorize('white', url),
        this.colorize('magenta', `(${duration}ms)`)
      );
      
      if (data) {
        const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
        const truncatedData = dataStr.length > 200 ? dataStr.substring(0, 200) + '...' : dataStr;
        console.log(this.colorize('green', '  -> Resposta:'), truncatedData);
      }
    }
  }

  // Log de erro
  logError(method: string, url: string, error: string, status?: number, duration?: number): void {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      type: 'ERROR',
      method,
      url,
      status,
      duration,
      error
    };
    
    this.addLog(entry);
    
    if (__DEV__) {
      console.log(
        this.colorize('cyan', `[${entry.timestamp}]`),
        this.colorize('red', '[ERROR]'),
        this.colorize('yellow', `[${method}]`),
        this.colorize('white', url),
        duration ? this.colorize('magenta', `(${duration}ms)`) : ''
      );
      console.log(this.colorize('red', '  -> Erro:'), error);
      if (status) {
        console.log(this.colorize('red', '  -> Status:'), status);
      }
    }
  }

  // Log de inicialização do app
  logAppStart(): void {
    this.info('🚀 KingPay Mobile iniciado');
    this.info(`📱 Ambiente: ${__DEV__ ? 'Desenvolvimento' : 'Produção'}`);
    this.info(`🌐 Edge Functions URL: ${process.env.EXPO_PUBLIC_EDGE_FUNCTIONS_URL}`);
  }

  // Log de autenticação
  logAuth(action: 'LOGIN' | 'LOGOUT' | 'TOKEN_REFRESH', userId?: string): void {
    const actionMessages = {
      LOGIN: '🔐 Usuário autenticado',
      LOGOUT: '🚪 Usuário desconectado',
      TOKEN_REFRESH: '🔄 Token renovado'
    };
    
    this.info(`${actionMessages[action]}${userId ? ` (ID: ${userId})` : ''}`);
  }

  // Log de navegação
  logNavigation(from: string, to: string): void {
    this.info(`🧭 Navegação: ${from} → ${to}`);
  }

  // Obter todos os logs
  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  // Limpar logs
  clearLogs(): void {
    this.logs = [];
    this.info('🧹 Logs limpos');
  }

  // Exportar logs como string
  exportLogs(): string {
    return this.logs.map(log => {
      const timestamp = log.timestamp;
      const type = log.type.padEnd(8);
      const method = log.method ? `[${log.method}]`.padEnd(8) : ''.padEnd(8);
      const url = log.url || '';
      const status = log.status ? `(${log.status})` : '';
      const duration = log.duration ? `${log.duration}ms` : '';
      const error = log.error ? `ERROR: ${log.error}` : '';
      
      return `${timestamp} ${type} ${method} ${url} ${status} ${duration} ${error}`.trim();
    }).join('\n');
  }

  // Estatísticas dos logs
  getStats(): { total: number; requests: number; responses: number; errors: number; avgDuration: number } {
    const total = this.logs.length;
    const requests = this.logs.filter(log => log.type === 'REQUEST').length;
    const responses = this.logs.filter(log => log.type === 'RESPONSE').length;
    const errors = this.logs.filter(log => log.type === 'ERROR').length;
    
    const durationsLogs = this.logs.filter(log => log.duration !== undefined);
    const avgDuration = durationsLogs.length > 0 
      ? durationsLogs.reduce((sum, log) => sum + (log.duration || 0), 0) / durationsLogs.length 
      : 0;
    
    return {
      total,
      requests,
      responses,
      errors,
      avgDuration: Math.round(avgDuration)
    };
  }
}

// Instância singleton do logger
export const logger = new Logger();

// Função para inicializar o logging no app
export const initializeLogging = () => {
  logger.logAppStart();
  
  // Log de erros não capturados
  if (__DEV__) {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      logger.logError('CONSOLE', 'console.error', args.join(' '));
      originalConsoleError.apply(console, args);
    };
  }
};

export default logger;