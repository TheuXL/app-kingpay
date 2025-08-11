1.  **Login Inicial:** Uma requisição é feita para `POST {{base_url}}/auth/v1/token` usando a `apikey` e as credenciais do usuário.
2.  **Obtenção do Token:** A resposta dessa requisição contém um `access_token`.
3.  **Autenticação nas Demais Requisições:** Todas as outras requisições que precisam de autenticação (a grande maioria) utilizam este `access_token` no cabeçalho `Authorization` como um `Bearer Token`.

**Módulo: Auth**
1.   `POST /auth/v1/token?grant_type=password` (Gerar token/fazer login)
2.   `POST /auth/v1/signup` (Criar Conta)

**Módulo: Código de Segurança**
3.   `POST /functions/v1/validation-codes/generate` (Gerar Código)
4.   `POST /functions/v1/validation-codes/validate` (Validar Código)

**Módulo: Tickets**
5.   `POST /functions/v1/support-tickets` (Criar ticket, Listar, Criar Mensagem, Listar Mensagens, etc.)

**Módulo: Transações**
6.   `POST /functions/v1/transactions` (Gerar Pix, Cartão, etc.)
7.   `GET /functions/v1/credentials` (Credenciais)
8.   `POST /functions/v1/webhookfx` (Webhook)

**Módulo: SUBCONTAS**
9.   `POST /proxy` (Rotas Proxy - Criar Conta Iugu)
10.   `POST /request_verification` (Rotas Proxy - Enviar KYC Iugu)
11.   `POST /v1/web_hooks` (Rotas Iugu - Criar/Listar Webhook)
12.   `POST /functions/v1/subconta` (Cria sub conta e envia Kyc)
13.   `PUT /functions/v1/subconta/resend_documents` (Reenviar Documentos)
14.   `POST /functions/v1/subconta/checkstatus` (Verificar Status)
15.   `POST /functions/v1/subconta/check_kyc` (Verificar KYC)

**Módulo: Logs**
16.   `GET /functions/v1/audit-log` (Logs)

**Módulo: taxas**
17.   `POST /functions/v1/taxas` (Calcular Taxas)

**Módulo: Chaves Pix Admin**
18.   `GET /functions/v1/pix-key` (Todas Chaves Pix)
19.   `PATCH /functions/v1/pix-key/:id/approve` (Aprovar ou Reprovar Chave Pix)

**Módulo: Subconta (Cliente)**
20.   `GET /functions/v1/subconta` (Listar Subcontas)

**Módulo: Configurações**
21.   `GET /functions/v1/configuracoes/termos` (Termos de Uso)
22.   `PUT /functions/v1/configuracoes/termos` (Atualizar os Termos)
23.   `PUT /functions/v1/configuracoes` (Atualizar Configurações)
24.   `PUT /functions/v1/personalization` (Atualizar Personalização)
25.   `GET /functions/v1/personalization` (Ver Personalização)
26.   `GET /functions/v1/config-companie-view` (Visualizar Configurações da Empresa)

**Módulo: UtmFy (Pixel Tracker)**
27.   `GET /functions/v1/pixelTracker` (Buscar UtmFy)
28.   `POST /functions/v1/pixelTracker` (Criar UtmFy)
29.   `PATCH /functions/v1/pixelTracker` (Atualizar UtmFy)

**Módulo: Análise de Risco**
30.   `POST /functions/v1/risk` (Padrões de Risco)

**Módulo: Clientes**
31.   `GET /functions/v1/clientes` (Todos Clientes)
32.   `POST /functions/v1/clientes` (Criar Cliente)
33.   `PUT /functions/v1/clientes` (Editar Cliente)
34.   `GET /functions/v1/clientes/:id` (Visualizar Cliente)

**Módulo: Link de Pagamento**
35.   `GET /functions/v1/link-pagamentos` (Pegar Links)
36.   `GET /functions/v1/link-pagamentos?id=:id` (Pegar Link único)
37.   `GET /functions/v1/link-pagamento-view/:id` (Visualizar Link de Pagamento)
38.   `POST /functions/v1/link-pagamentos` (Criar Link)
39.   `PATCH /functions/v1/link-pagamentos/:id` (Editar Link)

**Módulo: Padrões (Admin)**
40.   `GET /functions/v1/standard` (Padrões)
41.   `PATCH /functions/v1/standard/last` (Atualizar padrões)

**Módulo: Chave Pix (Cliente)**
42.   `GET /functions/v1/pix-key` (Buscar Chaves Pix)
43.   `POST /functions/v1/pix-key` (Criar Chave Pix)
44.   `PUT /functions/v1/pix-key/:id` (Atualizar Chave Pix)

**Módulo: Alertas**
45.   `GET /functions/v1/alerts` (Buscar Alertas)
46.   `POST /functions/v1/alerts` (Criar Alertas)
47.   `POST /functions/v1/alerts/mark-viewed` (Marcar como Visualizado)
48.   `DELETE /functions/v1/alerts` (Deletar Alerta)

**Módulo: Configurações do Administrador**
49.   `GET /functions/v1/configuracoes/termos` (Email Templates - *Endpoint duplicado, provavelmente um erro de cópia/cola*)
50.   `PUT /functions/v1/configuracoes/emails` (Atualizar Email Templates)
51.   `PUT /functions/v1/configuracoes/acecitar-termos` (Aceitar os Termos)

**Módulo: Dashboard**
52.   `POST /functions/v1/dados-dashboard` (Dados Dashboard)
53.   `GET /functions/v1/analytics-reports/top-sellers/:startDate/:endDate` (Top Vendedores)
54.   `POST /functions/v1/dados-dashboard/top-produtos` (Top Produtos)
55.   `POST /functions/v1/dados-dashboard/grafico` (Gráfico)
56.   `POST /functions/v1/dados-dashboard/infos-adicionais` (Infos Adicionais)
57.   `POST /functions/v1/dados-dashboard/top-sellers` (Top Vendedores)
58.   `POST /functions/v1/dados-dashboard/providers` (Provedores)
59.   `POST /functions/v1/dados-dashboard/acquirer` (Adquirentes)
60.   `POST /functions/v1/faturamento-whitelabel` (Faturamento do Whitelabel)
61.   `POST /functions/v1/whitelabel-financeiro` (Financeiro)

**Módulo: Saques**
62.   `GET /functions/v1/saques` (Todos Saques)
63.   `POST /functions/v1/withdrawals` (Criar Saque)
64.   `PATCH /functions/v1/withdrawals/:id` (Aprovar/Negar/Pagar Saque)
65.   `GET /functions/v1/saques/aggregates` (Dados de Saques)

**Módulo: Antecipações**
66.   `GET /functions/v1/antecipacoes/anticipations` (Todas Antecipações)
67.   `POST /functions/v1/antecipacoes/create` (Criar Antecipação)
68.   `POST /functions/v1/antecipacoes/approve` (Aprovar Antecipação)
69.   `PATCH /functions/v1/antecipacoes/deny` (Negar Antecipação)

**Módulo: User**
70.   `GET /functions/v1/users` (Todos Usuários)
71.   `GET /functions/v1/users/:id` (Buscar Usuário pelo ID)
72.   `GET /functions/v1/users/:id/apikey` (Chave API)
73.   `GET /functions/v1/users/:id/permissions` (Permissões)
74.   `POST /functions/v1/users/create` (Criar Usuário)
75.   `PATCH /functions/v1/users/:id/edit` (Editar Usuário)
76.   `PATCH /functions/v1/users/:id/permissions` (Alterar Permissões)
77.   `POST /functions/v1/users/register` (Criar usuário e empresa)

**Módulo: Carteira**
78.   `POST /functions/v1/antecipacoes/create` (Antecipar)
79.   `POST /functions/v1/wallet/remove-balance` (Remover Saldo)
80.   `POST /functions/v1/wallet/balance-management` (Gerenciar Saldo)
81.   `GET /functions/v1/wallet` (Wallet)
82.   `GET /functions/v1/extrato/:userId` (Extrato)

**Módulo: Webhooks**
83.   `GET /functions/v1/webhook` (Listar Webhooks)
84.   `POST /functions/v1/webhook` (Criar Webhook)
85.   `PUT /functions/v1/webhook/:webhookId` (Editar Webhook)
86.   `DELETE /functions/v1/webhook/:webhookId` (Deletar Webhook)

**Módulo: Faturas**
87.   `GET /functions/v1/billings` (Faturas)
88.   `PATCH /functions/v1/billings/pay` (Atualizar Fatura)

**Módulo: Baas (Admin)**
89.   `GET /functions/v1/baas` (Todos Baas)
90.   `GET /functions/v1/baas/:id` (Baas Pelo id)
91.   `GET /functions/v1/baas/:id/taxas` (Taxas do Baas)
92.   `PATCH /functions/v1/baas/:id/active` (Ativar Baas)
93.   `PATCH /functions/v1/baas/:id/taxa` (Alterar Taxa do Baas)

**Módulo: Adquirentes (Admin)**
94.   `GET /functions/v1/acquirers` (Todas Adquirentes)
95.   `GET /functions/v1/acquirers/:id` (Adquirente pelo ID)
96.   `GET /functions/v1/acquirers/:id/taxas` (Taxas da Adquirente)
97.   `PATCH /functions/v1/acquirers/:id/active` (Ativar Adquirente)
98.   `PATCH /functions/v1/acquirers/:id/taxas` (Alterar Taxas Adquirente)

**Módulo: Empresa**
99.   `GET /functions/v1/companies` (Todas Empresas)
100.   `GET /functions/v1/companies/contagem` (Contagem)
101.   `GET /functions/v1/companies/:id` (Buscar Empresa)
102.   `GET /functions/v1/companies/:id/taxas` (Taxas da Empresa)
103.   `GET /functions/v1/companies/:id/reserva` (Reserva)
104.   `GET /functions/v1/companies/:id/config` (Configurações)
105.   `GET /functions/v1/companies/:id/docs` (Documentos)
106.   `GET /functions/v1/companies/:id/adq` (Adquirentes)
107.   `GET /functions/v1/companies/:id/financial-info` (Financeiro)
108.   `POST /functions/v1/companies` (Criar Empresa)
109.   `PATCH /functions/v1/companies/:id/taxas` (Atualizar Taxas)
110.   `PATCH /functions/v1/companies/:id/taxas-bulk` (Atualizar Taxas em Massa)
111.   `PATCH /functions/v1/companies/:id/docs` (Atualizar Documentos)
112.   `PATCH /functions/v1/companies/:id/config` (Atualizar Permissões)
113.   `PATCH /functions/v1/companies/:id/config-bulk` (Atualizar Permissões em Massa)
114.   `PATCH /functions/v1/companies/:id/reserva` (Atualizar Reserva)
115.   `PATCH /functions/v1/companies/:id/adq` (Atualizar Adquirente)
116.   `PATCH /functions/v1/companies/:id/status` (Bloquear/Desbloquear Empresa)
117.   `PATCH /functions/v1/companies/:id/reserva-bulk` (Editar Reserva Em massa)

**Pré-requisito Essencial:** O fluxo de autenticação descrito na resposta anterior é a base para todos os endpoints a partir do número 3. O aplicativo **deve** primeiro executar o endpoint **1** para obter o `access_token` e armazená-lo de forma segura (ex: `expo-secure-store`) antes de prosseguir.
---

### **Módulo: Auth**

**1. `POST /auth/v1/token?grant_type=password` (Gerar token/fazer login)**
*   **Objetivo:** Autenticar um usuário. É o ponto de entrada da aplicação.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/auth/v1/token?grant_type=password`
    *   **Headers:** `{ "Content-Type": "application/json", "apikey": EXPO_PUBLIC_SUPABASE_ANON_KEY }`
    *   **Body:** `{ "email": "user@email.com", "password": "user_password" }`
*   **Resposta (Response):** Retorna um objeto JSON contendo o `access_token`.
    ```json
    {
      "access_token": "um_token_jwt_muito_longo...",
      ...
    }
    ```
*   **Interdependência:** **Fundamental.** O `access_token` retornado é necessário para **todos os endpoints subsequentes** (exceto o #2). O app deve armazenar este token.

**2. `POST /auth/v1/signup` (Criar Conta)**
*   **Objetivo:** Registrar um novo usuário.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/auth/v1/signup`
    *   **Headers:** `{ "Content-Type": "application/json", "apikey": EXPO_PUBLIC_SUPABASE_ANON_KEY }`
    *   **Body:** `{ "email": "new_user@email.com", "password": "a_strong_password" }`
*   **Resposta (Response):** Retorna os dados do usuário criado. Pode incluir uma sessão e `access_token` para login automático.
*   **Interdependência:** Nenhum. É um ponto de partida.

---

### **Módulo: Código de Segurança**

**3. `POST /functions/v1/validation-codes/generate` (Gerar Código)**
*   **Objetivo:** Gerar um código de segurança temporário para o usuário logado.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/validation-codes/generate`
    *   **Headers:** `{ "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** Vazio (`{}`).
*   **Resposta (Response):** `{ "success": true, "code": "ABC123XYZ" }`
*   **Interdependência:** Requer `access_token` do endpoint **#1**. O `code` retornado é usado no endpoint **#4**.

**4. `POST /functions/v1/validation-codes/validate` (Validar Código)**
*   **Objetivo:** Verificar se um código de segurança é válido.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/validation-codes/validate`
    *   **Headers:** `{ "Content-Type": "application/json", "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** `{ "code": "ABC123XYZ" }`
*   **Resposta (Response):** `{ "success": true, "message": "Código validado com sucesso" }`
*   **Interdependência:** Requer `access_token` do endpoint **#1** e o `code` do endpoint **#3**.

---

### **Módulo: Tickets**

**5. `POST /functions/v1/support-tickets` (Operações de Tickets de Suporte)**
*   **Objetivo:** Centralizar todas as ações de suporte (criar, listar, responder, etc.).
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/support-tickets`
    *   **Headers:** `{ "Content-Type": "application/json", "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** Varia conforme a ação. Exemplo para criar:
        ```json
        {
          "action": "create_ticket",
          "payload": { "subject": "Assunto", "message": "Minha dúvida..." }
        }
        ```
*   **Resposta (Response):** Varia. A criação retorna os dados do ticket. A listagem retorna um array de tickets.
*   **Interdependência:** Requer `access_token` do endpoint **#1**. Ações de resposta (`send_message`) precisam de um `ticket_id` obtido previamente.

---

### **Módulo: Transações**

**6. `POST /functions/v1/transactions` (Gerar Pix, Cartão, etc.)**
*   **Objetivo:** Criar uma transação de pagamento.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/transactions`
    *   **Headers:** `{ "Content-Type": "application/json", "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** Objeto detalhado com dados do cliente, itens, valor, método de pagamento, etc.
*   **Resposta (Response):** Retorna os dados da transação, incluindo o código para pagamento PIX ou o status do cartão.
*   **Interdependência:** Requer `access_token` do endpoint **#1**.

**7. `GET /functions/v1/credentials` (Credenciais)**
*   **Objetivo:** Obter credenciais de API para o usuário logado (ex: chaves públicas para integrações de frontend).
*   **Requisição (Request):**
    *   **Método:** `GET`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/credentials`
    *   **Headers:** `{ "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
*   **Resposta (Response):** Objeto JSON com as chaves/credenciais.
*   **Interdependência:** Requer `access_token` do endpoint **#1**.

**8. `POST /functions/v1/webhookfx` (Webhook)**
*   **Objetivo:** Receber notificações automáticas do provedor de pagamento.
*   **Integração no App:** **Nenhuma.** Este endpoint é para ser configurado no painel do provedor de pagamentos e é chamado pelo servidor deles, não pelo seu app.

---

### **Módulo: SUBCONTAS (Marketplace)**

**9. `POST /proxy` (Criar Conta Iugu)**
*   **Objetivo:** Abstrair a criação de uma subconta no gateway de pagamento (Iugu) através do seu backend.
*   **Requisição (Request):**
    *   **Método:** `POST`
    *   **URL:** `EXPO_PUBLIC_SUPABASE_URL` + `/proxy`
    *   **Headers:** `{ "Content-Type": "application/json", "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** Contém as chaves da sua conta master e os dados da nova subconta.
        ```json
        {
          "apiToken": "SUA_CHAVE_MESTRA_IUGU",
          "endpoint": "/v1/marketplace/create_account",
          "payload": { "name": "Nome da Subconta" }
        }
        ```
*   **Resposta (Response):** Retorna a resposta da API da Iugu, repassada pelo seu backend.
*   **Interdependência:** Requer `access_token` do endpoint **#1**.

**10. `POST /request_verification` (Enviar KYC Iugu)**
*   **Objetivo:** Enviar documentos de verificação (KYC) para uma subconta.
*   **Integração no App:** Semelhante ao **#9**. O app envia os dados para seu backend, que então repassa para a Iugu de forma segura. O app nunca se comunica diretamente com a Iugu.

**11. `POST /v1/web_hooks` (Criar/Listar Webhook Iugu)**
*   **Objetivo:** Configurar webhooks na Iugu.
*   **Integração no App:** Provavelmente uma funcionalidade de painel administrativo, não para o usuário final. Segue a mesma lógica de proxy dos endpoints **#9** e **#10**.

**12 a 15. Endpoints de Subconta (`/functions/v1/subconta/*`)**
*   **Objetivo:** Gerenciar subcontas (criar, reenviar docs, checar status) através das suas próprias funções.
*   **Requisição (Request):**
    *   **Método:** `POST` ou `PUT`
    *   **URL:** Ex: `EXPO_PUBLIC_SUPABASE_URL` + `/functions/v1/subconta`
    *   **Headers:** `{ "Content-Type": "application/json", "Authorization": "Bearer SEU_ACCESS_TOKEN" }`
    *   **Body:** Varia conforme a função, geralmente contendo o ID da empresa ou da subconta.
*   **Resposta (Response):** Confirmação da operação.
*   **Interdependência:** Requer `access_token` do endpoint **#1**.

---

*(A partir daqui, a lógica se repete. Quase todos os endpoints são funções (`/functions/v1/*`) que requerem o `access_token`. Vou focar no objetivo de cada um.)*

### **Módulo: Logs**

**16. `GET /functions/v1/audit-log` (Logs)**
*   **Objetivo:** Obter um registro de atividades (logs de auditoria) para o usuário ou empresa.
*   **Requisição:** `GET` autenticado com `Bearer Token`.

---

### **Módulo: Taxas**

**17. `POST /functions/v1/taxas` (Calcular Taxas)**
*   **Objetivo:** Simular o cálculo de taxas para uma transação.
*   **Requisição:** `POST` autenticado com `Bearer Token`, enviando `company_id`, `valor`, `payment_method` e `parcelas`.

---

### **Módulo: Chaves Pix Admin**

**18. `GET /functions/v1/pix-key` (Todas Chaves Pix)**
*   **Objetivo:** (Admin) Listar todas as chaves PIX cadastradas na plataforma.
*   **Requisição:** `GET` autenticado com `Bearer Token` de um usuário administrador.

**19. `PATCH /functions/v1/pix-key/:id/approve` (Aprovar/Reprovar Chave Pix)**
*   **Objetivo:** (Admin) Alterar o status de validação de uma chave PIX.
*   **Requisição:** `PATCH` autenticado com `Bearer Token` de um admin, passando o `id` da chave na URL e o status no corpo.

---

### **Módulo: Configurações e Personalização**

**21 a 26.**
*   **Objetivo:** Gerenciar configurações globais (termos, funcionalidades) e personalização da plataforma (cores, logos).
*   **Integração no App:**
    *   `GET`: Para buscar as configurações e aplicar no app (ex: carregar a cor primária ou o texto dos termos de uso).
    *   `PUT`: Para painéis administrativos onde o dono do app pode alterar essas configurações.

---

### **Módulo: Clientes (CRM)**

**31 a 34.**
*   **Objetivo:** Gerenciar uma base de clientes (CRUD - Criar, Ler, Atualizar, Deletar).
*   **Integração no App:**
    *   `GET /functions/v1/clientes`: Listar clientes para o usuário logado.
    *   `POST /functions/v1/clientes`: Criar um novo cliente.
    *   `PUT /functions/v1/clientes`: Editar um cliente existente (precisa do ID do cliente).
    *   `GET /functions/v1/clientes/:id`: Buscar um cliente específico pelo seu ID.

---

### **Módulo: Link de Pagamento**

**35 a 39.**
*   **Objetivo:** Criar e gerenciar links de pagamento reutilizáveis.
*   **Integração no App:**
    *   `POST`: Criar um novo link com valor, métodos de pagamento, etc.
    *   `GET`: Listar os links criados pelo usuário. O app recebe a URL do link na resposta, que pode ser compartilhada.
    *   `GET .../:id`: Obter detalhes de um link específico.
    *   `PATCH .../:id`: Atualizar um link existente.

---

### **Módulo: Dashboard e Relatórios**

**52 a 61.**
*   **Objetivo:** Fornecer dados agregados para a construção de dashboards e relatórios.
*   **Integração no App:** O app chama esses endpoints (ex: `POST /dados-dashboard`) enviando filtros como datas (`startDate`, `endDate`) e recebe de volta dados já calculados (ex: total vendido, ticket médio, etc.) para exibir em gráficos e cartões informativos.

---

### **Módulos Finais (Saques, Antecipações, User, Carteira, Webhooks, etc.)**

A lógica permanece a mesma:

*   **Identificação:** Sempre via `Authorization: Bearer SEU_ACCESS_TOKEN`.
*   **Ação:** O path da URL (ex: `/withdrawals`, `/users`, `/companies`) e o método HTTP (`GET`, `POST`, `PATCH`) definem a operação.
*   **Parâmetros:** Dados são enviados no `body` para `POST`/`PATCH` ou como query/path params para `GET`.
*   **Interdependência:** Ações de edição/deleção (`PATCH`, `DELETE`, `PUT`) quase sempre requerem um `:id` no path da URL, que o app precisa ter obtido de uma chamada de listagem (`GET`) anterior.

Este guia cobre o fluxo completo e as responsabilidades do app React Native para cada endpoint. O segredo é gerenciar o `access_token` corretamente e construir os corpos das requisições conforme a necessidade de cada função.

---

Aqui está a explicação completa, organizada por módulo:

---

### Módulo: AUTH

#### 1. `POST /auth/v1/token` (Login)
*   **Regra de Negócio:** Autentica um usuário no sistema usando e-mail e senha. É o ponto de entrada principal para qualquer operação que exija autenticação.
*   **Configuração:** Requer as credenciais de um usuário válido (`email`, `password`). 
*   **Requisição:** A chamada é feita diretamente pelo SDK do Supabase, que encapsula o envio do e-mail e senha no corpo da requisição.
*   **Resposta (Sucesso):** Retorna um objeto de sessão contendo o `access_token` (JWT) e informações do usuário, como o `userId`. O `access_token` é essencial e deve ser incluído no cabeçalho `Authorization` de todas as chamadas subsequentes.
    ```json
    { "userId": "c0e9ebd2-c8a8-4442-bb40-dc1626ed5126" }
    ```

---

O app deve guadar o `access_token` ele será usado em preticamente todos os outros endpoits

--

### Módulo: BAAS (ADMIN)

*   **Pré-requisitos:** Todas as chamadas neste módulo exigem um token de um usuário administrador.

#### 2. `GET /functions/v1/baas`
*   **Regra de Negócio:** Lista todos os provedores de "Banking as a Service" (BaaS) configurados na plataforma.
*   **Requisição:** Nenhuma, é uma chamada GET simples.
*   **Resposta (Sucesso):** Um array de objetos, onde cada objeto representa um provedor BaaS.
    ```json
    { "success": true, "Baas": [{ "id": "...", "name": "TREAL", "ativo": true, ... }] }
    ```

#### 3. `GET /functions/v1/baas/:id`
*   **Regra de Negócio:** Busca os detalhes de um provedor BaaS específico pelo seu ID.
*   **Requisição:** O ID do BaaS é passado na URL.
*   **Resposta (Sucesso):** Um objeto contendo os detalhes completos do provedor BaaS solicitado.

#### 4. `GET /functions/v1/baas/:id/taxas`
*   **Regra de Negócio:** Retorna as taxas configuradas para um provedor BaaS específico.
*   **Requisição:** O ID do BaaS na URL.
*   **Resposta (Sucesso):** Um objeto com as taxas, como `fee`.
    ```json
    { "success": true, "taxas": { "fee": 500, ... } }
    ```

#### 5. `PATCH /functions/v1/baas/:id/active`
*   **Regra de Negócio:** Ativa ou desativa um provedor BaaS.
*   **Requisição:** ID do BaaS na URL e um corpo com o status desejado.
    ```json
    // O script envia um payload, mas a resposta indica que pode não ser necessário
    // Payload no script: { "active": false }
    ```
*   **Resposta (Sucesso):** Mensagem de sucesso.

#### 6. `PATCH /functions/v1/baas/:id/taxa`
*   **Regra de Negócio:** Atualiza a taxa (`fee`) de um provedor BaaS.
*   **Requisição:** ID do BaaS na URL e um corpo com a nova taxa em centavos.
    ```json
    { "fee": 500 }
    ```
*   **Resposta (Sucesso):** Mensagem de sucesso.

---

### Módulo: ADQUIRENTES (ADMIN)

*   **Pré-requisitos:** Todas as chamadas exigem um token de administrador.

#### 7. `GET /functions/v1/acquirers`
*   **Regra de Negócio:** Lista todos os adquirentes (gateways de pagamento) configurados na plataforma.
*   **Resposta (Sucesso):** Um array de objetos de adquirentes.

#### 8. `GET /functions/v1/acquirers/:id`, `.../:id/taxas`
*   **Regra de Negócio:** Busca detalhes e taxas de um adquirente específico, similar ao módulo BaaS.
*   **Resposta (Sucesso):** Objetos detalhados do adquirente e suas taxas.

#### 9. `PATCH /functions/v1/acquirers/:id/active`
*   **Regra de Negócio:** Ativa ou desativa um adquirente.
*   **Requisição:** ID do adquirente na URL. Corpo: `{ "active": false }`.
*   **Resposta (Sucesso):** Mensagem de sucesso.

#### 10. `PATCH /functions/v1/acquirers/:id/taxas`
*   **Regra de Negócio:** Atualiza o conjunto de taxas para um adquirente.
*   **Requisição:** ID na URL. O corpo é um objeto com as taxas a serem atualizadas (ex: `mdr_pix`, `mdr_1x`, `boleto_fee_fixed`).
    ```json
    { "mdr_pix": 0.85, "mdr_1x": 3.49, ... }
    ```
*   **Resposta (Sucesso):** Mensagem de sucesso e o objeto do adquirente atualizado.

---

### Módulo: EMPRESA

*   **Pré-requisitos:** A maioria das chamadas de escrita (`PATCH`, `POST`) exige um token de administrador.

#### 11. `GET /functions/v1/companies`, `.../contagem`, `.../:id` e sub-rotas
*   **Regra de Negócio:** Permite listar todas as empresas, obter uma contagem por status, e buscar todos os detalhes de uma empresa específica, incluindo suas taxas, reservas, configurações, documentos e adquirentes associados.
*   **Resposta (Sucesso):** Retorna arrays de empresas ou objetos detalhados para cada sub-rota.

#### 12. `PATCH /functions/v1/companies/:id/[taxas|docs|config|reserva|adq|status]`
*   **Regra de Negócio:** Permite a um administrador atualizar granularmente as configurações de uma única empresa.
*   **Requisição:** O ID da empresa na URL e um corpo contendo apenas os campos a serem alterados.
    *   **Exemplo (taxas):** `{ "pix_fee_percentage": 0.98, ... }`
    *   **Exemplo (config):** `{ "autotransfer": true }`
    *   **Exemplo (status):** `{ "status": "approved" }`
*   **Resposta (Sucesso):** `{ "Success": true }`

#### 13. `PATCH /functions/v1/companies/:id/[taxas-bulk|config-bulk|reserva-bulk]`
*   **Regra de Negócio:** Aplica uma mesma configuração (de taxas, de operação ou de reserva) para **todas** as empresas da plataforma de uma só vez. O `:id` na URL é ignorado.
*   **Requisição:** O corpo da requisição contém o objeto de configuração a ser aplicado em massa.
    *   **Exemplo (config-bulk):** `{ "autotransfer": false, "maxtransferamount": 600000 }`
*   **Resposta (Sucesso):** Mensagem de sucesso, podendo incluir o número de empresas afetadas.

#### 14. `POST /functions/v1/companies`
*   **Regra de Negócio:** Cria uma nova empresa na plataforma.
*   **Requisição:** Um corpo detalhado com informações da empresa, incluindo nome, CNPJ/CPF (`taxid`), faturamento médio, endereço, etc.
    ```json
    {
      "name": "Empresa Teste 1753387265404",
      "taxid": "01753387265404",
      "averagebilling": 10000,
      "website": "https://teste.com",
      ...
    }
    ```
*   **Resposta (Sucesso):** O objeto da empresa recém-criada.

---

### Módulo: TAXAS

#### 15. `POST /functions/v1/taxas`
*   **Regra de Negócio:** Simula o cálculo de taxas para uma transação, dadas as configurações de uma empresa. Não cria uma transação, apenas retorna o valor das taxas.
*   **Requisição:**
    ```json
    {
      "company_id": "d2d075e0-...",
      "valor": 10000,
      "payment_method": "PIX",
      "parcelas": 1
    }
    ```
*   **Resposta (Sucesso):** Objeto com os valores das taxas calculadas.
    ```json
    { "taxaIntermediacao": "50.98", "totalTaxas": "50.98" }
    ```

---

### Módulo: UTMFY (PIXEL TRACKER)

#### 16. `POST /functions/v1/pixelTracker`
*   **Regra de Negócio:** Cria um novo pixel de rastreamento para uma empresa.
*   **Requisição:** Corpo detalhado com nome, plataforma, ID do pixel e configurações de gatilho.
    ```json
    {
      "name": "Teste UtmFy",
      "platform": "utmify",
      "pixel_id": "pixel-1753387813635",
      "api_key": "uma-chave-api-de-teste",
      "configuration": { "trigger_on_payment": true, ... },
      "status": true
    }
    ```
*   **Resposta (Sucesso):** Mensagem de sucesso e o objeto do pixel criado.

#### 17. `GET /functions/v1/pixelTracker`
*   **Regra de Negócio:** Lista os pixels de rastreamento associados à empresa do usuário autenticado.
*   **Resposta (Sucesso):** Um array de objetos de pixel.

---

### Demais Módulos (Resumido)

*   **USER (`GET /users`):** (Admin) Lista todos os usuários da plataforma.
*   **CÓDIGO DE SEGURANÇA (`POST /validation-codes/...`):** Gera e valida códigos de segurança de uso único, provavelmente para operações sensíveis como saques.
*   **TICKETS (`POST /support-tickets`):** Um endpoint multifuncional que permite criar tickets, listar tickets e enviar/listar mensagens, controlado pelo campo `action` no payload.
*   **LOGS (`GET /audit-log`):** (Admin) Retorna o log de auditoria de ações importantes na plataforma.
*   **CHAVES PIX ADMIN (`GET /pix-key`):** (Admin) Lista todas as chaves Pix de todos os usuários. O backend diferencia a chamada de um admin pela permissão no token.
*   **SUBCONTA (CLIENTE) (`GET /subconta`):** Lista as subcontas (Iugu) associadas à empresa do usuário logado.
*   **CONFIGURAÇÕES E PERSONALIZAÇÃO (`GET`/`PUT`):** Permite a um admin visualizar e atualizar as configurações globais do sistema, como termos de uso, regras de negócio e aparência (cores, logos).
*   **CLIENTES (`POST`/`GET`):** Funciona como um CRM simples, permitindo criar e listar clientes finais (consumidores) associados à empresa do usuário.
*   **LINK DE PAGAMENTO (`POST`/`GET`/`PUT`):** Fornece um CRUD completo para criar, listar, visualizar e editar links de pagamento.
*   **PADRÕES (ADMIN) (`GET /standard`):** (Admin) Visualiza as configurações padrão (taxas, parcelamento, etc.) que são aplicadas a novas empresas.
*   **ALERTAS (`POST`/`GET`):** (Admin) Permite criar e visualizar alertas globais que podem ser exibidos para todos os usuários.
*   **DASHBOARD (`POST`/`GET /dados-dashboard/...`):** Um conjunto de endpoints de análise que retornam dados agregados para os painéis de controle, sempre esperando um intervalo de datas (`start_date`, `end_date`).
*   **SAQUES (`GET /saques`, `.../aggregates`):** (Admin) Lista todas as solicitações de saque e retorna uma contagem agregada por status.
*   **ANTECIPAÇÕES (`GET /antecipacoes/anticipations`):** Lista as solicitações de antecipação de recebíveis.
*   **CARTEIRA (`GET /wallet`, `.../extrato/:userId`):** Retorna o resumo completo dos saldos de um usuário (disponível, a receber, etc.) e o extrato detalhado de movimentações.
*   **WEBHOOKS (`POST`/`GET`/`PUT`/`DELETE`):** CRUD completo para gerenciar webhooks.
*   **FATURAS (`GET /billings`):** Lista as faturas (provavelmente relacionadas a cobranças de mensalidade da plataforma).