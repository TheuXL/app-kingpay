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


Edge Functions


Name	URL	Created	Last updated	Deployments
transactions

https://api.kingpaybr.com/functions/v1/transactions


13 Apr, 2025 23:09


7 days ago

82

withdrawals

https://api.kingpaybr.com/functions/v1/withdrawals


13 Apr, 2025 23:09


2 months ago

44

ShopfyOrder

https://api.kingpaybr.com/functions/v1/ShopfyOrder


13 Apr, 2025 23:09


3 months ago

31

handleSendWebhook

https://api.kingpaybr.com/functions/v1/handleSendWebhook


13 Apr, 2025 23:10


3 months ago

31

company

https://api.kingpaybr.com/functions/v1/company


13 Apr, 2025 23:10


3 months ago

31

products-shopfy

https://api.kingpaybr.com/functions/v1/products-shopfy


13 Apr, 2025 23:10


3 months ago

31

createCheckout

https://api.kingpaybr.com/functions/v1/createCheckout


13 Apr, 2025 23:10


3 months ago

31

customers

https://api.kingpaybr.com/functions/v1/customers


13 Apr, 2025 23:10


3 months ago

31

balance

https://api.kingpaybr.com/functions/v1/balance


13 Apr, 2025 23:10


3 months ago

31

anticipation

https://api.kingpaybr.com/functions/v1/anticipation


13 Apr, 2025 23:10


3 months ago

31

handleAsaasWebhookBaas

https://api.kingpaybr.com/functions/v1/handleAsaasWebhookBaas


13 Apr, 2025 23:10


3 months ago

31

handleTransfeeraWebhookBaas

https://api.kingpaybr.com/functions/v1/handleTransfeeraWebhookBaas


13 Apr, 2025 23:10


3 months ago

31

webhook_pagarme

https://api.kingpaybr.com/functions/v1/webhook_pagarme


13 Apr, 2025 23:10


3 months ago

31

webhook_estorno

https://api.kingpaybr.com/functions/v1/webhook_estorno


13 Apr, 2025 23:10


3 months ago

31

webhookMediusPag

https://api.kingpaybr.com/functions/v1/webhookMediusPag


13 Apr, 2025 23:10


3 months ago

31

webhookOwen

https://api.kingpaybr.com/functions/v1/webhookOwen


13 Apr, 2025 23:10


3 months ago

31

sendTransactionalEmails

https://api.kingpaybr.com/functions/v1/sendTransactionalEmails


13 Apr, 2025 23:10


3 months ago

31

pixelFacebook

https://api.kingpaybr.com/functions/v1/pixelFacebook


13 Apr, 2025 23:10


3 months ago

31

webhookAbmex

https://api.kingpaybr.com/functions/v1/webhookAbmex


13 Apr, 2025 23:10


3 months ago

31

webhookAsaas

https://api.kingpaybr.com/functions/v1/webhookAsaas


13 Apr, 2025 23:10


3 months ago

31

webhookPrimePag

https://api.kingpaybr.com/functions/v1/webhookPrimePag


13 Apr, 2025 23:10


3 months ago

31

webhookIugu

https://api.kingpaybr.com/functions/v1/webhookIugu


13 Apr, 2025 23:10


3 months ago

31

webhookTransfeeraTransaction

https://api.kingpaybr.com/functions/v1/webhookTransfeeraTransaction


13 Apr, 2025 23:10


3 months ago

31

webhookSnakePay

https://api.kingpaybr.com/functions/v1/webhookSnakePay


13 Apr, 2025 23:10


3 months ago

31

taxas

https://api.kingpaybr.com/functions/v1/taxas


13 Apr, 2025 23:10


3 months ago

31

webhookFivePay

https://api.kingpaybr.com/functions/v1/webhookFivePay


13 Apr, 2025 23:11


3 months ago

31

webhookVoluti

https://api.kingpaybr.com/functions/v1/webhookVoluti


13 Apr, 2025 23:11


3 months ago

31

webhookWeMax

https://api.kingpaybr.com/functions/v1/webhookWeMax


13 Apr, 2025 23:11


3 months ago

31

webhookArmPay

https://api.kingpaybr.com/functions/v1/webhookArmPay


13 Apr, 2025 23:11


3 months ago

31

webhookGlobalChargebackVisa

https://api.kingpaybr.com/functions/v1/webhookGlobalChargebackVisa


13 Apr, 2025 23:11


3 months ago

31

webhookGlobalChargebackMasterCard

https://api.kingpaybr.com/functions/v1/webhookGlobalChargebackMasterCard


13 Apr, 2025 23:11


3 months ago

31

wallet

https://api.kingpaybr.com/functions/v1/wallet


13 Apr, 2025 23:11


6 days ago

36

antecipacoes

https://api.kingpaybr.com/functions/v1/antecipacoes


13 Apr, 2025 23:11


3 months ago

31

companies

https://api.kingpaybr.com/functions/v1/companies


13 Apr, 2025 23:11


15 days ago

40

users

https://api.kingpaybr.com/functions/v1/users


13 Apr, 2025 23:11


2 months ago

38

webhookVolutiTransaction

https://api.kingpaybr.com/functions/v1/webhookVolutiTransaction


13 Apr, 2025 23:11


3 months ago

31

webhookUltraPayments

https://api.kingpaybr.com/functions/v1/webhookUltraPayments


13 Apr, 2025 23:11


3 months ago

31

webhookMidasPay

https://api.kingpaybr.com/functions/v1/webhookMidasPay


13 Apr, 2025 23:11


3 months ago

31

webhookArmPayV2

https://api.kingpaybr.com/functions/v1/webhookArmPayV2


13 Apr, 2025 23:11


3 months ago

31

webhookPagouAi

https://api.kingpaybr.com/functions/v1/webhookPagouAi


13 Apr, 2025 23:11


3 months ago

31

webhookDubPay

https://api.kingpaybr.com/functions/v1/webhookDubPay


13 Apr, 2025 23:11


3 months ago

31

webhookCupulaHub

https://api.kingpaybr.com/functions/v1/webhookCupulaHub


13 Apr, 2025 23:11


3 months ago

31

acquirers

https://api.kingpaybr.com/functions/v1/acquirers


13 Apr, 2025 23:11


3 months ago

31

gatewayConfig

https://api.kingpaybr.com/functions/v1/gatewayConfig


13 Apr, 2025 23:11


3 months ago

31

extrato

https://api.kingpaybr.com/functions/v1/extrato


13 Apr, 2025 23:11


3 months ago

31

baas

https://api.kingpaybr.com/functions/v1/baas


13 Apr, 2025 23:11


3 months ago

31

transacoes

https://api.kingpaybr.com/functions/v1/transacoes


13 Apr, 2025 23:11


2 months ago

37

saques

https://api.kingpaybr.com/functions/v1/saques


13 Apr, 2025 23:11


3 months ago

31

dados-dashboard

https://api.kingpaybr.com/functions/v1/dados-dashboard


13 Apr, 2025 23:12


12 days ago

51

faturamento-whitelabel

https://api.kingpaybr.com/functions/v1/faturamento-whitelabel


13 Apr, 2025 23:12


3 months ago

31

whitelabel-financeiro

https://api.kingpaybr.com/functions/v1/whitelabel-financeiro


13 Apr, 2025 23:12


3 months ago

31

pix-key

https://api.kingpaybr.com/functions/v1/pix-key


13 Apr, 2025 23:12


3 months ago

31

webhook

https://api.kingpaybr.com/functions/v1/webhook


13 Apr, 2025 23:12


3 months ago

31

billings

https://api.kingpaybr.com/functions/v1/billings


13 Apr, 2025 23:12


3 months ago

31

configuracoes

https://api.kingpaybr.com/functions/v1/configuracoes


13 Apr, 2025 23:12


3 months ago

32

alerts

https://api.kingpaybr.com/functions/v1/alerts


13 Apr, 2025 23:12


3 months ago

31

clientes

https://api.kingpaybr.com/functions/v1/clientes


13 Apr, 2025 23:12


3 months ago

31

standard

https://api.kingpaybr.com/functions/v1/standard


13 Apr, 2025 23:12


3 months ago

31

risk

https://api.kingpaybr.com/functions/v1/risk


13 Apr, 2025 23:12


3 months ago

31

webhookVilletPay

https://api.kingpaybr.com/functions/v1/webhookVilletPay


13 Apr, 2025 23:12


3 months ago

31

webhookSafe2pay

https://api.kingpaybr.com/functions/v1/webhookSafe2pay


13 Apr, 2025 23:12


3 months ago

31

webhookPronttus

https://api.kingpaybr.com/functions/v1/webhookPronttus


13 Apr, 2025 23:12


3 months ago

31

webhookArkama

https://api.kingpaybr.com/functions/v1/webhookArkama


13 Apr, 2025 23:12


3 months ago

31

subconta

https://api.kingpaybr.com/functions/v1/subconta


13 Apr, 2025 23:12


3 months ago

31

webhookPlugouAi

https://api.kingpaybr.com/functions/v1/webhookPlugouAi


13 Apr, 2025 23:12


3 months ago

31

webhookPagueSafe

https://api.kingpaybr.com/functions/v1/webhookPagueSafe


13 Apr, 2025 23:14


3 months ago

31

webhookKingCash

https://api.kingpaybr.com/functions/v1/webhookKingCash


13 Apr, 2025 23:14


3 months ago

31

webhookAldoc

https://api.kingpaybr.com/functions/v1/webhookAldoc


13 Apr, 2025 23:14


3 months ago

31

webhookCashtime

https://api.kingpaybr.com/functions/v1/webhookCashtime


13 Apr, 2025 23:14


3 months ago

31

webhookFirebank

https://api.kingpaybr.com/functions/v1/webhookFirebank


13 Apr, 2025 23:14


3 months ago

31

webhookNacionalPag

https://api.kingpaybr.com/functions/v1/webhookNacionalPag


13 Apr, 2025 23:14


3 months ago

31

personalization

https://api.kingpaybr.com/functions/v1/personalization


13 Apr, 2025 23:15


3 months ago

32

webhookPaymentsFlex

https://api.kingpaybr.com/functions/v1/webhookPaymentsFlex


13 Apr, 2025 23:15


3 months ago

31

webhookKount

https://api.kingpaybr.com/functions/v1/webhookKount


13 Apr, 2025 23:15


3 months ago

31

webhookPlugouAiV2

https://api.kingpaybr.com/functions/v1/webhookPlugouAiV2


13 Apr, 2025 23:15


3 months ago

31

link-pagamentos

https://api.kingpaybr.com/functions/v1/link-pagamentos


13 Apr, 2025 23:15


2 months ago

33

webhookPagHubSub

https://api.kingpaybr.com/functions/v1/webhookPagHubSub


13 Apr, 2025 23:15


3 months ago

31

webhookIupiPay

https://api.kingpaybr.com/functions/v1/webhookIupiPay


13 Apr, 2025 23:15


3 months ago

31

webhookCommerceGate

https://api.kingpaybr.com/functions/v1/webhookCommerceGate


13 Apr, 2025 23:15


3 months ago

31

pixelTracker

https://api.kingpaybr.com/functions/v1/pixelTracker


13 Apr, 2025 23:15


3 months ago

31

audit-log

https://api.kingpaybr.com/functions/v1/audit-log


13 Apr, 2025 23:15


3 months ago

31

appNotifications

https://api.kingpaybr.com/functions/v1/appNotifications


13 Apr, 2025 23:16


3 months ago

31

webhookfx

https://api.kingpaybr.com/functions/v1/webhookfx


13 Apr, 2025 23:16


3 months ago

31

webhookpixium

https://api.kingpaybr.com/functions/v1/webhookpixium


13 Apr, 2025 23:16


3 months ago

31

webhookMutual

https://api.kingpaybr.com/functions/v1/webhookMutual


13 Apr, 2025 23:16


3 months ago

31

validation-codes

https://api.kingpaybr.com/functions/v1/validation-codes


13 Apr, 2025 23:16


3 months ago

31

config-companie-view

https://api.kingpaybr.com/functions/v1/config-companie-view


13 Apr, 2025 23:22


3 months ago

31

webhookhorizon

https://api.kingpaybr.com/functions/v1/webhookhorizon


30 Apr, 2025 17:26


2 months ago

29

link-pagamento-view

https://api.kingpaybr.com/functions/v1/link-pagamento-view


02 May, 2025 01:41


2 months ago

28

credentials

https://api.kingpaybr.com/functions/v1/credentials


14 May, 2025 16:09


2 months ago

20

tokenize

https://api.kingpaybr.com/functions/v1/tokenize


14 May, 2025 16:14


2 months ago

19

support-tickets

https://api.kingpaybr.com/functions/v1/support-tickets


07 Jun, 2025 04:29


a month ago

15

webhooklumion

https://api.kingpaybr.com/functions/v1/webhooklumion


15 Jun, 2025 17:32


a month ago

13

webhookvenitpay

https://api.kingpaybr.com/functions/v1/webhookvenitpay


15 Jun, 2025 18:01


a month ago

9

webhookAxisV2

https://api.kingpaybr.com/functions/v1/webhookAxisV2


05 Jul, 2025 10:48


11 days ago

6