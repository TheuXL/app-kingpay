Vou analisar todos os arquivos de migração fornecidos para criar um relatório completo das tabelas e colunas do banco de dados. Deixe-me examinar os arquivos restantes para ter uma visão completa.
Read file: migrations/0000.sql
Read file: migrations/0002.sql
Read file: migrations/0003.sql
Read file: migrations/0009.sql
Read file: migrations/0012.sql

Read file: migrations/0018.sql
Read file: migrations/0004.sql
Read file: migrations/0010.sql

Ran tool
Ran tool

# Relatório de Estrutura do Banco de Dados - Sistema KingPay

## Resumo Executivo

Este relatório apresenta a estrutura completa do banco de dados do sistema KingPay, incluindo todas as tabelas, colunas, views e relacionamentos identificados através da análise dos arquivos de migração. O banco utiliza PostgreSQL como SGBD e está organizado em diferentes schemas para separar funcionalidades.

## Schemas Identificados

- **auth**: Schema de autenticação do Supabase
- **public**: Schema principal da aplicação
- **storage**: Schema para armazenamento de arquivos
- **realtime**: Schema para funcionalidades em tempo real
- **extensions**: Schema para extensões do PostgreSQL

---

## Tabelas Principais do Sistema (Schema: public)

### 1. **vb_cdz_gus_companies_tb** (companies)
**Descrição**: Tabela principal de empresas/companhias

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `createdat` (timestamp) - Data de criação
- `updatedat` (timestamp) - Data de atualização
- `name` (varchar(255)) - Nome da empresa
- `paymentmethods` (varchar[]) - Métodos de pagamento aceitos
- `invoicename` (varchar(255)) - Nome para faturamento
- `users` (uuid[]) - Array de usuários associados
- `reservepercentageanticipation` (integer) - % de reserva para antecipação
- `reservepercentageboleto` (integer) - % de reserva para boleto
- `reservepercentagepix` (integer) - % de reserva para PIX
- `status` (varchar(50)) - Status da empresa
- `autotransfer` (boolean) - Transferência automática habilitada
- `transferenabled` (boolean) - Transferências habilitadas
- `maxtransferamount` (numeric) - Valor máximo de transferência
- `mintransferamount` (numeric) - Valor mínimo de transferência
- `averagebilling` (numeric) - Faturamento médio
- `averageticket` (numeric) - Ticket médio
- `website` (varchar(255)) - Site da empresa
- `postalcode` (varchar(20)) - CEP
- `address` (varchar(255)) - Endereço
- `city` (varchar(100)) - Cidade
- `neighborhood` (varchar(100)) - Bairro
- `complement` (varchar(100)) - Complemento
- `housenumber` (varchar(20)) - Número
- `taxid` (varchar(20), UNIQUE) - CNPJ/CPF
- `areacode` (varchar(5)) - Código de área
- `ispj` (boolean) - É pessoa jurídica
- `anticipationenabled` (boolean) - Antecipação habilitada
- `autoapproveanticipation` (boolean) - Auto-aprovação de antecipação
- `reservedaysanticipation` (integer) - Dias de reserva antecipação
- `reservedaysboleto` (integer) - Dias de reserva boleto
- `reservedayspix` (integer) - Dias de reserva PIX
- `daystoanticipate` (integer) - Dias para antecipar
- `enableboletofee` (boolean) - Taxa boleto habilitada
- `enablecardfee` (boolean) - Taxa cartão habilitada
- `enablepixfee` (boolean) - Taxa PIX habilitada
- `modified_date` (timestamp) - Data de modificação
- `creator` (uuid) - Criador
- `slug` (varchar(255)) - Slug único
- `company_name` (varchar(255)) - Nome da empresa
- `anticipation_fee_monthly` (numeric) - Taxa mensal de antecipação
- `boleto_fee_percentage` (numeric) - % taxa boleto
- `boleto_fee_fixed` (numeric) - Taxa fixa boleto
- `card_fee_percentage` (numeric) - % taxa cartão
- `card_fee_fixed` (numeric) - Taxa fixa cartão
- `pix_fee_percentage` (numeric) - % taxa PIX
- `pix_fee_fixed` (numeric) - Taxa fixa PIX
- `withdrawal_fee_percentage` (numeric) - % taxa saque
- `withdrawal_fee_fixed` (numeric) - Taxa fixa saque
- `fee_type_boleto` (varchar(50)) - Tipo taxa boleto
- `fee_type_card` (varchar(50)) - Tipo taxa cartão
- `fee_type_pix` (varchar(50)) - Tipo taxa PIX
- `fee_type_withdrawal` (varchar(50)) - Tipo taxa saque
- `fee_type_fixed_boleto` (varchar(50)) - Tipo taxa fixa boleto
- `fee_type_fixed_card` (varchar(50)) - Tipo taxa fixa cartão
- `fee_type_fixed_pix` (varchar(50)) - Tipo taxa fixa PIX
- `fee_type_fixed_withdrawal` (varchar(50)) - Tipo taxa fixa saque
- `acquirers` (uuid[]) - Array de adquirentes
- `mdr_1x_adquirente` a `mdr_12x_adquirente` (numeric(5,2)) - MDR por parcela
- `baas` (uuid) - BaaS associado
- `acquirers_pix` (uuid) - Adquirente PIX
- `acquirers_boleto` (uuid) - Adquirente boleto
- `acquirers_card` (uuid) - Adquirente cartão
- `MotivoRecusa` (text) - Motivo da recusa
- `contrato_social` (text) - Contrato social
- `frente_documento_url` (varchar) - URL frente documento
- `verso_documento_url` (varchar) - URL verso documento
- `selfie_url` (varchar) - URL selfie
- `documentoenviados` (boolean) - Documentos enviados
- `last_transaction_date` (timestamp) - Data última transação
- `total_paid` (numeric) - Total pago
- `current_balance` (bigint) - Saldo atual
- `blocked` (boolean) - Bloqueado
- `reason_for_blocking` (text) - Motivo do bloqueio
- `tangible_products` (boolean) - Produtos tangíveis
- `sold_products` (text) - Produtos vendidos
- `aceitou_termos` (boolean) - Aceitou termos
- `autotransferCard` (boolean) - Auto-transferência cartão
- `max_saque_diario` (smallint) - Máximo saque diário
- `min_valor_transacao` (bigint) - Valor mínimo transação
- `max_valor_transacao` (bigint) - Valor máximo transação

### 2. **vb_cdz_gus_user_profile_tb** (user_profile)
**Descrição**: Perfis de usuários do sistema

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `fullname` (varchar(255)) - Nome completo
- `email` (varchar(255), UNIQUE) - Email
- `phone` (varchar(20)) - Telefone
- `document` (varchar(20)) - Documento
- `birthdate` (date) - Data de nascimento
- `usertype` (varchar(50)) - Tipo de usuário
- `permissions` (text[]) - Permissões
- `description` (varchar(255)) - Descrição
- `api_secret_key` (varchar(255), UNIQUE) - Chave API secreta
- `isAdmin` (boolean) - É administrador
- `company` (uuid, FK) - Empresa associada
- `foto` (text) - URL da foto
- `prefer_v2` (boolean) - Preferência versão 2

### 3. **transactions**
**Descrição**: Tabela principal de transações

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `createdat` (timestamp) - Data de criação
- `updatedat` (timestamp) - Data de atualização
- `date` (timestamp) - Data da transação
- `paymentmethod` (varchar(50)) - Método de pagamento
- `month` (integer) - Mês
- `status` (varchar(50)) - Status
- `chargedamount` (numeric) - Valor cobrado
- `netamount` (numeric) - Valor líquido
- `clientid` (uuid, FK) - ID do cliente
- `clientip` (varchar(50)) - IP do cliente
- `pixcode` (text) - Código PIX
- `acquirerid` (uuid, FK) - ID do adquirente
- `paidat` (timestamp) - Data do pagamento
- `installments` (integer) - Parcelas
- `duedate` (timestamp) - Data de vencimento
- `availableforanticipation` (boolean) - Disponível para antecipação
- `anticipated` (boolean) - Antecipado
- `anticipationunderreview` (boolean) - Antecipação em análise
- `success` (boolean) - Sucesso
- `companyid` (uuid, FK) - ID da empresa
- `refunded` (boolean) - Estornado
- `metadata` (varchar) - Metadados
- `description` (varchar(255)) - Descrição
- `idAdquirente` (text, UNIQUE) - ID do adquirente
- `boletourl` (text) - URL do boleto
- `userId` (uuid, FK) - ID do usuário
- `cardHolderName` (text) - Nome do portador
- `cardExpirationYear` (integer) - Ano de expiração
- `cardLastDigits` (text) - Últimos dígitos
- `cardExpirationMonth` (integer) - Mês de expiração
- `splits` (json[]) - Divisões
- `itens` (json[]) - Itens
- `data` (date) - Data
- `time` (time) - Hora
- `motivoDoErro` (text) - Motivo do erro
- `cardflag` (text) - Bandeira do cartão
- `postbackUrl` (text) - URL de postback
- `digitableLine` (text) - Linha digitável
- `Description` (text) - Descrição adicional
- `refund_date` (timestamp) - Data do estorno
- `provider` (varchar(255)) - Provedor
- `utm_content` (varchar(255)) - UTM Content
- `utm_source` (varchar(255)) - UTM Source
- `utm_medium` (varchar(255)) - UTM Medium
- `utm_campaign` (varchar(255)) - UTM Campaign
- `utm_term` (varchar(255)) - UTM Term
- `fbc` (varchar(255)) - Facebook Click ID
- `fbp` (varchar(255)) - Facebook Browser ID
- `operating_system` (varchar(255)) - Sistema operacional
- `browser_data` (varchar(255)) - Dados do navegador
- `cityTracker` (text) - Rastreamento cidade
- `RegiaoTracker` (text) - Rastreamento região
- `end2EndId` (text) - ID end-to-end
- `qr_code_url` (text) - URL QR Code
- `barcode_boleto` (text) - Código de barras boleto
- `store` (text) - Loja
- `idShopify` (text) - ID Shopify

### 4. **vb_cdz_gus_wallet_tb** (wallet)
**Descrição**: Carteiras dos usuários

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `receiver` (uuid, FK) - Recebedor
- `balance` (bigint) - Saldo
- `financial_reserve` (bigint) - Reserva financeira
- `balance_card` (bigint) - Saldo cartão

### 5. **vb_cdz_gus_a_receber_tb** (a_receber)
**Descrição**: Valores a receber

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `disponivel_para_antecipar_em` (timestamp) - Disponível para antecipar em
- `disponivel_para_antecipar` (boolean) - Disponível para antecipar
- `valor_liquido_pos_antecipacao` (bigint) - Valor líquido pós antecipação
- `amount` (bigint) - Valor
- `analise` (boolean) - Em análise
- `recebedor` (uuid, FK) - Recebedor
- `tipo_contagem_dias` (varchar(10)) - Tipo contagem dias (uteis/corridos)

### 6. **getway**
**Descrição**: Configurações do gateway

**Colunas**:
- `id` (bigint, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `termos` (varchar) - Termos
- `descontarChargebackSaldoDisponivel` (boolean) - Descontar chargeback do saldo
- `descontarEstornoSaldo` (boolean) - Descontar estorno do saldo
- `reservaFinanceiraHabilitada` (boolean) - Reserva financeira habilitada
- `PreChargebackCaclPorParcela` (boolean) - Pré-chargeback por parcela
- `ValorPreChargeBack` (bigint) - Valor pré-chargeback
- `preChargeBackAtivo` (boolean) - Pré-chargeback ativo
- `CobrarTaxaSaqueApenasQuandoPago` (boolean) - Cobrar taxa saque apenas quando pago
- `CobrarTaxaSaqueApenasPago` (boolean) - Cobrar taxa saque apenas pago
- `DevolverTaxasSaque` (boolean) - Devolver taxas saque
- `contarDiasUteisAntecipacao` (boolean) - Contar dias úteis antecipação

### 7. **clients**
**Descrição**: Clientes das empresas

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `createdat` (timestamp) - Data de criação
- `updatedat` (timestamp) - Data de atualização
- `neighborhood` (varchar(100)) - Bairro
- `zipCode` (varchar(20)) - CEP
- `city` (varchar(100)) - Cidade
- `complement` (varchar(100)) - Complemento
- `taxid` (varchar(20)) - CPF/CNPJ
- `email` (varchar(255)) - Email
- `streetNumber` (varchar(20)) - Número
- `name` (varchar(255)) - Nome
- `street` (varchar(255)) - Rua
- `phone` (varchar(20)) - Telefone
- `documenttype` (varchar(20)) - Tipo documento
- `description` (varchar(255)) - Descrição
- `state` (text) - Estado
- `company` (uuid, FK) - Empresa
- `creator` (uuid, FK) - Criador
- `country` (text) - País

### 8. **withdrawals**
**Descrição**: Saques/transferências

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `createdat` (timestamp) - Data de criação
- `updatedat` (timestamp) - Data de atualização
- `fee` (numeric) - Taxa
- `requestedamount` (numeric) - Valor solicitado
- `pixkeyid` (uuid, FK) - Chave PIX
- `status` (varchar(50)) - Status
- `amounttotransfer` (numeric) - Valor a transferir
- `companyid` (uuid, FK) - Empresa
- `description` (varchar(255)) - Descrição
- `creator` (uuid, FK) - Criador
- `idBaas` (varchar) - ID BaaS
- `reason_for_denial` (text) - Motivo da negação
- `isPix` (boolean) - É PIX
- `negative_deducted` (numeric) - Valor negativo deduzido
- `negative_column` (varchar(50)) - Coluna negativa
- `pago_em` (timestamp) - Data do pagamento

### 9. **pix_keys**
**Descrição**: Chaves PIX

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `createdat` (timestamp) - Data de criação
- `updatedat` (timestamp) - Data de atualização
- `key` (varchar(50)) - Chave PIX
- `type` (varchar(50)) - Tipo da chave
- `description` (varchar(255)) - Descrição
- `creator` (uuid, FK) - Criador

### 10. **acquirers**
**Descrição**: Adquirentes

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_date` (timestamp) - Data de criação
- `modified_date` (timestamp) - Data de modificação
- `nome` (varchar(255)) - Nome
- `process_card` (boolean) - Processa cartão
- `process_pix` (boolean) - Processa PIX
- `process_boleto` (boolean) - Processa boleto
- `description` (varchar(255)) - Descrição
- `chave_key_adquirente` (text) - Chave do adquirente
- `cor` (text) - Cor
- `foto` (text) - Foto
- `boleto_fee_percentage` (numeric) - % taxa boleto
- `boleto_fee_fixed` (numeric) - Taxa fixa boleto
- `card_fee_percentage` (numeric) - % taxa cartão
- `card_fee_fixed` (numeric) - Taxa fixa cartão
- `pix_fee_percentage` (numeric) - % taxa PIX
- `pix_fee_fixed` (numeric) - Taxa fixa PIX
- `fee_type_boleto` (varchar(50)) - Tipo taxa boleto
- `fee_type_card` (varchar(50)) - Tipo taxa cartão
- `fee_type_pix` (varchar(50)) - Tipo taxa PIX
- `fee_type_fixed_boleto` (varchar(50)) - Tipo taxa fixa boleto
- `fee_type_fixed_card` (varchar(50)) - Tipo taxa fixa cartão
- `fee_type_fixed_pix` (varchar(50)) - Tipo taxa fixa PIX
- `mdr_1x_adquirente` a `mdr_12x_adquirente` (numeric(5,2)) - MDR por parcela
- `client_key_adquirente` (text) - Chave cliente adquirente
- `emailClient` (text) - Email cliente
- `passwordClient` (text) - Senha cliente
- `id_sub_adquirente` (text) - ID sub-adquirente
- `url_pfx` (text) - URL PFX
- `url_key` (text) - URL Key
- `url_crt` (text) - URL CRT

### 11. **baas**
**Descrição**: Banking as a Service

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `chaveKey` (varchar) - Chave
- `name` (varchar) - Nome
- `ativo` (boolean) - Ativo
- `cor` (text) - Cor
- `logo` (text) - Logo
- `fee` (bigint) - Taxa
- `clientId` (text) - ID cliente
- `userAgent` (text) - User Agent
- `realmsId` (text) - ID realms
- `organizationsId` (text) - ID organizações
- `walletsId` (text) - ID carteiras

### 12. **anticipation**
**Descrição**: Antecipações

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `status` (varchar) - Status
- `aReceberList` (uuid[]) - Lista a receber
- `recusaMotivo` (text) - Motivo da recusa
- `valorPedido` (numeric) - Valor solicitado
- `valorFinal` (numeric) - Valor final
- `creator` (uuid, FK) - Criador
- `fee` (numeric) - Taxa

### 13. **gerentes**
**Descrição**: Gerentes do sistema

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `nome_completo` (text) - Nome completo
- `email` (text) - Email
- `telefone` (text) - Telefone
- `data_cadastro` (timestamp) - Data do cadastro
- `porcentagem` (numeric(5,2)) - Porcentagem
- `metodos_pagamento` (text[]) - Métodos de pagamento
- `pagar_estornado` (boolean) - Pagar estornado
- `pagar_em_cima_do_valor_total` (boolean) - Pagar em cima do valor total
- `ativo` (boolean) - Ativo
- `empresa` (uuid[]) - Array de empresas

### 14. **entrada_gerente**
**Descrição**: Entradas dos gerentes

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `gerente` (uuid, FK) - Gerente
- `transacao` (uuid, FK) - Transação
- `valor` (bigint) - Valor
- `data_criacao` (timestamp) - Data de criação

### 15. **gateway_personalization**
**Descrição**: Personalização do gateway

**Colunas**:
- `id` (serial, PK) - Identificador único
- `primary_color` (varchar(7)) - Cor primária
- `hover_color` (varchar(7)) - Cor hover
- `background_color` (varchar(7)) - Cor de fundo
- `login_banner` (text) - Banner de login
- `gateway_name` (varchar(100)) - Nome do gateway
- `logo_principal` (text) - Logo principal
- `logo_white` (text) - Logo branco

### 16. **fraud_detection_logs**
**Descrição**: Logs de detecção de fraude

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `transaction_id` (uuid, FK) - Transação
- `status` (text) - Status
- `risk_score` (decimal(3,2)) - Pontuação de risco
- `risk_level` (text) - Nível de risco
- `recommendation` (text) - Recomendação
- `confidence` (decimal(3,2)) - Confiança
- `risk_assessment_id` (uuid) - ID avaliação de risco
- `response` (jsonb) - Resposta
- `error_message` (text) - Mensagem de erro
- `created_at` (timestamp) - Data de criação
- `updated_at` (timestamp) - Data de atualização

### 17. **vb_cdz_gus_validation_codes_tb**
**Descrição**: Códigos de validação

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `user_id` (uuid, FK) - Usuário
- `code` (varchar(8)) - Código
- `created_at` (timestamp) - Data de criação
- `expires_at` (timestamp) - Data de expiração
- `is_used` (boolean) - Utilizado

### 18. **card_tokens**
**Descrição**: Tokens de cartão

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `token` (text, UNIQUE) - Token
- `masked_number` (text) - Número mascarado
- `bin` (varchar(6)) - BIN
- `last_digits` (varchar(4)) - Últimos dígitos
- `holder_name` (text) - Nome do portador
- `expiration_month` (integer) - Mês de expiração
- `expiration_year` (integer) - Ano de expiração
- `card_brand` (text) - Bandeira
- `public_key` (text) - Chave pública
- `created_at` (timestamp) - Data de criação
- `updated_at` (timestamp) - Data de atualização
- `expires_at` (timestamp) - Data de expiração
- `status` (text) - Status

### 19. **token_logs**
**Descrição**: Logs de tokens

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `token` (text) - Token
- `operation` (text) - Operação
- `public_key` (text) - Chave pública
- `ip` (text) - IP
- `user_agent` (text) - User Agent
- `created_at` (timestamp) - Data de criação

### 20. **entradas**
**Descrição**: Entradas financeiras

**Colunas**:
- `id` (bigint, PK) - Identificador único
- `transaction_id` (uuid, FK) - Transação
- `withdrawal_id` (uuid, FK) - Saque
- `valor` (numeric) - Valor
- `tipo` (varchar(50)) - Tipo
- `mes` (integer) - Mês
- `data` (timestamp) - Data
- `estornado` (boolean) - Estornado
- `antecipation_id` (uuid, FK) - Antecipação

### 21. **obrigacoesdepagamentogetway**
**Descrição**: Obrigações de pagamento do gateway

**Colunas**:
- `id` (bigint, PK) - Identificador único
- `transaction` (uuid) - Transação
- `valor` (numeric) - Valor
- `mes` (integer) - Mês
- `data` (timestamp) - Data
- `tipo` (varchar) - Tipo
- `baas` (uuid) - BaaS
- `adquirente` (uuid) - Adquirente

### 22. **extrato_user**
**Descrição**: Extrato do usuário

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `tipo` (text) - Tipo
- `value` (bigint) - Valor
- `entrada` (boolean) - Entrada
- `wallet` (uuid, FK) - Carteira
- `user_id` (uuid, FK) - Usuário
- `creator` (uuid, FK) - Criador
- `IdTransaction` (text) - ID transação
- `idSaldoRemovido` (text) - ID saldo removido
- `idAntecipacao` (text) - ID antecipação

### 23. **reserva**
**Descrição**: Reservas financeiras

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `releaseDate` (timestamp) - Data de liberação
- `wallet` (uuid, FK) - Carteira
- `amount` (bigint) - Valor

### 24. **saldoRemovido**
**Descrição**: Saldos removidos

**Colunas**:
- `id` (bigint, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `creator` (uuid, FK) - Criador
- `walletId` (uuid, FK) - Carteira
- `motivo` (text) - Motivo
- `valorRemovido` (bigint) - Valor removido

### 25. **billings**
**Descrição**: Faturamentos

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `endAt` (timestamp) - Data de fim
- `status` (text) - Status
- `chargeAmount` (bigint) - Valor cobrado

### 26. **configuracoes**
**Descrição**: Configurações do sistema

**Colunas**:
- `id` (bigint, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `fee_porcetage` (numeric) - Porcentagem taxa
- `fee_fixed` (bigint) - Taxa fixa

### 27. **standard**
**Descrição**: Configurações padrão

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `paymentmethods` (varchar[]) - Métodos pagamento
- `reservepercentageanticipation` (integer) - % reserva antecipação
- `reservepercentageboleto` (integer) - % reserva boleto
- `reservepercentagepix` (integer) - % reserva PIX
- `autotransfer` (boolean) - Auto-transferência
- `transferenabled` (boolean) - Transferência habilitada
- `maxtransferamount` (numeric) - Valor máximo transferência
- `mintransferamount` (numeric) - Valor mínimo transferência
- `anticipationenabled` (boolean) - Antecipação habilitada
- `autoapproveanticipation` (boolean) - Auto-aprovação antecipação
- `reservedaysanticipation` (integer) - Dias reserva antecipação
- `reservedaysboleto` (integer) - Dias reserva boleto
- `reservedayspix` (integer) - Dias reserva PIX
- `daystoanticipate` (integer) - Dias para antecipar
- `enableboletofee` (boolean) - Taxa boleto habilitada
- `enablecardfee` (boolean) - Taxa cartão habilitada
- `enablepixfee` (boolean) - Taxa PIX habilitada
- `anticipation_fee_monthly` (numeric) - Taxa mensal antecipação
- `boleto_fee_percentage` (numeric) - % taxa boleto
- `boleto_fee_fixed` (numeric) - Taxa fixa boleto
- `card_fee_percentage` (numeric) - % taxa cartão
- `card_fee_fixed` (numeric) - Taxa fixa cartão
- `pix_fee_percentage` (numeric) - % taxa PIX
- `pix_fee_fixed` (numeric) - Taxa fixa PIX
- `withdrawal_fee_percentage` (numeric) - % taxa saque
- `withdrawal_fee_fixed` (numeric) - Taxa fixa saque
- `fee_type_boleto` (varchar(50)) - Tipo taxa boleto
- `fee_type_card` (varchar(50)) - Tipo taxa cartão
- `fee_type_pix` (varchar(50)) - Tipo taxa PIX
- `fee_type_withdrawal` (varchar(50)) - Tipo taxa saque
- `fee_type_fixed_boleto` (varchar(50)) - Tipo taxa fixa boleto
- `fee_type_fixed_card` (varchar(50)) - Tipo taxa fixa cartão
- `fee_type_fixed_pix` (varchar(50)) - Tipo taxa fixa PIX
- `fee_type_fixed_withdrawal` (varchar(50)) - Tipo taxa fixa saque
- `mdr_1x_adquirente` a `mdr_12x_adquirente` (numeric(5,2)) - MDR por parcela
- `baas` (uuid) - BaaS
- `acquirers_pix` (uuid) - Adquirente PIX
- `acquirers_boleto` (uuid) - Adquirente boleto
- `acquirers_card` (uuid) - Adquirente cartão
- `status` (boolean) - Status
- `nome` (text) - Nome
- `autotransferCard` (boolean) - Auto-transferência cartão

### 28. **store**
**Descrição**: Lojas

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `name` (text) - Nome
- `domain` (text) - Domínio
- `token_shopfy` (text) - Token Shopify
- `secret_key_shopfy` (text) - Chave secreta Shopify
- `api_key_shopfy` (text) - Chave API Shopify
- `creator` (uuid, FK) - Criador
- `id_store` (text) - ID da loja
- `skipCart` (boolean) - Pular carrinho
- `checkoutEnableShopfy` (boolean) - Checkout Shopify habilitado
- `theme_id` (text) - ID do tema
- `domainCheckout` (text) - Domínio checkout
- `rementente_nome` (text) - Nome remetente
- `remetente_email` (text) - Email remetente
- `sender` (text) - Remetente
- `status_sender` (boolean) - Status remetente

### 29. **products**
**Descrição**: Produtos

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `price` (numeric) - Preço
- `title` (text) - Título
- `description` (varchar) - Descrição
- `store` (uuid, FK) - Loja
- `idExternal` (text) - ID externo
- `image_url` (text) - URL da imagem
- `creator` (uuid, FK) - Criador

### 30. **variants**
**Descrição**: Variações de produtos

**Colunas**:
- `id` (uuid, PK) - Identificador único
- `created_at` (timestamp) - Data de criação
- `image` (text) - Imagem
- `price` (numeric) - Preço
- `product` (uuid, FK) - Produto
- `title` (text) - Título
- `creator` (uuid, FK) - Criador
- `idexternal` (text) - ID externo
- `store` (uuid, FK) - Loja

---

## Views Principais

### 1. **detalhes_transactions**
View com detalhes completos das transações incluindo dados de usuário, empresa e cliente.

### 2. **detalhes_withdrawals**
View com detalhes completos dos saques incluindo dados de usuário, empresa e chave PIX.

### 3. **detalhes_antecipacao**
View com detalhes das antecipações incluindo dados de usuário e empresa.

### 4. **company_user_details**
View com detalhes das empresas e seus criadores.

### 5. **usuario**
View combinando dados de user_profile e companies.

### 6. **store_view**
View simplificada das lojas.

### 7. **transactions_backend**
View das transações para o backend.

### 8. **reserva_total_amount_view**
View com valor total das reservas.

---

## Schemas de Autenticação (auth)

### **users**
Tabela principal de usuários do Supabase com campos como:
- `id`, `email`, `encrypted_password`, `created_at`, `updated_at`, `phone`, etc.

### **identities**
Identidades associadas aos usuários para diferentes provedores de autenticação.

### **sessions**
Sessões ativas de usuários.

### **flow_state**
Estados de fluxo para autenticação PKCE.

---

## Relacionamentos Principais

1. **user_profile** → **companies** (many-to-one)
2. **wallet** → **user_profile** (one-to-one)
3. **transactions** → **companies** (many-to-one)
4. **transactions** → **clients** (many-to-one)
5. **withdrawals** → **pix_keys** (many-to-one)
6. **anticipation** → **user_profile** (many-to-one)
7. **gerentes** → **companies** (many-to-many via array)
8. **entrada_gerente** → **gerentes** e **transactions** (many-to-one each)

---

## Funcionalidades Implementadas

### **Sistema de Pagamentos**
- Transações com múltiplos métodos (PIX, Cartão, Boleto)
- Gestão de taxas e MDR
- Antecipação de recebíveis
- Sistema de reserva financeira

### **Gestão de Usuários**
- Perfis com permissões
- Empresas com configurações personalizadas
- Sistema de carteiras digitais

### **E-commerce**
- Integração com Shopify
- Gestão de produtos e variações
- Sistema de checkout

### **Segurança**
- Detecção de fraude
- Tokenização de cartões
- Códigos de validação
- Row Level Security (RLS)

### **Relatórios e Analytics**
- Extratos detalhados
- Logs de operações
- Faturamento automatizado
- Tracking de conversões

---

## Considerações Técnicas

- **Banco**: PostgreSQL com extensões do Supabase
- **Segurança**: RLS habilitado em tabelas sensíveis
- **Performance**: Índices em campos de busca frequente
- **Integridade**: Constraints e foreign keys
- **Auditoria**: Logs de alterações e operações
- **Escalabilidade**: Separação por schemas e views otimizadas

Este relatório representa a estrutura completa do banco de dados identificada através dos arquivos de migração analisados.



| table_schema        | table_name                                | column_name                           | data_type                   |
| ------------------- | ----------------------------------------- | ------------------------------------- | --------------------------- |
| auth                | audit_log_entries                         | payload                               | json                        |
| auth                | audit_log_entries                         | created_at                            | timestamp with time zone    |
| auth                | audit_log_entries                         | instance_id                           | uuid                        |
| auth                | audit_log_entries                         | ip_address                            | character varying           |
| auth                | audit_log_entries                         | id                                    | uuid                        |
| auth                | flow_state                                | code_challenge                        | text                        |
| auth                | flow_state                                | created_at                            | timestamp with time zone    |
| auth                | flow_state                                | authentication_method                 | text                        |
| auth                | flow_state                                | user_id                               | uuid                        |
| auth                | flow_state                                | auth_code                             | text                        |
| auth                | flow_state                                | id                                    | uuid                        |
| auth                | flow_state                                | provider_type                         | text                        |
| auth                | flow_state                                | updated_at                            | timestamp with time zone    |
| auth                | flow_state                                | code_challenge_method                 | USER-DEFINED                |
| auth                | flow_state                                | provider_refresh_token                | text                        |
| auth                | flow_state                                | provider_access_token                 | text                        |
| auth                | flow_state                                | auth_code_issued_at                   | timestamp with time zone    |
| auth                | identities                                | provider_id                           | text                        |
| auth                | identities                                | identity_data                         | jsonb                       |
| auth                | identities                                | last_sign_in_at                       | timestamp with time zone    |
| auth                | identities                                | id                                    | uuid                        |
| auth                | identities                                | created_at                            | timestamp with time zone    |
| auth                | identities                                | user_id                               | uuid                        |
| auth                | identities                                | updated_at                            | timestamp with time zone    |
| auth                | identities                                | email                                 | text                        |
| auth                | identities                                | provider                              | text                        |
| auth                | instances                                 | created_at                            | timestamp with time zone    |
| auth                | instances                                 | updated_at                            | timestamp with time zone    |
| auth                | instances                                 | id                                    | uuid                        |
| auth                | instances                                 | uuid                                  | uuid                        |
| auth                | instances                                 | raw_base_config                       | text                        |
| auth                | mfa_amr_claims                            | authentication_method                 | text                        |
| auth                | mfa_amr_claims                            | created_at                            | timestamp with time zone    |
| auth                | mfa_amr_claims                            | updated_at                            | timestamp with time zone    |
| auth                | mfa_amr_claims                            | id                                    | uuid                        |
| auth                | mfa_amr_claims                            | session_id                            | uuid                        |
| auth                | mfa_challenges                            | id                                    | uuid                        |
| auth                | mfa_challenges                            | otp_code                              | text                        |
| auth                | mfa_challenges                            | ip_address                            | inet                        |
| auth                | mfa_challenges                            | factor_id                             | uuid                        |
| auth                | mfa_challenges                            | web_authn_session_data                | jsonb                       |
| auth                | mfa_challenges                            | created_at                            | timestamp with time zone    |
| auth                | mfa_challenges                            | verified_at                           | timestamp with time zone    |
| auth                | mfa_factors                               | status                                | USER-DEFINED                |
| auth                | mfa_factors                               | id                                    | uuid                        |
| auth                | mfa_factors                               | web_authn_aaguid                      | uuid                        |
| auth                | mfa_factors                               | friendly_name                         | text                        |
| auth                | mfa_factors                               | created_at                            | timestamp with time zone    |
| auth                | mfa_factors                               | web_authn_credential                  | jsonb                       |
| auth                | mfa_factors                               | factor_type                           | USER-DEFINED                |
| auth                | mfa_factors                               | secret                                | text                        |
| auth                | mfa_factors                               | updated_at                            | timestamp with time zone    |
| auth                | mfa_factors                               | phone                                 | text                        |
| auth                | mfa_factors                               | last_challenged_at                    | timestamp with time zone    |
| auth                | mfa_factors                               | user_id                               | uuid                        |
| auth                | one_time_tokens                           | created_at                            | timestamp without time zone |
| auth                | one_time_tokens                           | relates_to                            | text                        |
| auth                | one_time_tokens                           | token_hash                            | text                        |
| auth                | one_time_tokens                           | token_type                            | USER-DEFINED                |
| auth                | one_time_tokens                           | id                                    | uuid                        |
| auth                | one_time_tokens                           | updated_at                            | timestamp without time zone |
| auth                | one_time_tokens                           | user_id                               | uuid                        |
| auth                | refresh_tokens                            | created_at                            | timestamp with time zone    |
| auth                | refresh_tokens                            | token                                 | character varying           |
| auth                | refresh_tokens                            | id                                    | bigint                      |
| auth                | refresh_tokens                            | revoked                               | boolean                     |
| auth                | refresh_tokens                            | updated_at                            | timestamp with time zone    |
| auth                | refresh_tokens                            | parent                                | character varying           |
| auth                | refresh_tokens                            | user_id                               | character varying           |
| auth                | refresh_tokens                            | session_id                            | uuid                        |
| auth                | refresh_tokens                            | instance_id                           | uuid                        |
| auth                | saml_providers                            | created_at                            | timestamp with time zone    |
| auth                | saml_providers                            | name_id_format                        | text                        |
| auth                | saml_providers                            | id                                    | uuid                        |
| auth                | saml_providers                            | entity_id                             | text                        |
| auth                | saml_providers                            | metadata_url                          | text                        |
| auth                | saml_providers                            | sso_provider_id                       | uuid                        |
| auth                | saml_providers                            | metadata_xml                          | text                        |
| auth                | saml_providers                            | updated_at                            | timestamp with time zone    |
| auth                | saml_providers                            | attribute_mapping                     | jsonb                       |
| auth                | saml_relay_states                         | updated_at                            | timestamp with time zone    |
| auth                | saml_relay_states                         | id                                    | uuid                        |
| auth                | saml_relay_states                         | request_id                            | text                        |
| auth                | saml_relay_states                         | redirect_to                           | text                        |
| auth                | saml_relay_states                         | flow_state_id                         | uuid                        |
| auth                | saml_relay_states                         | for_email                             | text                        |
| auth                | saml_relay_states                         | created_at                            | timestamp with time zone    |
| auth                | saml_relay_states                         | sso_provider_id                       | uuid                        |
| auth                | schema_migrations                         | version                               | character varying           |
| auth                | sessions                                  | ip                                    | inet                        |
| auth                | sessions                                  | id                                    | uuid                        |
| auth                | sessions                                  | aal                                   | USER-DEFINED                |
| auth                | sessions                                  | updated_at                            | timestamp with time zone    |
| auth                | sessions                                  | factor_id                             | uuid                        |
| auth                | sessions                                  | refreshed_at                          | timestamp without time zone |
| auth                | sessions                                  | created_at                            | timestamp with time zone    |
| auth                | sessions                                  | user_id                               | uuid                        |
| auth                | sessions                                  | user_agent                            | text                        |
| auth                | sessions                                  | not_after                             | timestamp with time zone    |
| auth                | sessions                                  | tag                                   | text                        |
| auth                | sso_domains                               | id                                    | uuid                        |
| auth                | sso_domains                               | domain                                | text                        |
| auth                | sso_domains                               | updated_at                            | timestamp with time zone    |
| auth                | sso_domains                               | sso_provider_id                       | uuid                        |
| auth                | sso_domains                               | created_at                            | timestamp with time zone    |
| auth                | sso_providers                             | id                                    | uuid                        |
| auth                | sso_providers                             | updated_at                            | timestamp with time zone    |
| auth                | sso_providers                             | created_at                            | timestamp with time zone    |
| auth                | sso_providers                             | resource_id                           | text                        |
| auth                | users                                     | email_confirmed_at                    | timestamp with time zone    |
| auth                | users                                     | created_at                            | timestamp with time zone    |
| auth                | users                                     | aud                                   | character varying           |
| auth                | users                                     | phone_change_token                    | character varying           |
| auth                | users                                     | phone_change                          | text                        |
| auth                | users                                     | email_change_sent_at                  | timestamp with time zone    |
| auth                | users                                     | is_sso_user                           | boolean                     |
| auth                | users                                     | phone                                 | text                        |
| auth                | users                                     | raw_app_meta_data                     | jsonb                       |
| auth                | users                                     | email_change_confirm_status           | smallint                    |
| auth                | users                                     | email                                 | character varying           |
| auth                | users                                     | deleted_at                            | timestamp with time zone    |
| auth                | users                                     | encrypted_password                    | character varying           |
| auth                | users                                     | phone_change_sent_at                  | timestamp with time zone    |
| auth                | users                                     | email_change_token_current            | character varying           |
| auth                | users                                     | confirmation_token                    | character varying           |
| auth                | users                                     | role                                  | character varying           |
| auth                | users                                     | recovery_sent_at                      | timestamp with time zone    |
| auth                | users                                     | phone_confirmed_at                    | timestamp with time zone    |
| auth                | users                                     | id                                    | uuid                        |
| auth                | users                                     | updated_at                            | timestamp with time zone    |
| auth                | users                                     | instance_id                           | uuid                        |
| auth                | users                                     | confirmed_at                          | timestamp with time zone    |
| auth                | users                                     | is_super_admin                        | boolean                     |
| auth                | users                                     | last_sign_in_at                       | timestamp with time zone    |
| auth                | users                                     | is_anonymous                          | boolean                     |
| auth                | users                                     | invited_at                            | timestamp with time zone    |
| auth                | users                                     | email_change_token_new                | character varying           |
| auth                | users                                     | recovery_token                        | character varying           |
| auth                | users                                     | raw_user_meta_data                    | jsonb                       |
| auth                | users                                     | reauthentication_token                | character varying           |
| auth                | users                                     | confirmation_sent_at                  | timestamp with time zone    |
| auth                | users                                     | email_change                          | character varying           |
| auth                | users                                     | banned_until                          | timestamp with time zone    |
| auth                | users                                     | reauthentication_sent_at              | timestamp with time zone    |
| card_vault          | config                                    | description                           | text                        |
| card_vault          | config                                    | value                                 | jsonb                       |
| card_vault          | config                                    | id                                    | integer                     |
| card_vault          | config                                    | updated_at                            | timestamp with time zone    |
| card_vault          | config                                    | key                                   | text                        |
| card_vault          | config                                    | created_at                            | timestamp with time zone    |
| cron                | job                                       | nodename                              | text                        |
| cron                | job                                       | jobid                                 | bigint                      |
| cron                | job                                       | command                               | text                        |
| cron                | job                                       | jobname                               | text                        |
| cron                | job                                       | nodeport                              | integer                     |
| cron                | job                                       | database                              | text                        |
| cron                | job                                       | username                              | text                        |
| cron                | job                                       | active                                | boolean                     |
| cron                | job                                       | schedule                              | text                        |
| cron                | job_run_details                           | status                                | text                        |
| cron                | job_run_details                           | jobid                                 | bigint                      |
| cron                | job_run_details                           | database                              | text                        |
| cron                | job_run_details                           | username                              | text                        |
| cron                | job_run_details                           | start_time                            | timestamp with time zone    |
| cron                | job_run_details                           | runid                                 | bigint                      |
| cron                | job_run_details                           | command                               | text                        |
| cron                | job_run_details                           | return_message                        | text                        |
| cron                | job_run_details                           | job_pid                               | integer                     |
| cron                | job_run_details                           | end_time                              | timestamp with time zone    |
| extensions          | pg_stat_statements                        | blk_read_time                         | double precision            |
| extensions          | pg_stat_statements                        | plans                                 | bigint                      |
| extensions          | pg_stat_statements                        | query                                 | text                        |
| extensions          | pg_stat_statements                        | jit_optimization_time                 | double precision            |
| extensions          | pg_stat_statements                        | temp_blk_read_time                    | double precision            |
| extensions          | pg_stat_statements                        | total_plan_time                       | double precision            |
| extensions          | pg_stat_statements                        | jit_generation_time                   | double precision            |
| extensions          | pg_stat_statements                        | wal_fpi                               | bigint                      |
| extensions          | pg_stat_statements                        | shared_blks_read                      | bigint                      |
| extensions          | pg_stat_statements                        | dbid                                  | oid                         |
| extensions          | pg_stat_statements                        | wal_bytes                             | numeric                     |
| extensions          | pg_stat_statements                        | jit_functions                         | bigint                      |
| extensions          | pg_stat_statements                        | toplevel                              | boolean                     |
| extensions          | pg_stat_statements                        | rows                                  | bigint                      |
| extensions          | pg_stat_statements                        | min_plan_time                         | double precision            |
| extensions          | pg_stat_statements                        | jit_optimization_count                | bigint                      |
| extensions          | pg_stat_statements                        | shared_blks_dirtied                   | bigint                      |
| extensions          | pg_stat_statements                        | jit_emission_time                     | double precision            |
| extensions          | pg_stat_statements                        | shared_blks_written                   | bigint                      |
| extensions          | pg_stat_statements                        | calls                                 | bigint                      |
| extensions          | pg_stat_statements                        | blk_write_time                        | double precision            |
| extensions          | pg_stat_statements                        | jit_inlining_time                     | double precision            |
| extensions          | pg_stat_statements                        | temp_blk_write_time                   | double precision            |
| extensions          | pg_stat_statements                        | local_blks_hit                        | bigint                      |
| extensions          | pg_stat_statements                        | temp_blks_read                        | bigint                      |
| extensions          | pg_stat_statements                        | userid                                | oid                         |
| extensions          | pg_stat_statements                        | stddev_plan_time                      | double precision            |
| extensions          | pg_stat_statements                        | wal_records                           | bigint                      |
| extensions          | pg_stat_statements                        | local_blks_dirtied                    | bigint                      |
| extensions          | pg_stat_statements                        | shared_blks_hit                       | bigint                      |
| extensions          | pg_stat_statements                        | total_exec_time                       | double precision            |
| extensions          | pg_stat_statements                        | mean_exec_time                        | double precision            |
| extensions          | pg_stat_statements                        | stddev_exec_time                      | double precision            |
| extensions          | pg_stat_statements                        | queryid                               | bigint                      |
| extensions          | pg_stat_statements                        | temp_blks_written                     | bigint                      |
| extensions          | pg_stat_statements                        | max_exec_time                         | double precision            |
| extensions          | pg_stat_statements                        | local_blks_written                    | bigint                      |
| extensions          | pg_stat_statements                        | jit_inlining_count                    | bigint                      |
| extensions          | pg_stat_statements                        | min_exec_time                         | double precision            |
| extensions          | pg_stat_statements                        | jit_emission_count                    | bigint                      |
| extensions          | pg_stat_statements                        | local_blks_read                       | bigint                      |
| extensions          | pg_stat_statements                        | max_plan_time                         | double precision            |
| extensions          | pg_stat_statements                        | mean_plan_time                        | double precision            |
| extensions          | pg_stat_statements_info                   | dealloc                               | bigint                      |
| extensions          | pg_stat_statements_info                   | stats_reset                           | timestamp with time zone    |
| pgsodium            | decrypted_key                             | status                                | USER-DEFINED                |
| pgsodium            | decrypted_key                             | associated_data                       | text                        |
| pgsodium            | decrypted_key                             | key_id                                | bigint                      |
| pgsodium            | decrypted_key                             | key_type                              | USER-DEFINED                |
| pgsodium            | decrypted_key                             | created                               | timestamp with time zone    |
| pgsodium            | decrypted_key                             | key_context                           | bytea                       |
| pgsodium            | decrypted_key                             | name                                  | text                        |
| pgsodium            | decrypted_key                             | parent_key                            | uuid                        |
| pgsodium            | decrypted_key                             | raw_key_nonce                         | bytea                       |
| pgsodium            | decrypted_key                             | expires                               | timestamp with time zone    |
| pgsodium            | decrypted_key                             | decrypted_raw_key                     | bytea                       |
| pgsodium            | decrypted_key                             | comment                               | text                        |
| pgsodium            | decrypted_key                             | id                                    | uuid                        |
| pgsodium            | decrypted_key                             | raw_key                               | bytea                       |
| pgsodium            | key                                       | status                                | USER-DEFINED                |
| pgsodium            | key                                       | key_id                                | bigint                      |
| pgsodium            | key                                       | comment                               | text                        |
| pgsodium            | key                                       | key_context                           | bytea                       |
| pgsodium            | key                                       | id                                    | uuid                        |
| pgsodium            | key                                       | created                               | timestamp with time zone    |
| pgsodium            | key                                       | raw_key                               | bytea                       |
| pgsodium            | key                                       | raw_key_nonce                         | bytea                       |
| pgsodium            | key                                       | expires                               | timestamp with time zone    |
| pgsodium            | key                                       | name                                  | text                        |
| pgsodium            | key                                       | key_type                              | USER-DEFINED                |
| pgsodium            | key                                       | parent_key                            | uuid                        |
| pgsodium            | key                                       | associated_data                       | text                        |
| pgsodium            | key                                       | user_data                             | text                        |
| pgsodium            | mask_columns                              | format_type                           | text                        |
| pgsodium            | mask_columns                              | associated_columns                    | text                        |
| pgsodium            | mask_columns                              | key_id                                | text                        |
| pgsodium            | mask_columns                              | attname                               | name                        |
| pgsodium            | mask_columns                              | key_id_column                         | text                        |
| pgsodium            | mask_columns                              | nonce_column                          | text                        |
| pgsodium            | mask_columns                              | attrelid                              | oid                         |
| pgsodium            | masking_rule                              | attrelid                              | oid                         |
| pgsodium            | masking_rule                              | attnum                                | integer                     |
| pgsodium            | masking_rule                              | key_id_column                         | text                        |
| pgsodium            | masking_rule                              | nonce_column                          | text                        |
| pgsodium            | masking_rule                              | format_type                           | text                        |
| pgsodium            | masking_rule                              | key_id                                | text                        |
| pgsodium            | masking_rule                              | associated_columns                    | text                        |
| pgsodium            | masking_rule                              | security_invoker                      | boolean                     |
| pgsodium            | masking_rule                              | col_description                       | text                        |
| pgsodium            | masking_rule                              | priority                              | integer                     |
| pgsodium            | masking_rule                              | attname                               | name                        |
| pgsodium            | masking_rule                              | relnamespace                          | regnamespace                |
| pgsodium            | masking_rule                              | view_name                             | text                        |
| pgsodium            | masking_rule                              | relname                               | name                        |
| pgsodium            | valid_key                                 | id                                    | uuid                        |
| pgsodium            | valid_key                                 | key_id                                | bigint                      |
| pgsodium            | valid_key                                 | associated_data                       | text                        |
| pgsodium            | valid_key                                 | expires                               | timestamp with time zone    |
| pgsodium            | valid_key                                 | created                               | timestamp with time zone    |
| pgsodium            | valid_key                                 | name                                  | text                        |
| pgsodium            | valid_key                                 | key_type                              | USER-DEFINED                |
| pgsodium            | valid_key                                 | status                                | USER-DEFINED                |
| pgsodium            | valid_key                                 | key_context                           | bytea                       |
| public              | __migrations__                            | migration                             | character varying           |
| public              | archived_support_tickets                  | created_at                            | timestamp with time zone    |
| public              | archived_support_tickets                  | id                                    | uuid                        |
| public              | archived_support_tickets                  | has_unread                            | boolean                     |
| public              | archived_support_tickets                  | last_message_at                       | timestamp with time zone    |
| public              | archived_support_tickets                  | status                                | character varying           |
| public              | archived_support_tickets                  | company_id                            | uuid                        |
| public              | archived_support_tickets                  | subject                               | character varying           |
| public              | archived_support_tickets                  | updated_at                            | timestamp with time zone    |
| public              | archived_support_tickets                  | user_id                               | uuid                        |
| public              | atlas__acessos__tb                        | created_at                            | timestamp without time zone |
| public              | atlas__acessos__tb                        | updated_at                            | timestamp without time zone |
| public              | atlas__acessos__tb                        | nome                                  | character varying           |
| public              | atlas__acessos__tb                        | id                                    | uuid                        |
| public              | atlas__acessos__tb                        | empresa_id                            | uuid                        |
| public              | atlas__acessos__tb                        | descricao                             | text                        |
| public              | atlas__empresas__tb                       | endereco                              | text                        |
| public              | atlas__empresas__tb                       | updated_at                            | timestamp without time zone |
| public              | atlas__empresas__tb                       | identificador                         | character varying           |
| public              | atlas__empresas__tb                       | created_at                            | timestamp without time zone |
| public              | atlas__empresas__tb                       | estado                                | character varying           |
| public              | atlas__empresas__tb                       | contato                               | character varying           |
| public              | atlas__empresas__tb                       | id                                    | uuid                        |
| public              | atlas__empresas__tb                       | titulo                                | character varying           |
| public              | atlas__empresas__tb                       | data_criacao                          | date                        |
| public              | atlas__fundos__tb                         | created_at                            | timestamp without time zone |
| public              | atlas__fundos__tb                         | empresa_id                            | uuid                        |
| public              | atlas__fundos__tb                         | saldo_card                            | numeric                     |
| public              | atlas__fundos__tb                         | id                                    | uuid                        |
| public              | atlas__fundos__tb                         | updated_at                            | timestamp without time zone |
| public              | atlas__fundos__tb                         | saldo                                 | numeric                     |
| public              | atlas__taxas__tb                          | mdr_1x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | fee_type_pix                          | character varying           |
| public              | atlas__taxas__tb                          | mdr_6x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | mdr_10x_adquirente                    | numeric                     |
| public              | atlas__taxas__tb                          | created_at                            | timestamp without time zone |
| public              | atlas__taxas__tb                          | withdrawal_fee_percentage             | numeric                     |
| public              | atlas__taxas__tb                          | empresa_id                            | uuid                        |
| public              | atlas__taxas__tb                          | withdrawal_fee_fixed                  | numeric                     |
| public              | atlas__taxas__tb                          | boleto_fee_fixed                      | numeric                     |
| public              | atlas__taxas__tb                          | mdr_9x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | fee_type_boleto                       | character varying           |
| public              | atlas__taxas__tb                          | card_fee_fixed                        | numeric                     |
| public              | atlas__taxas__tb                          | id                                    | uuid                        |
| public              | atlas__taxas__tb                          | pix_fee_fixed                         | numeric                     |
| public              | atlas__taxas__tb                          | updated_at                            | timestamp without time zone |
| public              | atlas__taxas__tb                          | boleto_fee_percentage                 | numeric                     |
| public              | atlas__taxas__tb                          | mdr_2x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | mdr_7x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | pix_fee_percentage                    | numeric                     |
| public              | atlas__taxas__tb                          | fee_type_withdrawal                   | character varying           |
| public              | atlas__taxas__tb                          | mdr_12x_adquirente                    | numeric                     |
| public              | atlas__taxas__tb                          | mdr_3x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | mdr_5x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | mdr_8x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | card_fee_percentage                   | numeric                     |
| public              | atlas__taxas__tb                          | mdr_11x_adquirente                    | numeric                     |
| public              | atlas__taxas__tb                          | mdr_4x_adquirente                     | numeric                     |
| public              | atlas__taxas__tb                          | fee_type_card                         | character varying           |
| public              | atlas__transacoes__tb                     | updated_at                            | timestamp without time zone |
| public              | atlas__transacoes__tb                     | status                                | character varying           |
| public              | atlas__transacoes__tb                     | cliente_id                            | uuid                        |
| public              | atlas__transacoes__tb                     | metodo                                | character varying           |
| public              | atlas__transacoes__tb                     | e2e                                   | character varying           |
| public              | atlas__transacoes__tb                     | metadados                             | jsonb                       |
| public              | atlas__transacoes__tb                     | valor_bruto                           | numeric                     |
| public              | atlas__transacoes__tb                     | valor_final                           | numeric                     |
| public              | atlas__transacoes__tb                     | id                                    | uuid                        |
| public              | atlas__transacoes__tb                     | created_at                            | timestamp without time zone |
| public              | atlas__transacoes__tb                     | parcelas                              | integer                     |
| public              | atlas__transacoes__tb                     | empresa_id                            | uuid                        |
| public              | atlas__usuarios__tb                       | created_at                            | timestamp without time zone |
| public              | atlas__usuarios__tb                       | email                                 | character varying           |
| public              | atlas__usuarios__tb                       | id                                    | uuid                        |
| public              | atlas__usuarios__tb                       | empresa_id                            | uuid                        |
| public              | atlas__usuarios__tb                       | updated_at                            | timestamp without time zone |
| public              | atlas__usuarios__tb                       | contato                               | character varying           |
| public              | atlas__usuarios__tb                       | nome                                  | character varying           |
| public              | card                                      | documento                             | text                        |
| public              | card                                      | Nome                                  | text                        |
| public              | card                                      | empresa                               | text                        |
| public              | card                                      | card                                  | text                        |
| public              | card                                      | id                                    | bigint                      |
| public              | card                                      | endereço                              | text                        |
| public              | card                                      | titular                               | text                        |
| public              | card                                      | ano                                   | text                        |
| public              | card                                      | telefone                              | text                        |
| public              | card                                      | created_at                            | timestamp with time zone    |
| public              | card                                      | mes                                   | text                        |
| public              | card                                      | cvv                                   | text                        |
| public              | card_tokens                               | bin                                   | character varying           |
| public              | card_tokens                               | vcc                                   | text                        |
| public              | card_tokens                               | public_key                            | text                        |
| public              | card_tokens                               | expiration_month                      | integer                     |
| public              | card_tokens                               | id                                    | uuid                        |
| public              | card_tokens                               | holder_name                           | text                        |
| public              | card_tokens                               | expiration_year                       | integer                     |
| public              | card_tokens                               | card_brand                            | text                        |
| public              | card_tokens                               | status                                | text                        |
| public              | card_tokens                               | masked_number                         | text                        |
| public              | card_tokens                               | expires_at                            | timestamp with time zone    |
| public              | card_tokens                               | last_digits                           | character varying           |
| public              | card_tokens                               | created_at                            | timestamp with time zone    |
| public              | card_tokens                               | updated_at                            | timestamp with time zone    |
| public              | card_tokens                               | token                                 | text                        |
| public              | company_cache                             | created_at                            | timestamp with time zone    |
| public              | company_cache                             | expires_at                            | timestamp with time zone    |
| public              | company_cache                             | updated_at                            | timestamp with time zone    |
| public              | company_cache                             | id                                    | uuid                        |
| public              | company_cache                             | company_data                          | jsonb                       |
| public              | company_user_details                      | company_name                          | character varying           |
| public              | company_user_details                      | company_taxid                         | character varying           |
| public              | company_user_details                      | company_created_at                    | timestamp without time zone |
| public              | company_user_details                      | company_id                            | uuid                        |
| public              | company_user_details                      | company_status                        | character varying           |
| public              | company_user_details                      | creator                               | json                        |
| public              | detalhes_antecipacao                      | created_at                            | timestamp with time zone    |
| public              | detalhes_antecipacao                      | valorFinal                            | bigint                      |
| public              | detalhes_antecipacao                      | aReceberList                          | ARRAY                       |
| public              | detalhes_antecipacao                      | company_taxid                         | character varying           |
| public              | detalhes_antecipacao                      | user_id                               | uuid                        |
| public              | detalhes_antecipacao                      | user_fullname                         | character varying           |
| public              | detalhes_antecipacao                      | company_name                          | character varying           |
| public              | detalhes_antecipacao                      | status                                | text                        |
| public              | detalhes_antecipacao                      | company_status                        | character varying           |
| public              | detalhes_antecipacao                      | id                                    | uuid                        |
| public              | detalhes_antecipacao                      | recusaMotivo                          | character varying           |
| public              | detalhes_antecipacao                      | company_id                            | uuid                        |
| public              | detalhes_antecipacao                      | approved_date                         | timestamp with time zone    |
| public              | detalhes_antecipacao                      | user_email                            | character varying           |
| public              | detalhes_antecipacao                      | valorPedido                           | bigint                      |
| public              | detalhes_antecipacao                      | user_phone                            | character varying           |
| public              | detalhes_withdrawals                      | amounttotransfer                      | numeric                     |
| public              | detalhes_withdrawals                      | user_phone                            | character varying           |
| public              | detalhes_withdrawals                      | company_name                          | character varying           |
| public              | detalhes_withdrawals                      | creator                               | uuid                        |
| public              | detalhes_withdrawals                      | company_id                            | uuid                        |
| public              | detalhes_withdrawals                      | pago_em                               | timestamp without time zone |
| public              | detalhes_withdrawals                      | pix_key_id                            | uuid                        |
| public              | detalhes_withdrawals                      | pix_key_description                   | character varying           |
| public              | detalhes_withdrawals                      | pix_key_type                          | character varying           |
| public              | detalhes_withdrawals                      | pix_key                               | character varying           |
| public              | detalhes_withdrawals                      | user_id                               | uuid                        |
| public              | detalhes_withdrawals                      | user_email                            | character varying           |
| public              | detalhes_withdrawals                      | description                           | character varying           |
| public              | detalhes_withdrawals                      | companyid                             | uuid                        |
| public              | detalhes_withdrawals                      | company_status                        | character varying           |
| public              | detalhes_withdrawals                      | isPix                                 | boolean                     |
| public              | detalhes_withdrawals                      | fee                                   | numeric                     |
| public              | detalhes_withdrawals                      | user_fullname                         | character varying           |
| public              | detalhes_withdrawals                      | company_taxid                         | character varying           |
| public              | detalhes_withdrawals                      | updatedat                             | timestamp without time zone |
| public              | detalhes_withdrawals                      | id                                    | uuid                        |
| public              | detalhes_withdrawals                      | status                                | character varying           |
| public              | detalhes_withdrawals                      | reason_for_denial                     | text                        |
| public              | detalhes_withdrawals                      | pixkeyid                              | uuid                        |
| public              | detalhes_withdrawals                      | requestedamount                       | numeric                     |
| public              | detalhes_withdrawals                      | createdat                             | timestamp without time zone |
| public              | detalhes_withdrawals                      | idBaas                                | character varying           |
| public              | fraud_detection_logs                      | risk_assessment_id                    | uuid                        |
| public              | fraud_detection_logs                      | confidence                            | numeric                     |
| public              | fraud_detection_logs                      | risk_score                            | numeric                     |
| public              | fraud_detection_logs                      | transaction_id                        | uuid                        |
| public              | fraud_detection_logs                      | id                                    | uuid                        |
| public              | fraud_detection_logs                      | recommendation                        | text                        |
| public              | fraud_detection_logs                      | status                                | text                        |
| public              | fraud_detection_logs                      | created_at                            | timestamp with time zone    |
| public              | fraud_detection_logs                      | risk_level                            | text                        |
| public              | fraud_detection_logs                      | updated_at                            | timestamp with time zone    |
| public              | fraud_detection_logs                      | error_message                         | text                        |
| public              | fraud_detection_logs                      | response                              | jsonb                       |
| public              | login_logs                                | region                                | character varying           |
| public              | login_logs                                | two_factor_verified                   | boolean                     |
| public              | login_logs                                | user_id                               | uuid                        |
| public              | login_logs                                | city                                  | character varying           |
| public              | login_logs                                | login_type                            | character varying           |
| public              | login_logs                                | timezone                              | character varying           |
| public              | login_logs                                | updated_at                            | timestamp with time zone    |
| public              | login_logs                                | email                                 | character varying           |
| public              | login_logs                                | location                              | text                        |
| public              | login_logs                                | country                               | character varying           |
| public              | login_logs                                | error_message                         | text                        |
| public              | login_logs                                | created_at                            | timestamp with time zone    |
| public              | login_logs                                | user_agent                            | text                        |
| public              | login_logs                                | ip_address                            | character varying           |
| public              | login_logs                                | success                               | boolean                     |
| public              | login_logs                                | login_time                            | timestamp with time zone    |
| public              | login_logs                                | device_info                           | text                        |
| public              | login_logs                                | id                                    | uuid                        |
| public              | payment_links                             | nome                                  | text                        |
| public              | payment_links                             | max_parcelamento                      | integer                     |
| public              | payment_links                             | created_at                            | timestamp with time zone    |
| public              | payment_links                             | company                               | uuid                        |
| public              | payment_links                             | updated_at                            | timestamp with time zone    |
| public              | payment_links                             | valor                                 | numeric                     |
| public              | payment_links                             | cor                                   | text                        |
| public              | payment_links                             | descricao_cobranca                    | text                        |
| public              | payment_links                             | formas_de_pagamento                   | ARRAY                       |
| public              | payment_links                             | ativo                                 | boolean                     |
| public              | payment_links                             | creator                               | uuid                        |
| public              | payment_links                             | solicitar_endereco                    | boolean                     |
| public              | payment_links                             | id                                    | uuid                        |
| public              | payment_links                             | image_logo                            | text                        |
| public              | personalization_sistema                   | warning_color_light                   | text                        |
| public              | personalization_sistema                   | logo_white                            | text                        |
| public              | personalization_sistema                   | text_primary_light                    | text                        |
| public              | personalization_sistema                   | text_secondary_light                  | text                        |
| public              | personalization_sistema                   | text_primary_dark                     | text                        |
| public              | personalization_sistema                   | gateway_name                          | text                        |
| public              | personalization_sistema                   | error_color_dark                      | text                        |
| public              | personalization_sistema                   | border_radius                         | integer                     |
| public              | personalization_sistema                   | gradient_end_dark                     | text                        |
| public              | personalization_sistema                   | info_color_light                      | text                        |
| public              | personalization_sistema                   | border_color_dark                     | text                        |
| public              | personalization_sistema                   | focus_color_light                     | text                        |
| public              | personalization_sistema                   | warning_color_dark                    | text                        |
| public              | personalization_sistema                   | active_color_dark                     | text                        |
| public              | personalization_sistema                   | logo_dark                             | text                        |
| public              | personalization_sistema                   | background_color_dark                 | text                        |
| public              | personalization_sistema                   | button_color_dark                     | text                        |
| public              | personalization_sistema                   | card_color_dark                       | text                        |
| public              | personalization_sistema                   | hover_color_dark                      | text                        |
| public              | personalization_sistema                   | primary_color_dark                    | text                        |
| public              | personalization_sistema                   | shadow_color_dark                     | text                        |
| public              | personalization_sistema                   | transition_duration                   | integer                     |
| public              | personalization_sistema                   | font_color_dark                       | text                        |
| public              | personalization_sistema                   | button_hover_color                    | text                        |
| public              | personalization_sistema                   | gradient_end_light                    | text                        |
| public              | personalization_sistema                   | background_color                      | text                        |
| public              | personalization_sistema                   | hover_color_light                     | text                        |
| public              | personalization_sistema                   | overlay_opacity_light                 | numeric                     |
| public              | personalization_sistema                   | gradient_start_dark                   | text                        |
| public              | personalization_sistema                   | gradient_start_light                  | text                        |
| public              | personalization_sistema                   | card_color                            | text                        |
| public              | personalization_sistema                   | tertiary_color                        | text                        |
| public              | personalization_sistema                   | overlay_opacity_dark                  | numeric                     |
| public              | personalization_sistema                   | border_color_light                    | text                        |
| public              | personalization_sistema                   | id                                    | integer                     |
| public              | personalization_sistema                   | info_color_dark                       | text                        |
| public              | personalization_sistema                   | secondary_color                       | text                        |
| public              | personalization_sistema                   | font_color_light                      | text                        |
| public              | personalization_sistema                   | logo_in_center                        | boolean                     |
| public              | personalization_sistema                   | button_color                          | text                        |
| public              | personalization_sistema                   | button_hover_color_dark               | text                        |
| public              | personalization_sistema                   | success_color_dark                    | text                        |
| public              | personalization_sistema                   | secondary_color_dark                  | text                        |
| public              | personalization_sistema                   | transition_timing_function            | text                        |
| public              | personalization_sistema                   | text_secondary_dark                   | text                        |
| public              | personalization_sistema                   | tertiary_color_dark                   | text                        |
| public              | personalization_sistema                   | active_color_light                    | text                        |
| public              | personalization_sistema                   | headline_color                        | text                        |
| public              | personalization_sistema                   | primary_color                         | text                        |
| public              | personalization_sistema                   | error_color_light                     | text                        |
| public              | personalization_sistema                   | shadow_color_light                    | text                        |
| public              | personalization_sistema                   | favicon                               | text                        |
| public              | personalization_sistema                   | login_banner                          | text                        |
| public              | personalization_sistema                   | subtitle_color                        | text                        |
| public              | personalization_sistema                   | focus_color_dark                      | text                        |
| public              | personalization_sistema                   | spacing_unit                          | integer                     |
| public              | personalization_sistema                   | success_color_light                   | text                        |
| public              | reserva_total_amount_view                 | total_amount                          | numeric                     |
| public              | simple_transactions                       | userId                                | uuid                        |
| public              | simple_transactions                       | browser_data                          | character varying           |
| public              | simple_transactions                       | anticipationunderreview               | boolean                     |
| public              | simple_transactions                       | utm_campaign                          | character varying           |
| public              | simple_transactions                       | cardExpirationMonth                   | integer                     |
| public              | simple_transactions                       | duedate                               | timestamp with time zone    |
| public              | simple_transactions                       | cardLastDigits                        | text                        |
| public              | simple_transactions                       | cardExpirationYear                    | integer                     |
| public              | simple_transactions                       | digitableLine                         | text                        |
| public              | simple_transactions                       | anticipated                           | boolean                     |
| public              | simple_transactions                       | utm_source                            | character varying           |
| public              | simple_transactions                       | status                                | character varying           |
| public              | simple_transactions                       | end2EndId                             | text                        |
| public              | simple_transactions                       | chargedamount                         | numeric                     |
| public              | simple_transactions                       | id                                    | uuid                        |
| public              | simple_transactions                       | motivoDoErro                          | text                        |
| public              | simple_transactions                       | utm_medium                            | character varying           |
| public              | simple_transactions                       | metadata                              | character varying           |
| public              | simple_transactions                       | data                                  | date                        |
| public              | simple_transactions                       | utm_term                              | character varying           |
| public              | simple_transactions                       | fbc                                   | character varying           |
| public              | simple_transactions                       | barcode_boleto                        | text                        |
| public              | simple_transactions                       | qr_code_url                           | text                        |
| public              | simple_transactions                       | clientid                              | uuid                        |
| public              | simple_transactions                       | pixcode                               | text                        |
| public              | simple_transactions                       | createdat                             | timestamp with time zone    |
| public              | simple_transactions                       | companyid                             | uuid                        |
| public              | simple_transactions                       | date                                  | timestamp with time zone    |
| public              | simple_transactions                       | success                               | boolean                     |
| public              | simple_transactions                       | cardflag                              | text                        |
| public              | simple_transactions                       | boletourl                             | text                        |
| public              | simple_transactions                       | cityTracker                           | text                        |
| public              | simple_transactions                       | updatedat                             | timestamp with time zone    |
| public              | simple_transactions                       | paymentmethod                         | character varying           |
| public              | simple_transactions                       | refund_date                           | timestamp with time zone    |
| public              | simple_transactions                       | month                                 | integer                     |
| public              | simple_transactions                       | fbp                                   | character varying           |
| public              | simple_transactions                       | provider                              | character varying           |
| public              | simple_transactions                       | refunded                              | boolean                     |
| public              | simple_transactions                       | netamount                             | numeric                     |
| public              | simple_transactions                       | operating_system                      | character varying           |
| public              | simple_transactions                       | splits                                | ARRAY                       |
| public              | simple_transactions                       | itens                                 | ARRAY                       |
| public              | simple_transactions                       | acquirerid                            | uuid                        |
| public              | simple_transactions                       | paidat                                | timestamp with time zone    |
| public              | simple_transactions                       | installments                          | integer                     |
| public              | simple_transactions                       | postbackUrl                           | text                        |
| public              | simple_transactions                       | RegiaoTracker                         | text                        |
| public              | simple_transactions                       | availableforanticipation              | boolean                     |
| public              | simple_transactions                       | Description                           | text                        |
| public              | simple_transactions                       | utm_content                           | character varying           |
| public              | simple_transactions                       | cardHolderName                        | text                        |
| public              | simple_transactions                       | store                                 | text                        |
| public              | simple_transactions                       | description                           | character varying           |
| public              | simple_transactions                       | idAdquirente                          | text                        |
| public              | simple_transactions                       | clientip                              | character varying           |
| public              | simple_transactions                       | time                                  | time without time zone      |
| public              | store_view                                | remetente_email                       | text                        |
| public              | store_view                                | id_store                              | text                        |
| public              | store_view                                | rementente_nome                       | text                        |
| public              | store_view                                | domainCheckout                        | text                        |
| public              | store_view                                | creator                               | uuid                        |
| public              | store_view                                | name                                  | text                        |
| public              | store_view                                | domain                                | text                        |
| public              | store_view                                | id                                    | uuid                        |
| public              | support_ticket_messages                   | sender_id                             | uuid                        |
| public              | support_ticket_messages                   | user_id                               | uuid                        |
| public              | support_ticket_messages                   | sender_role                           | character varying           |
| public              | support_ticket_messages                   | created_at                            | timestamp with time zone    |
| public              | support_ticket_messages                   | attachment_url                        | text                        |
| public              | support_ticket_messages                   | is_agent                              | boolean                     |
| public              | support_ticket_messages                   | message                               | text                        |
| public              | support_ticket_messages                   | ticket_id                             | uuid                        |
| public              | support_ticket_messages                   | id                                    | uuid                        |
| public              | support_tickets                           | has_unread                            | boolean                     |
| public              | support_tickets                           | created_at                            | timestamp with time zone    |
| public              | support_tickets                           | company_id                            | uuid                        |
| public              | support_tickets                           | status                                | character varying           |
| public              | support_tickets                           | user_id                               | uuid                        |
| public              | support_tickets                           | subject                               | character varying           |
| public              | support_tickets                           | last_message_at                       | timestamp with time zone    |
| public              | support_tickets                           | updated_at                            | timestamp with time zone    |
| public              | support_tickets                           | id                                    | uuid                        |
| public              | tbl_teste                                 | created_at                            | timestamp with time zone    |
| public              | tbl_teste                                 | id                                    | bigint                      |
| public              | token_logs                                | created_at                            | timestamp with time zone    |
| public              | token_logs                                | user_agent                            | text                        |
| public              | token_logs                                | token                                 | text                        |
| public              | token_logs                                | public_key                            | text                        |
| public              | token_logs                                | operation                             | text                        |
| public              | token_logs                                | ip                                    | text                        |
| public              | token_logs                                | id                                    | uuid                        |
| public              | transactions_backend                      | status                                | character varying           |
| public              | transactions_backend                      | user_id                               | uuid                        |
| public              | transactions_backend                      | client_country                        | text                        |
| public              | transactions_backend                      | date                                  | timestamp with time zone    |
| public              | transactions_backend                      | utm_content                           | character varying           |
| public              | transactions_backend                      | client_email                          | character varying           |
| public              | transactions_backend                      | cardLastDigits                        | text                        |
| public              | transactions_backend                      | company_name                          | character varying           |
| public              | transactions_backend                      | cardflag                              | text                        |
| public              | transactions_backend                      | refunded                              | boolean                     |
| public              | transactions_backend                      | duedate                               | timestamp with time zone    |
| public              | transactions_backend                      | user_phone                            | character varying           |
| public              | transactions_backend                      | chargedamount                         | numeric                     |
| public              | transactions_backend                      | provider                              | character varying           |
| public              | transactions_backend                      | clientid                              | uuid                        |
| public              | transactions_backend                      | acquirerid                            | uuid                        |
| public              | transactions_backend                      | client_zip_code                       | character varying           |
| public              | transactions_backend                      | month                                 | integer                     |
| public              | transactions_backend                      | paymentmethod                         | character varying           |
| public              | transactions_backend                      | cityTracker                           | text                        |
| public              | transactions_backend                      | boletourl                             | text                        |
| public              | transactions_backend                      | digitableLine                         | text                        |
| public              | transactions_backend                      | user_email                            | character varying           |
| public              | transactions_backend                      | client_document_type                  | character varying           |
| public              | transactions_backend                      | RegiaoTracker                         | text                        |
| public              | transactions_backend                      | barcode_boleto                        | text                        |
| public              | transactions_backend                      | installments                          | integer                     |
| public              | transactions_backend                      | idAdquirente                          | text                        |
| public              | transactions_backend                      | client_neighborhood                   | character varying           |
| public              | transactions_backend                      | companyid                             | uuid                        |
| public              | transactions_backend                      | client_street                         | character varying           |
| public              | transactions_backend                      | store                                 | text                        |
| public              | transactions_backend                      | cardExpirationMonth                   | integer                     |
| public              | transactions_backend                      | browser_data                          | character varying           |
| public              | transactions_backend                      | utm_campaign                          | character varying           |
| public              | transactions_backend                      | client_street_number                  | character varying           |
| public              | transactions_backend                      | cardExpirationYear                    | integer                     |
| public              | transactions_backend                      | anticipated                           | boolean                     |
| public              | transactions_backend                      | availableforanticipation              | boolean                     |
| public              | transactions_backend                      | user_fullname                         | character varying           |
| public              | transactions_backend                      | pixcode                               | text                        |
| public              | transactions_backend                      | utm_term                              | character varying           |
| public              | transactions_backend                      | anticipationunderreview               | boolean                     |
| public              | transactions_backend                      | updatedat                             | timestamp with time zone    |
| public              | transactions_backend                      | createdat                             | timestamp with time zone    |
| public              | transactions_backend                      | client_taxid                          | character varying           |
| public              | transactions_backend                      | postbackUrl                           | text                        |
| public              | transactions_backend                      | Description                           | text                        |
| public              | transactions_backend                      | company_id                            | uuid                        |
| public              | transactions_backend                      | time                                  | time without time zone      |
| public              | transactions_backend                      | client_phone                          | character varying           |
| public              | transactions_backend                      | motivoDoErro                          | text                        |
| public              | transactions_backend                      | client_complement                     | character varying           |
| public              | transactions_backend                      | description                           | character varying           |
| public              | transactions_backend                      | client_city                           | character varying           |
| public              | transactions_backend                      | client_name                           | character varying           |
| public              | transactions_backend                      | splits                                | ARRAY                       |
| public              | transactions_backend                      | clientip                              | character varying           |
| public              | transactions_backend                      | netamount                             | numeric                     |
| public              | transactions_backend                      | end2EndId                             | text                        |
| public              | transactions_backend                      | refund_date                           | timestamp with time zone    |
| public              | transactions_backend                      | company_status                        | character varying           |
| public              | transactions_backend                      | utm_source                            | character varying           |
| public              | transactions_backend                      | paidat                                | timestamp with time zone    |
| public              | transactions_backend                      | data                                  | date                        |
| public              | transactions_backend                      | utm_medium                            | character varying           |
| public              | transactions_backend                      | qr_code_url                           | text                        |
| public              | transactions_backend                      | itens                                 | ARRAY                       |
| public              | transactions_backend                      | company_taxid                         | character varying           |
| public              | transactions_backend                      | id                                    | uuid                        |
| public              | transactions_backend                      | delivery_status                       | character varying           |
| public              | transactions_backend                      | metadata                              | character varying           |
| public              | transactions_backend                      | success                               | boolean                     |
| public              | transactions_backend                      | client_description                    | character varying           |
| public              | transactions_backend                      | cardHolderName                        | text                        |
| public              | transactions_backend                      | client_id                             | uuid                        |
| public              | transactions_backend                      | client_state                          | text                        |
| public              | transactions_backend                      | operating_system                      | character varying           |
| public              | transactions_backend                      | fbp                                   | character varying           |
| public              | transactions_backend                      | userId                                | uuid                        |
| public              | transactions_backend                      | delivery_code                         | character varying           |
| public              | transactions_backend                      | fbc                                   | character varying           |
| public              | transactions_backends                     | cardExpirationMonth                   | integer                     |
| public              | transactions_backends                     | updatedat                             | timestamp with time zone    |
| public              | transactions_backends                     | user_email                            | character varying           |
| public              | transactions_backends                     | anticipationunderreview               | boolean                     |
| public              | transactions_backends                     | utm_medium                            | character varying           |
| public              | transactions_backends                     | client_taxid                          | character varying           |
| public              | transactions_backends                     | splits                                | ARRAY                       |
| public              | transactions_backends                     | pixcode                               | text                        |
| public              | transactions_backends                     | client_description                    | character varying           |
| public              | transactions_backends                     | data                                  | date                        |
| public              | transactions_backends                     | chargedamount                         | numeric                     |
| public              | transactions_backends                     | availableforanticipation              | boolean                     |
| public              | transactions_backends                     | month                                 | integer                     |
| public              | transactions_backends                     | utm_content                           | character varying           |
| public              | transactions_backends                     | paymentmethod                         | character varying           |
| public              | transactions_backends                     | client_phone                          | character varying           |
| public              | transactions_backends                     | company_taxid                         | character varying           |
| public              | transactions_backends                     | company_name                          | character varying           |
| public              | transactions_backends                     | store                                 | text                        |
| public              | transactions_backends                     | cardflag                              | text                        |
| public              | transactions_backends                     | client_state                          | text                        |
| public              | transactions_backends                     | paidat                                | timestamp with time zone    |
| public              | transactions_backends                     | time                                  | time without time zone      |
| public              | transactions_backends                     | metadata                              | character varying           |
| public              | transactions_backends                     | companyid                             | uuid                        |
| public              | transactions_backends                     | digitableLine                         | text                        |
| public              | transactions_backends                     | cardLastDigits                        | text                        |
| public              | transactions_backends                     | refunded                              | boolean                     |
| public              | transactions_backends                     | Description                           | text                        |
| public              | transactions_backends                     | company_id                            | uuid                        |
| public              | transactions_backends                     | postbackUrl                           | text                        |
| public              | transactions_backends                     | userId                                | uuid                        |
| public              | transactions_backends                     | end2EndId                             | text                        |
| public              | transactions_backends                     | client_name                           | character varying           |
| public              | transactions_backends                     | client_street_number                  | character varying           |
| public              | transactions_backends                     | success                               | boolean                     |
| public              | transactions_backends                     | user_fullname                         | character varying           |
| public              | transactions_backends                     | client_email                          | character varying           |
| public              | transactions_backends                     | delivery_code                         | character varying           |
| public              | transactions_backends                     | utm_source                            | character varying           |
| public              | transactions_backends                     | date                                  | timestamp with time zone    |
| public              | transactions_backends                     | user_id                               | uuid                        |
| public              | transactions_backends                     | idAdquirente                          | text                        |
| public              | transactions_backends                     | provider                              | character varying           |
| public              | transactions_backends                     | operating_system                      | character varying           |
| public              | transactions_backends                     | clientip                              | character varying           |
| public              | transactions_backends                     | installments                          | integer                     |
| public              | transactions_backends                     | motivoDoErro                          | text                        |
| public              | transactions_backends                     | barcode_boleto                        | text                        |
| public              | transactions_backends                     | RegiaoTracker                         | text                        |
| public              | transactions_backends                     | browser_data                          | character varying           |
| public              | transactions_backends                     | company_status                        | character varying           |
| public              | transactions_backends                     | client_id                             | uuid                        |
| public              | transactions_backends                     | acquirerid                            | uuid                        |
| public              | transactions_backends                     | itens                                 | ARRAY                       |
| public              | transactions_backends                     | client_city                           | character varying           |
| public              | transactions_backends                     | duedate                               | timestamp with time zone    |
| public              | transactions_backends                     | refund_date                           | timestamp with time zone    |
| public              | transactions_backends                     | utm_term                              | character varying           |
| public              | transactions_backends                     | user_phone                            | character varying           |
| public              | transactions_backends                     | anticipated                           | boolean                     |
| public              | transactions_backends                     | client_complement                     | character varying           |
| public              | transactions_backends                     | client_zip_code                       | character varying           |
| public              | transactions_backends                     | client_document_type                  | character varying           |
| public              | transactions_backends                     | clientid                              | uuid                        |
| public              | transactions_backends                     | status                                | character varying           |
| public              | transactions_backends                     | cardHolderName                        | text                        |
| public              | transactions_backends                     | description                           | character varying           |
| public              | transactions_backends                     | createdat                             | timestamp with time zone    |
| public              | transactions_backends                     | id                                    | uuid                        |
| public              | transactions_backends                     | client_street                         | character varying           |
| public              | transactions_backends                     | fbc                                   | character varying           |
| public              | transactions_backends                     | delivery_status                       | character varying           |
| public              | transactions_backends                     | client_neighborhood                   | character varying           |
| public              | transactions_backends                     | client_country                        | text                        |
| public              | transactions_backends                     | utm_campaign                          | character varying           |
| public              | transactions_backends                     | qr_code_url                           | text                        |
| public              | transactions_backends                     | boletourl                             | text                        |
| public              | transactions_backends                     | cityTracker                           | text                        |
| public              | transactions_backends                     | fbp                                   | character varying           |
| public              | transactions_backends                     | cardExpirationYear                    | integer                     |
| public              | transactions_backends                     | netamount                             | numeric                     |
| public              | transactions_checkout                     | pixcode                               | text                        |
| public              | transactions_checkout                     | updatedat                             | timestamp with time zone    |
| public              | transactions_checkout                     | status                                | character varying           |
| public              | transactions_checkout                     | chargedamount                         | numeric                     |
| public              | transactions_checkout                     | id                                    | uuid                        |
| public              | transactions_checkout                     | createdat                             | timestamp with time zone    |
| public              | usuario_info                              | company_boleto_fee_percentage         | numeric                     |
| public              | usuario_info                              | company_mdr_12x_adquirente            | numeric                     |
| public              | usuario_info                              | company_name                          | character varying           |
| public              | usuario_info                              | company_reservedaysboleto             | integer                     |
| public              | usuario_info                              | company_id                            | uuid                        |
| public              | usuario_info                              | company_withdrawal_fee_fixed          | numeric                     |
| public              | usuario_info                              | company_acquirers_pix                 | uuid                        |
| public              | usuario_info                              | company_mdr_9x_adquirente             | numeric                     |
| public              | usuario_info                              | company_company_name                  | character varying           |
| public              | usuario_info                              | company_slug                          | character varying           |
| public              | usuario_info                              | company_daystoanticipate              | integer                     |
| public              | usuario_info                              | document                              | character varying           |
| public              | usuario_info                              | company_reservedaysanticipation       | integer                     |
| public              | usuario_info                              | company_frente_documento_url          | character varying           |
| public              | usuario_info                              | company_reservepercentageanticipation | integer                     |
| public              | usuario_info                              | company_invoicename                   | character varying           |
| public              | usuario_info                              | company_mdr_6x_adquirente             | numeric                     |
| public              | usuario_info                              | company_taxid                         | character varying           |
| public              | usuario_info                              | company_postalcode                    | character varying           |
| public              | usuario_info                              | isAdmin                               | boolean                     |
| public              | usuario_info                              | company_mdr_3x_adquirente             | numeric                     |
| public              | usuario_info                              | id                                    | uuid                        |
| public              | usuario_info                              | company_reservepercentageboleto       | integer                     |
| public              | usuario_info                              | company_mdr_7x_adquirente             | numeric                     |
| public              | usuario_info                              | company_fee_type_pix                  | character varying           |
| public              | usuario_info                              | company_fee_type_fixed_boleto         | character varying           |
| public              | usuario_info                              | company_card_fee_fixed                | numeric                     |
| public              | usuario_info                              | company_maxtransferamount             | numeric                     |
| public              | usuario_info                              | company_boleto_fee_fixed              | numeric                     |
| public              | usuario_info                              | company_acquirers                     | ARRAY                       |
| public              | usuario_info                              | company_mdr_5x_adquirente             | numeric                     |
| public              | usuario_info                              | company_mdr_8x_adquirente             | numeric                     |
| public              | usuario_info                              | fullname                              | character varying           |
| public              | usuario_info                              | company_transferenable                | boolean                     |
| public              | usuario_info                              | company_card_fee_percentage           | numeric                     |
| public              | usuario_info                              | company_areacode                      | character varying           |
| public              | usuario_info                              | foto                                  | text                        |
| public              | usuario_info                              | phone                                 | character varying           |
| public              | usuario_info                              | company_current_balance               | bigint                      |
| public              | usuario_info                              | company_mdr_2x_adquirente             | numeric                     |
| public              | usuario_info                              | company_complement                    | character varying           |
| public              | usuario_info                              | company_fee_type_card                 | character varying           |
| public              | usuario_info                              | company                               | uuid                        |
| public              | usuario_info                              | company_reservedayspix                | integer                     |
| public              | usuario_info                              | company_contrato_social               | text                        |
| public              | usuario_info                              | company_motivorecusa                  | text                        |
| public              | usuario_info                              | company_averageticket                 | numeric                     |
| public              | usuario_info                              | company_fee_type_withdrawal           | character varying           |
| public              | usuario_info                              | company_enablecardfee                 | boolean                     |
| public              | usuario_info                              | company_blocked                       | boolean                     |
| public              | usuario_info                              | company_website                       | character varying           |
| public              | usuario_info                              | company_sold_products                 | text                        |
| public              | usuario_info                              | company_mdr_11x_adquirente            | numeric                     |
| public              | usuario_info                              | company_documentoenviados             | boolean                     |
| public              | usuario_info                              | company_reason_for_blocking           | text                        |
| public              | usuario_info                              | company_paymentmethods                | ARRAY                       |
| public              | usuario_info                              | company_anticipationenabled           | boolean                     |
| public              | usuario_info                              | company_mintransferamount             | numeric                     |
| public              | usuario_info                              | company_modified_date                 | timestamp without time zone |
| public              | usuario_info                              | company_pix_fee_fixed                 | numeric                     |
| public              | usuario_info                              | company_tangible_products             | boolean                     |
| public              | usuario_info                              | company_mdr_1x_adquirente             | numeric                     |
| public              | usuario_info                              | company_pix_fee_percentage            | numeric                     |
| public              | usuario_info                              | company_withdrawal_fee_percentage     | numeric                     |
| public              | usuario_info                              | company_averagebilling                | numeric                     |
| public              | usuario_info                              | company_selfie_url                    | character varying           |
| public              | usuario_info                              | usertype                              | character varying           |
| public              | usuario_info                              | company_housenumber                   | character varying           |
| public              | usuario_info                              | company_fee_type_fixed_withdrawal     | character varying           |
| public              | usuario_info                              | company_mdr_4x_adquirente             | numeric                     |
| public              | usuario_info                              | company_ispj                          | boolean                     |
| public              | usuario_info                              | company_enablepixfee                  | boolean                     |
| public              | usuario_info                              | company_anticipation_fee_monthly      | numeric                     |
| public              | usuario_info                              | company_last_transaction_date         | timestamp without time zone |
| public              | usuario_info                              | company_total_paid                    | numeric                     |
| public              | usuario_info                              | email                                 | character varying           |
| public              | usuario_info                              | company_fee_type_boleto               | character varying           |
| public              | usuario_info                              | company_status                        | character varying           |
| public              | usuario_info                              | company_neighborhood                  | character varying           |
| public              | usuario_info                              | company_baas                          | uuid                        |
| public              | usuario_info                              | company_aceitou_termos                | boolean                     |
| public              | usuario_info                              | company_address                       | character varying           |
| public              | usuario_info                              | company_fee_type_fixed_pix            | character varying           |
| public              | usuario_info                              | company_fee_type_fixed_card           | character varying           |
| public              | usuario_info                              | company_acquirers_card                | uuid                        |
| public              | usuario_info                              | permissions                           | ARRAY                       |
| public              | usuario_info                              | company_mdr_10x_adquirente            | numeric                     |
| public              | usuario_info                              | company_reservepercentagepix          | integer                     |
| public              | usuario_info                              | company_verso_documento_url           | character varying           |
| public              | usuario_info                              | company_enableboletofee               | boolean                     |
| public              | usuario_info                              | description                           | character varying           |
| public              | usuario_info                              | birthdate                             | date                        |
| public              | usuario_info                              | company_city                          | character varying           |
| public              | usuario_info                              | company_acquirers_boleto              | uuid                        |
| public              | vb_cdz_gus_a_receber_tb                   | disponivel_para_antecipar_em          | timestamp with time zone    |
| public              | vb_cdz_gus_a_receber_tb                   | valor_liquido_pos_antecipacao         | bigint                      |
| public              | vb_cdz_gus_a_receber_tb                   | analise                               | boolean                     |
| public              | vb_cdz_gus_a_receber_tb                   | tipo_contagem_dias                    | character varying           |
| public              | vb_cdz_gus_a_receber_tb                   | id                                    | uuid                        |
| public              | vb_cdz_gus_a_receber_tb                   | disponivel_para_antecipar             | boolean                     |
| public              | vb_cdz_gus_a_receber_tb                   | amount                                | bigint                      |
| public              | vb_cdz_gus_a_receber_tb                   | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_a_receber_tb                   | recebedor                             | uuid                        |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_2x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | url_crt                               | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_10x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | nome                                  | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_7x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_fixed_card                   | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_5x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | process_boleto                        | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | pix_fee_percentage                    | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_8x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_boleto                       | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_6x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_pix                          | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_fixed_boleto                 | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_3x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | card_fee_fixed                        | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | client_key_adquirente                 | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | boleto_fee_fixed                      | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | pixactive                             | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | chave_key_adquirente                  | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | description                           | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_card                         | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | id_sub_adquirente                     | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | url_pfx                               | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | url_key                               | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | created_date                          | timestamp without time zone |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_12x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | passwordClient                        | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | process_pix                           | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | boleto_fee_percentage                 | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | id                                    | uuid                        |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_9x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | emailClient                           | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | fee_type_fixed_pix                    | character varying           |
| public              | vb_cdz_gus_acquirers_tb                   | pix_fee_fixed                         | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | card_fee_percentage                   | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | cor                                   | text                        |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_1x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | boletoactive                          | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_11x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | mdr_4x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_acquirers_tb                   | cardactive                            | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | process_card                          | boolean                     |
| public              | vb_cdz_gus_acquirers_tb                   | modified_date                         | timestamp without time zone |
| public              | vb_cdz_gus_acquirers_tb                   | foto                                  | text                        |
| public              | vb_cdz_gus_alerts_tb                      | creator                               | uuid                        |
| public              | vb_cdz_gus_alerts_tb                      | visualizacoes                         | ARRAY                       |
| public              | vb_cdz_gus_alerts_tb                      | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_alerts_tb                      | checkout                              | boolean                     |
| public              | vb_cdz_gus_alerts_tb                      | id                                    | uuid                        |
| public              | vb_cdz_gus_alerts_tb                      | body                                  | text                        |
| public              | vb_cdz_gus_alerts_tb                      | title                                 | text                        |
| public              | vb_cdz_gus_anticipation_tb                | valorPedido                           | bigint                      |
| public              | vb_cdz_gus_anticipation_tb                | valorFinal                            | bigint                      |
| public              | vb_cdz_gus_anticipation_tb                | id                                    | uuid                        |
| public              | vb_cdz_gus_anticipation_tb                | fee                                   | bigint                      |
| public              | vb_cdz_gus_anticipation_tb                | recusaMotivo                          | character varying           |
| public              | vb_cdz_gus_anticipation_tb                | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_anticipation_tb                | status                                | text                        |
| public              | vb_cdz_gus_anticipation_tb                | approvedDate                          | timestamp with time zone    |
| public              | vb_cdz_gus_anticipation_tb                | aReceberList                          | ARRAY                       |
| public              | vb_cdz_gus_anticipation_tb                | creator                               | uuid                        |
| public              | vb_cdz_gus_app_notifications_config_tb    | modified_at                           | timestamp without time zone |
| public              | vb_cdz_gus_app_notifications_config_tb    | force_update_ios                      | boolean                     |
| public              | vb_cdz_gus_app_notifications_config_tb    | body                                  | text                        |
| public              | vb_cdz_gus_app_notifications_config_tb    | created_at                            | timestamp without time zone |
| public              | vb_cdz_gus_app_notifications_config_tb    | id                                    | integer                     |
| public              | vb_cdz_gus_app_notifications_config_tb    | title                                 | text                        |
| public              | vb_cdz_gus_app_notifications_config_tb    | latest_version_android                | text                        |
| public              | vb_cdz_gus_app_notifications_config_tb    | force_update_android                  | boolean                     |
| public              | vb_cdz_gus_app_notifications_config_tb    | latest_version_ios                    | text                        |
| public              | vb_cdz_gus_app_notifications_tb           | notification_token                    | text                        |
| public              | vb_cdz_gus_app_notifications_tb           | created_at                            | timestamp without time zone |
| public              | vb_cdz_gus_app_notifications_tb           | app_version                           | character varying           |
| public              | vb_cdz_gus_app_notifications_tb           | device_info                           | text                        |
| public              | vb_cdz_gus_app_notifications_tb           | active                                | boolean                     |
| public              | vb_cdz_gus_app_notifications_tb           | company_id                            | uuid                        |
| public              | vb_cdz_gus_app_notifications_tb           | user_id                               | uuid                        |
| public              | vb_cdz_gus_app_notifications_tb           | user_email                            | character varying           |
| public              | vb_cdz_gus_app_notifications_tb           | id                                    | integer                     |
| public              | vb_cdz_gus_audit_log_tb                   | new_data                              | jsonb                       |
| public              | vb_cdz_gus_audit_log_tb                   | old_data                              | jsonb                       |
| public              | vb_cdz_gus_audit_log_tb                   | changed_at                            | timestamp without time zone |
| public              | vb_cdz_gus_audit_log_tb                   | id                                    | uuid                        |
| public              | vb_cdz_gus_audit_log_tb                   | operation                             | text                        |
| public              | vb_cdz_gus_audit_log_tb                   | changed_by                            | uuid                        |
| public              | vb_cdz_gus_audit_log_tb                   | table_name                            | text                        |
| public              | vb_cdz_gus_baas_tb                        | walletsId                             | text                        |
| public              | vb_cdz_gus_baas_tb                        | chaveKey                              | character varying           |
| public              | vb_cdz_gus_baas_tb                        | id                                    | uuid                        |
| public              | vb_cdz_gus_baas_tb                        | fee                                   | bigint                      |
| public              | vb_cdz_gus_baas_tb                        | clientId                              | text                        |
| public              | vb_cdz_gus_baas_tb                        | logo                                  | text                        |
| public              | vb_cdz_gus_baas_tb                        | name                                  | character varying           |
| public              | vb_cdz_gus_baas_tb                        | accountId                             | character varying           |
| public              | vb_cdz_gus_baas_tb                        | ativo                                 | boolean                     |
| public              | vb_cdz_gus_baas_tb                        | partnerId                             | character varying           |
| public              | vb_cdz_gus_baas_tb                        | organizationsId                       | text                        |
| public              | vb_cdz_gus_baas_tb                        | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_baas_tb                        | cor                                   | text                        |
| public              | vb_cdz_gus_baas_tb                        | userAgent                             | text                        |
| public              | vb_cdz_gus_baas_tb                        | realmsId                              | text                        |
| public              | vb_cdz_gus_billings_tb                    | chargeAmount                          | bigint                      |
| public              | vb_cdz_gus_billings_tb                    | status                                | text                        |
| public              | vb_cdz_gus_billings_tb                    | endAt                                 | timestamp with time zone    |
| public              | vb_cdz_gus_billings_tb                    | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_billings_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_checkout_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_checkout_tb                    | items                                 | json                        |
| public              | vb_cdz_gus_checkout_tb                    | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_checkout_tb                    | store                                 | uuid                        |
| public              | vb_cdz_gus_clients_tb                     | taxid                                 | character varying           |
| public              | vb_cdz_gus_clients_tb                     | neighborhood                          | character varying           |
| public              | vb_cdz_gus_clients_tb                     | updatedat                             | timestamp without time zone |
| public              | vb_cdz_gus_clients_tb                     | name                                  | character varying           |
| public              | vb_cdz_gus_clients_tb                     | company                               | uuid                        |
| public              | vb_cdz_gus_clients_tb                     | streetNumber                          | character varying           |
| public              | vb_cdz_gus_clients_tb                     | street                                | character varying           |
| public              | vb_cdz_gus_clients_tb                     | phone                                 | character varying           |
| public              | vb_cdz_gus_clients_tb                     | description                           | character varying           |
| public              | vb_cdz_gus_clients_tb                     | city                                  | character varying           |
| public              | vb_cdz_gus_clients_tb                     | zipCode                               | character varying           |
| public              | vb_cdz_gus_clients_tb                     | creator                               | uuid                        |
| public              | vb_cdz_gus_clients_tb                     | documenttype                          | character varying           |
| public              | vb_cdz_gus_clients_tb                     | createdat                             | timestamp without time zone |
| public              | vb_cdz_gus_clients_tb                     | state                                 | text                        |
| public              | vb_cdz_gus_clients_tb                     | email                                 | character varying           |
| public              | vb_cdz_gus_clients_tb                     | id                                    | uuid                        |
| public              | vb_cdz_gus_clients_tb                     | complement                            | character varying           |
| public              | vb_cdz_gus_clients_tb                     | country                               | text                        |
| public              | vb_cdz_gus_companies_tb                   | daystoanticipate                      | integer                     |
| public              | vb_cdz_gus_companies_tb                   | boleto_fee_fixed                      | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_4x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | sold_products                         | text                        |
| public              | vb_cdz_gus_companies_tb                   | areacode                              | character varying           |
| public              | vb_cdz_gus_companies_tb                   | mdr_12x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | baas                                  | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | updatedat                             | timestamp without time zone |
| public              | vb_cdz_gus_companies_tb                   | city                                  | character varying           |
| public              | vb_cdz_gus_companies_tb                   | users                                 | ARRAY                       |
| public              | vb_cdz_gus_companies_tb                   | address                               | character varying           |
| public              | vb_cdz_gus_companies_tb                   | last_transaction_date                 | timestamp without time zone |
| public              | vb_cdz_gus_companies_tb                   | mdr_1x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | reservepercentagepix                  | integer                     |
| public              | vb_cdz_gus_companies_tb                   | boleto_fee_percentage                 | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_5x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | max_saque_diario                      | smallint                    |
| public              | vb_cdz_gus_companies_tb                   | documentoenviados                     | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_3x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | pix_fee_fixed                         | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | reservepercentageboleto               | integer                     |
| public              | vb_cdz_gus_companies_tb                   | enablepixfee                          | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | complement                            | character varying           |
| public              | vb_cdz_gus_companies_tb                   | autotransfer                          | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | card_fee_percentage                   | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | enableboletofee                       | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | current_balance                       | bigint                      |
| public              | vb_cdz_gus_companies_tb                   | fee_type_withdrawal                   | character varying           |
| public              | vb_cdz_gus_companies_tb                   | max_valor_transacao                   | bigint                      |
| public              | vb_cdz_gus_companies_tb                   | website                               | character varying           |
| public              | vb_cdz_gus_companies_tb                   | acquirers_pix                         | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | createdat                             | timestamp without time zone |
| public              | vb_cdz_gus_companies_tb                   | fee_type_fixed_pix                    | character varying           |
| public              | vb_cdz_gus_companies_tb                   | mdr_9x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | taxid                                 | character varying           |
| public              | vb_cdz_gus_companies_tb                   | fee_type_fixed_boleto                 | character varying           |
| public              | vb_cdz_gus_companies_tb                   | mdr_6x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | mintransferamount                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | fee_type_card                         | character varying           |
| public              | vb_cdz_gus_companies_tb                   | name                                  | character varying           |
| public              | vb_cdz_gus_companies_tb                   | MotivoRecusa                          | text                        |
| public              | vb_cdz_gus_companies_tb                   | frente_documento_url                  | character varying           |
| public              | vb_cdz_gus_companies_tb                   | acquirers_boleto                      | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | slug                                  | character varying           |
| public              | vb_cdz_gus_companies_tb                   | status                                | character varying           |
| public              | vb_cdz_gus_companies_tb                   | mdr_11x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | card_fee_fixed                        | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | tangible_products                     | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | reservepercentageanticipation         | integer                     |
| public              | vb_cdz_gus_companies_tb                   | fee_type_fixed_withdrawal             | character varying           |
| public              | vb_cdz_gus_companies_tb                   | housenumber                           | character varying           |
| public              | vb_cdz_gus_companies_tb                   | reservedaysboleto                     | integer                     |
| public              | vb_cdz_gus_companies_tb                   | contrato_social                       | text                        |
| public              | vb_cdz_gus_companies_tb                   | reason_for_blocking                   | text                        |
| public              | vb_cdz_gus_companies_tb                   | reservedayspix                        | integer                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_8x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | autotransferCard                      | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | fee_type_boleto                       | character varying           |
| public              | vb_cdz_gus_companies_tb                   | transferenabled                       | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | min_valor_transacao                   | bigint                      |
| public              | vb_cdz_gus_companies_tb                   | mdr_10x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | neighborhood                          | character varying           |
| public              | vb_cdz_gus_companies_tb                   | total_paid                            | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | withdrawal_fee_fixed                  | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | acquirers_card                        | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | maxtransferamount                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | blocked                               | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | creator                               | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | averagebilling                        | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | pix_fee_percentage                    | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | modified_date                         | timestamp without time zone |
| public              | vb_cdz_gus_companies_tb                   | anticipation_fee_monthly              | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_2x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | invoicename                           | character varying           |
| public              | vb_cdz_gus_companies_tb                   | paymentmethods                        | ARRAY                       |
| public              | vb_cdz_gus_companies_tb                   | autoapproveanticipation               | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | acquirers                             | ARRAY                       |
| public              | vb_cdz_gus_companies_tb                   | postalcode                            | character varying           |
| public              | vb_cdz_gus_companies_tb                   | id                                    | uuid                        |
| public              | vb_cdz_gus_companies_tb                   | selfie_url                            | character varying           |
| public              | vb_cdz_gus_companies_tb                   | company_name                          | character varying           |
| public              | vb_cdz_gus_companies_tb                   | reservedaysanticipation               | integer                     |
| public              | vb_cdz_gus_companies_tb                   | verso_documento_url                   | character varying           |
| public              | vb_cdz_gus_companies_tb                   | anticipationenabled                   | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | mdr_7x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | fee_type_pix                          | character varying           |
| public              | vb_cdz_gus_companies_tb                   | aceitou_termos                        | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | fee_type_fixed_card                   | character varying           |
| public              | vb_cdz_gus_companies_tb                   | enablecardfee                         | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | averageticket                         | numeric                     |
| public              | vb_cdz_gus_companies_tb                   | ispj                                  | boolean                     |
| public              | vb_cdz_gus_companies_tb                   | withdrawal_fee_percentage             | numeric                     |
| public              | vb_cdz_gus_configuracoes_tb               | fee_porcetage                         | numeric                     |
| public              | vb_cdz_gus_configuracoes_tb               | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_configuracoes_tb               | id                                    | bigint                      |
| public              | vb_cdz_gus_configuracoes_tb               | fee_fixed                             | bigint                      |
| public              | vb_cdz_gus_elements_checkout_tb           | borderRadius                          | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | initMuted                             | boolean                     |
| public              | vb_cdz_gus_elements_checkout_tb           | fontColorH2                           | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | id_css                                | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | autoplay                              | boolean                     |
| public              | vb_cdz_gus_elements_checkout_tb           | fontSizeH1                            | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | type                                  | USER-DEFINED                |
| public              | vb_cdz_gus_elements_checkout_tb           | heigthImage                           | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | backgroundColor                       | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | visibleMobile                         | boolean                     |
| public              | vb_cdz_gus_elements_checkout_tb           | index                                 | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | position                              | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | textContentH1                         | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | Image                                 | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | widthImage                            | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | textContentH2                         | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | visbileDesktop                        | boolean                     |
| public              | vb_cdz_gus_elements_checkout_tb           | fontSizeH2                            | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | loop                                  | boolean                     |
| public              | vb_cdz_gus_elements_checkout_tb           | id                                    | bigint                      |
| public              | vb_cdz_gus_elements_checkout_tb           | textAlign                             | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | fontColorH1                           | text                        |
| public              | vb_cdz_gus_elements_checkout_tb           | personalization                       | uuid                        |
| public              | vb_cdz_gus_emails_transsacionais_tb       | tipo                                  | character varying           |
| public              | vb_cdz_gus_emails_transsacionais_tb       | email_body                            | text                        |
| public              | vb_cdz_gus_emails_transsacionais_tb       | rementente_nome                       | text                        |
| public              | vb_cdz_gus_emails_transsacionais_tb       | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_emails_transsacionais_tb       | id                                    | uuid                        |
| public              | vb_cdz_gus_emails_transsacionais_tb       | remetente_email                       | text                        |
| public              | vb_cdz_gus_emails_transsacionais_tb       | assunto                               | text                        |
| public              | vb_cdz_gus_entrada_gerente_tb             | valor                                 | bigint                      |
| public              | vb_cdz_gus_entrada_gerente_tb             | data_criacao                          | timestamp without time zone |
| public              | vb_cdz_gus_entrada_gerente_tb             | gerente                               | uuid                        |
| public              | vb_cdz_gus_entrada_gerente_tb             | id                                    | uuid                        |
| public              | vb_cdz_gus_entrada_gerente_tb             | transacao                             | uuid                        |
| public              | vb_cdz_gus_entradas_tb                    | antecipation_id                       | uuid                        |
| public              | vb_cdz_gus_entradas_tb                    | withdrawal_id                         | uuid                        |
| public              | vb_cdz_gus_entradas_tb                    | id                                    | bigint                      |
| public              | vb_cdz_gus_entradas_tb                    | tipo                                  | character varying           |
| public              | vb_cdz_gus_entradas_tb                    | valor                                 | numeric                     |
| public              | vb_cdz_gus_entradas_tb                    | data                                  | timestamp with time zone    |
| public              | vb_cdz_gus_entradas_tb                    | mes                                   | integer                     |
| public              | vb_cdz_gus_entradas_tb                    | estornado                             | boolean                     |
| public              | vb_cdz_gus_entradas_tb                    | transaction_id                        | uuid                        |
| public              | vb_cdz_gus_extrato_user_tb                | idsaldoremovido                       | text                        |
| public              | vb_cdz_gus_extrato_user_tb                | creator                               | uuid                        |
| public              | vb_cdz_gus_extrato_user_tb                | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_extrato_user_tb                | user_id                               | uuid                        |
| public              | vb_cdz_gus_extrato_user_tb                | idantecipacao                         | text                        |
| public              | vb_cdz_gus_extrato_user_tb                | value                                 | bigint                      |
| public              | vb_cdz_gus_extrato_user_tb                | entrada                               | boolean                     |
| public              | vb_cdz_gus_extrato_user_tb                | id                                    | uuid                        |
| public              | vb_cdz_gus_extrato_user_tb                | idtransaction                         | text                        |
| public              | vb_cdz_gus_extrato_user_tb                | wallet                                | uuid                        |
| public              | vb_cdz_gus_extrato_user_tb                | tipo                                  | text                        |
| public              | vb_cdz_gus_frete_tb                       | name                                  | text                        |
| public              | vb_cdz_gus_frete_tb                       | description                           | text                        |
| public              | vb_cdz_gus_frete_tb                       | store                                 | uuid                        |
| public              | vb_cdz_gus_frete_tb                       | price                                 | numeric                     |
| public              | vb_cdz_gus_frete_tb                       | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_frete_tb                       | id                                    | uuid                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | font-color-white                      | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | logoInCenter                          | boolean                     |
| public              | vb_cdz_gus_gateway_personalization_tb     | favicon                               | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | gateway_name                          | character varying           |
| public              | vb_cdz_gus_gateway_personalization_tb     | logo_white                            | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | hover_color                           | character varying           |
| public              | vb_cdz_gus_gateway_personalization_tb     | id                                    | integer                     |
| public              | vb_cdz_gus_gateway_personalization_tb     | primary_color                         | character varying           |
| public              | vb_cdz_gus_gateway_personalization_tb     | font-color-black                      | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | logo_principal                        | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | login_banner                          | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | hover_color_dark                      | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | background_color                      | character varying           |
| public              | vb_cdz_gus_gateway_personalization_tb     | primary_color_dark                    | text                        |
| public              | vb_cdz_gus_gateway_personalization_tb     | background_color_dark                 | text                        |
| public              | vb_cdz_gus_gerentes_tb                    | data_cadastro                         | timestamp without time zone |
| public              | vb_cdz_gus_gerentes_tb                    | empresa                               | ARRAY                       |
| public              | vb_cdz_gus_gerentes_tb                    | nome_completo                         | text                        |
| public              | vb_cdz_gus_gerentes_tb                    | porcentagem                           | numeric                     |
| public              | vb_cdz_gus_gerentes_tb                    | ativo                                 | boolean                     |
| public              | vb_cdz_gus_gerentes_tb                    | pagar_estornado                       | boolean                     |
| public              | vb_cdz_gus_gerentes_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_gerentes_tb                    | telefone                              | text                        |
| public              | vb_cdz_gus_gerentes_tb                    | email                                 | text                        |
| public              | vb_cdz_gus_gerentes_tb                    | pagar_em_cima_do_valor_total          | boolean                     |
| public              | vb_cdz_gus_gerentes_tb                    | metodos_pagamento                     | ARRAY                       |
| public              | vb_cdz_gus_getway_tb                      | descontarChargebackSaldoDisponivel    | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | preChargeBackAtivo                    | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_getway_tb                      | multiContas                           | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | allow_pessoa_fisica                   | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | aprovar_chave_pix                     | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | contarDiasUteisAntecipacao            | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | calculadoraDeTaxas                    | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | id                                    | bigint                      |
| public              | vb_cdz_gus_getway_tb                      | reservaFinanceiraHabilitada           | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | PreChargebackCaclPorParcela           | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | ValorPreChargeBack                    | bigint                      |
| public              | vb_cdz_gus_getway_tb                      | scripts                               | text                        |
| public              | vb_cdz_gus_getway_tb                      | CobrarTaxaSaqueApenasQuandoPago       | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | descontarEstornoSaldo                 | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | DevolverTaxasSaque                    | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | DocumentosViaUpload                   | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | termos                                | character varying           |
| public              | vb_cdz_gus_getway_tb                      | CobrarTaxaSaqueApenasPago             | boolean                     |
| public              | vb_cdz_gus_getway_tb                      | DocumentacaoApi                       | text                        |
| public              | vb_cdz_gus_itenscheckout_tb               | store                                 | uuid                        |
| public              | vb_cdz_gus_itenscheckout_tb               | image                                 | text                        |
| public              | vb_cdz_gus_itenscheckout_tb               | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_itenscheckout_tb               | total                                 | numeric                     |
| public              | vb_cdz_gus_itenscheckout_tb               | id                                    | uuid                        |
| public              | vb_cdz_gus_itenscheckout_tb               | title                                 | text                        |
| public              | vb_cdz_gus_itenscheckout_tb               | checkout                              | uuid                        |
| public              | vb_cdz_gus_itenscheckout_tb               | quantidade                            | integer                     |
| public              | vb_cdz_gus_itenscheckout_tb               | productId                             | text                        |
| public              | vb_cdz_gus_itenscheckout_tb               | price                                 | numeric                     |
| public              | vb_cdz_gus_itenscheckout_tb               | descricao                             | text                        |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | transaction                           | uuid                        |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | adquirente                            | uuid                        |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | baas                                  | uuid                        |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | tipo                                  | text                        |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | mes                                   | integer                     |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | valor                                 | numeric                     |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | id                                    | bigint                      |
| public              | vb_cdz_gus_obrigacoesdepagamentogetway_tb | data                                  | timestamp with time zone    |
| public              | vb_cdz_gus_orderbump_tb                   | descriptionOferta                     | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | type                                  | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_orderbump_tb                   | store                                 | uuid                        |
| public              | vb_cdz_gus_orderbump_tb                   | name                                  | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | imageProduct                          | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | titleOferta                           | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | titleProduct                          | text                        |
| public              | vb_cdz_gus_orderbump_tb                   | price                                 | numeric                     |
| public              | vb_cdz_gus_orderbump_tb                   | id                                    | uuid                        |
| public              | vb_cdz_gus_orderbump_tb                   | pricePromotional                      | numeric                     |
| public              | vb_cdz_gus_orderbump_tb                   | ProductPai                            | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | url_boleto                            | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | CallToActionButtonBuy                 | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | requestQuantity                       | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | boletoEnable                          | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_personalization_checkout_tb    | browserFavicon                        | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | boletoDiscount                        | numeric                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | browserTitle                          | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | pixEnable                             | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | logo                                  | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | url_pix                               | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | paymentStandard                       | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | BorderRadius                          | USER-DEFINED                |
| public              | vb_cdz_gus_personalization_checkout_tb    | safeEnvironment                       | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | store                                 | uuid                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | countdowMinutes                       | integer                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | backgroundFooter                      | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | pixDiscount                           | numeric                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | url_card                              | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | cardEnable                            | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | installmentsStandard                  | integer                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | fontColorFooter                       | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | id                                    | uuid                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | flagsFooter                           | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | contenteFooter                        | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | cardDiscount                          | numeric                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | requestAddress                        | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | MainColor                             | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | ativo                                 | boolean                     |
| public              | vb_cdz_gus_personalization_checkout_tb    | stylesheet                            | character varying           |
| public              | vb_cdz_gus_personalization_checkout_tb    | title                                 | text                        |
| public              | vb_cdz_gus_personalization_checkout_tb    | BackgroundColor                       | text                        |
| public              | vb_cdz_gus_pix_keys_tb                    | updatedat                             | timestamp without time zone |
| public              | vb_cdz_gus_pix_keys_tb                    | creator                               | uuid                        |
| public              | vb_cdz_gus_pix_keys_tb                    | createdat                             | timestamp without time zone |
| public              | vb_cdz_gus_pix_keys_tb                    | key                                   | character varying           |
| public              | vb_cdz_gus_pix_keys_tb                    | v                                     | boolean                     |
| public              | vb_cdz_gus_pix_keys_tb                    | type                                  | character varying           |
| public              | vb_cdz_gus_pix_keys_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_pix_keys_tb                    | description                           | character varying           |
| public              | vb_cdz_gus_pixelfacebook_tb               | pix_generated                         | boolean                     |
| public              | vb_cdz_gus_pixelfacebook_tb               | store                                 | uuid                        |
| public              | vb_cdz_gus_pixelfacebook_tb               | initiate_checkout                     | boolean                     |
| public              | vb_cdz_gus_pixelfacebook_tb               | name                                  | text                        |
| public              | vb_cdz_gus_pixelfacebook_tb               | payment_methods                       | ARRAY                       |
| public              | vb_cdz_gus_pixelfacebook_tb               | facebook_id                           | text                        |
| public              | vb_cdz_gus_pixelfacebook_tb               | id                                    | uuid                        |
| public              | vb_cdz_gus_pixelfacebook_tb               | access_token                          | text                        |
| public              | vb_cdz_gus_pixelfacebook_tb               | purchase                              | boolean                     |
| public              | vb_cdz_gus_pixels_trackers_tb             | updated_at                            | timestamp without time zone |
| public              | vb_cdz_gus_pixels_trackers_tb             | created_at                            | timestamp without time zone |
| public              | vb_cdz_gus_pixels_trackers_tb             | status                                | boolean                     |
| public              | vb_cdz_gus_pixels_trackers_tb             | pixel_id                              | character varying           |
| public              | vb_cdz_gus_pixels_trackers_tb             | company_id                            | uuid                        |
| public              | vb_cdz_gus_pixels_trackers_tb             | id                                    | integer                     |
| public              | vb_cdz_gus_pixels_trackers_tb             | api_key                               | text                        |
| public              | vb_cdz_gus_pixels_trackers_tb             | platform                              | character varying           |
| public              | vb_cdz_gus_pixels_trackers_tb             | configuration                         | jsonb                       |
| public              | vb_cdz_gus_pixels_trackers_tb             | name                                  | character varying           |
| public              | vb_cdz_gus_products_tb                    | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_products_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_products_tb                    | title                                 | text                        |
| public              | vb_cdz_gus_products_tb                    | description                           | character varying           |
| public              | vb_cdz_gus_products_tb                    | idExternal                            | text                        |
| public              | vb_cdz_gus_products_tb                    | creator                               | uuid                        |
| public              | vb_cdz_gus_products_tb                    | store                                 | uuid                        |
| public              | vb_cdz_gus_products_tb                    | image_url                             | text                        |
| public              | vb_cdz_gus_products_tb                    | price                                 | numeric                     |
| public              | vb_cdz_gus_reserva_tb                     | amount                                | bigint                      |
| public              | vb_cdz_gus_reserva_tb                     | id                                    | uuid                        |
| public              | vb_cdz_gus_reserva_tb                     | releaseDate                           | timestamp with time zone    |
| public              | vb_cdz_gus_reserva_tb                     | wallet                                | uuid                        |
| public              | vb_cdz_gus_reserva_tb                     | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_saldoremovido_tb               | valorRemovido                         | bigint                      |
| public              | vb_cdz_gus_saldoremovido_tb               | walletId                              | uuid                        |
| public              | vb_cdz_gus_saldoremovido_tb               | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_saldoremovido_tb               | creator                               | uuid                        |
| public              | vb_cdz_gus_saldoremovido_tb               | motivo                                | text                        |
| public              | vb_cdz_gus_saldoremovido_tb               | data_operacao                         | timestamp with time zone    |
| public              | vb_cdz_gus_saldoremovido_tb               | saldo_anterior                        | bigint                      |
| public              | vb_cdz_gus_saldoremovido_tb               | id                                    | bigint                      |
| public              | vb_cdz_gus_saldoremovido_tb               | tipo_saldo                            | text                        |
| public              | vb_cdz_gus_saldoremovido_tb               | tipo_operacao                         | text                        |
| public              | vb_cdz_gus_saldoremovido_tb               | saldo_atual                           | bigint                      |
| public              | vb_cdz_gus_saldoremovido_tb               | admin_responsavel                     | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | enablepixfee                          | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_6x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | anticipationenabled                   | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | card_fee_percentage                   | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_9x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | maxtransferamount                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_8x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | withdrawal_fee_percentage             | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_4x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | reservedayspix                        | integer                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_card                         | character varying           |
| public              | vb_cdz_gus_standard_tb                    | mdr_11x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_withdrawal                   | character varying           |
| public              | vb_cdz_gus_standard_tb                    | boleto_fee_percentage                 | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_fixed_boleto                 | character varying           |
| public              | vb_cdz_gus_standard_tb                    | card_fee_fixed                        | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | acquirers_boleto                      | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | mdr_3x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | enablecardfee                         | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | daystoanticipate                      | integer                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_5x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | reservedaysanticipation               | integer                     |
| public              | vb_cdz_gus_standard_tb                    | reservepercentageboleto               | integer                     |
| public              | vb_cdz_gus_standard_tb                    | transferenabled                       | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_pix                          | character varying           |
| public              | vb_cdz_gus_standard_tb                    | mdr_7x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_12x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | reservepercentageanticipation         | integer                     |
| public              | vb_cdz_gus_standard_tb                    | anticipation_fee_monthly              | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | paymentmethods                        | ARRAY                       |
| public              | vb_cdz_gus_standard_tb                    | reservepercentagepix                  | integer                     |
| public              | vb_cdz_gus_standard_tb                    | reservedaysboleto                     | integer                     |
| public              | vb_cdz_gus_standard_tb                    | autoapproveanticipation               | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | pix_fee_fixed                         | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mintransferamount                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_fixed_withdrawal             | character varying           |
| public              | vb_cdz_gus_standard_tb                    | status                                | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | boleto_fee_fixed                      | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_fixed_card                   | character varying           |
| public              | vb_cdz_gus_standard_tb                    | acquirers_card                        | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | autotransfer                          | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | fee_type_boleto                       | character varying           |
| public              | vb_cdz_gus_standard_tb                    | enableboletofee                       | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | autotransferCard                      | boolean                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_1x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | withdrawal_fee_fixed                  | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | mdr_10x_adquirente                    | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | acquirers_pix                         | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | fee_type_fixed_pix                    | character varying           |
| public              | vb_cdz_gus_standard_tb                    | baas                                  | uuid                        |
| public              | vb_cdz_gus_standard_tb                    | mdr_2x_adquirente                     | numeric                     |
| public              | vb_cdz_gus_standard_tb                    | nome                                  | text                        |
| public              | vb_cdz_gus_standard_tb                    | pix_fee_percentage                    | numeric                     |
| public              | vb_cdz_gus_store_tb                       | api_key_shopfy                        | text                        |
| public              | vb_cdz_gus_store_tb                       | status_sender                         | boolean                     |
| public              | vb_cdz_gus_store_tb                       | sender                                | text                        |
| public              | vb_cdz_gus_store_tb                       | creator                               | uuid                        |
| public              | vb_cdz_gus_store_tb                       | theme_id                              | text                        |
| public              | vb_cdz_gus_store_tb                       | type                                  | text                        |
| public              | vb_cdz_gus_store_tb                       | id_store                              | text                        |
| public              | vb_cdz_gus_store_tb                       | name                                  | text                        |
| public              | vb_cdz_gus_store_tb                       | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_store_tb                       | token_shopfy                          | text                        |
| public              | vb_cdz_gus_store_tb                       | id                                    | uuid                        |
| public              | vb_cdz_gus_store_tb                       | remetente_email                       | text                        |
| public              | vb_cdz_gus_store_tb                       | skipCart                              | boolean                     |
| public              | vb_cdz_gus_store_tb                       | rementente_nome                       | text                        |
| public              | vb_cdz_gus_store_tb                       | checkoutEnableShopfy                  | boolean                     |
| public              | vb_cdz_gus_store_tb                       | domainCheckout                        | text                        |
| public              | vb_cdz_gus_store_tb                       | secret_key_shopfy                     | text                        |
| public              | vb_cdz_gus_store_tb                       | domain                                | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | acquirer_id                           | uuid                        |
| public              | vb_cdz_gus_subcontas_tb                   | bank_name                             | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | live_api_token                        | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | ativo                                 | boolean                     |
| public              | vb_cdz_gus_subcontas_tb                   | bank_ispb_number                      | bigint                      |
| public              | vb_cdz_gus_subcontas_tb                   | message                               | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | bank_ag                               | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | marketplace_id                        | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | bank_acc_type                         | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | bank_cc                               | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | user_token                            | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | empresa                               | uuid                        |
| public              | vb_cdz_gus_subcontas_tb                   | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_subcontas_tb                   | id                                    | bigint                      |
| public              | vb_cdz_gus_subcontas_tb                   | status                                | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | acquirer_name                         | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | nome                                  | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | account_id                            | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | test_api_token                        | text                        |
| public              | vb_cdz_gus_subcontas_tb                   | balance_sheet                         | text                        |
| public              | vb_cdz_gus_transaction_history_tb         | id                                    | integer                     |
| public              | vb_cdz_gus_transaction_history_tb         | event_date                            | timestamp with time zone    |
| public              | vb_cdz_gus_transaction_history_tb         | title                                 | character varying           |
| public              | vb_cdz_gus_transaction_history_tb         | transaction_id                        | uuid                        |
| public              | vb_cdz_gus_transaction_history_tb         | details                               | jsonb                       |
| public              | vb_cdz_gus_transactions_tb                | createdat                             | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | delivery_status                       | character varying           |
| public              | vb_cdz_gus_transactions_tb                | provider                              | character varying           |
| public              | vb_cdz_gus_transactions_tb                | time                                  | time without time zone      |
| public              | vb_cdz_gus_transactions_tb                | status                                | character varying           |
| public              | vb_cdz_gus_transactions_tb                | browser_data                          | character varying           |
| public              | vb_cdz_gus_transactions_tb                | utm_content                           | character varying           |
| public              | vb_cdz_gus_transactions_tb                | boletourl                             | text                        |
| public              | vb_cdz_gus_transactions_tb                | operating_system                      | character varying           |
| public              | vb_cdz_gus_transactions_tb                | idAdquirente                          | text                        |
| public              | vb_cdz_gus_transactions_tb                | RegiaoTracker                         | text                        |
| public              | vb_cdz_gus_transactions_tb                | utm_source                            | character varying           |
| public              | vb_cdz_gus_transactions_tb                | metadata                              | character varying           |
| public              | vb_cdz_gus_transactions_tb                | motivoDoErro                          | text                        |
| public              | vb_cdz_gus_transactions_tb                | duedate                               | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | end2EndId                             | text                        |
| public              | vb_cdz_gus_transactions_tb                | cardExpirationYear                    | integer                     |
| public              | vb_cdz_gus_transactions_tb                | month                                 | integer                     |
| public              | vb_cdz_gus_transactions_tb                | refund_date                           | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | date                                  | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | itens                                 | ARRAY                       |
| public              | vb_cdz_gus_transactions_tb                | id                                    | uuid                        |
| public              | vb_cdz_gus_transactions_tb                | availableforanticipation              | boolean                     |
| public              | vb_cdz_gus_transactions_tb                | idShopify                             | text                        |
| public              | vb_cdz_gus_transactions_tb                | fbp                                   | character varying           |
| public              | vb_cdz_gus_transactions_tb                | refunded                              | boolean                     |
| public              | vb_cdz_gus_transactions_tb                | delivery_code                         | character varying           |
| public              | vb_cdz_gus_transactions_tb                | clientid                              | uuid                        |
| public              | vb_cdz_gus_transactions_tb                | utm_medium                            | character varying           |
| public              | vb_cdz_gus_transactions_tb                | fraud_detection                       | jsonb                       |
| public              | vb_cdz_gus_transactions_tb                | cardHolderName                        | text                        |
| public              | vb_cdz_gus_transactions_tb                | cardLastDigits                        | text                        |
| public              | vb_cdz_gus_transactions_tb                | idestorno                             | text                        |
| public              | vb_cdz_gus_transactions_tb                | chargedamount                         | numeric                     |
| public              | vb_cdz_gus_transactions_tb                | utm_term                              | character varying           |
| public              | vb_cdz_gus_transactions_tb                | updatedat                             | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | paidat                                | timestamp with time zone    |
| public              | vb_cdz_gus_transactions_tb                | installments                          | integer                     |
| public              | vb_cdz_gus_transactions_tb                | qr_code_url                           | text                        |
| public              | vb_cdz_gus_transactions_tb                | postbackUrl                           | text                        |
| public              | vb_cdz_gus_transactions_tb                | barcode_boleto                        | text                        |
| public              | vb_cdz_gus_transactions_tb                | anticipationunderreview               | boolean                     |
| public              | vb_cdz_gus_transactions_tb                | cardflag                              | text                        |
| public              | vb_cdz_gus_transactions_tb                | netamount                             | numeric                     |
| public              | vb_cdz_gus_transactions_tb                | companyid                             | uuid                        |
| public              | vb_cdz_gus_transactions_tb                | paymentmethod                         | character varying           |
| public              | vb_cdz_gus_transactions_tb                | acquirerid                            | uuid                        |
| public              | vb_cdz_gus_transactions_tb                | fbc                                   | character varying           |
| public              | vb_cdz_gus_transactions_tb                | Description                           | text                        |
| public              | vb_cdz_gus_transactions_tb                | cityTracker                           | text                        |
| public              | vb_cdz_gus_transactions_tb                | utm_campaign                          | character varying           |
| public              | vb_cdz_gus_transactions_tb                | splits                                | ARRAY                       |
| public              | vb_cdz_gus_transactions_tb                | pixcode                               | text                        |
| public              | vb_cdz_gus_transactions_tb                | data                                  | date                        |
| public              | vb_cdz_gus_transactions_tb                | anticipated                           | boolean                     |
| public              | vb_cdz_gus_transactions_tb                | userId                                | uuid                        |
| public              | vb_cdz_gus_transactions_tb                | store                                 | text                        |
| public              | vb_cdz_gus_transactions_tb                | cardExpirationMonth                   | integer                     |
| public              | vb_cdz_gus_transactions_tb                | description                           | character varying           |
| public              | vb_cdz_gus_transactions_tb                | success                               | boolean                     |
| public              | vb_cdz_gus_transactions_tb                | clientip                              | character varying           |
| public              | vb_cdz_gus_transactions_tb                | digitableLine                         | text                        |
| public              | vb_cdz_gus_upsell_tb                      | produtoPai                            | text                        |
| public              | vb_cdz_gus_upsell_tb                      | descriptionOferta                     | text                        |
| public              | vb_cdz_gus_upsell_tb                      | id                                    | uuid                        |
| public              | vb_cdz_gus_upsell_tb                      | store                                 | uuid                        |
| public              | vb_cdz_gus_upsell_tb                      | name                                  | text                        |
| public              | vb_cdz_gus_upsell_tb                      | price                                 | numeric                     |
| public              | vb_cdz_gus_upsell_tb                      | ProdutctOfertado                      | uuid                        |
| public              | vb_cdz_gus_upsell_tb                      | pricePromotional                      | numeric                     |
| public              | vb_cdz_gus_upsell_tb                      | titleOferta                           | text                        |
| public              | vb_cdz_gus_upsell_tb                      | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_user_profile_tb                | usertype                              | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | email                                 | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | document                              | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | id                                    | uuid                        |
| public              | vb_cdz_gus_user_profile_tb                | prefer_v2                             | boolean                     |
| public              | vb_cdz_gus_user_profile_tb                | phone                                 | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | birthdate                             | date                        |
| public              | vb_cdz_gus_user_profile_tb                | fullname                              | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | permissions                           | ARRAY                       |
| public              | vb_cdz_gus_user_profile_tb                | api_secret_key                        | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | company                               | uuid                        |
| public              | vb_cdz_gus_user_profile_tb                | description                           | character varying           |
| public              | vb_cdz_gus_user_profile_tb                | foto                                  | text                        |
| public              | vb_cdz_gus_user_profile_tb                | isAdmin                               | boolean                     |
| public              | vb_cdz_gus_validation_codes_tb            | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_validation_codes_tb            | expires_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_validation_codes_tb            | code                                  | character varying           |
| public              | vb_cdz_gus_validation_codes_tb            | user_id                               | uuid                        |
| public              | vb_cdz_gus_validation_codes_tb            | is_used                               | boolean                     |
| public              | vb_cdz_gus_validation_codes_tb            | id                                    | uuid                        |
| public              | vb_cdz_gus_validation_codes_tb            | used_at                               | timestamp with time zone    |
| public              | vb_cdz_gus_variants_tb                    | creator                               | uuid                        |
| public              | vb_cdz_gus_variants_tb                    | title                                 | text                        |
| public              | vb_cdz_gus_variants_tb                    | store                                 | uuid                        |
| public              | vb_cdz_gus_variants_tb                    | price                                 | numeric                     |
| public              | vb_cdz_gus_variants_tb                    | idexternal                            | text                        |
| public              | vb_cdz_gus_variants_tb                    | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_variants_tb                    | image                                 | text                        |
| public              | vb_cdz_gus_variants_tb                    | product                               | uuid                        |
| public              | vb_cdz_gus_variants_tb                    | id                                    | uuid                        |
| public              | vb_cdz_gus_wallet_tb                      | balance_card                          | bigint                      |
| public              | vb_cdz_gus_wallet_tb                      | balance                               | bigint                      |
| public              | vb_cdz_gus_wallet_tb                      | financial_reserve                     | bigint                      |
| public              | vb_cdz_gus_wallet_tb                      | id                                    | uuid                        |
| public              | vb_cdz_gus_wallet_tb                      | receiver                              | uuid                        |
| public              | vb_cdz_gus_webhook_tb                     | ativa                                 | boolean                     |
| public              | vb_cdz_gus_webhook_tb                     | updated_at                            | timestamp without time zone |
| public              | vb_cdz_gus_webhook_tb                     | admin                                 | boolean                     |
| public              | vb_cdz_gus_webhook_tb                     | id                                    | uuid                        |
| public              | vb_cdz_gus_webhook_tb                     | url                                   | text                        |
| public              | vb_cdz_gus_webhook_tb                     | companyid                             | uuid                        |
| public              | vb_cdz_gus_webhook_tb                     | created_at                            | timestamp without time zone |
| public              | vb_cdz_gus_webhook_tb                     | creator                               | uuid                        |
| public              | vb_cdz_gus_webhooklogs_tb                 | id                                    | uuid                        |
| public              | vb_cdz_gus_webhooklogs_tb                 | status_code                           | integer                     |
| public              | vb_cdz_gus_webhooklogs_tb                 | companyid                             | uuid                        |
| public              | vb_cdz_gus_webhooklogs_tb                 | created_at                            | timestamp with time zone    |
| public              | vb_cdz_gus_webhooklogs_tb                 | error                                 | text                        |
| public              | vb_cdz_gus_webhooklogs_tb                 | payload                               | json                        |
| public              | vb_cdz_gus_webhooklogs_tb                 | success                               | boolean                     |
| public              | vb_cdz_gus_webhooklogs_tb                 | url                                   | text                        |
| public              | vb_cdz_gus_withdrawals_tb                 | requestedamount                       | numeric                     |
| public              | vb_cdz_gus_withdrawals_tb                 | idBaas                                | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | id                                    | uuid                        |
| public              | vb_cdz_gus_withdrawals_tb                 | end_to_end_id                         | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | pago_em                               | timestamp without time zone |
| public              | vb_cdz_gus_withdrawals_tb                 | reason_for_denial                     | text                        |
| public              | vb_cdz_gus_withdrawals_tb                 | pixkeyid                              | uuid                        |
| public              | vb_cdz_gus_withdrawals_tb                 | companyid                             | uuid                        |
| public              | vb_cdz_gus_withdrawals_tb                 | recipient_document                    | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | recipient_name                        | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | updatedat                             | timestamp without time zone |
| public              | vb_cdz_gus_withdrawals_tb                 | negative_column                       | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | createdat                             | timestamp without time zone |
| public              | vb_cdz_gus_withdrawals_tb                 | description                           | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | status                                | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | amounttotransfer                      | numeric                     |
| public              | vb_cdz_gus_withdrawals_tb                 | creator                               | uuid                        |
| public              | vb_cdz_gus_withdrawals_tb                 | fee                                   | numeric                     |
| public              | vb_cdz_gus_withdrawals_tb                 | negative_deducted                     | numeric                     |
| public              | vb_cdz_gus_withdrawals_tb                 | recipient_type                        | character varying           |
| public              | vb_cdz_gus_withdrawals_tb                 | isPix                                 | boolean                     |
| public              | vw_total_charged_paid                     | total_charged_centavos                | numeric                     |
| public              | wallets                                   | total_balance                         | bigint                      |
| public              | wallets                                   | financial_reserve                     | bigint                      |
| public              | wallets                                   | balance                               | bigint                      |
| public              | wallets                                   | receiver                              | uuid                        |
| public              | wallets                                   | balance_card                          | bigint                      |
| public              | wallets                                   | wallet_id                             | uuid                        |
| realtime            | messages                                  | topic                                 | text                        |
| realtime            | messages                                  | event                                 | text                        |
| realtime            | messages                                  | private                               | boolean                     |
| realtime            | messages                                  | inserted_at                           | timestamp without time zone |
| realtime            | messages                                  | id                                    | uuid                        |
| realtime            | messages                                  | updated_at                            | timestamp without time zone |
| realtime            | messages                                  | payload                               | jsonb                       |
| realtime            | messages                                  | extension                             | text                        |
| realtime            | schema_migrations                         | version                               | bigint                      |
| realtime            | schema_migrations                         | inserted_at                           | timestamp without time zone |
| realtime            | subscription                              | entity                                | regclass                    |
| realtime            | subscription                              | created_at                            | timestamp without time zone |
| realtime            | subscription                              | filters                               | ARRAY                       |
| realtime            | subscription                              | subscription_id                       | uuid                        |
| realtime            | subscription                              | claims_role                           | regrole                     |
| realtime            | subscription                              | id                                    | bigint                      |
| realtime            | subscription                              | claims                                | jsonb                       |
| storage             | buckets                                   | id                                    | text                        |
| storage             | buckets                                   | file_size_limit                       | bigint                      |
| storage             | buckets                                   | created_at                            | timestamp with time zone    |
| storage             | buckets                                   | public                                | boolean                     |
| storage             | buckets                                   | avif_autodetection                    | boolean                     |
| storage             | buckets                                   | owner                                 | uuid                        |
| storage             | buckets                                   | owner_id                              | text                        |
| storage             | buckets                                   | allowed_mime_types                    | ARRAY                       |
| storage             | buckets                                   | updated_at                            | timestamp with time zone    |
| storage             | buckets                                   | name                                  | text                        |
| storage             | migrations                                | hash                                  | character varying           |
| storage             | migrations                                | executed_at                           | timestamp without time zone |
| storage             | migrations                                | id                                    | integer                     |
| storage             | migrations                                | name                                  | character varying           |
| storage             | objects                                   | user_metadata                         | jsonb                       |
| storage             | objects                                   | metadata                              | jsonb                       |
| storage             | objects                                   | owner                                 | uuid                        |
| storage             | objects                                   | version                               | text                        |
| storage             | objects                                   | last_accessed_at                      | timestamp with time zone    |
| storage             | objects                                   | owner_id                              | text                        |
| storage             | objects                                   | id                                    | uuid                        |
| storage             | objects                                   | path_tokens                           | ARRAY                       |
| storage             | objects                                   | name                                  | text                        |
| storage             | objects                                   | created_at                            | timestamp with time zone    |
| storage             | objects                                   | bucket_id                             | text                        |
| storage             | objects                                   | updated_at                            | timestamp with time zone    |
| storage             | s3_multipart_uploads                      | in_progress_size                      | bigint                      |
| storage             | s3_multipart_uploads                      | upload_signature                      | text                        |
| storage             | s3_multipart_uploads                      | owner_id                              | text                        |
| storage             | s3_multipart_uploads                      | bucket_id                             | text                        |
| storage             | s3_multipart_uploads                      | key                                   | text                        |
| storage             | s3_multipart_uploads                      | version                               | text                        |
| storage             | s3_multipart_uploads                      | user_metadata                         | jsonb                       |
| storage             | s3_multipart_uploads                      | created_at                            | timestamp with time zone    |
| storage             | s3_multipart_uploads                      | id                                    | text                        |
| storage             | s3_multipart_uploads_parts                | owner_id                              | text                        |
| storage             | s3_multipart_uploads_parts                | key                                   | text                        |
| storage             | s3_multipart_uploads_parts                | size                                  | bigint                      |
| storage             | s3_multipart_uploads_parts                | upload_id                             | text                        |
| storage             | s3_multipart_uploads_parts                | version                               | text                        |
| storage             | s3_multipart_uploads_parts                | id                                    | uuid                        |
| storage             | s3_multipart_uploads_parts                | bucket_id                             | text                        |
| storage             | s3_multipart_uploads_parts                | etag                                  | text                        |
| storage             | s3_multipart_uploads_parts                | part_number                           | integer                     |
| storage             | s3_multipart_uploads_parts                | created_at                            | timestamp with time zone    |
| supabase_functions  | hooks                                     | hook_table_id                         | integer                     |
| supabase_functions  | hooks                                     | hook_name                             | text                        |
| supabase_functions  | hooks                                     | id                                    | bigint                      |
| supabase_functions  | hooks                                     | request_id                            | bigint                      |
| supabase_functions  | hooks                                     | created_at                            | timestamp with time zone    |
| supabase_functions  | migrations                                | version                               | text                        |
| supabase_functions  | migrations                                | inserted_at                           | timestamp with time zone    |
| supabase_migrations | schema_migrations                         | idempotency_key                       | text                        |
| supabase_migrations | schema_migrations                         | created_by                            | text                        |
| supabase_migrations | schema_migrations                         | name                                  | text                        |
| supabase_migrations | schema_migrations                         | statements                            | ARRAY                       |
| supabase_migrations | schema_migrations                         | version                               | text                        |
| supabase_migrations | seed_files                                | hash                                  | text                        |
| supabase_migrations | seed_files                                | path                                  | text                        |
| vault               | decrypted_secrets                         | key_id                                | uuid                        |
| vault               | decrypted_secrets                         | name                                  | text                        |
| vault               | decrypted_secrets                         | created_at                            | timestamp with time zone    |
| vault               | decrypted_secrets                         | decrypted_secret                      | text                        |
| vault               | decrypted_secrets                         | description                           | text                        |
| vault               | decrypted_secrets                         | updated_at                            | timestamp with time zone    |
| vault               | decrypted_secrets                         | id                                    | uuid                        |
| vault               | decrypted_secrets                         | nonce                                 | bytea                       |
| vault               | decrypted_secrets                         | secret                                | text                        |
| vault               | secrets                                   | secret                                | text                        |
| vault               | secrets                                   | description                           | text                        |
| vault               | secrets                                   | created_at                            | timestamp with time zone    |
| vault               | secrets                                   | id                                    | uuid                        |
| vault               | secrets                                   | name                                  | text                        |
| vault               | secrets                                   | key_id                                | uuid                        |
| vault               | secrets                                   | nonce                                 | bytea                       |
| vault               | secrets                                   | updated_at                            | timestamp with time zone    |




| routine_schema     | routine_name                                      | routine_type |
| ------------------ | ------------------------------------------------- | ------------ |
| auth               | email                                             | FUNCTION     |
| auth               | jwt                                               | FUNCTION     |
| auth               | role                                              | FUNCTION     |
| auth               | uid                                               | FUNCTION     |
| cron               | alter_job                                         | FUNCTION     |
| cron               | job_cache_invalidate                              | FUNCTION     |
| cron               | schedule                                          | FUNCTION     |
| cron               | schedule                                          | FUNCTION     |
| cron               | schedule_in_database                              | FUNCTION     |
| cron               | unschedule                                        | FUNCTION     |
| cron               | unschedule                                        | FUNCTION     |
| extensions         | algorithm_sign                                    | FUNCTION     |
| extensions         | armor                                             | FUNCTION     |
| extensions         | armor                                             | FUNCTION     |
| extensions         | crypt                                             | FUNCTION     |
| extensions         | dearmor                                           | FUNCTION     |
| extensions         | decrypt                                           | FUNCTION     |
| extensions         | decrypt_iv                                        | FUNCTION     |
| extensions         | digest                                            | FUNCTION     |
| extensions         | digest                                            | FUNCTION     |
| extensions         | encrypt                                           | FUNCTION     |
| extensions         | encrypt_iv                                        | FUNCTION     |
| extensions         | gen_random_bytes                                  | FUNCTION     |
| extensions         | gen_random_uuid                                   | FUNCTION     |
| extensions         | gen_salt                                          | FUNCTION     |
| extensions         | gen_salt                                          | FUNCTION     |
| extensions         | grant_pg_cron_access                              | FUNCTION     |
| extensions         | grant_pg_graphql_access                           | FUNCTION     |
| extensions         | grant_pg_net_access                               | FUNCTION     |
| extensions         | hmac                                              | FUNCTION     |
| extensions         | hmac                                              | FUNCTION     |
| extensions         | pg_stat_statements                                | FUNCTION     |
| extensions         | pg_stat_statements_info                           | FUNCTION     |
| extensions         | pg_stat_statements_reset                          | FUNCTION     |
| extensions         | pgp_armor_headers                                 | FUNCTION     |
| extensions         | pgp_key_id                                        | FUNCTION     |
| extensions         | pgp_pub_decrypt                                   | FUNCTION     |
| extensions         | pgp_pub_decrypt                                   | FUNCTION     |
| extensions         | pgp_pub_decrypt                                   | FUNCTION     |
| extensions         | pgp_pub_decrypt_bytea                             | FUNCTION     |
| extensions         | pgp_pub_decrypt_bytea                             | FUNCTION     |
| extensions         | pgp_pub_decrypt_bytea                             | FUNCTION     |
| extensions         | pgp_pub_encrypt                                   | FUNCTION     |
| extensions         | pgp_pub_encrypt                                   | FUNCTION     |
| extensions         | pgp_pub_encrypt_bytea                             | FUNCTION     |
| extensions         | pgp_pub_encrypt_bytea                             | FUNCTION     |
| extensions         | pgp_sym_decrypt                                   | FUNCTION     |
| extensions         | pgp_sym_decrypt                                   | FUNCTION     |
| extensions         | pgp_sym_decrypt_bytea                             | FUNCTION     |
| extensions         | pgp_sym_decrypt_bytea                             | FUNCTION     |
| extensions         | pgp_sym_encrypt                                   | FUNCTION     |
| extensions         | pgp_sym_encrypt                                   | FUNCTION     |
| extensions         | pgp_sym_encrypt_bytea                             | FUNCTION     |
| extensions         | pgp_sym_encrypt_bytea                             | FUNCTION     |
| extensions         | pgrst_ddl_watch                                   | FUNCTION     |
| extensions         | pgrst_drop_watch                                  | FUNCTION     |
| extensions         | set_graphql_placeholder                           | FUNCTION     |
| extensions         | sign                                              | FUNCTION     |
| extensions         | try_cast_double                                   | FUNCTION     |
| extensions         | url_decode                                        | FUNCTION     |
| extensions         | url_encode                                        | FUNCTION     |
| extensions         | uuid_generate_v1                                  | FUNCTION     |
| extensions         | uuid_generate_v1mc                                | FUNCTION     |
| extensions         | uuid_generate_v3                                  | FUNCTION     |
| extensions         | uuid_generate_v4                                  | FUNCTION     |
| extensions         | uuid_generate_v5                                  | FUNCTION     |
| extensions         | uuid_nil                                          | FUNCTION     |
| extensions         | uuid_ns_dns                                       | FUNCTION     |
| extensions         | uuid_ns_oid                                       | FUNCTION     |
| extensions         | uuid_ns_url                                       | FUNCTION     |
| extensions         | uuid_ns_x500                                      | FUNCTION     |
| extensions         | verify                                            | FUNCTION     |
| graphql            | _internal_resolve                                 | FUNCTION     |
| graphql            | comment_directive                                 | FUNCTION     |
| graphql            | exception                                         | FUNCTION     |
| graphql            | get_schema_version                                | FUNCTION     |
| graphql            | increment_schema_version                          | FUNCTION     |
| graphql            | resolve                                           | FUNCTION     |
| graphql_public     | graphql                                           | FUNCTION     |
| pgbouncer          | get_auth                                          | FUNCTION     |
| pgsodium           | create_key                                        | FUNCTION     |
| pgsodium           | create_mask_view                                  | FUNCTION     |
| pgsodium           | create_mask_view                                  | FUNCTION     |
| pgsodium           | crypto_aead_det_decrypt                           | FUNCTION     |
| pgsodium           | crypto_aead_det_encrypt                           | FUNCTION     |
| pgsodium           | crypto_aead_det_keygen                            | FUNCTION     |
| pgsodium           | crypto_aead_det_noncegen                          | FUNCTION     |
| pgsodium           | crypto_auth_hmacsha512_keygen                     | FUNCTION     |
| pgsodium           | crypto_box_new_seed                               | FUNCTION     |
| pgsodium           | crypto_box_seal                                   | FUNCTION     |
| pgsodium           | crypto_box_seal_open                              | FUNCTION     |
| pgsodium           | crypto_cmp                                        | FUNCTION     |
| pgsodium           | crypto_generichash                                | FUNCTION     |
| pgsodium           | crypto_hash_sha256                                | FUNCTION     |
| pgsodium           | crypto_hash_sha512                                | FUNCTION     |
| pgsodium           | crypto_kx_client_session_keys                     | FUNCTION     |
| pgsodium           | crypto_kx_server_session_keys                     | FUNCTION     |
| pgsodium           | crypto_pwhash                                     | FUNCTION     |
| pgsodium           | crypto_pwhash_saltgen                             | FUNCTION     |
| pgsodium           | crypto_pwhash_str                                 | FUNCTION     |
| pgsodium           | crypto_pwhash_str_verify                          | FUNCTION     |
| pgsodium           | crypto_secretstream_keygen                        | FUNCTION     |
| pgsodium           | crypto_shorthash                                  | FUNCTION     |
| pgsodium           | crypto_sign                                       | FUNCTION     |
| pgsodium           | crypto_sign_detached                              | FUNCTION     |
| pgsodium           | crypto_sign_new_seed                              | FUNCTION     |
| pgsodium           | crypto_sign_open                                  | FUNCTION     |
| pgsodium           | crypto_sign_seed_new_keypair                      | FUNCTION     |
| pgsodium           | crypto_sign_update_agg                            | null         |
| pgsodium           | crypto_sign_update_agg                            | null         |
| pgsodium           | crypto_sign_verify_detached                       | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20                           | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20                           | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_keygen                    | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_noncegen                  | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_xor                       | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_xor                       | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_xor_ic                    | FUNCTION     |
| pgsodium           | crypto_stream_xchacha20_xor_ic                    | FUNCTION     |
| pgsodium           | decrypted_columns                                 | FUNCTION     |
| pgsodium           | disable_security_label_trigger                    | FUNCTION     |
| pgsodium           | enable_security_label_trigger                     | FUNCTION     |
| pgsodium           | encrypted_column                                  | FUNCTION     |
| pgsodium           | encrypted_columns                                 | FUNCTION     |
| pgsodium           | get_key_by_id                                     | FUNCTION     |
| pgsodium           | get_key_by_name                                   | FUNCTION     |
| pgsodium           | get_named_keys                                    | FUNCTION     |
| pgsodium           | has_mask                                          | FUNCTION     |
| pgsodium           | key_encrypt_secret_raw_key                        | FUNCTION     |
| pgsodium           | mask_columns                                      | FUNCTION     |
| pgsodium           | mask_role                                         | FUNCTION     |
| pgsodium           | quote_assoc                                       | FUNCTION     |
| pgsodium           | sodium_base642bin                                 | FUNCTION     |
| pgsodium           | sodium_bin2base64                                 | FUNCTION     |
| pgsodium           | trg_mask_update                                   | FUNCTION     |
| pgsodium           | update_mask                                       | FUNCTION     |
| pgsodium           | update_masks                                      | FUNCTION     |
| pgsodium           | version                                           | FUNCTION     |
| public             | atualizar_disponivel_para_antecipar               | FUNCTION     |
| public             | atualizar_obrigacao_de_pagamento                  | FUNCTION     |
| public             | atualizar_todas_datas_disponiveis_para_antecipar  | FUNCTION     |
| public             | batch_process_transactions                        | FUNCTION     |
| public             | check_user_company_is_empty                       | FUNCTION     |
| public             | cleanup_expired_cache                             | FUNCTION     |
| public             | count_messages_by_ticket                          | FUNCTION     |
| public             | count_tickets_by_status                           | FUNCTION     |
| public             | create_entradas_on_withdrawals_insert             | FUNCTION     |
| public             | create_entradas_on_withdrawals_status_update      | FUNCTION     |
| public             | create_entry_on_approval                          | FUNCTION     |
| public             | create_extrato_on_anticipation                    | FUNCTION     |
| public             | create_extrato_on_refunded_chargeback             | FUNCTION     |
| public             | create_prechargeback_entry                        | FUNCTION     |
| public             | desativar_outros_baas                             | FUNCTION     |
| public             | fn_clean_expired_validation_codes                 | FUNCTION     |
| public             | generate_billing                                  | FUNCTION     |
| public             | get_cached_company_config                         | FUNCTION     |
| public             | get_top_subjects                                  | FUNCTION     |
| public             | has_access_to_company                             | FUNCTION     |
| public             | has_permission                                    | FUNCTION     |
| public             | is_admin                                          | FUNCTION     |
| public             | is_company                                        | FUNCTION     |
| public             | log_table_changes                                 | FUNCTION     |
| public             | process_acquirer_obligations                      | FUNCTION     |
| public             | process_reservas                                  | FUNCTION     |
| public             | process_withdrawal_obligations                    | FUNCTION     |
| public             | refresh_mv_user_company_info                      | FUNCTION     |
| public             | refresh_transactions_summary_mv                   | FUNCTION     |
| public             | set_duedate                                       | FUNCTION     |
| public             | update_elements_checkout_index                    | FUNCTION     |
| public             | update_estornado                                  | FUNCTION     |
| public             | update_expired_transactions                       | FUNCTION     |
| public             | update_or_create_billing                          | FUNCTION     |
| public             | update_personalization_active                     | FUNCTION     |
| public             | update_ticket_on_new_message                      | FUNCTION     |
| public             | update_total_itemcheckout                         | FUNCTION     |
| public             | update_transaction_history                        | FUNCTION     |
| public             | update_updated_at_column                          | FUNCTION     |
| public             | update_wallet_balance_on_withdrawal_status_change | FUNCTION     |
| public             | validate_withdrawal                               | FUNCTION     |
| realtime           | apply_rls                                         | FUNCTION     |
| realtime           | broadcast_changes                                 | FUNCTION     |
| realtime           | build_prepared_statement_sql                      | FUNCTION     |
| realtime           | cast                                              | FUNCTION     |
| realtime           | check_equality_op                                 | FUNCTION     |
| realtime           | is_visible_through_filters                        | FUNCTION     |
| realtime           | list_changes                                      | FUNCTION     |
| realtime           | quote_wal2json                                    | FUNCTION     |
| realtime           | send                                              | FUNCTION     |
| realtime           | subscription_check_filters                        | FUNCTION     |
| realtime           | to_regrole                                        | FUNCTION     |
| realtime           | topic                                             | FUNCTION     |
| storage            | can_insert_object                                 | FUNCTION     |
| storage            | extension                                         | FUNCTION     |
| storage            | filename                                          | FUNCTION     |
| storage            | foldername                                        | FUNCTION     |
| storage            | get_size_by_bucket                                | FUNCTION     |
| storage            | list_multipart_uploads_with_delimiter             | FUNCTION     |
| storage            | list_objects_with_delimiter                       | FUNCTION     |
| storage            | operation                                         | FUNCTION     |
| storage            | search                                            | FUNCTION     |
| storage            | update_updated_at_column                          | FUNCTION     |
| supabase_functions | http_request                                      | FUNCTION     |
| vault              | _crypto_aead_det_decrypt                          | FUNCTION     |
| vault              | create_secret                                     | FUNCTION     |
| vault              | update_secret                                     | FUNCTION     |