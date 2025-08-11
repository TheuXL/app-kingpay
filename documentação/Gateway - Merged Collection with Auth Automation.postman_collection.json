{
	"info": {
		"_postman_id": "e67dbc82-9a52-44a2-ba56-829b0d8443a0",
		"name": "Codiguz - Merged Collection with Auth Automation",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "16496808",
		"_collection_link": "https://codiguz.postman.co/workspace/Gateway~a34215be-eece-43e2-b641-9884eea5819d/collection/16496808-e67dbc82-9a52-44a2-ba56-829b0d8443a0?action=share&source=collection_link&creator=16496808"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "Gerar token",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"var jsonData = pm.response.json();\r",
									"pm.globals.set(\"bearerToken\", jsonData.access_token);"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "apikey",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50c3dxem9mdGN2enN4d2Jtc2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzkyODUsImV4cCI6MjA2NDExNTI4NX0.-UUHbgSHmEd86qgdcwgZ5p6sjBkBOPKNWls9dMaDsgs"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"password\": \"100Senha2002@\"\n    // \"email\": \"lucasguedes@gmail.com\",\n    // \"password\": \"123\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/auth/v1/token?grant_type=password",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"v1",
								"token"
							],
							"query": [
								{
									"key": "grant_type",
									"value": "password"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Gerar token Copy",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"var jsonData = pm.response.json();\r",
									"pm.globals.set(\"bearerToken\", jsonData.access_token);"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "apikey",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZnZqZ3liemR2anFydmVkdWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjkyODAsImV4cCI6MjA1MjU0NTI4MH0.XoyB0VrJi9tBwZxDP6UhmDheuZZgebkAhZg0lv6oZAk"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"password\": \"100Senha2002@\"\n    // \"email\": \"lucasguedes@gmail.com\",\n    // \"password\": \"123\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/auth/v1/token?grant_type=password",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"v1",
								"token"
							],
							"query": [
								{
									"key": "grant_type",
									"value": "password"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Cadastro de User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": ""
						}
					},
					"response": []
				},
				{
					"name": "Criar Conta",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "apikey",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeHJ1bWNhYmZmc3R6b25jamZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3OTUxNTAsImV4cCI6MjA1MDM3MTE1MH0.vC8d6fhu2NjA8GKoaZTDoX3FpI3mFl3xqHZdyOcijCE"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"email\": \"eubrenoteste222@gmail.com\",\n  \"password\": \"kdRBRMPgmjEgzJQvWgFt\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/auth/v1/signup",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"auth",
								"v1",
								"signup"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Código de Segurança",
			"item": [
				{
					"name": "Gerar Código",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/validation-codes/generate",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"validation-codes",
								"generate"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Validar Código",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"code\": \"123\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/validation-codes/validate",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"validation-codes",
								"validate"
							]
						}
					},
					"response": [
						{
							"name": "Erro 1",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"code\": \"SEU_CODIGO\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/validate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"validate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:34:15 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "89"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a27eac00e610-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "22d0d43c-75ec-4c99-97b3-54a9693824b1"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": false,\n    \"message\": \"Código inválido ou não encontrado\"\n}"
						},
						{
							"name": "Validar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"code\": \"VY1TZXLE\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/validate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"validate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:35:14 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "80"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a3f42fb120b4-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "6eb11d0e-e0c3-4315-baae-526da9beeb30"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"message\": \"Código validado com sucesso\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Tickets",
			"item": [
				{
					"name": "Criar ticket",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"action\": \"create_ticket\",\r\n    \"payload\": {\r\n        \"subject\": \"Problema com pagamento\",\r\n        \"message\": \"Não consigo processar um pagamento no sistema\",\r\n        \"attachment_url\": \"https://exemplo.com/screenshot.png\"\r\n    }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Listar Tickets",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"list_tickets\",\r\n  \"payload\": {\r\n  }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Criar Mensagem Usuário",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"send_message\",\r\n  \"payload\": {\r\n    \"ticket_id\": \"f609db1a-7776-484c-ac07-1a84db717090\",\r\n    \"message\": \"Olá, gostaria de saber o status do meu problema\",\r\n    \"attachment_url\": \"https://exemplo.com/screenshot.png\"\r\n  }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Listar Mensagens do ticket",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"action\": \"get_messages\",\r\n    \"payload\": {\r\n        \"ticket_id\": \"f609db1a-7776-484c-ac07-1a84db717090\",\r\n        \"page\": 1,\r\n        \"per_page\": 3\r\n    }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Verificar se tem mensagem não lida",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"check_unread_messages\",\r\n  \"payload\": {}\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Marcar mensagens do ticket como lido",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"mark_message_read\",\r\n  \"payload\": {\r\n    \"ticket_id\": \"f609db1a-7776-484c-ac07-1a84db717090\"\r\n  }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Buscar unico Ticket",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"get_ticket\",\r\n  \"payload\": {\r\n    \"ticket_id\": \"f609db1a-7776-484c-ac07-1a84db717090\"\r\n  }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Métricas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"get_metrics\",\r\n  \"payload\": {}\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				},
				{
					"name": "Mudar o Status",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"action\": \"update_status\",\r\n  \"payload\": {\r\n    \"ticket_id\": \"f609db1a-7776-484c-ac07-1a84db717090\",\r\n    \"status\": \"closed\"\r\n  }\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/support-tickets",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"support-tickets"
							]
						}
					},
					"response": [
						{
							"name": "Gerar Código",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyODU5MDE2LCJpYXQiOjE3NDI4NTU0MTYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI4NTU0MTZ9XSwic2Vzc2lvbl9pZCI6ImU0NmE0MDk1LWUzNjctNDc0Zi05YmM1LWVkMGZmMTNlZjc5OSIsImlzX2Fub255bW91cyI6ZmFsc2V9.vegsbJ57atInVa0IzlGNbjnQK-OTYr5M-SbeZPUF9HQ"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/validation-codes/generate",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"validation-codes",
										"generate"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 24 Mar 2025 22:33:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9259a0fe39682d09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "authorization, x-client-info, apikey, content-type"
								},
								{
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "75c2277f-0fa4-43e8-960f-dd9b6ca64227"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"code\": \"VY1TZXLE\",\n    \"expires_at\": \"2025-03-25T19:33:13.218209-03:00\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "Transações",
			"item": [
				{
					"name": "Gerar Pix Dev",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"customer\": {\n    \"name\": \"Breno Santos\",\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"phone\": \"17991301328\",\n    \"document\": {\n      \"number\": \"49257810810\",\n      \"type\": \"CPF\"\n    }\n  },\n  \"shipping\": {\n    \"address\": {\n      \"street\": \"Rua Alcides Cardoso treme\",\n      \"streetNumber\": \"165\",\n      \"zipCode\": \"15045-464\",\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"country\": \"Brasil\",\n      \"complement\": \"casa\",\n      \"neighborhood\": \"Ana celia\"\n    }\n  },\n  \"paymentMethod\": \"PIX\",\n  \"card\": {\n    \"number\": \"4000000000000010\",\n    \"holderName\": \"BRENO SANTOS\",\n    \"expirationMonth\": 2,\n    \"expirationYear\": 33,\n    \"cvv\": \"154\",\n    \"sessionID\": \"null\"\n  },\n  \"pix\": {\n    \"expiresInDays\": 1\n  },\n  \"boleto\": {\n    \"expiresInDays\": 1\n  },\n  \"installments\": 1,\n  \"items\": [\n    {\n      \"title\": \"adidas\",\n      \"unitPrice\": 10000,\n      \"quantity\": 1,\n      \"externalRef\": \"teste\"\n    }\n  ],\n  \"amount\": 10000,\n  \"postbackUrl\": \"https://webhook.site/cd4f9a3b-0de2-4aee-b6e4-4f6badb2f30d\",\n  \"metadata\": \"{ \\\"provider\\\":\\\"LunaCheckout\\\", \\\"user_identitication_number\\\":\\\"42376523869\\\", \\\"user_email\\\":\\\"suporte.mktdescomplica@gmail.com\\\", \\\"sell_url\\\":\\\"4b5bf6-2.myshopify.com\\\", \\\"order_url\\\":\\\"https:\\\\/\\\\/pagamento.outletfitnespro.store?product=c7f2be19-fb84-11ef-8fd6-46da4690ad53\\\", \\\"referrer_link\\\":\\\"\\\" }\",\n  \"ip\": \"8.8.8.8\",\n  \"description\": \"Teste\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transactions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Credenciais",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"customer\": {\n    \"name\": \"Breno Santos\",\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"phone\": \"17991301328\",\n    \"document\": {\n      \"number\": \"49257810810\",\n      \"type\": \"CPF\"\n    }\n  },\n  \"shipping\": {\n    \"address\": {\n      \"street\": \"Rua Alcides Cardoso treme\",\n      \"streetNumber\": \"165\",\n      \"zipCode\": \"15045-464\",\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"country\": \"Brasil\",\n      \"complement\": \"casa\",\n      \"neighborhood\": \"Ana celia\"\n    }\n  },\n  \"paymentMethod\": \"PIX\",\n  \"card\": {\n    \"number\": \"4000000000000010\",\n    \"holderName\": \"BRENO SANTOS\",\n    \"expirationMonth\": 2,\n    \"expirationYear\": 33,\n    \"cvv\": \"154\",\n    \"sessionID\": \"null\"\n  },\n  \"pix\": {\n    \"expiresInDays\": 1\n  },\n  \"boleto\": {\n    \"expiresInDays\": 1\n  },\n  \"installments\": 1,\n  \"items\": [\n    {\n      \"title\": \"adidas\",\n      \"unitPrice\": 10000,\n      \"quantity\": 1,\n      \"externalRef\": \"teste\"\n    }\n  ],\n  \"amount\": 10000,\n  \"postbackUrl\": \"https://webhook.site/cd4f9a3b-0de2-4aee-b6e4-4f6badb2f30d\",\n  \"metadata\": \"{ \\\"provider\\\":\\\"LunaCheckout\\\", \\\"user_identitication_number\\\":\\\"42376523869\\\", \\\"user_email\\\":\\\"suporte.mktdescomplica@gmail.com\\\", \\\"sell_url\\\":\\\"4b5bf6-2.myshopify.com\\\", \\\"order_url\\\":\\\"https:\\\\/\\\\/pagamento.outletfitnespro.store?product=c7f2be19-fb84-11ef-8fd6-46da4690ad53\\\", \\\"referrer_link\\\":\\\"\\\" }\",\n  \"ip\": \"8.8.8.8\",\n  \"description\": \"Teste\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/credentials",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"credentials"
							]
						}
					},
					"response": []
				},
				{
					"name": "Gerar Pix Produção",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "authorization",
								"value": "Basic c2tfbGlrZV8wbVBzY1Q3WjhoRnhOOFIzSXlDTWN3b3FGVGNqRU5wU1piOTlDQVVoZVowc3l0Nk06",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"ip\": \"189.110.130.247\",\n  \"card\": {\n    \"cvv\": \"301\",\n    \"number\": \"4000000000000010\",\n    \"holderName\": \"Sandra V Porcini \",\n    \"expirationYear\": 2033,\n    \"expirationMonth\": 4\n  },\n  \"items\": [\n    {\n      \"title\": \"Protetor Solar em Bastão Com Cor FPS 95\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 7400,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Protetor Solar em Bastão Com Cor FPS 95\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 7400,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Prática\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 11900,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    },\n    {\n      \"title\": \"Kit Make Completona\",\n      \"quantity\": 1,\n      \"tangible\": true,\n      \"unitPrice\": 10,\n      \"externalRef\": \"Z-021UE06NNC25\"\n    }\n  ],\n  \"amount\": 26700,\n  \"customer\": {\n    \"name\": \"Sandra Porcini\",\n    \"email\": \"sandraporcini@gmail.com\",\n    \"phone\": \"17997229245\",\n    \"document\": {\n      \"type\": \"cpf\",\n      \"number\": \"08081035800\"\n    }\n  },\n  \"metadata\": \"{\\\"provider\\\":\\\"Zedy\\\",\\\"user_email\\\":\\\"sandraporcini@gmail.com\\\",\\\"order_id\\\":\\\"Z-021UE06NNC25\\\",\\\"checkout_url\\\":\\\"https://seguro.suaollie.com/order/Z-021UE06NNC25\\\",\\\"shop_url\\\":\\\"https://diadoconsumidor.site/\\\"}\",\n  \"shipping\": {\n    \"address\": {\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"street\": \"Rua Josina Teixeira de Carvalho\",\n      \"country\": \"BR\",\n      \"zipCode\": \"15050305\",\n      \"complement\": \"\",\n      \"neighborhood\": \"Vila Anchieta\",\n      \"streetNumber\": \"127\"\n    }\n  },\n  \"fingerPrint\": \"1748880278125\",\n  \"postbackUrl\": \"https://app.zedy.com.br/api/public/postback/codiguz/Z-021UE06NNC25\",\n  \"installments\": \"1\",\n  \"paymentMethod\": \"credit_card\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transactions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cartão Dev",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "\n{\n  \"shipping\": {\n    \"address\": {\n      \"street\": \"Rua alcides Cardoso treme\",\n      \"streetNumber\": \"165\",\n      \"complement\": \"casa\",\n      \"zipCode\": \"15045464\",\n      \"neighborhood\": \"Ana Celia\",\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"country\": \"BR\"\n    }\n  },\n  \"customer\": {\n    \"name\": \"Breno Francisco Lopes Santos\",\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"phone\": \"17991301328\",\n    \"document\": {\n      \"number\": \"49257810810\",\n      \"type\": \"CPF\"\n    }\n  },\n  \"paymentMethod\": \"CARD\",\n  \"card\": {\n    \"number\": \"4000000000000010\",\n    \"holderName\": \"BRENO F L SANTOS\",\n    \"expirationMonth\": 1,\n    \"expirationYear\": 32,\n    \"cvv\": \"123\",\n    \"sessionID\": \"null\"\n  },\n  \"installments\": 1,\n  \"items\": [\n    {\n      \"title\": \"Adidas\",\n      \"unitPrice\": 500,\n      \"quantity\": 1,\n      \"externalRef\": \"teste\"\n    }\n  ],\n  \"amount\": 500,\n  \"postbackUrl\": \"https://webhook.site/cd4f9a3b-0de2-4aee-b6e4-4f6badb2f30d\",\n  \"metadata\": \"{ \\\"provider\\\":\\\"LunaCheckout\\\", \\\"user_identitication_number\\\":\\\"42376523869\\\", \\\"user_email\\\":\\\"suporte.mktdescomplica@gmail.com\\\", \\\"sell_url\\\":\\\"4b5bf6-2.myshopify.com\\\", \\\"order_url\\\":\\\"https:\\\\/\\\\/pagamento.mercadolivre.store?product=c7f2be19-fb84-11ef-8fd6-46da4690ad53\\\", \\\"referrer_link\\\":\\\"\\\" }\",\n  \"ip\": \"8.8.8.8\",\n  \"description\": \"Teste\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transactions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cartão Dev com Hash",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "\n{\n  \"shipping\": {\n    \"address\": {\n      \"street\": \"Rua alcides Cardoso treme\",\n      \"streetNumber\": \"165\",\n      \"complement\": \"casa\",\n      \"zipCode\": \"15045464\",\n      \"neighborhood\": \"Ana Celia\",\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"country\": \"BR\"\n    }\n  },\n  \"customer\": {\n    \"name\": \"Breno Francisco Lopes Santos\",\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"phone\": \"17991301328\",\n    \"document\": {\n      \"number\": \"49257810810\",\n      \"type\": \"CPF\"\n    }\n  },\n  \"paymentMethod\": \"CARD\",\n  \"card\": {\n    \"hash\": \"maoalfob_6a0c3745511443679dd7119535556ec7_2e76cdab9cf588d0_50ec2da6b4bb4499\"\n  },\n  \"installments\": 1,\n  \"items\": [\n    {\n      \"title\": \"Adidas\",\n      \"unitPrice\": 500,\n      \"quantity\": 1,\n      \"externalRef\": \"teste\"\n    }\n  ],\n  \"amount\": 500,\n  \"postbackUrl\": \"https://webhook.site/cd4f9a3b-0de2-4aee-b6e4-4f6badb2f30d\",\n  \"metadata\": \"{ \\\"provider\\\":\\\"LunaCheckout\\\", \\\"user_identitication_number\\\":\\\"42376523869\\\", \\\"user_email\\\":\\\"suporte.mktdescomplica@gmail.com\\\", \\\"sell_url\\\":\\\"4b5bf6-2.myshopify.com\\\", \\\"order_url\\\":\\\"https:\\\\/\\\\/pagamento.mercadolivre.store?product=c7f2be19-fb84-11ef-8fd6-46da4690ad53\\\", \\\"referrer_link\\\":\\\"\\\" }\",\n  \"ip\": \"8.8.8.8\",\n  \"description\": \"Teste\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transactions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cartão Produção",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "\n{\n  \"shipping\": {\n    \"address\": {\n      \"street\": \"Rua alcides Cardoso treme\",\n      \"streetNumber\": \"165\",\n      \"complement\": \"casa\",\n      \"zipCode\": \"15045464\",\n      \"neighborhood\": \"Ana Celia\",\n      \"city\": \"São José do Rio Preto\",\n      \"state\": \"SP\",\n      \"country\": \"BR\"\n    }\n  },\n  \"customer\": {\n    \"name\": \"Breno Francisco Lopes Santos\",\n    \"email\": \"eubrenosantoss@gmail.com\",\n    \"phone\": \"17991301328\",\n    \"document\": {\n      \"number\": \"49257810810\",\n      \"type\": \"CPF\"\n    }\n  },\n  \"paymentMethod\": \"CARD\",\n  \"card\": {\n    \"number\": \"4000000000000010\",\n    \"holderName\": \"BRENO F L SANTOS\",\n    \"expirationMonth\": 1,\n    \"expirationYear\": 32,\n    \"cvv\": \"123\",\n    \"sessionID\": \"null\"\n  },\n  \"installments\": 1,\n  \"items\": [\n    {\n      \"title\": \"vamos lá\",\n      \"unitPrice\": 1500,\n      \"quantity\": 1,\n      \"externalRef\": \"teste\"\n    }\n  ],\n  \"amount\": 1500,\n  \"postbackUrl\": \"https://webhook.site/cd4f9a3b-0de2-4aee-b6e4-4f6badb2f30d\",\n  \"metadata\": \"{}\",\n  \"ip\": \"8.8.8.8\",\n  \"description\": \"Teste\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transactions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transactions"
							]
						}
					},
					"response": []
				},
				{
					"name": "Webhook",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"event\": \"transaction.PixIn\",\n  \"data\": {\n    \"version\": \"v1\",\n    \"data\": {\n      \"transactionId\": \"2074s9sads9ssb88f45a1s9as35d94d99asae1b8\",\n      \"accountId\": \"279ee1df-23ssed-4841-a79c-7f926e94cb3d\",\n      \"amount\": \"11390\",\n      \"category\": \"PIX\",\n      \"type\": \"credit\",\n      \"webhook_url\": null,\n      \"transactionData\": {\n        \"operationNumber\": \"E90400sss88s8s20s250s40918ss5737432656966\",\n        \"clientNamePayer\": \"GABRIELLE CRISTINA MIRANDA FERNANDES\",\n        \"agencyPayer\": \"3306\",\n        \"accountTypePayer\": \"CACC\",\n        \"accountPayer\": \"10786147\",\n        \"bankIspbPayer\": \"90400888\",\n        \"documentPayer\": \"17857346799\",\n        \"receiptKey\": \"f81980fb-ae6d-42e5-bc57-5757648d43c0\",\n        \"documentReceiver\": \"52255948000191\",\n        \"accountReceiver\": \"126500000069\",\n        \"txId\": \"dynamicVGQSbJw7iDCqCeHYwey123u\",\n        \"bankName\": \"BCO SANTANDER (BRASIL) S.A.\",\n        \"bankCode\": \"033\",\n        \"fee\": {}\n      },\n      \"account\": {\n        \"phoneNumber\": \"+5511981702998\",\n        \"agency\": \"1\",\n        \"accountId\": \"279ee1df-23ed-4841-a79c-7f926e94cb3d\",\n        \"email\": \"fernando.carlomagno@gmail.com\",\n        \"personType\": \"PJ\",\n        \"type\": \"CC\",\n        \"bankId\": \"126\",\n        \"number\": \"12650000006-9\",\n        \"companyName\": \"ATLAS FINANCE & TECH LTDA\",\n        \"documentNumber\": \"52255948000191\",\n        \"fantasyName\": \"ATLAS FINANCE\",\n        \"isIndirectPix\": false\n      },\n      \"balance_after_transaction\": \"5350259\",\n      \"bank_id\": \"126\",\n      \"idempotency_key\": \"E9040088820250409185737432656966\",\n      \"origin\": \"standard\",\n      \"status\": \"success\",\n      \"updatedAt\": \"2025-04-09T18:57:38.682Z\",\n      \"createdAt\": \"2025-04-09T18:57:38.682Z\",\n      \"externalAmount\": null,\n      \"total\": null,\n      \"paymentMethodId\": null\n    }\n  }\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhookfx",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhookfx"
							]
						}
					},
					"response": []
				},
				{
					"name": "Webhook Copy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": " {\n  \"event\": \"transaction.PixInReversal\",\n  \"data\": {\n    \"version\": \"v1\",\n    \"data\": {\n      \"transactionId\": \"fdce25e10d5d428ab171e42790af084c\",\n      \"accountId\": \"279ee1df-23ed-4841-a79c-7f926e94cb3d\",\n      \"amount\": \"-1000\",\n      \"category\": \"PIXREVERSAL\",\n      \"type\": \"debit\",\n      \"webhook_url\": null,\n      \"transactionData\": {\n        \"clientNamePayer\": \"BRENO FRANCISCO LOPES SANTOS\",\n        \"agencyPayer\": \"1\",\n        \"accountPayer\": \"266478808\",\n        \"status\": \"OPEN\",\n        \"originalTransactionId\": \"2074s9sads9ssb88f45a1s9as35d94d99asae1b8\",\n        \"documentReceiver\": \"49257810810\",\n        \"bankName\": \"BANCO INTER\",\n        \"bankCode\": \"077\",\n        \"bankIspb\": \"00416968\",\n        \"recept_name_bank\": \"BANCO INTER\",\n        \"recept_code_bank\": \"077\",\n        \"recept_ispb_bank\": \"00416968\",\n        \"fee\": {}\n      },\n      \"account\": {\n        \"phoneNumber\": \"+5511981702998\",\n        \"agency\": \"1\",\n        \"accountId\": \"279ee1df-23ed-4841-a79c-7f926e94cb3d\",\n        \"email\": \"fernando.carlomagno@gmail.com\",\n        \"personType\": \"PJ\",\n        \"type\": \"CC\",\n        \"bankId\": \"126\",\n        \"number\": \"12650000006-9\",\n        \"nameOwner\": \"ATLAS FINANCE\",\n        \"companyName\": \"ATLAS FINANCE & TECH LTDA\",\n        \"documentNumber\": \"52255948000191\",\n        \"fantasyName\": \"ATLAS FINANCE\",\n        \"isIndirectPix\": false\n      },\n      \"balance_after_transaction\": \"7369886\",\n      \"bank_id\": \"126\",\n      \"idempotency_key\": null,\n      \"origin\": \"standard\",\n      \"status\": \"success\",\n      \"updatedAt\": \"2025-04-06T18:44:10.073Z\",\n      \"createdAt\": \"2025-04-06T18:44:10.073Z\",\n      \"externalAmount\": null,\n      \"total\": null,\n      \"paymentMethodId\": null\n    }\n  }\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhookfx",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhookfx"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "SUBCONTAS",
			"item": [
				{
					"name": "Rotas Proxy",
					"item": [
						{
							"name": "1 - CRIAR CONTA",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "POST",
								"header": [
									{
										"key": "accept",
										"value": "application/json"
									},
									{
										"key": "content-type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"apiToken\": \"A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA\",\n    \"privateKeyUrl\": \"https://api.paghub.io/storage/v1/object/public/certificado_iugu/pk.pem\",\n    \"method\": \"POST\",\n    \"endpoint\": \"/v1/marketplace/create_account\",\n    \"payload\": {\n       \"api_token\": \"A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA\",\n        \"name\":\"Conta teste\"\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://{{base_url}}/proxy",
									"protocol": "https",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"proxy"
									]
								}
							},
							"response": []
						},
						{
							"name": "2 - ENVIAR KYC",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"apiToken\": \"CB094756955993E6E0AB90D25040C11306E5C2CBE74AEE845B59ED0B8C912E8F\",\n  \"sub_account_id\": \"37E1DF8B2B5C4F3B8EE614517AA0DCCD\",\n  \"sub_account_live_token\": \"CB094756955993E6E0AB90D25040C11306E5C2CBE74AEE845B59ED0B8C912E8F\",\n  \"payload\": {\n    \"data\": {\n        \"price_range\": \"Mais que R$ 500,00\",\n        \"business_type\": \"ecommerce\",\n        \"person_type\": \"Pessoa Jurídica\",\n        \"automatic_transfer\": false,\n        \"cnpj\": \"54843472000135\",\n        \"company_name\": \"SERV PAGAMENTOS LTDA\",\n        \"address\": \"Rua 7, 8\",\n        \"cep\": \"65.130-000\",\n        \"city\": \"Sao Luis\",\n        \"district\": \"Amaral de Matos\",\n        \"state\": \"MA\",\n        \"telephone\": \"11999614554\",\n        \"resp_name\": \"Jasmim do Nascimento Alcantara\",\n        \"resp_cpf\": \"06571705346\",\n        \"bank\": \"Inter\",\n        \"bank_ag\": \"3165\",\n        \"account_type\": \"Corrente\",\n        \"bank_cc\": \"31312-5\"\n    },\n    \"files\": {\n      \"identification\": \"https://ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496803642x825106258849463800/doc_frente.jpg\",\n      \"selfie\": \"https://ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496812419x908503061635916900/photo_2024-04-09_17-55-07.jpg\",\n      \"balance_sheet\": \"https://ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496800115x857734125788949500/cnpj.pdf\",\n      \"social_contract\": \"https://ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496800115x857734125788949500/cnpj.pdf\",\n      \"additional_document_one\": \"https://ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496805941x772686382604199700/doc_verso.jpg\"\n    }\n  }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{base_url}}:3000/request_verification",
									"protocol": "http",
									"host": [
										"{{base_url}}"
									],
									"port": "3000",
									"path": [
										"request_verification"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Rotas Iugu",
					"item": [
						{
							"name": "1 - CRIAR WEBHOOK",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"event\": \"all\",\n    \"url\": \"https://api.paghub.io/functions/v1/webhookIugu\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://{{base_url}}/v1/web_hooks?api_token=A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA",
									"protocol": "https",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"v1",
										"web_hooks"
									],
									"query": [
										{
											"key": "api_token",
											"value": "A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "2 - LISTAR WEBHOOKS",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"event\": \"all\",\n    \"url\": \"https://api.hunterpayments.com.br/functions/v1/webhookIugu\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://{{base_url}}/v1/web_hooks?api_token=A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA",
									"protocol": "https",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"v1",
										"web_hooks"
									],
									"query": [
										{
											"key": "api_token",
											"value": "A8CD84160BEFFA6C7CEFBBB341F2C671557948FE504374D00BF97A2E6DDFCDFA"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Rotas Backend",
					"item": [
						{
							"name": "Cria sub conta e envia Kyc",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"companyId\": \"146cb6b7-e2b2-4bff-a7b7-90fed9c5d2de\",\r\n  \"subconta_nome\": \"SERV PAGAMENTOS LTDA\",\r\n  \"banco\": \"Inter\",\r\n  \"agencia\": \"3165\",\r\n  \"conta\": \"15015-5\",\r\n  \"tipo_conta\": \"Corrente\",\r\n  \"balance_sheet\": \"//ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496800115x857734125788949500/cnpj.pdf\",\r\n  \"adquirente_nome\": \"IUGU_SUBCONTA\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://{{base_url}}/functions/v1/subconta",
									"protocol": "https",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"functions",
										"v1",
										"subconta"
									]
								}
							},
							"response": []
						},
						{
							"name": "Resend Documents",
							"request": {
								"auth": {
									"type": "bearer",
									"bearer": [
										{
											"key": "token",
											"value": "{{access_token}}",
											"type": "string"
										}
									]
								},
								"method": "PUT",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer {{access_token}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"sub_account_id\": \"5AD79308DA264A40BD8B8099D96B1B80\",\r\n    \"sub_account_live_token\": \"DCCD8E7B3D30D297AE498FB6062A5C1646FCC2C6817E0900632F88134B148EB0\",\r\n    \"identification\": \"//571a8bfacdf48b7398632f2ace2e80c3.cdn.bubble.io/f1731421294398x196242013906330100/selfie4.jpg\"\r\n}\r\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://{{base_url}}/functions/v1/subconta/resend_documents",
									"protocol": "https",
									"host": [
										"{{base_url}}"
									],
									"path": [
										"functions",
										"v1",
										"subconta",
										"resend_documents"
									]
								}
							},
							"response": []
						}
					]
				}
			]
		},
		{
			"name": "Logs",
			"item": [
				{
					"name": "Logs",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/audit-log",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"audit-log"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "taxas",
			"item": [
				{
					"name": "https://api.codiguz.tech/functions/v1/taxas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n  \"valor\": 100.50,\n  \"payment_method\": \"CARD\",\n  \"parcelas\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"taxas"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Chaves Pix Admin",
			"item": [
				{
					"name": "Todas Chaves Pix",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pix-key",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pix-key"
							]
						}
					},
					"response": [
						{
							"name": "Todas Chaves Pix",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InU0Y2gwWU5GTllMQmtpSEMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hob2ppeW1qd2J3aXRidm95Y3RmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiNDllOTg1My00ODdjLTRiM2ItOTBlYS1iNWI4MDNjNmQ0NDkiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwMjYwMTMyLCJpYXQiOjE3MzAyNTY1MzIsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImV1YnJlbm9zYW50b3NzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJiNDllOTg1My00ODdjLTRiM2ItOTBlYS1iNWI4MDNjNmQ0NDkifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczMDI1NjUzMn1dLCJzZXNzaW9uX2lkIjoiZWJlMzE0OGYtMWJhMi00NmEyLWFlZDYtNmE2NjVhMjE0OTJjIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.Fgiiv041P8A5Vc9Gr87-Sk3lmrk9A3qLXmNOWvvcCXo",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/pix-key",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"pix-key"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 04:56:13 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "718"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9219e6fbccc7c99d-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "2799fa86-dd37-4c72-9b8d-97489d1da527"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"data\":[{\"id\":\"79184183-3669-43d7-b68d-8ae78a18c2b2\",\"createdat\":\"2024-11-05T14:47:57.3619\",\"updatedat\":\"2024-11-05T14:47:57.3619\",\"key\":\"951.670.454-95\",\"type\":\"CNPJ\",\"description\":\"wdwdwd\",\"v\":true,\"creator\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"companyTaxId\":\"56.926.529/0001-95\",\"companyName\":\"lysteste\",\"companyId\":\"6b366424-d046-41c6-8976-22a516f7dfb8\"},{\"id\":\"f08aa1bf-6388-432b-ba59-f7c4d5eaa74a\",\"createdat\":\"2024-10-28T13:47:34.581021\",\"updatedat\":\"2024-12-14T13:56:54.994\",\"key\":\"951.670.454-95\",\"type\":\"PHONE\",\"description\":\"mudei\",\"v\":true,\"creator\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"companyTaxId\":\"00.000.000/0000-00\",\"companyName\":\"dwadawdaw\",\"companyId\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\"},{\"id\":\"cb9faee2-785a-4a60-8ff0-f9142f8a4f86\",\"createdat\":\"2024-11-21T00:13:56.178656\",\"updatedat\":\"2024-11-21T00:13:56.178656\",\"key\":\"951.670.454-95\",\"type\":\"\",\"description\":\"\",\"v\":true,\"creator\":\"80ed7efc-b963-48f1-8763-98b681dbe576\",\"companyTaxId\":\"480.015.828-17\",\"companyName\":\"Gabriel Dias Silva Figueiredo\",\"companyId\":\"9abe4b12-4719-47b4-9ecb-5adb8589571d\"},{\"id\":\"556bb45d-fe79-4bc4-82a9-ccb8624e8baf\",\"createdat\":\"2024-11-21T00:09:17.008893\",\"updatedat\":\"2024-11-21T00:09:17.008893\",\"key\":\"951.670.454-95\",\"type\":\"445454\",\"description\":\"4545454\",\"v\":true,\"creator\":\"80ed7efc-b963-48f1-8763-98b681dbe576\",\"companyTaxId\":\"480.015.828-17\",\"companyName\":\"Gabriel Dias Silva Figueiredo\",\"companyId\":\"9abe4b12-4719-47b4-9ecb-5adb8589571d\"},{\"id\":\"f0baed39-bb21-4b97-a1d5-293e2a01d2af\",\"createdat\":\"2024-10-28T13:49:54.448927\",\"updatedat\":\"2024-11-14T12:55:21.879\",\"key\":\"951.670.454-95\",\"type\":\"CPF\",\"description\":\"Adasd\",\"v\":true,\"creator\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"companyTaxId\":\"00.000.000/0000-00\",\"companyName\":\"dwadawdaw\",\"companyId\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\"}],\"total\":5,\"limit\":10,\"offset\":0}"
						}
					]
				},
				{
					"name": "Aprovar ou Reprovar Chave Pix",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "financial-password",
								"value": "123"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"v\": false\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pix-key/:id/approve",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pix-key",
								":id",
								"approve"
							],
							"variable": [
								{
									"key": "id",
									"value": "79184183-3669-43d7-b68d-8ae78a18c2b2"
								}
							]
						}
					},
					"response": [
						{
							"name": "Aprovar ou Reprovar Chave Pix",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyMTkxMDUyLCJpYXQiOjE3NDIxODc0NTIsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDIxODc0NTJ9XSwic2Vzc2lvbl9pZCI6IjMzMzk2YTQxLTg4NTctNDc0Yi05YjNkLWRmMjllMDllZjJkYSIsImlzX2Fub255bW91cyI6ZmFsc2V9.tp6dyIZNGeq7BCs3I-Wgzq9ad0CCEi7B1OOvBT5xgY8"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "financial-password",
										"value": "123"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"v\": false\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/pix-key/:id/approve",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"pix-key",
										":id",
										"approve"
									],
									"variable": [
										{
											"key": "id",
											"value": "79184183-3669-43d7-b68d-8ae78a18c2b2"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 04:58:08 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "169"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9219e9d3e96f3b92-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "e12b8e42-d547-4254-a73b-7448c4d32db3"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"id\":\"79184183-3669-43d7-b68d-8ae78a18c2b2\",\"createdat\":\"2024-11-05T14:47:57.3619\",\"updatedat\":\"2025-03-17T04:58:08.252\",\"key\":\"951.670.454-95\",\"type\":\"CNPJ\",\"description\":\"wdwdwd\",\"v\":false}"
						}
					]
				}
			]
		},
		{
			"name": "Subconta",
			"item": [
				{
					"name": "Subconta",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta?limit=3&offset=0",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta"
							],
							"query": [
								{
									"key": "limit",
									"value": "3"
								},
								{
									"key": "offset",
									"value": "0"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Resend Documents",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"sub_account_id\": \"5AD79308DA264A40BD8B8099D96B1B80\",\r\n    \"sub_account_live_token\": \"DCCD8E7B3D30D297AE498FB6062A5C1646FCC2C6817E0900632F88134B148EB0\",\r\n    \"identification\": \"//571a8bfacdf48b7398632f2ace2e80c3.cdn.bubble.io/f1731421294398x196242013906330100/selfie4.jpg\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta/resend_documents",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta",
								"resend_documents"
							]
						}
					},
					"response": []
				},
				{
					"name": "Check Status",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"sub_account_id\": \"88CB234CB4ED404687418C82686F2017\",\r\n    \"sub_account_live_token\": \"D4DF1EA1DE1783C30209F011A903EA25D50DF5DBABAD8AF53D36EF738F0E7428\",\r\n    \"adquirente_nome\": \"IUGU_SUBCONTA\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta/checkstatus",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta",
								"checkstatus"
							]
						}
					},
					"response": []
				},
				{
					"name": "Check Kyc",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"sub_account_live_token\": \"DCCD8E7B3D30D297AE498FB6062A5C1646FCC2C6817E0900632F88134B148EB0\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta/check_kyc",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta",
								"check_kyc"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cria sub conta e envia Kyc",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"companyId\": \"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\r\n  \"subconta_nome\": \"SERV PAGAMENTOS LTDA\",\r\n  \"banco\": \"Inter\",\r\n  \"agencia\": \"3165\",\r\n  \"conta\": \"15015-5\",\r\n  \"tipo_conta\": \"Corrente\",\r\n  \"balance_sheet\": \"//ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496800115x857734125788949500/cnpj.pdf\",\r\n  \"adquirente_nome\": \"IUGU_SUBCONTA\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta"
							]
						}
					},
					"response": [
						{
							"name": "Cria sub conta e envia Kyc",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlRnTHRJNk1HbDBPN2lBTC8iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMyNjczNzkxLCJpYXQiOjE3MzI2NzAxOTEsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzI2NzAxOTF9XSwic2Vzc2lvbl9pZCI6IjI1Y2E1OGUyLTU4MGYtNDJmZC04M2EzLTdlNzY2ZDAzNmQ5YSIsImlzX2Fub255bW91cyI6ZmFsc2V9.7uHCW0V0milBlZyD2zymylSV6xRQfd-2q6eClxLHJwk",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n  \"companyId\": \"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\r\n  \"subconta_nome\": \"SERV PAGAMENTOS LTDA\",\r\n  \"banco\": \"Inter\",\r\n  \"agencia\": \"3165\",\r\n  \"conta\": \"15015-5\",\r\n  \"tipo_conta\": \"Corrente\",\r\n  \"balance_sheet\": \"//ed66019f2dc28f378126b53d932cd76f.cdn.bubble.io/f1730496800115x857734125788949500/cnpj.pdf\",\r\n  \"adquirente_nome\": \"IUGU_SUBCONTA\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/subconta",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"subconta"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 27 Nov 2024 01:20:56 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "460"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8e8e4c5319996aa2-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "xebmrxsvcoxtfjoixyhl"
								},
								{
									"key": "x-deno-execution-id",
									"value": "b25070ab-61bb-4236-8ff3-620282cfdea4"
								},
								{
									"key": "x-sb-compute-multiplier",
									"value": "1"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"data\": {\n        \"id\": \"99E602336438479793FF2D7BA96C386B\",\n        \"data\": {\n            \"price_range\": \"Mais que R$ 500,00\",\n            \"business_type\": \"ecommerce\",\n            \"person_type\": \"Pessoa Jurídica\",\n            \"automatic_transfer\": false,\n            \"address\": \"RODOVIA DEMÓCRITO MOREIRA\",\n            \"cep\": \"15045432\",\n            \"district\": \"FÁTIMA\",\n            \"city\": \"ARACRUZ\",\n            \"state\": \"SP\",\n            \"telephone\": \"11999999999\",\n            \"bank\": \"Inter\",\n            \"bank_ag\": \"3165\",\n            \"account_type\": \"Corrente\",\n            \"bank_cc\": \"15015-5\",\n            \"cnpj\": \"48211140000135\",\n            \"company_name\": \"MS MEIO DE PAGAMENTOS LTDA\",\n            \"resp_name\": \"ERON ROSA\",\n            \"resp_cpf\": \"0000000000000\",\n            \"bank_ispb\": \"00416968\"\n        },\n        \"account_id\": \"88CB234CB4ED404687418C82686F2017\",\n        \"created_at\": \"2024-11-26T22:20:56-03:00\"\n    }\n}"
						}
					]
				},
				{
					"name": "Criar Subconta [DEPRE]",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"companyId\": \"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\n    \"subconta_nome\": \"Conta de teste codiguz 2\",\n    \"banco\": \"Nubank\",\n    \"agencia\": \"0001\",\n    \"conta\": \"94354393-8\",\n    \"tipo_conta\": \"Corrente\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/subconta",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"subconta"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Configurações",
			"item": [
				{
					"name": "Termos de Uso",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/termos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"termos"
							]
						}
					},
					"response": [
						{
							"name": "Termos de Uso",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyMjAxNDA1LCJpYXQiOjE3NDIxOTc4MDUsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDIxOTc4MDV9XSwic2Vzc2lvbl9pZCI6IjRjYmQ0MGM5LWE4ZmYtNDE3YS1iYTdhLTg4ODI4MTIzZTg4MSIsImlzX2Fub255bW91cyI6ZmFsc2V9.DxKcx2RIRyhc0xR4fXwh5DFDJhsynEscjszx0cpkfZ4"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/configuracoes/termos",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"configuracoes",
										"termos"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:51:08 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "47"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ae73fa997d695-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "362b6d3c-760e-4758-a40b-4a998a4e697f"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"termos\":\"[b]teste teste[/b]\"}"
						}
					]
				},
				{
					"name": "Atualizar os Termos",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"termos\": \"Novos termos de uso atualizados.\"\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/termos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"termos"
							]
						}
					},
					"response": [
						{
							"name": "Atualizar os Termos",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyMjAxNDA1LCJpYXQiOjE3NDIxOTc4MDUsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDIxOTc4MDV9XSwic2Vzc2lvbl9pZCI6IjRjYmQ0MGM5LWE4ZmYtNDE3YS1iYTdhLTg4ODI4MTIzZTg4MSIsImlzX2Fub255bW91cyI6ZmFsc2V9.DxKcx2RIRyhc0xR4fXwh5DFDJhsynEscjszx0cpkfZ4"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"termos\": \"Novos termos de uso atualizados.\"\n  }",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/configuracoes/termos",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"configuracoes",
										"termos"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:51:41 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "87"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ae808ba0c3b1a-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "d32bd2dd-a9a2-4198-b409-3e961f71ca9a"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"message\":\"Termos de uso e status das empresas atualizados com sucesso.\"}"
						}
					]
				},
				{
					"name": "Atualizar Configurações",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"descontarChargebackSaldoDisponivel\": true,\n    \"descontarEstornoSaldo\": true,\n    \"reservaFinanceiraHabilitada\": true,\n    \"PreChargebackCaclPorParcela\": false,\n    \"ValorPreChargeBack\": 8000,\n    \"preChargeBackAtivo\": true,\n    \"CobrarTaxaSaqueApenasQuandoPago\": false,\n    \"CobrarTaxaSaqueApenasPago\": false,\n    \"DevolverTaxasSaque\": true,\n    \"multiContas\": true,\n    \"aprovar_chave_pix\": true,\n    \"scripts\": null,\n    \"DocumentacaoApi\": null,\n    \"DocumentosViaUpload\": true,\n    \"calculadoraDeTaxas\": true,\n    \"allow_pessoa_fisica\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes"
							]
						}
					},
					"response": [
						{
							"name": "Atualizar Configurações",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyMjAxNDA1LCJpYXQiOjE3NDIxOTc4MDUsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDIxOTc4MDV9XSwic2Vzc2lvbl9pZCI6IjRjYmQ0MGM5LWE4ZmYtNDE3YS1iYTdhLTg4ODI4MTIzZTg4MSIsImlzX2Fub255bW91cyI6ZmFsc2V9.DxKcx2RIRyhc0xR4fXwh5DFDJhsynEscjszx0cpkfZ4"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"descontarChargebackSaldoDisponivel\": true,\n    \"descontarEstornoSaldo\": true,\n    \"reservaFinanceiraHabilitada\": true,\n    \"PreChargebackCaclPorParcela\": false,\n    \"ValorPreChargeBack\": 8000,\n    \"preChargeBackAtivo\": true,\n    \"CobrarTaxaSaqueApenasQuandoPago\": false,\n    \"CobrarTaxaSaqueApenasPago\": false,\n    \"DevolverTaxasSaque\": true,\n    \"multiContas\": true,\n    \"aprovar_chave_pix\": true,\n    \"scripts\": null,\n    \"DocumentacaoApi\": null,\n    \"DocumentosViaUpload\": true,\n    \"calculadoraDeTaxas\": false,\n    \"allow_pessoa_fisica\": true\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/configuracoes",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"configuracoes"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:50:22 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "77"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ae61d8aad0615-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "b641e266-6167-42bc-8a41-4cdb0c11dae9"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"message\":\"Configurações atualizadas com sucesso.\"}"
						}
					]
				},
				{
					"name": "Atualizar Personalização",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"primary_color\": \"#3B82F6\",\n  \"secondary_color\": \"#1D4ED8\",\n  \"tertiary_color\": \"#ffffff\",\n  \"login_banner\": \"https://20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1726001837201x543274198408876500/Club%20Ensino%20-%20Banner%20Esta%CC%81tico%20%28Celular%29.svg\",\n  \"gateway_name\": \"Atlas Finance\",\n  \"logo_dark\": \"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\n  \"logo_white\": \"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\n  \"logo_in_center\": false,\n  \"primary_color_dark\": \"#60A5FA\",\n  \"secondary_color_dark\": \"#2563EB\",\n  \"tertiary_color_dark\": \"#111827\",\n  \"favicon\": \"https://436e62c8a05b52b5162d9aaa6a4e8215.cdn.bubble.io/f1738616207385x138540656961889220/Logo%20-%20Atlas%20FX%20-%20Branco%20-%20SVG.svg\",\n  \"font_color_light\": \"#111827\",\n  \"font_color_dark\": \"#f9fafb\",\n  \"card_color\": \"#ffffff\",\n  \"card_color_dark\": \"#1f2937\",\n  \"headline_color\": \"#111827\",\n  \"subtitle_color\": \"#4b5563\",\n  \"button_color\": \"#3B82F6\",\n  \"button_hover_color\": \"#2563EB\",\n  \"border_color_light\": \"#e5e7eb\",\n  \"border_color_dark\": \"#374151\",\n  \"background_color\": \"#f9fafb\",\n  \"background_color_dark\": \"#111827\",\n  \"button_color_dark\": \"#60A5FA\",\n  \"button_hover_color_dark\": \"#3B82F6\",\n  \"text_primary_light\": \"#111827\",\n  \"text_primary_dark\": \"#f9fafb\",\n  \"text_secondary_light\": \"#4b5563\",\n  \"text_secondary_dark\": \"#9ca3af\",\n  \"hover_color_light\": \"#f3f4f6\",\n  \"hover_color_dark\": \"#374151\",\n  \"active_color_light\": \"#e5e7eb\",\n  \"active_color_dark\": \"#1f2937\",\n  \"focus_color_light\": \"#93c5fd\",\n  \"focus_color_dark\": \"#60A5FA\",\n  \"success_color_light\": \"#22c55e\",\n  \"success_color_dark\": \"#16a34a\",\n  \"error_color_light\": \"#ef4444\",\n  \"error_color_dark\": \"#dc2626\",\n  \"warning_color_light\": \"#f59e0b\",\n  \"warning_color_dark\": \"#d97706\",\n  \"info_color_light\": \"#3b82f6\",\n  \"info_color_dark\": \"#2563eb\",\n  \"shadow_color_light\": \"rgba(0, 0, 0, 0.1)\",\n  \"shadow_color_dark\": \"rgba(0, 0, 0, 0.25)\",\n  \"overlay_opacity_light\": 0.5,\n  \"overlay_opacity_dark\": 0.75,\n  \"gradient_start_light\": \"#f9fafb\",\n  \"gradient_start_dark\": \"#111827\",\n  \"gradient_end_light\": \"#f3f4f6\",\n  \"gradient_end_dark\": \"#1f2937\",\n  \"border_radius\": 8,\n  \"spacing_unit\": 4,\n  \"transition_duration\": 200,\n  \"transition_timing_function\": \"easy\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/personalization",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"personalization"
							]
						}
					},
					"response": [
						{
							"name": "Atualizar Personalização",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n            \"primary_color\": \"#4EC2EF\",\n            \"secondary_color\": \"#2645B4\",\n            \"tertiary_color\": \"#ffff\",\n            \"login_banner\": \"https://20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1726001837201x543274198408876500/Club%20Ensino%20-%20Banner%20Esta%CC%81tico%20%28Celular%29.svg\",\n            \"gateway_name\": \"Atlas Finance\",\n            \"logo_dark\": \"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\n            \"logo_white\": \"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\n            \"logo_in_center\": false,\n            \"primary_color_dark\": \"#5A7BFF\",\n            \"secondary_color_dark\": \"#3A5ACD\",\n            \"tertiary_color_dark\": \"#121212\",\n            \"favicon\": \"https://436e62c8a05b52b5162d9aaa6a4e8215.cdn.bubble.io/f1738616207385x138540656961889220/Logo%20-%20Atlas%20FX%20-%20Branco%20-%20SVG.svg?_gl=1*6o6x86*_gcl_au*MTA1MDIzODAxMy4xNzM0Nzg2MjM2LjEyMzE2ODMyMS4xNzM1MDM1NTI3LjE3MzUwMzU1Mjc.*_ga*OTQxNDUxNzk4LjE3MzM1MTIxNDg.*_ga_BFPVR2DEE2*MTczODYwNDcwMC40MC4xLjE3Mzg2MTYxOTkuMzAuMC4w\",\n            \"font_color_light\": \"#000\",\n            \"font_color_dark\": \"#fff\",\n            \"card_color\": \"#ffffff\",\n            \"card_color_dark\": \"#121212\",\n            \"headline_color\": \"#333333\",\n            \"subtitle_color\": \"#555555\",\n            \"button_color\": \"#4060D6\",\n            \"button_hover_color\": \"#5A7BFF\",\n            \"border_color_light\": \"#e0e0e0\",\n            \"border_color_dark\": \"#333333\",\n            \"background_color\": \"#f8fafc\",\n            \"background_color_dark\": \"#030507\",\n            \"button_color_dark\": \"#3040A0\",\n            \"button_hover_color_dark\": \"#4E5BDC\",\n            \"text_primary_light\": \"#1A1A1A\",\n            \"text_primary_dark\": \"#E0E0E0\",\n            \"text_secondary_light\": \"#555555\",\n            \"text_secondary_dark\": \"#A0A0A0\",\n            \"hover_color_light\": \"#E3E8F0\",\n            \"hover_color_dark\": \"#2A2A2A\",\n            \"active_color_light\": \"#D1D5DB\",\n            \"active_color_dark\": \"#1F1F1F\",\n            \"focus_color_light\": \"#A0A0A0\",\n            \"focus_color_dark\": \"#C0C0C0\",\n            \"success_color_light\": \"#22C55E\",\n            \"success_color_dark\": \"#16A34A\",\n            \"error_color_light\": \"#EF4444\",\n            \"error_color_dark\": \"#DC2626\",\n            \"warning_color_light\": \"#FACC15\",\n            \"warning_color_dark\": \"#EAB308\",\n            \"info_color_light\": \"#3B82F6\",\n            \"info_color_dark\": \"#2563EB\",\n            \"shadow_color_light\": \"#B0B0B0\",\n            \"shadow_color_dark\": \"#505050\",\n            \"overlay_opacity_light\": 0.6,\n            \"overlay_opacity_dark\": 0.8,\n            \"gradient_start_light\": \"#E0F7FA\",\n            \"gradient_start_dark\": \"#1E293B\",\n            \"gradient_end_light\": \"#90CAF9\",\n            \"gradient_end_dark\": \"#0F172A\",\n            \"border_radius\": 10,\n            \"spacing_unit\": 4,\n            \"transition_duration\": 300,\n            \"transition_timing_function\": \"ease-in-out\"\n        }",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/personalization",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"personalization"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:45:59 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1125"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921adfb438ae4d20-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "60f3dbec-733d-4d7c-8b5b-759a9153508b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"message\":\"Personalização atualizada com sucesso.\",\"data\":{\"id\":1,\"primary_color\":\"#4EC2EF\",\"secondary_color\":\"#2645B4\",\"tertiary_color\":\"#ffff\",\"login_banner\":\"https://20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1726001837201x543274198408876500/Club%20Ensino%20-%20Banner%20Esta%CC%81tico%20%28Celular%29.svg\",\"gateway_name\":\"Atlas Finance\",\"logo_dark\":\"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\"logo_white\":\"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\"logo_in_center\":false,\"primary_color_dark\":\"#5A7BFF\",\"secondary_color_dark\":\"#3A5ACD\",\"tertiary_color_dark\":\"#121212\",\"favicon\":\"https://436e62c8a05b52b5162d9aaa6a4e8215.cdn.bubble.io/f1738616207385x138540656961889220/Logo%20-%20Atlas%20FX%20-%20Branco%20-%20SVG.svg?_gl=1*6o6x86*_gcl_au*MTA1MDIzODAxMy4xNzM0Nzg2MjM2LjEyMzE2ODMyMS4xNzM1MDM1NTI3LjE3MzUwMzU1Mjc.*_ga*OTQxNDUxNzk4LjE3MzM1MTIxNDg.*_ga_BFPVR2DEE2*MTczODYwNDcwMC40MC4xLjE3Mzg2MTYxOTkuMzAuMC4w\",\"font_color_light\":\"#000\",\"font_color_dark\":\"#fff\",\"card_color\":\"#ffffff\",\"card_color_dark\":\"#121212\",\"headline_color\":\"#333333\",\"subtitle_color\":\"#555555\",\"button_color\":\"#4060D6\",\"button_hover_color\":\"#5A7BFF\",\"border_color_light\":\"#e0e0e0\",\"border_color_dark\":\"#333333\",\"background_color\":\"#f8fafc\",\"background_color_dark\":\"#030507\",\"button_color_dark\":\"#3040A0\",\"button_hover_color_dark\":\"#4E5BDC\",\"text_primary_light\":\"#1A1A1A\",\"text_primary_dark\":\"#E0E0E0\",\"text_secondary_light\":\"#555555\",\"text_secondary_dark\":\"#A0A0A0\",\"hover_color_light\":\"#E3E8F0\",\"hover_color_dark\":\"#2A2A2A\",\"active_color_light\":\"#D1D5DB\",\"active_color_dark\":\"#1F1F1F\",\"focus_color_light\":\"#A0A0A0\",\"focus_color_dark\":\"#C0C0C0\",\"success_color_light\":\"#22C55E\",\"success_color_dark\":\"#16A34A\",\"error_color_light\":\"#EF4444\",\"error_color_dark\":\"#DC2626\",\"warning_color_light\":\"#FACC15\",\"warning_color_dark\":\"#EAB308\",\"info_color_light\":\"#3B82F6\",\"info_color_dark\":\"#2563EB\",\"shadow_color_light\":\"#B0B0B0\",\"shadow_color_dark\":\"#505050\",\"overlay_opacity_light\":0.6,\"overlay_opacity_dark\":0.8,\"gradient_start_light\":\"#E0F7FA\",\"gradient_start_dark\":\"#1E293B\",\"gradient_end_light\":\"#90CAF9\",\"gradient_end_dark\":\"#0F172A\",\"border_radius\":10,\"spacing_unit\":4,\"transition_duration\":300,\"transition_timing_function\":\"ease-in-out\"}}"
						}
					]
				},
				{
					"name": "Personalização",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/personalization",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"personalization"
							]
						}
					},
					"response": [
						{
							"name": "Personalização",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "",
										"value": "",
										"disabled": true
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/personalization",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"personalization"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:33:57 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1086"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ace14995a0596-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "41570524-4c9c-4613-8ca1-0a975e3c7ce6"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"data\":[{\"id\":1,\"primary_color\":\"#4EC2EF\",\"secondary_color\":\"#2645B4\",\"tertiary_color\":\"#ffff\",\"login_banner\":\"https://20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1726001837201x543274198408876500/Club%20Ensino%20-%20Banner%20Esta%CC%81tico%20%28Celular%29.svg\",\"gateway_name\":\"Atlas\",\"logo_dark\":\"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\"logo_white\":\"https://d5a8977da71f99c60376c3c40e407642.cdn.bubble.io/f1737114831244x692467026630173000/Group.svg\",\"logo_in_center\":false,\"primary_color_dark\":\"#5A7BFF\",\"secondary_color_dark\":\"#3A5ACD\",\"tertiary_color_dark\":\"#121212\",\"favicon\":\"https://436e62c8a05b52b5162d9aaa6a4e8215.cdn.bubble.io/f1738616207385x138540656961889220/Logo%20-%20Atlas%20FX%20-%20Branco%20-%20SVG.svg?_gl=1*6o6x86*_gcl_au*MTA1MDIzODAxMy4xNzM0Nzg2MjM2LjEyMzE2ODMyMS4xNzM1MDM1NTI3LjE3MzUwMzU1Mjc.*_ga*OTQxNDUxNzk4LjE3MzM1MTIxNDg.*_ga_BFPVR2DEE2*MTczODYwNDcwMC40MC4xLjE3Mzg2MTYxOTkuMzAuMC4w\",\"font_color_light\":\"#000\",\"font_color_dark\":\"#fff\",\"card_color\":\"#ffffff\",\"card_color_dark\":\"#121212\",\"headline_color\":\"#333333\",\"subtitle_color\":\"#555555\",\"button_color\":\"#4060D6\",\"button_hover_color\":\"#5A7BFF\",\"border_color_light\":\"#e0e0e0\",\"border_color_dark\":\"#333333\",\"background_color\":\"#f8fafc\",\"background_color_dark\":\"#030507\",\"button_color_dark\":\"#3040A0\",\"button_hover_color_dark\":\"#4E5BDC\",\"text_primary_light\":\"#1A1A1A\",\"text_primary_dark\":\"#E0E0E0\",\"text_secondary_light\":\"#555555\",\"text_secondary_dark\":\"#A0A0A0\",\"hover_color_light\":\"#E3E8F0\",\"hover_color_dark\":\"#2A2A2A\",\"active_color_light\":\"#D1D5DB\",\"active_color_dark\":\"#1F1F1F\",\"focus_color_light\":\"#A0A0A0\",\"focus_color_dark\":\"#C0C0C0\",\"success_color_light\":\"#22C55E\",\"success_color_dark\":\"#16A34A\",\"error_color_light\":\"#EF4444\",\"error_color_dark\":\"#DC2626\",\"warning_color_light\":\"#FACC15\",\"warning_color_dark\":\"#EAB308\",\"info_color_light\":\"#3B82F6\",\"info_color_dark\":\"#2563EB\",\"shadow_color_light\":\"#B0B0B0\",\"shadow_color_dark\":\"#505050\",\"overlay_opacity_light\":0.6,\"overlay_opacity_dark\":0.8,\"gradient_start_light\":\"#E0F7FA\",\"gradient_start_dark\":\"#1E293B\",\"gradient_end_light\":\"#90CAF9\",\"gradient_end_dark\":\"#0F172A\",\"border_radius\":10,\"spacing_unit\":4,\"transition_duration\":300,\"transition_timing_function\":\"ease-in-out\"}],\"total\":1,\"limit\":10,\"offset\":0}"
						}
					]
				},
				{
					"name": "Configurações",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes"
							]
						}
					},
					"response": [
						{
							"name": "Configurações",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwMTY1MTAzLCJpYXQiOjE3MzAxNjE1MDMsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzAxNjE1MDN9XSwic2Vzc2lvbl9pZCI6ImVlM2RiNjExLTU0NTctNDliMS1iZDkwLWI3MTQ0YmNiMWNmZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.jr8poZSxstQEeHRm4VOJdJRP8U2RPOZFC4KQycWhLLc",
										"disabled": true
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/configuracoes",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"configuracoes"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:49:17 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "268"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ae48bba98c96f-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "1bdefcc7-e7b4-491a-81f0-048c0ebadde5"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"descontarChargebackSaldoDisponivel\":true,\"descontarEstornoSaldo\":true,\"reservaFinanceiraHabilitada\":true,\"PreChargebackCaclPorParcela\":false,\"ValorPreChargeBack\":8000,\"preChargeBackAtivo\":true,\"CobrarTaxaSaqueApenasQuandoPago\":false,\"CobrarTaxaSaqueApenasPago\":false,\"DevolverTaxasSaque\":true,\"multiContas\":true,\"aprovar_chave_pix\":true,\"scripts\":null,\"DocumentacaoApi\":null,\"DocumentosViaUpload\":true,\"calculadoraDeTaxas\":false,\"allow_pessoa_fisica\":false}"
						}
					]
				},
				{
					"name": "Configurações Copy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/config-companie-view",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"config-companie-view"
							]
						}
					},
					"response": [
						{
							"name": "Configurações",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwMTY1MTAzLCJpYXQiOjE3MzAxNjE1MDMsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzAxNjE1MDN9XSwic2Vzc2lvbl9pZCI6ImVlM2RiNjExLTU0NTctNDliMS1iZDkwLWI3MTQ0YmNiMWNmZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.jr8poZSxstQEeHRm4VOJdJRP8U2RPOZFC4KQycWhLLc",
										"disabled": true
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/configuracoes",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"configuracoes"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 07:49:17 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "268"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921ae48bba98c96f-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "1bdefcc7-e7b4-491a-81f0-048c0ebadde5"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"descontarChargebackSaldoDisponivel\":true,\"descontarEstornoSaldo\":true,\"reservaFinanceiraHabilitada\":true,\"PreChargebackCaclPorParcela\":false,\"ValorPreChargeBack\":8000,\"preChargeBackAtivo\":true,\"CobrarTaxaSaqueApenasQuandoPago\":false,\"CobrarTaxaSaqueApenasPago\":false,\"DevolverTaxasSaque\":true,\"multiContas\":true,\"aprovar_chave_pix\":true,\"scripts\":null,\"DocumentacaoApi\":null,\"DocumentosViaUpload\":true,\"calculadoraDeTaxas\":false,\"allow_pessoa_fisica\":false}"
						}
					]
				}
			]
		},
		{
			"name": "UtmFy",
			"item": [
				{
					"name": "Buscar UtmFy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pixelTracker?",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pixelTracker"
							],
							"query": [
								{
									"key": "",
									"value": null
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar UtmFy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Teste 2\",\n    \"platform\": \"utmify\",\n    \"pixel_id\": \"123123123123 333\",\n    \"api_key\": \"asdnasdnaidn123122133\",\n    \"configuration\": {\n        \"trigger_on_payment\": false,\n        \"trigger_on_creation\": false\n    },\n    \"status\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pixelTracker",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pixelTracker"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar UtmFy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Teste 333\",\n    \"platform\": \"utmify\",\n    \"pixel_id\": \"444444444444\",\n    \"api_key\": \"asdnasdnaidn12312444444443\",\n    \"configuration\": {\n        \"trigger_on_payment\": true,\n        \"trigger_on_creation\": true\n    },\n    \"status\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pixelTracker?id=3",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pixelTracker"
							],
							"query": [
								{
									"key": "id",
									"value": "3"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Análise de Risco",
			"item": [
				{
					"name": "Padrões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"company_id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n    \"valor_saque\": 6000\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/risk",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"risk"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Clientes",
			"item": [
				{
					"name": "Todos Clientes",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/clientes?taxid",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"clientes"
							],
							"query": [
								{
									"key": "limit",
									"value": "10",
									"disabled": true
								},
								{
									"key": "offset",
									"value": "0",
									"disabled": true
								},
								{
									"key": "name",
									"value": null,
									"disabled": true
								},
								{
									"key": "taxid",
									"value": null
								},
								{
									"key": "companyId",
									"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Rotas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Cliente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"John Doe\",\n    \"taxid\": \"123456789\",\n    \"email\": \"johndoe@example.com\",\n    \"phone\": \"5511999999999\",\n    \"documenttype\": \"CPF\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/clientes",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"clientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar Cliente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"id\": \"3fdd949a-6a9c-405c-9fb2-b60e7eafc615\",\n  \"name\": \"Cliente Atualizado\",\n  \"email\": \"cliente.atualizado@exemplo.com\",\n  \"phone\": \"+5511999999999\",\n  \"street\": \"Rua Exemplo Atualizada\",\n  \"streetNumber\": \"123\",\n  \"neighborhood\": \"Bairro Atualizado\",\n  \"city\": \"São Paulo\",\n  \"state\": \"SP\",\n  \"zipCode\": \"01000-000\",\n  \"documenttype\": \"CPF\",\n  \"taxid\": \"12345678900\",\n  \"description\": \"Cliente atualizado com sucesso.\",\n  \"country\": \"BR\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/clientes",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"clientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "Visualizar Cliente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/clientes/3fdd949a-6a9c-405c-9fb2-b60e7eafc615",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"clientes",
								"3fdd949a-6a9c-405c-9fb2-b60e7eafc615"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Link de Pagamento",
			"item": [
				{
					"name": "Pegar Links",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/link-pagamentos?company=ba2e4c35-4df7-43d2-9c9a-d8e605f0caee",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"link-pagamentos"
							],
							"query": [
								{
									"key": "nome",
									"value": "breno",
									"disabled": true
								},
								{
									"key": "company",
									"value": "ba2e4c35-4df7-43d2-9c9a-d8e605f0caee"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Pegar Links unico",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/link-pagamentos?id=19fe610a-eda3-4a7a-907c-695bb889e106",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"link-pagamentos"
							],
							"query": [
								{
									"key": "id",
									"value": "19fe610a-eda3-4a7a-907c-695bb889e106"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Pegar Links unico view",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/link-pagamento-view/e250ab79-911e-4c2f-8244-6f252425110b",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"link-pagamento-view",
								"e250ab79-911e-4c2f-8244-6f252425110b"
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Link",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"nome\": \"Exemplo Links\",\n  \"formas_de_pagamento\": [\"pix\", \"cartao\"],\n  \"valor\": 1020.50,\n  \"ativo\": true,\n  \"cor\": \"#FF5733\",\n  \"descricao_cobranca\": \"Cobrança exemplo\",\n  \"max_parcelamento\": 12,\n \"solicitar_endereco\" : true,\n \"image_logo\": \"https://9defa5dbef216781b0003649c5f3f1c4.cdn.bubble.io/f1736649848553x433073945012330000/%C3%83%C2%ADcone%20Azul.svg\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/link-pagamentos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"link-pagamentos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar Link",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"nome\": \"Exemplo Link\",\n  \"formas_de_pagamento\": [\"pix\", \"cartao\"],\n  \"valor\": 99.9,\n  \"ativo\": true,\n  \"cor\": \"#FF5733\",\n  \"descricao_cobranca\": \"Cobrança exemplo\",\n  \"max_parcelamento\": 12\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/link-pagamentos/19fe610a-eda3-4a7a-907c-695bb889e106",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"link-pagamentos",
								"19fe610a-eda3-4a7a-907c-695bb889e106"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Padrões",
			"item": [
				{
					"name": "Padrões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/standard",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"standard"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar padrões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n            \"paymentmethods\": [\n                \"BOLETO\",\n                \"PIX\",\n                \"CARD\"\n            ],\n            \"reservepercentageanticipation\": 39,\n            \"reservepercentageboleto\": 35,\n            \"reservepercentagepix\": 31,\n            \"autotransfer\": true,\n            \"transferenabled\": true,\n            \"maxtransferamount\": 200,\n            \"mintransferamount\": 100,\n            \"anticipationenabled\": true,\n            \"autoapproveanticipation\": true,\n            \"reservedaysanticipation\": 110,\n            \"reservedaysboleto\": 110,\n            \"reservedayspix\": 100,\n            \"daystoanticipate\": 4,\n            \"enableboletofee\": true,\n            \"enablecardfee\": true,\n            \"enablepixfee\": true,\n            \"anticipation_fee_monthly\": 0.04,\n            \"boleto_fee_percentage\": 1.5,\n            \"boleto_fee_fixed\": 3,\n            \"card_fee_percentage\": 3,\n            \"card_fee_fixed\": 1.25,\n            \"pix_fee_percentage\": 1.99,\n            \"pix_fee_fixed\": 2,\n            \"withdrawal_fee_percentage\": 3,\n            \"withdrawal_fee_fixed\": 5,\n            \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n            \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n            \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n            \"fee_type_withdrawal\": \"Taxa Fixa\",\n            \"fee_type_fixed_boleto\": \"R$\",\n            \"fee_type_fixed_card\": \"R$\",\n            \"fee_type_fixed_pix\": \"R$\",\n            \"fee_type_fixed_withdrawal\": \"R$\",\n            \"mdr_1x_adquirente\": 9,\n            \"mdr_2x_adquirente\": 16,\n            \"mdr_3x_adquirente\": 18,\n            \"mdr_4x_adquirente\": 21,\n            \"mdr_5x_adquirente\": 24,\n            \"mdr_6x_adquirente\": 27,\n            \"mdr_7x_adquirente\": 29,\n            \"mdr_8x_adquirente\": 32,\n            \"mdr_9x_adquirente\": 33,\n            \"mdr_10x_adquirente\": 35,\n            \"mdr_11x_adquirente\": 37,\n            \"mdr_12x_adquirente\": 40,\n            \"baas\": \"d8232ac4-8fd6-431d-8358-dc5f05b3c6b6\",\n            \"acquirers_pix\": \"eb01be32-9ac4-42c7-b295-5009f7beb3c2\",\n            \"acquirers_boleto\": \"93d1c258-765f-4a15-a61c-7c0dc05bcf68\",\n            \"acquirers_card\": \"a22e8e59-1fcf-431a-8b85-e88a26f61113\",\n            \"status\": true,\n            \"id\": \"abd5ee73-781c-46e8-a96f-381243a6edb6\",\n            \"nome\": \"Padrão 1\",\n            \"autotransferCard\": true\n        }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/standard/last",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"standard",
								"last"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Chave Pix",
			"item": [
				{
					"name": "Buscar Chaves Pix",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pix-key?user_id=354afdd4-933a-4c38-831f-973f570eab15",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pix-key"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Chave Pix",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"key\": \"minha-chave-pix\",\n  \"type\": \"EMAIL\",\n  \"description\": \"Chave de teste\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pix-key",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pix-key"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Chave Pix",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"key\": \"nova-chave-pix\",\n  \"type\": \"PHONE\",\n  \"description\": \"Chave atualizada\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/pix-key/:id",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"pix-key",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "f0baed39-bb21-4b97-a1d5-293e2a01d2af"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Alertas",
			"item": [
				{
					"name": "Buscar Alertas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/alerts?limit=10&offset=0",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"alerts"
							],
							"query": [
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "offset",
									"value": "0"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Buscar Alertas Copy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "apikey",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYm1yeHN2Y294dGZqb2l4eWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNjgzMDksImV4cCI6MjA0NTc0NDMwOX0.geXqmbRIraJC6D3riZp71eulXgNeYn8NGKthmJn8nu8",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/rest/v1/public",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"rest",
								"v1",
								"public"
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Alertas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "x-user-role",
								"value": "admin"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"Novo Alerta\",\n    \"body\": \"Este é o conteúdo do novo alertas\",\n    \"checkout\": false\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/alerts",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"alerts"
							]
						}
					},
					"response": []
				},
				{
					"name": "Marcar como Visualizado",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"id\": \"b4a3a24c-155f-4044-b712-673e74e00389\"\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/alerts/mark-viewed",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"alerts",
								"mark-viewed"
							]
						}
					},
					"response": []
				},
				{
					"name": "Deletar Alerta",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"id\": \"d2149ed0-ed8b-4fbb-abfa-85d03dc063cf\"\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/alerts",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"alerts"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Configurações do Administrador",
			"item": [
				{
					"name": "Email Templates",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/termos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"termos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Email Templates",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"id\": \"611c838d-e311-4222-aa3a-88da3c32a08a\",\n  \"assunto\": \"Assunto atualizado\",\n  \"remetente_nome\": \"Codiguz\",\n  \"email_body\": \"Olá {company_name}, infelizmente sua empresa teve que ser bloqueada! Para mais informações entre em contato com algum gerente.\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/emails",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"emails"
							]
						}
					},
					"response": []
				},
				{
					"name": "Aceitar os Termos",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/acecitar-termos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"acecitar-termos"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Dashboard",
			"item": [
				{
					"name": "Dados Dashboard",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkV6UDNhandSK0M3L1hnUmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2VpYnljeHVjaHZleGFkcHl4ZWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJjMGU5ZWJkMi1jOGE4LTQ0NDItYmI0MC1kYzE2MjZlZDUxMjYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ4NTY5OTQ0LCJpYXQiOjE3NDg1NjYzNDQsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImV1YnJlbm9zYW50b3NzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImMwZTllYmQyLWM4YTgtNDQ0Mi1iYjQwLWRjMTYyNmVkNTEyNiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzQ4NTY2MzQ0fV0sInNlc3Npb25faWQiOiI0NGNlNTMwNS01MWNjLTRhN2QtYjVjYy1kMThlMWZhYjM5NzkiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.6boEgpX-8hUulMehtbmVfTblzbU9Ljo2V2lSRuZh4ZI",
								"type": "text",
								"disabled": true
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard?end_date=2025-05-27&start_date=2025-03-01",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "end_date",
									"value": "2025-05-27"
								},
								{
									"key": "start_date",
									"value": "2025-03-01"
								}
							]
						}
					},
					"response": [
						{
							"name": "Dados Dashboard",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNjE5NTU1LCJpYXQiOjE3NDM2MTU5NTUsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM2MTU5NTV9XSwic2Vzc2lvbl9pZCI6ImY1NmZiMTYyLTkyZmItNDcxZC05YTc3LWU5ZWVjYjdjYWE1NiIsImlzX2Fub255bW91cyI6ZmFsc2V9.q-kr0uGrQOMx8bq-h-sNzkQBU-qXp74Go2rnhQLKlsU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard?end_date=2024-11-01&start_date=2024-10-25",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "end_date",
											"value": "2024-11-01"
										},
										{
											"key": "start_date",
											"value": "2024-10-25"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:23 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "625"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a230e39a8cd637-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "c178c647-0284-4147-8fc1-05033ffb0b86"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"countTotal\": 3,\n    \"countPaid\": 3,\n    \"sumPaid\": 15,\n    \"sumValorLiquido\": 12,\n    \"valorLiquidoAdmin\": 3,\n    \"countPending\": 0,\n    \"sumPending\": 0,\n    \"countRefused\": 0,\n    \"sumRefused\": 0,\n    \"countRefunded\": 0,\n    \"sumRefunded\": 0,\n    \"countChargedback\": 0,\n    \"sumChargedback\": 0,\n    \"taxaChargeback\": 0,\n    \"taxaEstorno\": 0,\n    \"ticketMedio\": 5,\n    \"taxaAprovacao\": 100,\n    \"conversionPix\": 100,\n    \"conversionBoleto\": 0,\n    \"conversionCard\": 0,\n    \"countExpired\": 0,\n    \"sumExpired\": 0,\n    \"countPixTotal\": 3,\n    \"countPixPaid\": 3,\n    \"sumPix\": 15,\n    \"sumPixPaid\": 15,\n    \"countBoletoTotal\": 0,\n    \"countBoletoPaid\": 0,\n    \"sumBoleto\": 0,\n    \"sumBoletoPaid\": 0,\n    \"countCardTotal\": 0,\n    \"countCardPaid\": 0,\n    \"sumCard\": 0,\n    \"sumCardPaid\": 0,\n    \"countExpiredPix\": 0,\n    \"sumExpiredPix\": 0,\n    \"countExpiredBoleto\": 0,\n    \"sumExpiredBoleto\": 0,\n    \"countRefundedPix\": 0,\n    \"sumRefundedPix\": 0,\n    \"countRefundedBoleto\": 0,\n    \"sumRefundedBoleto\": 0,\n    \"countRefundedCard\": 0,\n    \"sumRefundedCard\": 0,\n    \"countTotalPrevPeriod\": 0,\n    \"countPaidPrevPeriod\": 0,\n    \"sumPaidPrevPeriod\": 0,\n    \"taxaAprovacaoPrevPeriod\": null,\n    \"salesGrowth\": true,\n    \"salesGrowthPercentage\": 100,\n    \"approvalRateGrowth\": false,\n    \"approvalRateGrowthPercentage\": 100,\n    \"companiesCreated\": 2,\n    \"companiesCreatedPrevPeriod\": 0,\n    \"companyGrowth\": true,\n    \"companyGrowthPercentage\": 100,\n    \"projections\": {\n        \"financial\": {\n            \"totalAmount\": 16.5,\n            \"avgTicket\": 5,\n            \"totalOrders\": 3\n        },\n        \"paymentMethods\": {\n            \"pix\": {\n                \"count\": 3,\n                \"amount\": null\n            },\n            \"boleto\": {\n                \"count\": 0,\n                \"amount\": 0\n            },\n            \"card\": {\n                \"count\": 0,\n                \"amount\": 0\n            }\n        },\n        \"events\": {\n            \"refunded\": 0,\n            \"chargeback\": 0,\n            \"approved\": 3\n        },\n        \"growth\": {\n            \"salesGrowth\": 110,\n            \"approvalRate\": 105,\n            \"companies\": 2\n        },\n        \"conversion\": {\n            \"pix\": 115,\n            \"boleto\": 0,\n            \"card\": 0\n        }\n    },\n    \"nextPeriodStart\": \"2024-11-02T02:59:59.001Z\",\n    \"nextPeriodEnd\": \"2024-11-10T02:59:58.001Z\"\n}"
						}
					]
				},
				{
					"name": "Dados Dashboard Copy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkV6UDNhandSK0M3L1hnUmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2VpYnljeHVjaHZleGFkcHl4ZWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJjMGU5ZWJkMi1jOGE4LTQ0NDItYmI0MC1kYzE2MjZlZDUxMjYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ4NTY5OTQ0LCJpYXQiOjE3NDg1NjYzNDQsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImV1YnJlbm9zYW50b3NzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImMwZTllYmQyLWM4YTgtNDQ0Mi1iYjQwLWRjMTYyNmVkNTEyNiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzQ4NTY2MzQ0fV0sInNlc3Npb25faWQiOiI0NGNlNTMwNS01MWNjLTRhN2QtYjVjYy1kMThlMWZhYjM5NzkiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.6boEgpX-8hUulMehtbmVfTblzbU9Ljo2V2lSRuZh4ZI",
								"type": "text",
								"disabled": true
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/analytics-reports/top-sellers/2024-01-01/2025-12-31",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"analytics-reports",
								"top-sellers",
								"2024-01-01",
								"2025-12-31"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Dados Dashboard",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNjE5NTU1LCJpYXQiOjE3NDM2MTU5NTUsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM2MTU5NTV9XSwic2Vzc2lvbl9pZCI6ImY1NmZiMTYyLTkyZmItNDcxZC05YTc3LWU5ZWVjYjdjYWE1NiIsImlzX2Fub255bW91cyI6ZmFsc2V9.q-kr0uGrQOMx8bq-h-sNzkQBU-qXp74Go2rnhQLKlsU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard?end_date=2024-11-01&start_date=2024-10-25",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "end_date",
											"value": "2024-11-01"
										},
										{
											"key": "start_date",
											"value": "2024-10-25"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:23 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "625"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a230e39a8cd637-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "c178c647-0284-4147-8fc1-05033ffb0b86"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"countTotal\": 3,\n    \"countPaid\": 3,\n    \"sumPaid\": 15,\n    \"sumValorLiquido\": 12,\n    \"valorLiquidoAdmin\": 3,\n    \"countPending\": 0,\n    \"sumPending\": 0,\n    \"countRefused\": 0,\n    \"sumRefused\": 0,\n    \"countRefunded\": 0,\n    \"sumRefunded\": 0,\n    \"countChargedback\": 0,\n    \"sumChargedback\": 0,\n    \"taxaChargeback\": 0,\n    \"taxaEstorno\": 0,\n    \"ticketMedio\": 5,\n    \"taxaAprovacao\": 100,\n    \"conversionPix\": 100,\n    \"conversionBoleto\": 0,\n    \"conversionCard\": 0,\n    \"countExpired\": 0,\n    \"sumExpired\": 0,\n    \"countPixTotal\": 3,\n    \"countPixPaid\": 3,\n    \"sumPix\": 15,\n    \"sumPixPaid\": 15,\n    \"countBoletoTotal\": 0,\n    \"countBoletoPaid\": 0,\n    \"sumBoleto\": 0,\n    \"sumBoletoPaid\": 0,\n    \"countCardTotal\": 0,\n    \"countCardPaid\": 0,\n    \"sumCard\": 0,\n    \"sumCardPaid\": 0,\n    \"countExpiredPix\": 0,\n    \"sumExpiredPix\": 0,\n    \"countExpiredBoleto\": 0,\n    \"sumExpiredBoleto\": 0,\n    \"countRefundedPix\": 0,\n    \"sumRefundedPix\": 0,\n    \"countRefundedBoleto\": 0,\n    \"sumRefundedBoleto\": 0,\n    \"countRefundedCard\": 0,\n    \"sumRefundedCard\": 0,\n    \"countTotalPrevPeriod\": 0,\n    \"countPaidPrevPeriod\": 0,\n    \"sumPaidPrevPeriod\": 0,\n    \"taxaAprovacaoPrevPeriod\": null,\n    \"salesGrowth\": true,\n    \"salesGrowthPercentage\": 100,\n    \"approvalRateGrowth\": false,\n    \"approvalRateGrowthPercentage\": 100,\n    \"companiesCreated\": 2,\n    \"companiesCreatedPrevPeriod\": 0,\n    \"companyGrowth\": true,\n    \"companyGrowthPercentage\": 100,\n    \"projections\": {\n        \"financial\": {\n            \"totalAmount\": 16.5,\n            \"avgTicket\": 5,\n            \"totalOrders\": 3\n        },\n        \"paymentMethods\": {\n            \"pix\": {\n                \"count\": 3,\n                \"amount\": null\n            },\n            \"boleto\": {\n                \"count\": 0,\n                \"amount\": 0\n            },\n            \"card\": {\n                \"count\": 0,\n                \"amount\": 0\n            }\n        },\n        \"events\": {\n            \"refunded\": 0,\n            \"chargeback\": 0,\n            \"approved\": 3\n        },\n        \"growth\": {\n            \"salesGrowth\": 110,\n            \"approvalRate\": 105,\n            \"companies\": 2\n        },\n        \"conversion\": {\n            \"pix\": 115,\n            \"boleto\": 0,\n            \"card\": 0\n        }\n    },\n    \"nextPeriodStart\": \"2024-11-02T02:59:59.001Z\",\n    \"nextPeriodEnd\": \"2024-11-10T02:59:58.001Z\"\n}"
						}
					]
				},
				{
					"name": "Top Produtos",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/top-produtos?start_date=2024-01-01&end_date=2024-12-31",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"top-produtos"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "start_date",
									"value": "2024-01-01"
								},
								{
									"key": "end_date",
									"value": "2024-12-31"
								}
							]
						}
					},
					"response": [
						{
							"name": "Top Produtos",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNjE5NTU1LCJpYXQiOjE3NDM2MTU5NTUsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM2MTU5NTV9XSwic2Vzc2lvbl9pZCI6ImY1NmZiMTYyLTkyZmItNDcxZC05YTc3LWU5ZWVjYjdjYWE1NiIsImlzX2Fub255bW91cyI6ZmFsc2V9.q-kr0uGrQOMx8bq-h-sNzkQBU-qXp74Go2rnhQLKlsU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/top-produtos?start_date=2024-01-01&end_date=2024-12-31",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"top-produtos"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "start_date",
											"value": "2024-01-01"
										},
										{
											"key": "end_date",
											"value": "2024-12-31"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:33 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "548"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a231224b6b0a09-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "ee9962bb-89e3-4ab4-8b21-a0e280b63308"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"title\": \"Teste\",\n        \"quantidade\": 46,\n        \"total\": 11101.4,\n        \"company\": {\n            \"id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n            \"name\": \"lysteste\",\n            \"taxid\": \"56.926.529/0001-95\"\n        },\n        \"lastSaleDate\": \"2024-12-18T12:11:20-03:00\"\n    },\n    {\n        \"title\": \"item testeee\",\n        \"quantidade\": 8,\n        \"total\": 41.2,\n        \"company\": {\n            \"id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n            \"name\": \"lysteste\",\n            \"taxid\": \"56.926.529/0001-95\"\n        },\n        \"lastSaleDate\": \"2024-11-28T16:19:32-03:00\"\n    },\n    {\n        \"title\": \"Camisa G\",\n        \"quantidade\": 8,\n        \"total\": 361,\n        \"company\": {\n            \"id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n            \"name\": \"lysteste\",\n            \"taxid\": \"56.926.529/0001-95\"\n        },\n        \"lastSaleDate\": \"2024-12-16T16:11:01-03:00\"\n    },\n    {\n        \"title\": \"Produto Y\",\n        \"quantidade\": 8,\n        \"total\": 48,\n        \"company\": {\n            \"id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"name\": \"dwadawdaw\",\n            \"taxid\": \"00.000.000/0000-00\"\n        },\n        \"lastSaleDate\": \"2024-12-17T10:29:07-03:00\"\n    },\n    {\n        \"title\": \"item teste\",\n        \"quantidade\": 5,\n        \"total\": 113.25,\n        \"company\": {\n            \"id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n            \"name\": \"lysteste\",\n            \"taxid\": \"56.926.529/0001-95\"\n        },\n        \"lastSaleDate\": \"2024-12-18T17:08:54-03:00\"\n    },\n    {\n        \"title\": \"Teste \",\n        \"quantidade\": 4,\n        \"total\": 20,\n        \"company\": {\n            \"id\": \"5a151c11-71fc-4074-9dce-ddbc2f88ea83\",\n            \"name\": \"Gustavo Marques\",\n            \"taxid\": \"00.000.000/0001-00\"\n        },\n        \"lastSaleDate\": \"2024-12-03T15:16:29-03:00\"\n    },\n    {\n        \"title\": \"item teste 1\",\n        \"quantidade\": 3,\n        \"total\": 6.33,\n        \"company\": {\n            \"id\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n            \"name\": \"lysteste\",\n            \"taxid\": \"56.926.529/0001-95\"\n        },\n        \"lastSaleDate\": \"2024-11-27T14:17:31-03:00\"\n    },\n    {\n        \"title\": \"teste1\",\n        \"quantidade\": 1,\n        \"total\": 0.01,\n        \"company\": {\n            \"id\": \"9abe4b12-4719-47b4-9ecb-5adb8589571d\",\n            \"name\": \"Gabriel Dias Silva Figueiredo\",\n            \"taxid\": \"480.015.828-17\"\n        },\n        \"lastSaleDate\": \"2024-11-11T02:58:19-03:00\"\n    }\n]"
						}
					]
				},
				{
					"name": "Grafico",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/grafico?end_date=2025-04-05&start_date=2023-03-01",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"grafico"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "end_date",
									"value": "2025-04-05"
								},
								{
									"key": "start_date",
									"value": "2023-03-01"
								}
							]
						}
					},
					"response": [
						{
							"name": "Grafico",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNjE5NTU1LCJpYXQiOjE3NDM2MTU5NTUsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM2MTU5NTV9XSwic2Vzc2lvbl9pZCI6ImY1NmZiMTYyLTkyZmItNDcxZC05YTc3LWU5ZWVjYjdjYWE1NiIsImlzX2Fub255bW91cyI6ZmFsc2V9.q-kr0uGrQOMx8bq-h-sNzkQBU-qXp74Go2rnhQLKlsU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/grafico?end_date=2024-12-01&start_date=2024-11-01",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"grafico"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "end_date",
											"value": "2024-12-01"
										},
										{
											"key": "start_date",
											"value": "2024-11-01"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:41 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "105"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a23157cf9ec9b0-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "74e99657-a559-454d-8e75-91640b9d09d5"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"data\": \"11/2024\",\n        \"total_paid_amount\": 9622.55,\n        \"total_pending_amount\": 0,\n        \"total_refunded_amount\": 0\n    },\n    {\n        \"data\": \"12/2024\",\n        \"total_paid_amount\": 0,\n        \"total_pending_amount\": 0,\n        \"total_refunded_amount\": 0\n    }\n]"
						}
					]
				},
				{
					"name": "Adicionais",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/infos-adicionais?start_date=2024-10-22&end_date=2024-10-22",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"infos-adicionais"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "start_date",
									"value": "2024-10-22"
								},
								{
									"key": "end_date",
									"value": "2024-10-22"
								}
							]
						}
					},
					"response": [
						{
							"name": "Adicionais",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNTQ1Nzg3LCJpYXQiOjE3NDM1NDIxODcsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM1NDIxODd9XSwic2Vzc2lvbl9pZCI6ImNlZDMwZGYwLTExMDItNDRmYy1hZTc0LTdjMjljNmQ5MDUyZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.PixfU6El_DwJaaKB94jU0aT3eNFhT9E4SeMtXTdyxTU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/infos-adicionais?start_date=2024-10-22&end_date=2024-10-22",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"infos-adicionais"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "start_date",
											"value": "2024-10-22"
										},
										{
											"key": "end_date",
											"value": "2024-10-22"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:48 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "184"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a231804ef58281-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "efb0d6a6-b583-441d-a333-859f49bc1b73"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"paymentMethods\": [\n        {\n            \"metodo\": \"PIX\",\n            \"vendas\": 0,\n            \"valorTotal\": 0\n        },\n        {\n            \"metodo\": \"CARD\",\n            \"vendas\": 0,\n            \"valorTotal\": 0\n        },\n        {\n            \"metodo\": \"BOLETO\",\n            \"vendas\": 0,\n            \"valorTotal\": 0\n        }\n    ],\n    \"installmentGroups\": [\n        {\n            \"parcela\": 1,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 2,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 3,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 4,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 5,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 6,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 7,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 8,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 9,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 10,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 11,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        },\n        {\n            \"parcela\": 12,\n            \"contagem\": 0,\n            \"somaTotal\": 0\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "Top Sellers",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/top-sellers?end_date=2025-04-02&start_date=2025-04-02",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"top-sellers"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "end_date",
									"value": "2025-04-02"
								},
								{
									"key": "start_date",
									"value": "2025-04-02"
								}
							]
						}
					},
					"response": [
						{
							"name": "Top Sellers",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQzNTQ1Nzg3LCJpYXQiOjE3NDM1NDIxODcsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDM1NDIxODd9XSwic2Vzc2lvbl9pZCI6ImNlZDMwZGYwLTExMDItNDRmYy1hZTc0LTdjMjljNmQ5MDUyZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.PixfU6El_DwJaaKB94jU0aT3eNFhT9E4SeMtXTdyxTU",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/top-sellers?end_date=2024-11-22&start_date=2024-10-01",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"top-sellers"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "end_date",
											"value": "2024-11-22"
										},
										{
											"key": "start_date",
											"value": "2024-10-01"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:54:56 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "382"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a231b679e38281-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "8d7c1e14-418f-47a4-b784-402b61841ad5"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"companyId\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n        \"companyName\": \"dwadawdaw\",\n        \"totalSales\": 9474.02,\n        \"totalCount\": 35,\n        \"pixSales\": 2711.79,\n        \"pixCount\": 25,\n        \"cardSales\": 6762.23,\n        \"cardCount\": 10,\n        \"boletoSales\": 0,\n        \"boletoCount\": 0\n    },\n    {\n        \"companyId\": \"6b366424-d046-41c6-8976-22a516f7dfb8\",\n        \"companyName\": \"lysteste\",\n        \"totalSales\": 4.21,\n        \"totalCount\": 1,\n        \"pixSales\": 4.21,\n        \"pixCount\": 1,\n        \"cardSales\": 0,\n        \"cardCount\": 0,\n        \"boletoSales\": 0,\n        \"boletoCount\": 0\n    },\n    {\n        \"companyId\": \"f97fbf3a-d09d-4d47-bdd1-efc7a0984345\",\n        \"companyName\": \"jean jean\",\n        \"totalSales\": 1.01,\n        \"totalCount\": 1,\n        \"pixSales\": 1.01,\n        \"pixCount\": 1,\n        \"cardSales\": 0,\n        \"cardCount\": 0,\n        \"boletoSales\": 0,\n        \"boletoCount\": 0\n    },\n    {\n        \"companyId\": \"9abe4b12-4719-47b4-9ecb-5adb8589571d\",\n        \"companyName\": \"Gabriel Dias Silva Figueiredo\",\n        \"totalSales\": 1,\n        \"totalCount\": 1,\n        \"pixSales\": 1,\n        \"pixCount\": 1,\n        \"cardSales\": 0,\n        \"cardCount\": 0,\n        \"boletoSales\": 0,\n        \"boletoCount\": 0\n    }\n]"
						}
					]
				},
				{
					"name": "Provedores",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/providers?start_date=2024-12-30&end_date=2025-12-30",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"providers"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "start_date",
									"value": "2024-12-30"
								},
								{
									"key": "end_date",
									"value": "2025-12-30"
								}
							]
						}
					},
					"response": [
						{
							"name": "Provedores",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5OTc5MzA2LCJpYXQiOjE3Mjk5NzU3MDYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk5NzU3MDZ9XSwic2Vzc2lvbl9pZCI6IjE0OGE0MzYxLWVkZTAtNDRkNS05Y2ZmLTBmODM2OTFkY2ViOSIsImlzX2Fub255bW91cyI6ZmFsc2V9.1Kuf6sjiC1idEZZwz9d5_cZpY9eQ_Ofkd7LoF-7dO1E",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/providers?start_date=2024-01-01&end_date=2024-12-30",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"providers"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "start_date",
											"value": "2024-01-01"
										},
										{
											"key": "end_date",
											"value": "2024-12-30"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:55:15 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "109"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a23229c8b58281-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "54730174-02ec-4340-bb06-7ef4b7e30488"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"provider\": \"Desconhecido\",\n        \"contagem\": 74,\n        \"faturamento\": 11643.18\n    },\n    {\n        \"provider\": \"Adoorei\",\n        \"contagem\": 9,\n        \"faturamento\": 98.72\n    }\n]"
						}
					]
				},
				{
					"name": "Adquirentes",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/dados-dashboard/acquirer?start_date=2024-11-01&end_date=2024-11-30",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"dados-dashboard",
								"acquirer"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "start_date",
									"value": "2024-11-01"
								},
								{
									"key": "end_date",
									"value": "2024-11-30"
								}
							]
						}
					},
					"response": [
						{
							"name": "Adquirentes",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5OTc5MzA2LCJpYXQiOjE3Mjk5NzU3MDYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk5NzU3MDZ9XSwic2Vzc2lvbl9pZCI6IjE0OGE0MzYxLWVkZTAtNDRkNS05Y2ZmLTBmODM2OTFkY2ViOSIsImlzX2Fub255bW91cyI6ZmFsc2V9.1Kuf6sjiC1idEZZwz9d5_cZpY9eQ_Ofkd7LoF-7dO1E",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/dados-dashboard/acquirer?start_date=2024-11-01&end_date=2024-11-30",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"dados-dashboard",
										"acquirer"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "start_date",
											"value": "2024-11-01"
										},
										{
											"key": "end_date",
											"value": "2024-11-30"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:55:31 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "163"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a2328d1d40e5bc-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "521d8c5a-9034-42f5-a03b-cc4d7b7691a8"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"adq\": \"PAGAR-ME\",\n        \"contagem\": 46,\n        \"faturamento\": 9619.43,\n        \"taxasPagas\": 862.74\n    },\n    {\n        \"adq\": \"TRANSFEERAV2\",\n        \"contagem\": 1,\n        \"faturamento\": 1.01,\n        \"taxasPagas\": 1.01\n    },\n    {\n        \"adq\": \"FIREBANK\",\n        \"contagem\": 1,\n        \"faturamento\": 1.11,\n        \"taxasPagas\": 1.01\n    },\n    {\n        \"adq\": \"CASHTIME\",\n        \"contagem\": 1,\n        \"faturamento\": 1,\n        \"taxasPagas\": 1\n    }\n]"
						}
					]
				},
				{
					"name": "Faturamento do Whitelabel",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/faturamento-whitelabel?end_date=2024-11-02&start_date=2024-11-02",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"faturamento-whitelabel"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								},
								{
									"key": "end_date",
									"value": "2024-11-02"
								},
								{
									"key": "start_date",
									"value": "2024-11-02"
								}
							]
						}
					},
					"response": [
						{
							"name": "Faturamento do Whitelabel",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5OTgzMzQ1LCJpYXQiOjE3Mjk5Nzk3NDUsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk5Nzk3NDV9XSwic2Vzc2lvbl9pZCI6ImNmYzg0ZGY3LTgyMmYtNDJiMC04ZWMwLTA2YzNjOGRhZmQwMiIsImlzX2Fub255bW91cyI6ZmFsc2V9.8mdTprsN1ToEJLjUDtPP-yDT5tJI0b1B_tEYBPtJZp8",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/faturamento-whitelabel?end_date=2024-11-02&start_date=2024-11-02",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"faturamento-whitelabel"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										},
										{
											"key": "end_date",
											"value": "2024-11-02"
										},
										{
											"key": "start_date",
											"value": "2024-11-02"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:55:58 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "176"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a2332edcd0e5bc-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "9dde70a0-daf0-43b0-a340-b0392c91debc"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"faturamentoTotal\": 1008,\n    \"entradasTransacoes\": 8,\n    \"entradasSaque\": 0,\n    \"estornos\": 0,\n    \"entradasAntecipacao\": 1000,\n    \"entradasPreChargeback\": 0,\n    \"chargeback\": 0,\n    \"taxasDeAdquirente\": 16.24,\n    \"taxasBaas\": 0,\n    \"taxasGetway\": 0.8,\n    \"valorLiquido\": 990.96\n}"
						}
					]
				},
				{
					"name": "Financeiro",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/whitelabel-financeiro",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"whitelabel-financeiro"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Financeiro",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "Authorization",
										"value": "https://irxrumcabffstzoncjfk.supabase.co",
										"type": "text"
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/whitelabel-financeiro",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"whitelabel-financeiro"
									],
									"query": [
										{
											"key": "user_id",
											"value": "354afdd4-933a-4c38-831f-973f570eab15",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 02 Apr 2025 17:56:10 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "159"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92a2337f68b4e5bc-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "7df43886-d71c-4969-9f9a-5ce17d0a2fe3"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"total_balances\": {\n        \"total_balance\": 500,\n        \"total_balance_card\": -220.5,\n        \"total_financial_reserve\": 100.29\n    },\n    \"pending_withdrawals\": {\n        \"pending_withdrawals_count\": 20,\n        \"total_pending_withdrawals\": 1188.27\n    },\n    \"pending_anticipations\": {\n        \"pending_anticipations_count\": 1,\n        \"total_pending_anticipations\": 20607.3\n    }\n}"
						}
					]
				}
			]
		},
		{
			"name": "Saques",
			"item": [
				{
					"name": "Todos Saques",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/saques?limit=10&offset=0&status=done",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"saques"
							],
							"query": [
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "offset",
									"value": "0"
								},
								{
									"key": "status",
									"value": "done"
								},
								{
									"key": "companyId",
									"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Usuarios",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzcwMzI4LCJpYXQiOjE3Mjg3NjY3MjgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg3NjY3Mjh9XSwic2Vzc2lvbl9pZCI6ImRiYjk2Zjg0LWE2ZWYtNDkxZS1iNzRiLTQ3Y2RmMzI3Yzg4ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RFJ8OKnk9glILTdl5MqvwoyrVSIwR8qscBaWpTCfUuE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/users",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 21:01:10 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1702"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1a0606e8076aa2-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "af11a02b-2a2a-4569-afb8-50379b07aa4b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"users\":[{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"ERON ROSA\",\"email\":\"codiguz@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"0000000000000\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"description\":\"Administrador principal\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\"fullname\":\"Márcia Letícia Renata da Rosa\",\"email\":\"veyefom793@ploncy.com\",\"phone\":\"(81) 99942-3810\",\"document\":\"143.434.552-11\",\"birthdate\":\"2000-05-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null},{\"id\":\"37319b1c-ac14-4bcf-9a0c-f3e059d77252\",\"fullname\":\"Luiza Fernandes\",\"email\":\"c@gmail.com\",\"phone\":\"(11) 55487-4120\",\"document\":\"207.104.810-55\",\"birthdate\":\"2000-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"61075148-1e13-4731-bab7-e8b2cee0027e\",\"fullname\":\"Bento Sebastião Pinto\",\"email\":\"macilet453@orsbap.com\",\"phone\":\"(11) 99113-2502\",\"document\":\"524.506.491-07\",\"birthdate\":\"2000-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"8e34bece-fed7-4b45-b725-effe6ddef895\",\"foto\":null},{\"id\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"fullname\":\"lysteste\",\"email\":\"jasmimalcantarama@gmail.com\",\"phone\":\"(19) 81981-8919\",\"document\":\"012.345.678-90\",\"birthdate\":\"1980-10-10\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6b366424-d046-41c6-8976-22a516f7dfb8\",\"foto\":null},{\"id\":\"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\"fullname\":\"lalalalalal alallalalala\",\"email\":\"wecekep115@esterace.com\",\"phone\":\"(61) 98383-3918\",\"document\":\"652.758.751-18\",\"birthdate\":\"2000-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null},{\"id\":\"e0a48887-8719-4666-8435-4a57065a1a02\",\"fullname\":\"Eleicoes Teste\",\"email\":\"lekar47809@eixdeal.com\",\"phone\":\"(11) 99130-1322\",\"document\":\"223.992.882-99\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null},{\"id\":\"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\"fullname\":\"Lucas da Silva\",\"email\":\"brenodevnomade@gmail.com\",\"phone\":\"(19) 99223-2212\",\"document\":\"844.872.810-67\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\"foto\":\"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1719826826119x824716933884910300/Pic.svg?_gl=1*1bsr1fr*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcxOTgyMzM1MC4xMTIuMS4xNzE5ODM1NDMwLjYwLjAuMA..\"},{\"id\":\"ca7c05a8-74a2-4442-b0f3-9e35996e1c1d\",\"fullname\":\"Mariana Stella\",\"email\":\"nablackpaytwo@gmail.com\",\"phone\":\"(17) 99130-1328\",\"document\":\"170.903.350-97\",\"birthdate\":\"2004-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"1b20d3b1-aa92-4b07-b391-45dc28e2e76e\",\"foto\":null},{\"id\":\"fb61b16b-677b-4463-8074-e6e3100c547a\",\"fullname\":\"Breno César Vitor Barbosa\",\"email\":\"nireto7660@brinkc.com\",\"phone\":\"(83) 98326-9194\",\"document\":\"217.110.834-70\",\"birthdate\":\"2000-05-04\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"b0571ff9-721a-4098-a2cb-f34b7578d328\",\"foto\":null}]}"
						}
					]
				},
				{
					"name": "Criar Saque",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"pixkeyid\": \"f08aa1bf-6388-432b-ba59-f7c4d5eaa74a\",\n    \"requestedamount\": 20222200,\n    \"description\": \"Saque 123\",\n    \"isPix\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/withdrawals",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"withdrawals"
							]
						}
					},
					"response": []
				},
				{
					"name": "Pagar Manual",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\": \"done_manual\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/withdrawals/00d277ee-81bb-4c11-8a01-f74ae82d6860",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"withdrawals",
								"00d277ee-81bb-4c11-8a01-f74ae82d6860"
							]
						}
					},
					"response": []
				},
				{
					"name": "Negar Saque",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "financial-password",
								"value": "1233",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\": \"cancelled\",\n    \"reason_for_denial\": \"teste\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/withdrawals/9997b3e7-99fc-44db-b592-e4dda460bba8",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"withdrawals",
								"9997b3e7-99fc-44db-b592-e4dda460bba8"
							]
						}
					},
					"response": []
				},
				{
					"name": "Aprovar Saque",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "financial-password",
								"value": "123",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\": \"approved\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/withdrawals/62c93859-fa58-4772-8164-9d18330730b6",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"withdrawals",
								"62c93859-fa58-4772-8164-9d18330730b6"
							]
						}
					},
					"response": []
				},
				{
					"name": "Dados de Saques",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/saques/aggregates?createdatstart=2023-01-01T00:00:00Z&createdatend=2023-01-31T23:59:59Z",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"saques",
								"aggregates"
							],
							"query": [
								{
									"key": "companyid",
									"value": "123",
									"disabled": true
								},
								{
									"key": "company_taxid",
									"value": "987654321",
									"disabled": true
								},
								{
									"key": "status",
									"value": "done",
									"disabled": true
								},
								{
									"key": "pix_key",
									"value": "examplePixKey",
									"disabled": true
								},
								{
									"key": "isPix",
									"value": "true",
									"disabled": true
								},
								{
									"key": "createdatstart",
									"value": "2023-01-01T00:00:00Z"
								},
								{
									"key": "createdatend",
									"value": "2023-01-31T23:59:59Z"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Antecipações",
			"item": [
				{
					"name": "Todas Antecipações",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/antecipacoes/anticipations?limit=10&offset=0&status=pending",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"antecipacoes",
								"anticipations"
							],
							"query": [
								{
									"key": "companyId",
									"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
									"disabled": true
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "offset",
									"value": "0"
								},
								{
									"key": "status",
									"value": "pending"
								}
							]
						}
					},
					"response": [
						{
							"name": "Todas Antecipações",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlRnTHRJNk1HbDBPN2lBTC8iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI0MGU0ZDM1Yy1mOTcyLTQ2ZTUtYTYwNy1jNWFlZmY1Y2ZiMmYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwMjQxOTI5LCJpYXQiOjE3MzAyMzgzMjksImVtYWlsIjoiamFzbWltYWxjYW50YXJhbWFAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Imphc21pbWFsY2FudGFyYW1hQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI0MGU0ZDM1Yy1mOTcyLTQ2ZTUtYTYwNy1jNWFlZmY1Y2ZiMmYifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczMDIzODMyOX1dLCJzZXNzaW9uX2lkIjoiODQ1ZmQ3NDctMzIzMy00ZGVkLWE2MWItZmJjMjU2NDI2MmVkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.lS1WA_TLLb0JKF33OuLHBpax8Y0gE7VF3PniqSQO4Ic",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/antecipacoes/anticipations?companyId=d94f8d44-5ae6-4a29-8d7c-f9b394c56490&limit=20&offset=25&status=pending",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"antecipacoes",
										"anticipations"
									],
									"query": [
										{
											"key": "companyId",
											"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490"
										},
										{
											"key": "limit",
											"value": "20"
										},
										{
											"key": "offset",
											"value": "25"
										},
										{
											"key": "status",
											"value": "pending"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 01:27:44 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "1943"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9218b59b8d3107f4-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "8a59e767-dc78-4fe7-b9a3-21dcb3b4ac4c"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": [\n        {\n            \"id\": \"ed15f612-03c2-45ce-96f3-0b6458d697a3\",\n            \"created_at\": \"2024-11-04T20:03:02.845976-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"3872c596-c8fb-4b47-8f33-68fd16dcbdf2\"\n            ],\n            \"recusaMotivo\": \"asdadasd\",\n            \"valorPedido\": 20000,\n            \"valorFinal\": 10000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"38e569ab-8772-44a4-933c-c351a1f868ef\",\n            \"created_at\": \"2024-11-04T20:01:53.319034-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"3872c596-c8fb-4b47-8f33-68fd16dcbdf2\"\n            ],\n            \"recusaMotivo\": \"12213w\",\n            \"valorPedido\": 20000,\n            \"valorFinal\": 10000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"135972fa-3aae-4dc0-9fb6-27ae16f5a873\",\n            \"created_at\": \"2024-11-04T19:58:35.601155-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"3872c596-c8fb-4b47-8f33-68fd16dcbdf2\"\n            ],\n            \"recusaMotivo\": \"Recusar Sem senha\",\n            \"valorPedido\": 20000,\n            \"valorFinal\": 10000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"22611e98-2f64-4e16-bcb5-72033beb57fd\",\n            \"created_at\": \"2024-11-04T19:57:50.780906-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"3872c596-c8fb-4b47-8f33-68fd16dcbdf2\"\n            ],\n            \"recusaMotivo\": \"123123\",\n            \"valorPedido\": 20000,\n            \"valorFinal\": 10000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"6c480b48-207b-41fb-90c1-5b2106e207e5\",\n            \"created_at\": \"2024-11-04T19:48:03.93017-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"803909ed-bcf4-4c29-84b0-20c407cf5019\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 200000,\n            \"valorFinal\": 100000,\n            \"approved_date\": \"2024-04-11T19:54:02-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"77004655-3746-4737-ab9a-9ece88325824\",\n            \"created_at\": \"2024-11-04T19:47:03.182699-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"803909ed-bcf4-4c29-84b0-20c407cf5019\"\n            ],\n            \"recusaMotivo\": \"123123\",\n            \"valorPedido\": 200000,\n            \"valorFinal\": 100000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"ae6cf97f-94d3-4448-b3f5-9d534396af45\",\n            \"created_at\": \"2024-11-04T19:45:06.185868-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"803909ed-bcf4-4c29-84b0-20c407cf5019\"\n            ],\n            \"recusaMotivo\": \"Motivo da recusa\",\n            \"valorPedido\": 200000,\n            \"valorFinal\": 100000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"5708f641-725d-4a7a-a6ba-b106bd7134e9\",\n            \"created_at\": \"2024-11-04T19:38:22.37936-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"f35b1283-707d-4fad-aa0b-a0639d54d3fe\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 200000,\n            \"valorFinal\": 100000,\n            \"approved_date\": \"2024-04-11T19:40:24-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"b8329a65-4f71-4cb0-aa92-3dc50e8b7afc\",\n            \"created_at\": \"2024-11-04T19:34:56.572309-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"98737ba1-5a97-4b37-a59d-54a916115ff7\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 200000,\n            \"valorFinal\": 100000,\n            \"approved_date\": \"2024-04-11T19:35:31-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"97c99733-e508-4cd3-a488-bec653d9ddc8\",\n            \"created_at\": \"2024-11-04T18:13:06.990738-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"84e7694a-b3ae-4008-94a4-98f7d40f3c11\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 20000,\n            \"valorFinal\": 10000,\n            \"approved_date\": \"2024-04-11T18:13:43-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"87b840f6-284c-4ff3-a002-655107a94b4e\",\n            \"created_at\": \"2024-11-03T01:21:13.036234-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"1945c1f7-65fe-4d42-998e-735bdd0a3b40\",\n                \"b2baf0bd-db22-4458-903f-9b16163086b7\",\n                \"fcf83a16-11c4-418a-9def-1ed7db8e2d94\",\n                \"9c4b0bfc-b808-48f1-a5b9-96952b9edbe1\",\n                \"ac374ad4-59f8-4e29-8d69-a5605fb6b8a5\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 423423,\n            \"valorFinal\": 383873,\n            \"approved_date\": \"2024-03-11T01:22:31-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"01d6663d-34b4-4a82-a208-cd2b9d105ce0\",\n            \"created_at\": \"2024-11-03T00:11:42.898032-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"286b2bf8-06de-4574-bb96-e880eac6cc44\",\n                \"94797cc5-ec1b-4536-ac1b-43cae7036831\",\n                \"baff619a-df7a-40e0-b9e7-967b93f301e0\"\n            ],\n            \"recusaMotivo\": \"asdasd\",\n            \"valorPedido\": 185373,\n            \"valorFinal\": 168059,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"9887e90b-7148-4a7b-8970-09d485e1f027\",\n            \"created_at\": \"2024-11-02T01:12:25.329758-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": \"2024-11-02T01:12:43.467-03:00\",\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"afde6bdd-8fa5-48b3-afeb-829fddbf2205\",\n            \"created_at\": \"2024-10-24T23:09:41.496954-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"asdads\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"a5b796f7-6cba-4517-bcb1-3ec1181b48ad\",\n            \"created_at\": \"2024-10-24T22:58:04.783136-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"asdasdsd\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"c1d41259-4411-461c-a44c-cf867d57d2db\",\n            \"created_at\": \"2024-10-24T22:32:10.198621-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"B\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"9799901b-f254-48a2-b5df-679dc3b0699c\",\n            \"created_at\": \"2024-10-24T22:31:01.674397-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"CSADASD\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"656f4f8e-92d7-4d81-9e6f-1bcd4486de70\",\n            \"created_at\": \"2024-10-24T22:22:41.743702-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"ERRO\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"22376b35-c809-4691-a05c-a9977692ae0e\",\n            \"created_at\": \"2024-10-24T22:08:31.763739-03:00\",\n            \"status\": \"refused\",\n            \"aReceberList\": [\n                \"01d0c5e5-9b57-4161-a058-7dae9f9b5e27\"\n            ],\n            \"recusaMotivo\": \"Motivo da recusa\",\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        },\n        {\n            \"id\": \"25cc7096-bb20-4f00-bc25-4c4f329371eb\",\n            \"created_at\": \"2024-10-24T22:03:23.851434-03:00\",\n            \"status\": \"approved\",\n            \"aReceberList\": [\n                \"f56694ff-77b8-4b15-81e5-ca96792ea6ba\"\n            ],\n            \"recusaMotivo\": null,\n            \"valorPedido\": 300000,\n            \"valorFinal\": 200000,\n            \"approved_date\": null,\n            \"user_id\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"user_fullname\": \"KingPay Teste\",\n            \"user_phone\": \"(11) 99999-9999\",\n            \"user_email\": \"eubrensoantoss@gmail.com\",\n            \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"company_name\": \"dwadawdaw\",\n            \"company_status\": \"approved\",\n            \"company_taxid\": \"00.000.000/0000-00\"\n        }\n    ],\n    \"total\": 49\n}"
						}
					]
				},
				{
					"name": "Negar Antecipação",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "financial-password",
								"value": "123512"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\",\n    \"reason\": \"Motivo da recusa\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/antecipacoes/deny",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"antecipacoes",
								"deny"
							]
						}
					},
					"response": [
						{
							"name": "Erro",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "financial-password",
										"value": "123512"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MTY3M2VhMS0wZmU4LTQ4OWUtYWQ1My1iYTgwNTYzMWUwNTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5ODI3MjM1LCJpYXQiOjE3Mjk4MjM2MzUsImVtYWlsIjoiZXVicmVub3Rlc3RlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzI5ODIzNjM1fV0sInNlc3Npb25faWQiOiIxYmI2OTA1YS1lYzA1LTQ2NGYtODJkOC0xMDNhY2YzODYwOGIiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.JWvLUt5NANhSovPECK_QXaR_YZDzaxiSAcbVVj42uhY",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\",\n    \"reason\": \"Motivo da recusa\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/antecipacoes/deny",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"antecipacoes",
										"deny"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 01:29:46 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "62"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9218b89e1d6cd670-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "6a5a7658-bada-4f56-9afd-159f7844a8e7"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"Invalid financial password.\"\n}"
						},
						{
							"name": "Sucesso Negar Antecipação",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "financial-password",
										"value": "123"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MTY3M2VhMS0wZmU4LTQ4OWUtYWQ1My1iYTgwNTYzMWUwNTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5ODI3MjM1LCJpYXQiOjE3Mjk4MjM2MzUsImVtYWlsIjoiZXVicmVub3Rlc3RlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzI5ODIzNjM1fV0sInNlc3Npb25faWQiOiIxYmI2OTA1YS1lYzA1LTQ2NGYtODJkOC0xMDNhY2YzODYwOGIiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.JWvLUt5NANhSovPECK_QXaR_YZDzaxiSAcbVVj42uhY",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\",\n    \"reason\": \"Motivo da recusa\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/antecipacoes/deny",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"antecipacoes",
										"deny"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 01:30:11 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "70"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9218b931ce8b0631-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "0595ee4a-547a-4bac-ae4d-709cf8bb0380"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Anticipation denied successfully.\"\n}"
						}
					]
				},
				{
					"name": "Aprovar Antecipação",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "financial-password",
								"value": "1233"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/antecipacoes/approve",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"antecipacoes",
								"approve"
							]
						}
					},
					"response": [
						{
							"name": "Erro",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "financial-password",
										"value": "1233"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5ODE5Mzg5LCJpYXQiOjE3Mjk4MTU3ODksImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk4MTU3ODl9XSwic2Vzc2lvbl9pZCI6ImIwZjk0MzJlLWFjYzctNDJmNy1hMjRiLTg5MGI5OTVlNDQ3MCIsImlzX2Fub255bW91cyI6ZmFsc2V9.tIGDhU3GyU0ENDFr08BD3aUMpO1HuNUXjcjfG4Gu5Go",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/antecipacoes/approve",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"antecipacoes",
										"approve"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 01:31:39 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "62"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9218bb604b4b0616-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "12f37224-6301-4981-b303-8330db7c224d"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"Invalid financial password.\"\n}"
						},
						{
							"name": "Sucesso",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "financial-password",
										"value": "123"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5ODE5Mzg5LCJpYXQiOjE3Mjk4MTU3ODksImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk4MTU3ODl9XSwic2Vzc2lvbl9pZCI6ImIwZjk0MzJlLWFjYzctNDJmNy1hMjRiLTg5MGI5OTVlNDQ3MCIsImlzX2Fub255bW91cyI6ZmFsc2V9.tIGDhU3GyU0ENDFr08BD3aUMpO1HuNUXjcjfG4Gu5Go",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"anticipationId\": \"1049416e-5eef-4061-aa3c-16c6f1ded0e0\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/antecipacoes/approve",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"antecipacoes",
										"approve"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 01:31:54 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "72"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9218bba5bef420a8-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "e2712be7-8b84-4a8e-8b2a-2b885603cef2"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Anticipation approved successfully.\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Todos Usuários",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users"
							]
						}
					},
					"response": [
						{
							"name": "Todos Usuários",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIxYTg0MGRkZi04YWNiLTQzYTAtYjMxMC02MDNmOWNiMWMyZjYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NzM0MzcyLCJpYXQiOjE3Mjk3MzA3NzIsImVtYWlsIjoibHVjYXNyYW5nZWx0ZXN0ZUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyOTczMDc3Mn1dLCJzZXNzaW9uX2lkIjoiNWI4OTBmYTEtNjViYi00MWFmLWJlNzYtZTAxZTM0NjA4NGMxIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.3LAPEJXr1K_N_FQCyjRGQ-4X3vLtmlZbAHIEneLrF4c",
										"type": "text",
										"disabled": true
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 20:58:03 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "7257"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92382015be30d6e5-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "27ac9c14-ecc2-4c11-91dd-1e8d32a4cc0c"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"users\":[{\"id\":\"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\"fullname\":\"Márcia Letícia Renata da Rosa\",\"email\":\"veyefom793@ploncy.com\",\"phone\":\"(81) 99942-3810\",\"document\":\"143.434.552-11\",\"birthdate\":\"2000-05-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"37319b1c-ac14-4bcf-9a0c-f3e059d77252\",\"fullname\":\"Luiza Fernandes\",\"email\":\"c@gmail.com\",\"phone\":\"(11) 55487-4120\",\"document\":\"207.104.810-55\",\"birthdate\":\"2000-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"ad6600ed-49c2-44b4-bf86-ad05337078ee\",\"fullname\":\"Rosane Pereira\",\"email\":\"lulu@gmail.com\",\"phone\":\"11993421232\",\"document\":\"42445432321\",\"birthdate\":\"2004-02-08\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"187e446f-40dd-4f9a-ac40-2032f84275c6\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"1a60b659-4c1e-4ee2-bd9a-a376f3d39f29\",\"fullname\":\"Teste teste\",\"email\":\"jonatasdav@icloud.com\",\"phone\":\"(00) 00000-0000\",\"document\":\"000.000.000-00\",\"birthdate\":\"2005-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"e0a48887-8719-4666-8435-4a57065a1a02\",\"fullname\":\"Eleicoes Teste\",\"email\":\"lekar47809@eixdeal.com\",\"phone\":\"(11) 99130-1322\",\"document\":\"223.992.882-99\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"61075148-1e13-4731-bab7-e8b2cee0027e\",\"fullname\":\"Bento Sebastião Pinto\",\"email\":\"macilet453@orsbap.com\",\"phone\":\"(11) 99113-2502\",\"document\":\"524.506.491-07\",\"birthdate\":\"2000-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"8e34bece-fed7-4b45-b725-effe6ddef895\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"ca7c05a8-74a2-4442-b0f3-9e35996e1c1d\",\"fullname\":\"Mariana Stella\",\"email\":\"nablackpaytwo@gmail.com\",\"phone\":\"(17) 99130-1328\",\"document\":\"170.903.350-97\",\"birthdate\":\"2004-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"1b20d3b1-aa92-4b07-b391-45dc28e2e76e\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"1a840ddf-8acb-43a0-b310-603f9cb1c2f6\",\"fullname\":\"Ana Carolina Oliveira Souza\",\"email\":\"anacarolinasouza@example.com\",\"phone\":\"(11) 98765-4321\",\"document\":\"123.456.789-00\",\"birthdate\":\"2000-05-02\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\"fullname\":\"lalalalalal alallalalala\",\"email\":\"wecekep115@esterace.com\",\"phone\":\"(61) 98383-3918\",\"document\":\"652.758.751-18\",\"birthdate\":\"2000-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"fb61b16b-677b-4463-8074-e6e3100c547a\",\"fullname\":\"Breno César Vitor Barbosa\",\"email\":\"nireto7660@brinkc.com\",\"phone\":\"(83) 98326-9194\",\"document\":\"217.110.834-70\",\"birthdate\":\"2000-05-04\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"b0571ff9-721a-4098-a2cb-f34b7578d328\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"68572ddc-a766-477c-935c-036e17818bd5\",\"fullname\":\"Ana Carolina Oliveira Souza\",\"email\":\"anacarolinasousza@example.com\",\"phone\":\"(11) 98765-4321\",\"document\":\"123.456.789-00\",\"birthdate\":\"2000-05-02\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"91673ea1-0fe8-489e-ad53-ba805631e056\",\"fullname\":\"Breno Santos Teste\",\"email\":\"eubrenoteste@gmail.com\",\"phone\":\"11991301328\",\"document\":\"22363628878\",\"birthdate\":\"2004-02-08\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"d5f81fd2-9801-4a9e-a765-994124e97419\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"7de7e975-6b67-445a-979f-b8ca63dca8fa\",\"fullname\":\"lucca magalhaes\",\"email\":\"pedrosilva_stacksec@gmail.com\",\"phone\":\"(45) 99138-1522\",\"document\":\"150.636.987-19\",\"birthdate\":\"2003-05-16\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"af51fbcd-e65f-44b0-b3d3-5eec7b982ad1\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"80ed7efc-b963-48f1-8763-98b681dbe576\",\"fullname\":\"Gabriel Dias Silva Figueiredo\",\"email\":\"diassilvag31@gmail.com\",\"phone\":\"(18) 99637-3939\",\"document\":\"480.015.828-17\",\"birthdate\":\"1999-02-21\",\"usertype\":null,\"description\":null,\"isAdmin\":true,\"company\":\"9abe4b12-4719-47b4-9ecb-5adb8589571d\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"0705952e-f869-4a80-b3b3-5d23e3f3f0c7\",\"fullname\":\"Conta de teste 3\",\"email\":\"hanelon114@kazvi.com\",\"phone\":\"(11) 99130-1121\",\"document\":\"856.642.437-91\",\"birthdate\":\"2000-02-02\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"887e02cb-333e-45b6-a552-2a5bae063ed0\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"dfe36207-03a3-40e2-baff-7792fe04256d\",\"fullname\":\"TESTE\",\"email\":\"carolineamoreschi@gmail.com\",\"phone\":\"(00) 00000-0000\",\"document\":\"00.000.000/0000-00\",\"birthdate\":\"2000-09-19\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":null,\"foto\":null,\"prefer_v2\":false},{\"id\":\"f0305a06-6f51-4382-bb4a-f03ab5505e51\",\"fullname\":\"jean jean\",\"email\":\"jean.azevedo1533@gmail.com\",\"phone\":\"(11) 11111-1111\",\"document\":\"999.999.999-99\",\"birthdate\":\"1111-11-11\",\"usertype\":null,\"description\":null,\"isAdmin\":true,\"company\":\"f97fbf3a-d09d-4d47-bdd1-efc7a0984345\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"a005b0f8-f6e7-4025-baf3-1efc967acf63\",\"fullname\":\"Lucas Teste\",\"email\":\"brenoteste2@gmail.com\",\"phone\":\"(11) 99130-1328\",\"document\":\"223.636.288-96\",\"birthdate\":\"2004-08-02\",\"usertype\":null,\"description\":null,\"isAdmin\":false,\"company\":\"f8a5f690-9f02-46ff-9716-8790f66967e4\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"c9966975-e5c5-46b6-877c-d2e4ba497860\",\"fullname\":\"Testador Teste\",\"email\":\"zero@testeoi.com.br\",\"phone\":\"(96) 23714-678\",\"document\":\"155.578.925-08\",\"birthdate\":\"1997-07-18\",\"usertype\":\"USER\",\"description\":null,\"isAdmin\":false,\"company\":\"5deb67d5-6d40-4d51-a2f2-d8522ddb9ead\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"fullname\":\"lysteste\",\"email\":\"jasmimalcantarama@gmail.com\",\"phone\":\"(19) 81981-8919\",\"document\":\"012.345.678-90\",\"birthdate\":\"1980-10-10\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6b366424-d046-41c6-8976-22a516f7dfb8\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"b1070eef-1226-4399-be4f-5fece55a28c6\",\"fullname\":\"Gustavo Marques\",\"email\":\"gguto.ggutomarques@gmail.com\",\"phone\":\"(11) 99999-5599\",\"document\":\"288.238.780-63\",\"birthdate\":\"2004-02-17\",\"usertype\":\"USER\",\"description\":null,\"isAdmin\":true,\"company\":\"5a151c11-71fc-4074-9dce-ddbc2f88ea83\",\"foto\":null,\"prefer_v2\":false},{\"id\":\"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\"fullname\":\"Lucas da Silva\",\"email\":\"brenodevnomade@gmail.com\",\"phone\":\"(19) 99223-2212\",\"document\":\"844.872.810-67\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\"foto\":\"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1719826826119x824716933884910300/Pic.svg?_gl=1*1bsr1fr*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcxOTgyMzM1MC4xMTIuMS4xNzE5ODM1NDMwLjYwLjAuMA..\",\"prefer_v2\":false},{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"KingPay Teste\",\"email\":\"eubrensoantoss@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"223.636.288-96\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"description\":\"Administrador principal\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUVGBUYFxUXFxUXFRcXFRcXFxcVFxUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFS0dHR0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rKy0tLSstLi03LS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADMQAAICAQIEAwYFBQEBAAAAAAABAhEDITEEEkFRBWFxEyKBkaGxBjLB0fBCUnLh8UMU/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAHREBAQEBAAMBAQEAAAAAAAAAAAERAgMSITEyE//aAAwDAQACEQMRAD8A+fzkJstF8p63jCh1FOIygMVQaiSMRiiRwmO4b3QThqDJEsOSIogZssYRuTr+dEc6fjP9sPm/0QHXWUS2jmYvGe+P5P8ARo24fEMc+vK+0tPrsROQeFC8gWBugpaYDYoXiRoxxszW4FoFxHcpcohKmWUQaNUoCnAdVjHxMdhKT1S7GnjF71fIXGSVNd+pqMUzDVfuEXLX40MceokncTlWhqk9NzLn2IUnFDqaXirdg4lUVff+WXkVul5EC+IxbUZ26dG/iINGDNH3hFPkicpeJ2E0SJnHsLlFINyAadWQVLKUEo1oUIIoKLATLiyBsUMoWpBRYNGJBJAxY2IVpSRU6Sbey1+Q5ROf45kqCiv6n9Fq/wBCVcfiuIeSVvbouyLx4kLhE1YIhVzNFDB5GrBwalo0NwQ7nW4Lh0c+uno48bLi4CUdncez6en7G3DipHTxcPpdaCMyp0tjPPdvyt+XxTme0KUNA8aCxrQPHA04qRGhvIU4kSpIGGMcLa0JObxm4rBC7Xf7o3Y8OrsDHFKWju7N654SsbW/Qc56D8sXVgRrYtOEz1EZY20vM08v7meL9/XUQblxJOkqX0AxQSlaepU5SuRMavf6fcQPiGYoRvU0cQ9PPUPBjXKvLf4kGdRKm7G5UFjx0SwiGEOca9fsN5uW2Z3K9SQKLL07kEOU8gcJGebGwWxpzPsKMhSYyAGHwkOiZkx2OYNxrgcr8Q/+a/y/Q6mCZj8ex3GEl0k181/oy1fxx8SRu4HhJTnypVtq0+rSVetozY4nV8Amo8RG+tfNO/8AZju/K7eHmXqabl8PlFSnF80YScJXupRdNea8zb4RlTatP5X9i+Cc7z48jaa5Zxbd+055NOV7dK8qGeFx5ZM42/Pr1zibLHoMr9y1FtdK6/F6Hn1xTnNp4nDldXfMpXrVry3O/k4VTipJvzrT/q8jnrh5K4/m93mvr7rSdt627WvkzPFkq83PV5+EjoISwoS6Hd42iRTjZXJ1GxBEOJcoaDp0JyRd0tf51I1ii3b00F5ltoqW3f4m/wBilsvkJyQuSXbc1rOBjO9F5C7pvTSvkacuGP8AwXxCf5Vt96HQzYm22mtdS5YorS3rv/Og+eNJebVgLGruxGMvFvSlfrZeLH6D82P3kltvfp0LcS0YRm4dvZoUtGaE2n5CeKFFYVbbYzLPsLS0oOGmrIEzQLiOaBbewgpQIHZBGOE0NghUHaHwFzWkHEGgkiMMb0IlsC1ZIpg0epbJD83D80JLsr+KB4WOtnRyL3JV/a/sZrcjzONG/heFWRpXT7+fcwQNvB5eWSZz6enx5v105+IZUliyU1C6lVS+LNHB5LkZfEI373dCvC+IqWrOWfHf2y5Xs+ClyqrMXF5pQy80VF2kkm3or956bsuHELRic8+Z6uuyrV/E588/frr33nPwiTtvpbbr1ewzho9S1jHQhR6Hz/0UkVKDocoiss+3wRGl/lW+oGOTk6W3Vdy3hq3L7j/Dsbp6aOtSClipUJhj1fyOhNUZmrYoqUaM2Wm1qbZTS3V+QOaUab9mvmQL9g+Tv/0zZMbT1To3vM66L9vUzTy7232oYGTh4635bDpRBwL7hz0FM2WOojKjTmkBGOm2oskRxhShboc3WwOOI6ismEXKLHz3FuDEAUSDPZkIPL4DQjPj0Gm3KGoOKAQ2CAwyEQ1DUqCNEEDcN4fGZfFfFZ4JQ5OW9W7V6LRafM6OFnlfHsvNnlrdVFeVLVfOwn6b8jtcP+IeHyuuJ4dRv/0x2mvNpa/c7C/CntYe14PLHNH+1tKXpzLS/J0fP4o3+E+JZeHmsmGbhLrW0l2ktpL1G86J5Ly9fwvDyTeLLBxklrGSafr/ALPN8TzYskoy6Pf7H0/8L/ifh+PisPEQjHN0jtb6yxS3X+O/qieOfheWN+1ilkgteaveX+S8u6OF5vPT1/6898/uWPnnB+LVJLWSvZa/Q9PGamk1Fr10+hFBLZJX2SQcGVk/Wfe5lHFDIFRZJTpEzF550tBHDTWjk/h1Fyy2/Qk46X1dXQpom3kjskurNcVUUl0WgnwqMXa+ny/Y158d6eYLCckRNaDsktSSjoSYo05Jerfohc4c0tNi8y969qDwSqOu4hNtGKlDXyWw1K9X/wBKWpIqheQ0OJnzQv8AnQYCoYf6nQ1wToGUapLqMWwoqWO3sFyBKRGyRHswXjNImTEUuyB0QdDxqQ2xdBpHRwMsOEhdFxZVNcJGmEzBCQ6MzLcrXxXGrHjcutUvXoeRlJttvVvVs2eK8TzSrpHT49WYiFuiTGRkJDRqVmxphNqmm007TTpprZprZn1X8Dfj55K4fiZJZH7sMuym9lGfRT7PZ+u/yWI1GrJ1GdvL6z+JseOOWsarT3u3NbWnyOOmcfwv8Q+0UMWVtzTaWR/1Ju0pP+67162jtJHn65yvTx17Q3C+pWcu9BM29jLaYsd6fP8AQ0cLHmk/LZd2Lh+Vsdw8HGv49QLXPGovmS97alpv3Lyzlo1V9exIkjHUGgyDlHQGS7ExvQk5/FrX1Kcev0CzvVtgPVGmAudrtQcNC8mNCG6JGTlbqhTkl9Co5fmZ+Imtl3sYDsdum/P6hMLTT0KlEtQWyKQEyQkKEhcoh8wnLMRUsgCmUIeXDoCAaZtwSy0wZMokdEOUqTfZMVBl537kvR/YmnFZRZACFoogo2DGxM6HQZuMdQw9Z4F40snLjyOp7KXSXq+j+55NFxk4tSjo00/RrZrzHrmdQcdXmvpE0LjC7YjgOL9rCM11Wq7Nbr5m9JJHkvx7ZdZ8mkdupqXNo68vgZM+W1XmmbFkBJDNQ5T7GSUNQ4yZHTpMpsXzC5yrcDpXETM0ci79diTk3qha4Z2mzTLcp2hclZHLoM5UiTGvPu/pqJcU2vN1p8QuImugFbV0V/PoagWkn8BuN0jMo6jcmiJI8nzJECUWHiYjVtgSDYrHLuQDyeRCpcQQQ8xFBMtIjNOJbCiiqIyRiK4mXuP0YFlZVp6oS5hRZQJZCiElobCQoJM1KLGiORBqRnUg1R0nTF5ek/CXGqMnjltJrlfRS2pvpf6HquIdHz3guOljU0knGceWUXs1umu0k9U+h6PhfGYNqPtG4uPuynpJOtYZOl9pLRrzs4eTi7r0ePqeua6uaNtJfI2qKRh4R+9zfzU1Lb1ZydWmvcb+Jnx3YWefuP4L/ZihkXx/mpF0pZKW2vkYs93q7fWuw7HfxKlBfUkVBao1ey+giMexrT0RJkyYfMRlnoaMsrM80QZeIjaBT1p7Dpx+YmhgMaSFz1LUSpRf+/URSpOmHjyA+yfTUOPCtO29v0NBMgqK7mm1Xn0QjO2viURGWDsgPt2iCy4gA5REyFzUVZbBICiRsFBORqJzs0akxZs46Gz+BjoyUshKKaIrLQKZZAVhKQCZaZqUHRkNijMmNjI3KxY34fFs2L8s7Sr3Wk46eXQ9R4X4/jy1GXuT/tezfTlf6Hit9yZOnnZnriVvnyWfH0Tip0viZIx10Yjw7jefBGb/ADVT9V1+zH4YJbnnsx6Zd+t+N92NmYo5a3Y/2nmBaMCCyZBMZ7FSlYEMolSxWaMeJj/ZUty1OPxEGnoKyM6XEY1T6nLzSGCixzGQy/IyphK0aDbjyVqisknSM8Jd9RmWfbzJM0snNv8ABoy8U3d3oaJQqrF5Ia7GoxWGUfMg6WJEEOWKkhoGQWKABoqctSlMWRJlIFz8gkyS5xtNPqcxqjqQ1MXHwqXrqBZyyiEkkgQmVJEUTLKcSkyQ0w4yAaKGUWNCkE3t6iIsZGRuVix6f8Nr3JLopfov2O3BHJ/D+OsNv+pt/DRL7M6EEnSdnDv+q9HH8xWTQrFJvdklhqhssZlscfX6m7ho9zBigzb7RpVVdv1AxvnkS69zn5+Mb0FxyUn5mXLLUsVpv/0d9hE1GTQDgyQx0awG+zRTGcya8wIwtkgKWuxcpomdV+5ni9PiItMzK2BJaBJ2rQnLK9BjJTVkGKixDhgZgzPmNRztJkRSIyJCypyGRQPKMgBHjQrxLH7ql2f0ZoghmXFzQa7r69AMcEhAWRFEp7hLYqJISRUoB40MSN4zbheKTSqk0+jNHAeGzzPlx8rl/a5Ri/gpNX8AVArPC13ovRe7Zk8Azwy48WWDxPJJRjKakoW3X5qp/A6Hg3gsGubIpXFyUoPSpRdNOtd0xn4cjcbxzaWiyYZe/imltcG9OtNO09qPQc7lOc5RjFzlzVG9+VJt31bTb82znesdOefqoRpVt2rp2Ag902aK+RmlHcw6mONp67MJyT6mbJi10YUFRYm5SUVYh53dsCtxUsmgIyeYTKYDoFdkODWtPQkiscC8pIMFqjRJUZ4Ta2RrnG0SjFlydDBKVWjfnx0m0tTLHh203uajNFw219CZfQPBF049qGSw3oiTPyEGPB6kFPPCpooh0cSZRRWhCEE5kNxSIQkemacRCGWo4niqXtHS7X60ZYohAK5MtEISNgxqZCHWOfS/iWQgsJ4fxrw5ebeL3Xk/1Pb453TvfUhDh3+vV478G8lAe0IQw2bLYDR0+zIQkkpmWTIQpFSXLsNw5aIQ1jJryfTQGWTt0KIWI3mQyGQhAsK7bFv3WQhJbya+f3AhIhBA5Rvq/oUQgp//2Q==\",\"prefer_v2\":false}]}"
						}
					]
				},
				{
					"name": "Buscar Usuário pelo ID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/67a933d1-f99b-43c6-93cc-d5d295195c27",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"67a933d1-f99b-43c6-93cc-d5d295195c27"
							]
						}
					},
					"response": [
						{
							"name": "Buscar Usuário pelo ID",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlNIYlhEQ2JwdzloOXR4cDciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2p1eXZ2bnJnY3RiamZhdmp2cG1sLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI2MGI3OWM3MC1iZmFiLTRkZDQtOWQ3YS00MTM2NWY4ODllNzYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4MTExMDcxLCJpYXQiOjE3MzgxMDc0NzEsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzgxMDc0NzF9XSwic2Vzc2lvbl9pZCI6IjVjMjkwZmY4LTgzMDYtNGJiMi05OWEwLWVhYWM2NzIwMDAzZSIsImlzX2Fub255bW91cyI6ZmFsc2V9.-1T3NSvxwXl3hLjB4CWXp8MJ0fFjrri-liAOB2M6oSU",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"354afdd4-933a-4c38-831f-973f570eab15"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 21:21:51 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "359"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "923842f3aa155788-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "6f3cf868-fcfc-44da-b4b6-8545eba577d0"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"user\":{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"Breno Santos\",\"email\":\"eubrenosantoss@gmail.com\",\"phone\":\"11999999999\",\"document\":\"123.456.789-00\",\"birthdate\":\"1990-01-01\",\"usertype\":\"CPF\",\"description\":\"Empresa Do Breno\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":\"https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all\",\"prefer_v2\":true}}"
						}
					]
				},
				{
					"name": "Chave api",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/1a840ddf-8acb-43a0-b310-603f9cb1c2f6/apikey",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"1a840ddf-8acb-43a0-b310-603f9cb1c2f6",
								"apikey"
							]
						}
					},
					"response": [
						{
							"name": "Chave api",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5ODA3MzYwLCJpYXQiOjE3Mjk4MDM3NjAsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk4MDM3NjB9XSwic2Vzc2lvbl9pZCI6ImJiY2MwYTA3LTRkMGYtNGVkZS04MmU4LTkzNzA3ZDUzZTdiOCIsImlzX2Fub255bW91cyI6ZmFsc2V9.Wx1aZPlMm905D7-BB4sdKAUdaAwmjkgEttzFFYDITjQ",
										"type": "text",
										"disabled": true
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users/1a840ddf-8acb-43a0-b310-603f9cb1c2f6/apikey",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"1a840ddf-8acb-43a0-b310-603f9cb1c2f6",
										"apikey"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 21:22:18 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "162"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92384399588ac943-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "f3fc07e6-ec7a-4cbb-8185-33955dc909ea"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"user\":{\"id\":\"1a840ddf-8acb-43a0-b310-603f9cb1c2f6\",\"api_secret_key\":\"sk_Vr0p7x5MK6Gp8zV6Saxl6ENl\",\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\"}}"
						}
					]
				},
				{
					"name": "Permissões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/5e016329-720b-47f3-b07e-fcc74b1b8320/permissions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"5e016329-720b-47f3-b07e-fcc74b1b8320",
								"permissions"
							]
						}
					},
					"response": [
						{
							"name": "Permissões",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIxYTg0MGRkZi04YWNiLTQzYTAtYjMxMC02MDNmOWNiMWMyZjYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NzM0MzcyLCJpYXQiOjE3Mjk3MzA3NzIsImVtYWlsIjoibHVjYXNyYW5nZWx0ZXN0ZUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyOTczMDc3Mn1dLCJzZXNzaW9uX2lkIjoiNWI4OTBmYTEtNjViYi00MWFmLWJlNzYtZTAxZTM0NjA4NGMxIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.3LAPEJXr1K_N_FQCyjRGQ-4X3vLtmlZbAHIEneLrF4c",
										"type": "text",
										"disabled": true
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15/permissions",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"354afdd4-933a-4c38-831f-973f570eab15",
										"permissions"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 21:22:32 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "169"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "923843ef2c8f2d14-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "0d06cc7e-25ee-4424-9cb9-784840e6e031"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"user\":{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"isAdmin\":true,\"usertype\":\"CPF\",\"permissions\":[\"Visualizar Todas as Empresas\",\"Visualizar Adquirentes\",\"Logar na Empresa\"]}}"
						}
					]
				},
				{
					"name": "Criar Usuário",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"fullname\": \"Ana Carolina Oliveira Souza\",\n    \"email\": \"anacarolinasssssousza@example.com\",\n    \"phone\": \"(11) 98765-4321\",\n    \"document\": \"123.456.789-00\",\n    \"birthdate\": \"2000-05-02\",\n    \"foto\": null\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/create",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"create"
							]
						}
					},
					"response": [
						{
							"name": "Permissões",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzcwMzI4LCJpYXQiOjE3Mjg3NjY3MjgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg3NjY3Mjh9XSwic2Vzc2lvbl9pZCI6ImRiYjk2Zjg0LWE2ZWYtNDkxZS1iNzRiLTQ3Y2RmMzI3Yzg4ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RFJ8OKnk9glILTdl5MqvwoyrVSIwR8qscBaWpTCfUuE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15/permissions",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"354afdd4-933a-4c38-831f-973f570eab15",
										"permissions"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 21:03:49 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "151"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1a09eea8ba6aa5-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "5bb71706-695c-4c86-a880-e727f1228fa5"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"user\":{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"isAdmin\":true,\"usertype\":\"MASTER\",\"permissions\":[\"Acesso a Todas as Permissões\"]}}"
						}
					]
				},
				{
					"name": "Editar Usuario",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"fullname\": \"Nome completo do usuário\",\n  \"email\": \"email@exemplo.com\",\n  \"phone\": \"11999999999\",\n  \"document\": \"123.456.789-00\",\n  \"birthdate\": \"1990-01-01\",\n  \"usertype\": \"tipo_do_usuario\",\n  \"description\": \"Descrição do usuário\",\n  \"foto\": \"https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all\",\n  \"prefer_v2\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15/edit",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"354afdd4-933a-4c38-831f-973f570eab15",
								"edit"
							]
						}
					},
					"response": [
						{
							"name": "Editar Usuario",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyNTA4OTY3LCJpYXQiOjE3NDI1MDUzNjcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI1MDUzNjd9XSwic2Vzc2lvbl9pZCI6IjM0MjNhMzNhLWQ2YzAtNDQyMy1iYzViLWEwZDAzMjlhODU0OCIsImlzX2Fub255bW91cyI6ZmFsc2V9.FQQwFamvLlH-ihCtoKQAM8OlKc5cRo2kovToamt96yE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"fullname\": \"Breno Santos\",\n  \"email\": \"eubrenosantoss@gmail.com\",\n  \"phone\": \"11999999999\",\n  \"document\": \"123.456.789-00\",\n  \"birthdate\": \"1990-01-01\",\n  \"usertype\": \"CPF\",\n  \"description\": \"Empresa Do Breno\",\n  \"foto\": \"https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all\",\n  \"prefer_v2\": true\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15/edit",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"354afdd4-933a-4c38-831f-973f570eab15",
										"edit"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 21:19:30 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "491"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "92383f7969a781c1-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "6f56b4d6-2a48-4eb0-b70e-69f21c9dc225"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"message\":\"User profile updated successfully\",\"user\":{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"Breno Santos\",\"email\":\"eubrenosantoss@gmail.com\",\"phone\":\"11999999999\",\"document\":\"123.456.789-00\",\"birthdate\":\"1990-01-01\",\"usertype\":\"CPF\",\"permissions\":[\"Visualizar Todas as Empresas\",\"Visualizar Adquirentes\",\"Logar na Empresa\"],\"description\":\"Empresa Do Breno\",\"api_secret_key\":\"sk_test_YsYHKPYtjpX3PepOlqqUgKbUw93fa5kHc2wpehka8E\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":\"https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all\",\"prefer_v2\":true}}"
						}
					]
				},
				{
					"name": "Alterar permissões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "financial-password",
								"value": "123"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"isAdmin\": true,\n    \"permissions\": [\"Visualizar Todas as Empresas\", \"Visualizar Adquirentes\", \"Logar na Empresa\"]\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/310e1004-57bd-4b76-90bf-c9e290f6cfb8/permissions",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"310e1004-57bd-4b76-90bf-c9e290f6cfb8",
								"permissions"
							]
						}
					},
					"response": [
						{
							"name": "Alterar permissões",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQyNTA4MjU3LCJpYXQiOjE3NDI1MDQ2NTcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDI1MDQ2NTd9XSwic2Vzc2lvbl9pZCI6ImZjNmZiMzk0LWE2ZWEtNDkzYS04NGQ0LTNlY2FmZWU5ZGExYSIsImlzX2Fub255bW91cyI6ZmFsc2V9.JowHNg6ekdnsXF3eoLRDm4vrvUWnJ-lPqyX_tH4bjSU"
									},
									{
										"key": "financial-password",
										"value": "123"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"isAdmin\": true,\n    \"permissions\": [\"Visualizar Todas as Empresas\", \"Visualizar Adquirentes\", \"Logar na Empresa\"]\n    }",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/users/354afdd4-933a-4c38-831f-973f570eab15/permissions",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"users",
										"354afdd4-933a-4c38-831f-973f570eab15",
										"permissions"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Thu, 20 Mar 2025 21:09:43 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "4278"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "923831257e8a388c-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "access-control-allow-headers",
									"value": "Content-Type, Authorization"
								},
								{
									"key": "access-control-allow-methods",
									"value": "GET, POST, PUT, DELETE, OPTIONS"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "ee59edec-b9f5-43a4-9dae-a3e695e19f87"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"message\":\"User permissions updated successfully\",\"user\":{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"KingPay Teste\",\"email\":\"eubrensoantoss@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"223.636.288-96\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"permissions\":[\"Visualizar Todas as Empresas\",\"Visualizar Adquirentes\",\"Logar na Empresa\"],\"description\":\"Administrador principal\",\"api_secret_key\":\"sk_test_YsYHKPYtjpX3PepOlqqUgKbUw93fa5kHc2wpehka8E\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUVGBUYFxUXFxUXFRcXFRcXFxcVFxUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFS0dHR0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rKy0tLSstLi03LS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADMQAAICAQIEAwYFBQEBAAAAAAABAhEDITEEEkFRBWFxEyKBkaGxBjLB0fBCUnLh8UMU/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAHREBAQEBAAMBAQEAAAAAAAAAAAERAgMSITEyE//aAAwDAQACEQMRAD8A+fzkJstF8p63jCh1FOIygMVQaiSMRiiRwmO4b3QThqDJEsOSIogZssYRuTr+dEc6fjP9sPm/0QHXWUS2jmYvGe+P5P8ARo24fEMc+vK+0tPrsROQeFC8gWBugpaYDYoXiRoxxszW4FoFxHcpcohKmWUQaNUoCnAdVjHxMdhKT1S7GnjF71fIXGSVNd+pqMUzDVfuEXLX40MceokncTlWhqk9NzLn2IUnFDqaXirdg4lUVff+WXkVul5EC+IxbUZ26dG/iINGDNH3hFPkicpeJ2E0SJnHsLlFINyAadWQVLKUEo1oUIIoKLATLiyBsUMoWpBRYNGJBJAxY2IVpSRU6Sbey1+Q5ROf45kqCiv6n9Fq/wBCVcfiuIeSVvbouyLx4kLhE1YIhVzNFDB5GrBwalo0NwQ7nW4Lh0c+uno48bLi4CUdncez6en7G3DipHTxcPpdaCMyp0tjPPdvyt+XxTme0KUNA8aCxrQPHA04qRGhvIU4kSpIGGMcLa0JObxm4rBC7Xf7o3Y8OrsDHFKWju7N654SsbW/Qc56D8sXVgRrYtOEz1EZY20vM08v7meL9/XUQblxJOkqX0AxQSlaepU5SuRMavf6fcQPiGYoRvU0cQ9PPUPBjXKvLf4kGdRKm7G5UFjx0SwiGEOca9fsN5uW2Z3K9SQKLL07kEOU8gcJGebGwWxpzPsKMhSYyAGHwkOiZkx2OYNxrgcr8Q/+a/y/Q6mCZj8ex3GEl0k181/oy1fxx8SRu4HhJTnypVtq0+rSVetozY4nV8Amo8RG+tfNO/8AZju/K7eHmXqabl8PlFSnF80YScJXupRdNea8zb4RlTatP5X9i+Cc7z48jaa5Zxbd+055NOV7dK8qGeFx5ZM42/Pr1zibLHoMr9y1FtdK6/F6Hn1xTnNp4nDldXfMpXrVry3O/k4VTipJvzrT/q8jnrh5K4/m93mvr7rSdt627WvkzPFkq83PV5+EjoISwoS6Hd42iRTjZXJ1GxBEOJcoaDp0JyRd0tf51I1ii3b00F5ltoqW3f4m/wBilsvkJyQuSXbc1rOBjO9F5C7pvTSvkacuGP8AwXxCf5Vt96HQzYm22mtdS5YorS3rv/Og+eNJebVgLGruxGMvFvSlfrZeLH6D82P3kltvfp0LcS0YRm4dvZoUtGaE2n5CeKFFYVbbYzLPsLS0oOGmrIEzQLiOaBbewgpQIHZBGOE0NghUHaHwFzWkHEGgkiMMb0IlsC1ZIpg0epbJD83D80JLsr+KB4WOtnRyL3JV/a/sZrcjzONG/heFWRpXT7+fcwQNvB5eWSZz6enx5v105+IZUliyU1C6lVS+LNHB5LkZfEI373dCvC+IqWrOWfHf2y5Xs+ClyqrMXF5pQy80VF2kkm3or956bsuHELRic8+Z6uuyrV/E588/frr33nPwiTtvpbbr1ewzho9S1jHQhR6Hz/0UkVKDocoiss+3wRGl/lW+oGOTk6W3Vdy3hq3L7j/Dsbp6aOtSClipUJhj1fyOhNUZmrYoqUaM2Wm1qbZTS3V+QOaUab9mvmQL9g+Tv/0zZMbT1To3vM66L9vUzTy7232oYGTh4635bDpRBwL7hz0FM2WOojKjTmkBGOm2oskRxhShboc3WwOOI6ismEXKLHz3FuDEAUSDPZkIPL4DQjPj0Gm3KGoOKAQ2CAwyEQ1DUqCNEEDcN4fGZfFfFZ4JQ5OW9W7V6LRafM6OFnlfHsvNnlrdVFeVLVfOwn6b8jtcP+IeHyuuJ4dRv/0x2mvNpa/c7C/CntYe14PLHNH+1tKXpzLS/J0fP4o3+E+JZeHmsmGbhLrW0l2ktpL1G86J5Ly9fwvDyTeLLBxklrGSafr/ALPN8TzYskoy6Pf7H0/8L/ifh+PisPEQjHN0jtb6yxS3X+O/qieOfheWN+1ilkgteaveX+S8u6OF5vPT1/6898/uWPnnB+LVJLWSvZa/Q9PGamk1Fr10+hFBLZJX2SQcGVk/Wfe5lHFDIFRZJTpEzF550tBHDTWjk/h1Fyy2/Qk46X1dXQpom3kjskurNcVUUl0WgnwqMXa+ny/Y158d6eYLCckRNaDsktSSjoSYo05Jerfohc4c0tNi8y969qDwSqOu4hNtGKlDXyWw1K9X/wBKWpIqheQ0OJnzQv8AnQYCoYf6nQ1wToGUapLqMWwoqWO3sFyBKRGyRHswXjNImTEUuyB0QdDxqQ2xdBpHRwMsOEhdFxZVNcJGmEzBCQ6MzLcrXxXGrHjcutUvXoeRlJttvVvVs2eK8TzSrpHT49WYiFuiTGRkJDRqVmxphNqmm007TTpprZprZn1X8Dfj55K4fiZJZH7sMuym9lGfRT7PZ+u/yWI1GrJ1GdvL6z+JseOOWsarT3u3NbWnyOOmcfwv8Q+0UMWVtzTaWR/1Ju0pP+67162jtJHn65yvTx17Q3C+pWcu9BM29jLaYsd6fP8AQ0cLHmk/LZd2Lh+Vsdw8HGv49QLXPGovmS97alpv3Lyzlo1V9exIkjHUGgyDlHQGS7ExvQk5/FrX1Kcev0CzvVtgPVGmAudrtQcNC8mNCG6JGTlbqhTkl9Co5fmZ+Imtl3sYDsdum/P6hMLTT0KlEtQWyKQEyQkKEhcoh8wnLMRUsgCmUIeXDoCAaZtwSy0wZMokdEOUqTfZMVBl537kvR/YmnFZRZACFoogo2DGxM6HQZuMdQw9Z4F40snLjyOp7KXSXq+j+55NFxk4tSjo00/RrZrzHrmdQcdXmvpE0LjC7YjgOL9rCM11Wq7Nbr5m9JJHkvx7ZdZ8mkdupqXNo68vgZM+W1XmmbFkBJDNQ5T7GSUNQ4yZHTpMpsXzC5yrcDpXETM0ci79diTk3qha4Z2mzTLcp2hclZHLoM5UiTGvPu/pqJcU2vN1p8QuImugFbV0V/PoagWkn8BuN0jMo6jcmiJI8nzJECUWHiYjVtgSDYrHLuQDyeRCpcQQQ8xFBMtIjNOJbCiiqIyRiK4mXuP0YFlZVp6oS5hRZQJZCiElobCQoJM1KLGiORBqRnUg1R0nTF5ek/CXGqMnjltJrlfRS2pvpf6HquIdHz3guOljU0knGceWUXs1umu0k9U+h6PhfGYNqPtG4uPuynpJOtYZOl9pLRrzs4eTi7r0ePqeua6uaNtJfI2qKRh4R+9zfzU1Lb1ZydWmvcb+Jnx3YWefuP4L/ZihkXx/mpF0pZKW2vkYs93q7fWuw7HfxKlBfUkVBao1ey+giMexrT0RJkyYfMRlnoaMsrM80QZeIjaBT1p7Dpx+YmhgMaSFz1LUSpRf+/URSpOmHjyA+yfTUOPCtO29v0NBMgqK7mm1Xn0QjO2viURGWDsgPt2iCy4gA5REyFzUVZbBICiRsFBORqJzs0akxZs46Gz+BjoyUshKKaIrLQKZZAVhKQCZaZqUHRkNijMmNjI3KxY34fFs2L8s7Sr3Wk46eXQ9R4X4/jy1GXuT/tezfTlf6Hit9yZOnnZnriVvnyWfH0Tip0viZIx10Yjw7jefBGb/ADVT9V1+zH4YJbnnsx6Zd+t+N92NmYo5a3Y/2nmBaMCCyZBMZ7FSlYEMolSxWaMeJj/ZUty1OPxEGnoKyM6XEY1T6nLzSGCixzGQy/IyphK0aDbjyVqisknSM8Jd9RmWfbzJM0snNv8ABoy8U3d3oaJQqrF5Ia7GoxWGUfMg6WJEEOWKkhoGQWKABoqctSlMWRJlIFz8gkyS5xtNPqcxqjqQ1MXHwqXrqBZyyiEkkgQmVJEUTLKcSkyQ0w4yAaKGUWNCkE3t6iIsZGRuVix6f8Nr3JLopfov2O3BHJ/D+OsNv+pt/DRL7M6EEnSdnDv+q9HH8xWTQrFJvdklhqhssZlscfX6m7ho9zBigzb7RpVVdv1AxvnkS69zn5+Mb0FxyUn5mXLLUsVpv/0d9hE1GTQDgyQx0awG+zRTGcya8wIwtkgKWuxcpomdV+5ni9PiItMzK2BJaBJ2rQnLK9BjJTVkGKixDhgZgzPmNRztJkRSIyJCypyGRQPKMgBHjQrxLH7ql2f0ZoghmXFzQa7r69AMcEhAWRFEp7hLYqJISRUoB40MSN4zbheKTSqk0+jNHAeGzzPlx8rl/a5Ri/gpNX8AVArPC13ovRe7Zk8Azwy48WWDxPJJRjKakoW3X5qp/A6Hg3gsGubIpXFyUoPSpRdNOtd0xn4cjcbxzaWiyYZe/imltcG9OtNO09qPQc7lOc5RjFzlzVG9+VJt31bTb82znesdOefqoRpVt2rp2Ag902aK+RmlHcw6mONp67MJyT6mbJi10YUFRYm5SUVYh53dsCtxUsmgIyeYTKYDoFdkODWtPQkiscC8pIMFqjRJUZ4Ta2RrnG0SjFlydDBKVWjfnx0m0tTLHh203uajNFw219CZfQPBF049qGSw3oiTPyEGPB6kFPPCpooh0cSZRRWhCEE5kNxSIQkemacRCGWo4niqXtHS7X60ZYohAK5MtEISNgxqZCHWOfS/iWQgsJ4fxrw5ebeL3Xk/1Pb453TvfUhDh3+vV478G8lAe0IQw2bLYDR0+zIQkkpmWTIQpFSXLsNw5aIQ1jJryfTQGWTt0KIWI3mQyGQhAsK7bFv3WQhJbya+f3AhIhBA5Rvq/oUQgp//2Q==\",\"prefer_v2\":false}}"
						}
					]
				},
				{
					"name": "Criar usuário e empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"fullname\": \"João da Silvsssa\",\n    \"email\": \"joao.silsva@exemplo.com\",\n    \"phone\": \"11999999999\",\n    \"document\": \"12345678300\",\n    \"birthdate\": \"1990-01-01\",\n    \"foto\": \"https://exemplo.com/foto.jpg\",\n    \n    \"company_name\": \"Empresa do João LTDA\",\n    \"averagebilling\": 10000.00,\n    \"averageticket\": 500.00,\n    \"website\": \"www.empresadojoao.com.br\",\n    \"postalcode\": \"01234567\",\n    \"address\": \"Avenida Paulista\",\n    \"city\": \"São Paulo\",\n    \"neighborhood\": \"Bela Vista\",\n    \"complement\": \"Sala 1001\",\n    \"housenumber\": \"1000\",\n    \"taxid\": \"12345678000100\",\n    \"areacode\": \"11\",\n    \"ispj\": true,\n    \"slug\": \"empresa-do-joao\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/users/register",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"users",
								"register"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Transações",
			"item": [
				{
					"name": "Todas Transações",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transacoes?limit=10&offset=0&status=waiting_payment, paid,chargedback,refunded,refused,canceled,expired&startDate=2023-12-31&endDate=2026-12-31&&paymentMethod=BOLETO,PIX,CARD",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transacoes"
							],
							"query": [
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "offset",
									"value": "0"
								},
								{
									"key": "status",
									"value": "waiting_payment, paid,chargedback,refunded,refused,canceled,expired"
								},
								{
									"key": "startDate",
									"value": "2023-12-31"
								},
								{
									"key": "endDate",
									"value": "2026-12-31"
								},
								{
									"key": null,
									"value": null
								},
								{
									"key": "paymentMethod",
									"value": "BOLETO,PIX,CARD"
								},
								{
									"key": "companyId",
									"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Usuarios",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzcwMzI4LCJpYXQiOjE3Mjg3NjY3MjgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg3NjY3Mjh9XSwic2Vzc2lvbl9pZCI6ImRiYjk2Zjg0LWE2ZWYtNDkxZS1iNzRiLTQ3Y2RmMzI3Yzg4ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RFJ8OKnk9glILTdl5MqvwoyrVSIwR8qscBaWpTCfUuE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/users",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 21:01:10 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1702"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1a0606e8076aa2-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "af11a02b-2a2a-4569-afb8-50379b07aa4b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"users\":[{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"ERON ROSA\",\"email\":\"codiguz@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"0000000000000\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"description\":\"Administrador principal\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\"fullname\":\"Márcia Letícia Renata da Rosa\",\"email\":\"veyefom793@ploncy.com\",\"phone\":\"(81) 99942-3810\",\"document\":\"143.434.552-11\",\"birthdate\":\"2000-05-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null},{\"id\":\"37319b1c-ac14-4bcf-9a0c-f3e059d77252\",\"fullname\":\"Luiza Fernandes\",\"email\":\"c@gmail.com\",\"phone\":\"(11) 55487-4120\",\"document\":\"207.104.810-55\",\"birthdate\":\"2000-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"61075148-1e13-4731-bab7-e8b2cee0027e\",\"fullname\":\"Bento Sebastião Pinto\",\"email\":\"macilet453@orsbap.com\",\"phone\":\"(11) 99113-2502\",\"document\":\"524.506.491-07\",\"birthdate\":\"2000-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"8e34bece-fed7-4b45-b725-effe6ddef895\",\"foto\":null},{\"id\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"fullname\":\"lysteste\",\"email\":\"jasmimalcantarama@gmail.com\",\"phone\":\"(19) 81981-8919\",\"document\":\"012.345.678-90\",\"birthdate\":\"1980-10-10\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6b366424-d046-41c6-8976-22a516f7dfb8\",\"foto\":null},{\"id\":\"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\"fullname\":\"lalalalalal alallalalala\",\"email\":\"wecekep115@esterace.com\",\"phone\":\"(61) 98383-3918\",\"document\":\"652.758.751-18\",\"birthdate\":\"2000-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null},{\"id\":\"e0a48887-8719-4666-8435-4a57065a1a02\",\"fullname\":\"Eleicoes Teste\",\"email\":\"lekar47809@eixdeal.com\",\"phone\":\"(11) 99130-1322\",\"document\":\"223.992.882-99\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null},{\"id\":\"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\"fullname\":\"Lucas da Silva\",\"email\":\"brenodevnomade@gmail.com\",\"phone\":\"(19) 99223-2212\",\"document\":\"844.872.810-67\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\"foto\":\"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1719826826119x824716933884910300/Pic.svg?_gl=1*1bsr1fr*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcxOTgyMzM1MC4xMTIuMS4xNzE5ODM1NDMwLjYwLjAuMA..\"},{\"id\":\"ca7c05a8-74a2-4442-b0f3-9e35996e1c1d\",\"fullname\":\"Mariana Stella\",\"email\":\"nablackpaytwo@gmail.com\",\"phone\":\"(17) 99130-1328\",\"document\":\"170.903.350-97\",\"birthdate\":\"2004-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"1b20d3b1-aa92-4b07-b391-45dc28e2e76e\",\"foto\":null},{\"id\":\"fb61b16b-677b-4463-8074-e6e3100c547a\",\"fullname\":\"Breno César Vitor Barbosa\",\"email\":\"nireto7660@brinkc.com\",\"phone\":\"(83) 98326-9194\",\"document\":\"217.110.834-70\",\"birthdate\":\"2000-05-04\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"b0571ff9-721a-4098-a2cb-f34b7578d328\",\"foto\":null}]}"
						}
					]
				},
				{
					"name": "Resumo",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transacoes/resumo?companyId=5a151c11-71fc-4074-9dce-ddbc2f88ea83",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transacoes",
								"resumo"
							],
							"query": [
								{
									"key": "companyId",
									"value": "5a151c11-71fc-4074-9dce-ddbc2f88ea83"
								}
							]
						}
					},
					"response": [
						{
							"name": "Usuarios",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzcwMzI4LCJpYXQiOjE3Mjg3NjY3MjgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg3NjY3Mjh9XSwic2Vzc2lvbl9pZCI6ImRiYjk2Zjg0LWE2ZWYtNDkxZS1iNzRiLTQ3Y2RmMzI3Yzg4ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RFJ8OKnk9glILTdl5MqvwoyrVSIwR8qscBaWpTCfUuE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/users",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 21:01:10 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1702"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1a0606e8076aa2-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "af11a02b-2a2a-4569-afb8-50379b07aa4b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"users\":[{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"ERON ROSA\",\"email\":\"codiguz@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"0000000000000\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"description\":\"Administrador principal\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\"fullname\":\"Márcia Letícia Renata da Rosa\",\"email\":\"veyefom793@ploncy.com\",\"phone\":\"(81) 99942-3810\",\"document\":\"143.434.552-11\",\"birthdate\":\"2000-05-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null},{\"id\":\"37319b1c-ac14-4bcf-9a0c-f3e059d77252\",\"fullname\":\"Luiza Fernandes\",\"email\":\"c@gmail.com\",\"phone\":\"(11) 55487-4120\",\"document\":\"207.104.810-55\",\"birthdate\":\"2000-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"61075148-1e13-4731-bab7-e8b2cee0027e\",\"fullname\":\"Bento Sebastião Pinto\",\"email\":\"macilet453@orsbap.com\",\"phone\":\"(11) 99113-2502\",\"document\":\"524.506.491-07\",\"birthdate\":\"2000-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"8e34bece-fed7-4b45-b725-effe6ddef895\",\"foto\":null},{\"id\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"fullname\":\"lysteste\",\"email\":\"jasmimalcantarama@gmail.com\",\"phone\":\"(19) 81981-8919\",\"document\":\"012.345.678-90\",\"birthdate\":\"1980-10-10\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6b366424-d046-41c6-8976-22a516f7dfb8\",\"foto\":null},{\"id\":\"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\"fullname\":\"lalalalalal alallalalala\",\"email\":\"wecekep115@esterace.com\",\"phone\":\"(61) 98383-3918\",\"document\":\"652.758.751-18\",\"birthdate\":\"2000-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null},{\"id\":\"e0a48887-8719-4666-8435-4a57065a1a02\",\"fullname\":\"Eleicoes Teste\",\"email\":\"lekar47809@eixdeal.com\",\"phone\":\"(11) 99130-1322\",\"document\":\"223.992.882-99\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null},{\"id\":\"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\"fullname\":\"Lucas da Silva\",\"email\":\"brenodevnomade@gmail.com\",\"phone\":\"(19) 99223-2212\",\"document\":\"844.872.810-67\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\"foto\":\"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1719826826119x824716933884910300/Pic.svg?_gl=1*1bsr1fr*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcxOTgyMzM1MC4xMTIuMS4xNzE5ODM1NDMwLjYwLjAuMA..\"},{\"id\":\"ca7c05a8-74a2-4442-b0f3-9e35996e1c1d\",\"fullname\":\"Mariana Stella\",\"email\":\"nablackpaytwo@gmail.com\",\"phone\":\"(17) 99130-1328\",\"document\":\"170.903.350-97\",\"birthdate\":\"2004-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"1b20d3b1-aa92-4b07-b391-45dc28e2e76e\",\"foto\":null},{\"id\":\"fb61b16b-677b-4463-8074-e6e3100c547a\",\"fullname\":\"Breno César Vitor Barbosa\",\"email\":\"nireto7660@brinkc.com\",\"phone\":\"(83) 98326-9194\",\"document\":\"217.110.834-70\",\"birthdate\":\"2000-05-04\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"b0571ff9-721a-4098-a2cb-f34b7578d328\",\"foto\":null}]}"
						}
					]
				},
				{
					"name": "Resumo Copy",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transacoes/resumo",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transacoes",
								"resumo"
							],
							"query": [
								{
									"key": "companyId",
									"value": "d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Usuarios",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzcwMzI4LCJpYXQiOjE3Mjg3NjY3MjgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg3NjY3Mjh9XSwic2Vzc2lvbl9pZCI6ImRiYjk2Zjg0LWE2ZWYtNDkxZS1iNzRiLTQ3Y2RmMzI3Yzg4ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RFJ8OKnk9glILTdl5MqvwoyrVSIwR8qscBaWpTCfUuE",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/users",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 21:01:10 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "1702"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1a0606e8076aa2-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "af11a02b-2a2a-4569-afb8-50379b07aa4b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"users\":[{\"id\":\"354afdd4-933a-4c38-831f-973f570eab15\",\"fullname\":\"ERON ROSA\",\"email\":\"codiguz@gmail.com\",\"phone\":\"(11) 99999-9999\",\"document\":\"0000000000000\",\"birthdate\":\"2004-08-02\",\"usertype\":\"MASTER\",\"description\":\"Administrador principal\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\"fullname\":\"Márcia Letícia Renata da Rosa\",\"email\":\"veyefom793@ploncy.com\",\"phone\":\"(81) 99942-3810\",\"document\":\"143.434.552-11\",\"birthdate\":\"2000-05-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\"foto\":null},{\"id\":\"37319b1c-ac14-4bcf-9a0c-f3e059d77252\",\"fullname\":\"Luiza Fernandes\",\"email\":\"c@gmail.com\",\"phone\":\"(11) 55487-4120\",\"document\":\"207.104.810-55\",\"birthdate\":\"2000-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\"foto\":null},{\"id\":\"61075148-1e13-4731-bab7-e8b2cee0027e\",\"fullname\":\"Bento Sebastião Pinto\",\"email\":\"macilet453@orsbap.com\",\"phone\":\"(11) 99113-2502\",\"document\":\"524.506.491-07\",\"birthdate\":\"2000-02-01\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"8e34bece-fed7-4b45-b725-effe6ddef895\",\"foto\":null},{\"id\":\"40e4d35c-f972-46e5-a607-c5aeff5cfb2f\",\"fullname\":\"lysteste\",\"email\":\"jasmimalcantarama@gmail.com\",\"phone\":\"(19) 81981-8919\",\"document\":\"012.345.678-90\",\"birthdate\":\"1980-10-10\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"6b366424-d046-41c6-8976-22a516f7dfb8\",\"foto\":null},{\"id\":\"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\"fullname\":\"lalalalalal alallalalala\",\"email\":\"wecekep115@esterace.com\",\"phone\":\"(61) 98383-3918\",\"document\":\"652.758.751-18\",\"birthdate\":\"2000-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":false,\"company\":\"d004da0f-594b-4dc9-9601-ad101001c041\",\"foto\":null},{\"id\":\"e0a48887-8719-4666-8435-4a57065a1a02\",\"fullname\":\"Eleicoes Teste\",\"email\":\"lekar47809@eixdeal.com\",\"phone\":\"(11) 99130-1322\",\"document\":\"223.992.882-99\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"fd697e4a-456b-43e8-b169-d79ec2c43ba7\",\"foto\":null},{\"id\":\"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\"fullname\":\"Lucas da Silva\",\"email\":\"brenodevnomade@gmail.com\",\"phone\":\"(19) 99223-2212\",\"document\":\"844.872.810-67\",\"birthdate\":\"2003-09-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\"foto\":\"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1719826826119x824716933884910300/Pic.svg?_gl=1*1bsr1fr*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcxOTgyMzM1MC4xMTIuMS4xNzE5ODM1NDMwLjYwLjAuMA..\"},{\"id\":\"ca7c05a8-74a2-4442-b0f3-9e35996e1c1d\",\"fullname\":\"Mariana Stella\",\"email\":\"nablackpaytwo@gmail.com\",\"phone\":\"(17) 99130-1328\",\"document\":\"170.903.350-97\",\"birthdate\":\"2004-08-02\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"1b20d3b1-aa92-4b07-b391-45dc28e2e76e\",\"foto\":null},{\"id\":\"fb61b16b-677b-4463-8074-e6e3100c547a\",\"fullname\":\"Breno César Vitor Barbosa\",\"email\":\"nireto7660@brinkc.com\",\"phone\":\"(83) 98326-9194\",\"document\":\"217.110.834-70\",\"birthdate\":\"2000-05-04\",\"usertype\":\"USER\",\"description\":\"Descrição do perfil do usuário\",\"isAdmin\":true,\"company\":\"b0571ff9-721a-4098-a2cb-f34b7578d328\",\"foto\":null}]}"
						}
					]
				},
				{
					"name": "Transação pelo ID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/transacoes/4a1455a1-882b-465f-b629-13f5884908cb",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"transacoes",
								"4a1455a1-882b-465f-b629-13f5884908cb"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Carteira",
			"item": [
				{
					"name": "Antecipar",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"userId\": \"354afdd4-933a-4c38-831f-973f570eab15\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/antecipacoes/create",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"antecipacoes",
								"create"
							]
						}
					},
					"response": []
				},
				{
					"name": "Remover Saldo",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Financial-Password",
								"value": "123",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"userId\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n    \"amount\": 5366,\n    \"type\": \"pix\",\n    \"motivo\": \"Reajuste\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/wallet/remove-balance",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"wallet",
								"remove-balance"
							]
						}
					},
					"response": []
				},
				{
					"name": "Gerenciar Saldo",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Financial-Password",
								"value": "123",
								"type": "text"
							},
							{
								"key": "Security-Password",
								"value": "1234",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"userId\": \"0705952e-f869-4a80-b3b3-5d23e3f3f0c7\",\n  \"amount\": 5000,\n  \"type\": \"card\",\n  \"motivo\": \"Ajuste de saldo negativo\",\n  \"operation\": \"remove\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/wallet/balance-management",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"wallet",
								"balance-management"
							]
						}
					},
					"response": []
				},
				{
					"name": "Wallet",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/wallet?userId=0705952e-f869-4a80-b3b3-5d23e3f3f0c7",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"wallet"
							],
							"query": [
								{
									"key": "userId",
									"value": "0705952e-f869-4a80-b3b3-5d23e3f3f0c7"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Extrato",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/extrato/354afdd4-933a-4c38-831f-973f570eab15?limit=10&offset=0",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"extrato",
								"354afdd4-933a-4c38-831f-973f570eab15"
							],
							"query": [
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "offset",
									"value": "0"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "A receber",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/wallet?userId=354afdd4-933a-4c38-831f-973f570eab15",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"wallet"
							],
							"query": [
								{
									"key": "userId",
									"value": "354afdd4-933a-4c38-831f-973f570eab15"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Saque",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"pixkeyid\": \"79184183-3669-43d7-b68d-8ae78a18c2b2\",\n    \"requestedamount\": 1600,\n    \"description\": \"Teste\",\n    \"isPix\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/withdrawals",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"withdrawals"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Webhooks",
			"item": [
				{
					"name": "Webhook",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhook?user_id=354afdd4-933a-4c38-831f-973f570eab15&limit=100&offset=0",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhook"
							],
							"query": [
								{
									"key": "user_id",
									"value": "354afdd4-933a-4c38-831f-973f570eab15"
								},
								{
									"key": "limit",
									"value": "100"
								},
								{
									"key": "offset",
									"value": "0"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Webhook",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"url\": \"https://meuservidor.com/webhook\",\n    \"ativa\": true,\n    \"admin\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhook",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhook"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar Webhook",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"url\": \"https://webhook.site/591dfc1a-5e65-4625-b9f3-6ffcfd58ddf1\",\n    \"ativa\": true,\n    \"admin\": false\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhook/:webhookId",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhook",
								":webhookId"
							],
							"variable": [
								{
									"key": "webhookId",
									"value": "b76d2385-c273-4065-ba4a-46c52b0cb410"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Webhook",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/webhook/:webhookId",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"webhook",
								":webhookId"
							],
							"variable": [
								{
									"key": "webhookId",
									"value": "8656119c-9f76-4712-b05a-bdce18ad28b4"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Faturas",
			"item": [
				{
					"name": "Faturas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/billings",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"billings"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Fatura",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"billingId\": \"401ba635-681c-439e-b084-7a37d4cc7814\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/billings/pay",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"billings",
								"pay"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Baas",
			"item": [
				{
					"name": "Todos Baas",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/baas?",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"baas"
							],
							"query": [
								{
									"key": "",
									"value": null
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Baas Pelo id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/baas/c0a522a3-58cd-4dfb-ba09-3fa6238eadd1",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"baas",
								"c0a522a3-58cd-4dfb-ba09-3fa6238eadd1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Taxas do Baas",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/baas/c0a522a3-58cd-4dfb-ba09-3fa6238eadd1/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"baas",
								"c0a522a3-58cd-4dfb-ba09-3fa6238eadd1",
								"taxas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Ativar Baas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/baas/c0ad3f73-d4bb-4595-9185-a7729e61bb22/active",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"baas",
								"c0ad3f73-d4bb-4595-9185-a7729e61bb22",
								"active"
							]
						}
					},
					"response": []
				},
				{
					"name": "Alterar Taxa do Baas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"fee\": 500\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/baas/c0ad3f73-d4bb-4595-9185-a7729e61bb22/taxa",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"baas",
								"c0ad3f73-d4bb-4595-9185-a7729e61bb22",
								"taxa"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Adquirentes",
			"item": [
				{
					"name": "Todas Adquirentes",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/acquirers?limit=100",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"acquirers"
							],
							"query": [
								{
									"key": "limit",
									"value": "100"
								}
							]
						}
					},
					"response": [
						{
							"name": "Todas Adquirentes",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMwMDQ1NjY2LCJpYXQiOjE3MzAwNDIwNjYsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzAwNDIwNjZ9XSwic2Vzc2lvbl9pZCI6IjExZWU4YzhhLTM3MjgtNDdkZS05OGJjLTAyODE3NDZlOThlMSIsImlzX2Fub255bW91cyI6ZmFsc2V9.IZ7WBgd7UgwvSPX9pIcswB7D6IEOBkgbx7cL564fIGU",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/acquirers?limit=100",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"acquirers"
									],
									"query": [
										{
											"key": "limit",
											"value": "100"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 03:15:35 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "4468"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921953939eab827a-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "f8c5f242-31b6-4c1d-ba74-a750947d3f8e"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"acquirers\": [\n        {\n            \"id\": \"a22e8e59-1fcf-431a-8b85-e88a26f61113\",\n            \"nome\": \"PAGAR-ME\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"PAGAR-ME\",\n            \"cor\": \"#a8c02c\",\n            \"foto\": \"https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/1949/PagarMe_Logo_PRINCIPAL-02.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"93d1c258-765f-4a15-a61c-7c0dc05bcf68\",\n            \"nome\": \"OWEN_gOLD\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"OWEN PAY\",\n            \"cor\": \"#42b6ff\",\n            \"foto\": \"https://5475a81c6afe59948fcd27940cd68bc0.cdn.bubble.io/f1720030283746x227870477696108240/owenpay-logo.0180c013.svg?_gl=1*1ad5ele*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNA..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcyMDAwMzc2OS4xMTQuMS4xNzIwMDMwMjc0LjYwLjAuMA..\",\n            \"cardactive\": true,\n            \"pixactive\": true,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"2e3ba30c-87bb-440f-a8bb-32815f70b511\",\n            \"nome\": \"MEDIUSPAG\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"Medius Pag\",\n            \"cor\": \"#050f30\",\n            \"foto\": \"https://9d0768542270522c7070a6de10077b57.cdn.bubble.io/f1722101650660x198794401236079400/MEDIUS_PAG%20%282%29.png?_gl=1*jtfl17*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNC4xNzM4ODc1MTU0LjE3MjIwMDE3MDEuMTcyMjAwMTcwMQ..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcyMjA3ODA1Ny4xMzIuMS4xNzIyMTAxNjQ2LjYwLjAuMA..\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": true\n        },\n        {\n            \"id\": \"f0510ed4-7c80-4bf6-bbee-ebb2862e301b\",\n            \"nome\": \"PAYUP\",\n            \"process_card\": true,\n            \"process_pix\": false,\n            \"process_boleto\": false,\n            \"description\": \"PAYUP\",\n            \"cor\": \"#4d2ac9\",\n            \"foto\": \"https://www.payupbrasil.com.br/assets/Images/payup_logo.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"193466df-f771-416d-ad3a-5e477d5774bc\",\n            \"nome\": \"MEDIUSPAGV2\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"MEDIUSPAGV2\",\n            \"cor\": \"#050f30\",\n            \"foto\": \"https://9d0768542270522c7070a6de10077b57.cdn.bubble.io/f1722101650660x198794401236079400/MEDIUS_PAG%20%282%29.png?_gl=1*jtfl17*_gcl_aw*R0NMLjE3MTkzMDM0NDUuQ2p3S0NBancxZW16QmhCOEVpd0FId1paeFhMM08xVDRQSlFBOFROSGppa3JCUmRfLTQyaGx0TUxiNXRPYzZ6UkdfSS1UTDBXSkw0bnlSb0NxVFVRQXZEX0J3RQ..*_gcl_au*NTQyNTM1NDMuMTcxNjc0ODQwNC4xNzM4ODc1MTU0LjE3MjIwMDE3MDEuMTcyMjAwMTcwMQ..*_ga*NDU2Mzg3ODA1LjE3MDg5NTYxNTU.*_ga_BFPVR2DEE2*MTcyMjA3ODA1Ny4xMzIuMS4xNzIyMTAxNjQ2LjYwLjAuMA..\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"602f529a-d848-40ce-80d4-b1b367121f02\",\n            \"nome\": \"ABMEX\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"ABMEX\",\n            \"cor\": \"#FE3D00\",\n            \"foto\": \"https://files.readme.io/b96ea00-abmex9.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"f87f4af2-d0ab-48ee-a964-64743db49948\",\n            \"nome\": \"TRANSFEERA\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"subadquirente transfeera\",\n            \"cor\": \"#1FBFAE\",\n            \"foto\": \"https://transfeera.com/wp-content/themes/assets/global/layout/images/logos/transfeera-logo-selo-verde.svg\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"3a792234-0767-4ee8-89f7-a1978fb7f982\",\n            \"nome\": \"SNAKEPAY\",\n            \"process_card\": null,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"SNAKEPAY\",\n            \"cor\": \"#25FF63\",\n            \"foto\": \"https://content.pstmn.io/6f03ffeb-b0ec-4422-b72e-3cb607309e5d/bG9nby1zbmFrZS1iY28ucG5n\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"cf256b06-4539-4528-ad18-5e439cc661fe\",\n            \"nome\": \"ASAAS\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"ASAAS\",\n            \"cor\": \"#0030b9\",\n            \"foto\": \"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/580/logo-asaas-azul-.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"7861a8f9-0f95-47fc-a037-36d1f2879161\",\n            \"nome\": \"PRIMEPAG\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"PRIMEPAG\",\n            \"cor\": \"#F7B500\",\n            \"foto\": \"https://developers.primepag.com.br/img/logo.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"5f89b6ca-4537-4630-bd41-106bf900a06d\",\n            \"nome\": \"FIVEPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"FIVEPAY\",\n            \"cor\": \"#0B07A1\",\n            \"foto\": \"https://subadquirente.fivepay.com.br/web/fivepay.com.br/logo_menu_light.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"5f89b6ca-4535-4630-bd41-106bf900a06a\",\n            \"nome\": \"ARMPAYV2\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"ARMPAYV2\",\n            \"cor\": \"#0B07A1\",\n            \"foto\": \"https://armpay.acessarminhaconta.com/views/assets/images/logo.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"97b79927-f393-4cc6-a441-b765d9423cc7\",\n            \"nome\": \"WEMAX\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"WEMAX\",\n            \"cor\": \"#3E9ED8\",\n            \"foto\": \"https://wemaxpay.com.br/assets/img/logo_azul.svg\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"d792358f-9520-4652-a681-9fdc33f3e0db\",\n            \"nome\": \"IUGU_SUBCONTA\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"IUGU_SUBCONTA\",\n            \"cor\": \"#000209\",\n            \"foto\": \"https://media.licdn.com/dms/image/v2/C4E12AQEQmLTLsz0jHw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1621592290596?e=2147483647&v=beta&t=o4rajRfWnFCk6A_cRLDCtuZpZacBR7DAMbGBGt_DAFU\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"466379f8-759e-41e3-a4ae-95a057927103\",\n            \"nome\": \"MIDASPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"MIDASPAY\",\n            \"cor\": \"#877655\",\n            \"foto\": \"https://files.readme.io/8a1e8af-small-logo.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"9245eab2-d0ed-4537-854a-4965336337fd\",\n            \"nome\": \"DUBPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"DUBPAY\",\n            \"cor\": \"#622387\",\n            \"foto\": \"https://dubpay.com.br/wp-content/uploads/2024/03/logo-dubpay-cinz-1.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"36528a15-3636-4b0e-8fbb-86c11fb435de\",\n            \"nome\": \"PAGUESAFE\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"PAGUESAFE\",\n            \"cor\": \"#47D47B\",\n            \"foto\": \"https://i.imgur.com/5RWmPCV.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"42a7a716-32c8-4baa-8b16-5035b14e5399\",\n            \"nome\": \"VOLUTI\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"VOLUTI\",\n            \"cor\": \"#0984E3\",\n            \"foto\": \"https://files.readme.io/fc47972-small-voluti_logo_colors_site.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"a1a7874d-4622-4706-8253-668fbb49405c\",\n            \"nome\": \"VILLETPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"VILLETPAY\",\n            \"cor\": \"#FFB100\",\n            \"foto\": \"https://files.readme.io/fd8da1a-small-logo.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"ba7eb4b9-1868-4a6f-8b10-ef36064319bd\",\n            \"nome\": \"SAFE2PAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"SAFE2PAY\",\n            \"cor\": \"#00304D\",\n            \"foto\": \"https://developers.safe2pay.com.br/imagens/v3.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"ccc138c1-a46c-49e4-b384-11fd255454a9\",\n            \"nome\": \"PRONTTUS\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"subadquirente PRONTTUS\",\n            \"cor\": \"#1FBFAE\",\n            \"foto\": \"https://files.readme.io/cc96d8cd5c2962428eb3be07017abb8724e255952d0a9c3cbc0103501d9ea363-small-logo.png\",\n            \"cardactive\": null,\n            \"pixactive\": null,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"e0f5d824-67e3-46b4-9bc3-9fa438fea5f7\",\n            \"nome\": \"AARIN\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"AARIN INTEGRAÇÃO\",\n            \"cor\": null,\n            \"foto\": \"https://i0.wp.com/aarin.com.br/wp-content/uploads/2024/05/logotipo-branco.png?w=904&ssl=1\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"eb01be32-9ac4-42c7-b295-5009f7beb3c2\",\n            \"nome\": \"ARKAMA\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"ARKAMA\",\n            \"cor\": \"#5a33ff\",\n            \"foto\": \"https://files.readme.io/276c40d-small-Arkama_Logo_Concept_1.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"84d216dd-a1ae-4af0-bb3a-e0efc23b4bcb\",\n            \"nome\": \"PLUGOUAI\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"PLUGOUAI\",\n            \"cor\": \"#43d17b\",\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"fa1f7492-8f20-4c96-a4e9-ff47daa3cd39\",\n            \"nome\": \"PAYCO\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"PAYCO\",\n            \"cor\": \"#601dfa\",\n            \"foto\": \"https://cdn.payments.payco.com.br/landing-page/assets/images/logo.svg?format=auto&width=256&quality=75\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"68eef21a-9876-451b-ab9d-75cd9f7f465f\",\n            \"nome\": \"CASHTIME\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"teste\",\n            \"cor\": null,\n            \"foto\": \"212121\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"98ae20f1-6e8c-47f4-842a-efbf61f8ce7b\",\n            \"nome\": \"KINGCASH\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"kingcash\",\n            \"cor\": \"#009EDE\",\n            \"foto\": \"https://files.readme.io/93c7071-small-FAVICON.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"7a48807f-cee5-483e-863b-997330a19595\",\n            \"nome\": \"TRANSFEERAV2\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"Transfeera v2\",\n            \"cor\": \"#1FBFAE\",\n            \"foto\": \"https://transfeera.com/wp-content/themes/assets/global/layout/images/logos/transfeera-logo-selo-verde.svg\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"cdd10f67-9f31-4c7a-8b42-10693bb9f127\",\n            \"nome\": \"ALDOC\",\n            \"process_card\": null,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"ALDOC\",\n            \"cor\": \"#2bb4a9\",\n            \"foto\": \"https://developers.onz.software/img/logo-primary.svg\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"21e8f66c-1979-47fd-a410-20df4658ce3d\",\n            \"nome\": \"FIREBANK\",\n            \"process_card\": false,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"Adquirente Firebank\",\n            \"cor\": \"#cc6942\",\n            \"foto\": \"https://www.firebanking.io/_next/static/media/brand.c7a93b52.svg\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"b651a867-f3aa-461e-8133-0972ab752bd1\",\n            \"nome\": \"PAYMENTSFLEX\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"PAYMENTSFLEX\",\n            \"cor\": \"#31B291\",\n            \"foto\": \"https://files.readme.io/7359a663153c405cb454b2f65e1a97f7bc5c655667ca37e8594dd9b313f2fceb-small-MARCA.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"4d3aa9a8-d538-443b-95da-cce17987b4e8\",\n            \"nome\": \"AXISBANKING\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"AXISBANKING\",\n            \"cor\": null,\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"e34f01a8-6e8e-4cd3-80f5-b8033f9a7ef8\",\n            \"nome\": \"PLUGOUAIV2\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"V2 plugou ai iugu like\",\n            \"cor\": \"#2DBDFF\",\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"e3933fad-4f64-4eb2-a1df-2f2dd2b977d8\",\n            \"nome\": \"IUPIPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"IUPIPAY Adquirente\",\n            \"cor\": \"#d12a86\",\n            \"foto\": \"https://files.readme.io/89141fb9f5aaaf97e4d3c5d14ee563ca0569a7f769cdfea76fffa96a3e6bdf0e-small-WhatsApp_Image_2024-08-21_at_22.39.23-removebg-preview.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"b1af0c18-36fd-4e46-bc8f-a3c38aee79f6\",\n            \"nome\": \"COMMERCEGATE\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"COMMERCEGATE\",\n            \"cor\": \"#edae0e\",\n            \"foto\": \"https://gw.cgpaytech.com/v1/static/pf/images/logo_cg_text.svg\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"90734510-6e87-4473-b2dd-b2d7c8ed067c\",\n            \"nome\": \"PAGUESAFEV2\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": \"PagueSafe V2\",\n            \"cor\": \"#2ce8b0\",\n            \"foto\": \"https://files.readme.io/57c23c327b2273a0b0f7f2e2ead73726c156b66cddea0209277cb21820c5e720-small-pagsafe-icon.png\",\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"b97b2004-bd77-4523-bd85-223963ff3569\",\n            \"nome\": \"REFLOWPAY\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"REFLOWPAY\",\n            \"cor\": null,\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"96807769-f161-4245-82ea-2599bbf43a6a\",\n            \"nome\": \"FX\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": true,\n            \"description\": null,\n            \"cor\": \"#03A9F4\",\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": true,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"ed272dd3-15fb-4eb6-8339-82c20734e69c\",\n            \"nome\": \"SUB\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": false,\n            \"description\": \"SUB\",\n            \"cor\": null,\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        },\n        {\n            \"id\": \"5e59bd89-7ba1-4a28-9c19-96f2febc70d4\",\n            \"nome\": \"MUTUAL\",\n            \"process_card\": true,\n            \"process_pix\": true,\n            \"process_boleto\": null,\n            \"description\": \"MUTUAL\",\n            \"cor\": null,\n            \"foto\": null,\n            \"cardactive\": false,\n            \"pixactive\": false,\n            \"boletoactive\": false\n        }\n    ],\n    \"count\": 40\n}"
						}
					]
				},
				{
					"name": "Adquirente pelo ID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"acquirers",
								"a22e8e59-1fcf-431a-8b85-e88a26f61113"
							]
						}
					},
					"response": [
						{
							"name": "Adquirente pelo ID",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NjQxOTMzLCJpYXQiOjE3Mjk2MzgzMzMsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk2MzgzMzN9XSwic2Vzc2lvbl9pZCI6ImVhMDEyN2NmLTMzZmQtNGExMy1iZmExLTg0OGE2MWRlNzVjZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.qhvQQ0jOsxw4fBJwXQCO4lj_XFZp8S5jj82A0eR6xnY",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"acquirers",
										"a22e8e59-1fcf-431a-8b85-e88a26f61113"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 03:15:59 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "262"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9219542cbf11827a-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "x-deno-execution-id",
									"value": "19a8cbda-ba23-45df-bf46-871e0165bd79"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"success\": true,\n    \"acquirer\": {\n        \"id\": \"a22e8e59-1fcf-431a-8b85-e88a26f61113\",\n        \"nome\": \"PAGAR-ME\",\n        \"process_card\": true,\n        \"process_pix\": true,\n        \"process_boleto\": true,\n        \"description\": \"PAGAR-ME\",\n        \"cor\": \"#a8c02c\",\n        \"foto\": \"https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/1949/PagarMe_Logo_PRINCIPAL-02.png\",\n        \"cardactive\": false,\n        \"pixactive\": false,\n        \"boletoactive\": false\n    }\n}"
						}
					]
				},
				{
					"name": "Taxas da Adquirente",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"acquirers",
								"a22e8e59-1fcf-431a-8b85-e88a26f61113",
								"taxas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Ativar Adquirente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"acquirers_pix\": true,\n    \"acquirers_boleto\": true,\n    \"acquirers_card\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113/active",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"acquirers",
								"a22e8e59-1fcf-431a-8b85-e88a26f61113",
								"active"
							]
						}
					},
					"response": [
						{
							"name": "Ativar Adquirente",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NjU2NzAzLCJpYXQiOjE3Mjk2NTMxMDMsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk2NTMxMDN9XSwic2Vzc2lvbl9pZCI6ImQxMDAyYWM5LWU1ZWQtNDUzMC05NTQ4LWM3NGQ0N2U4YTExZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.5QZBrMLCKYkI7OJYMEIU3BBVZJFzycFJti-qfwIjXPw",
										"disabled": true
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"acquirers_pix\": true,\n    \"acquirers_boleto\": true,\n    \"acquirers_card\": true\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113/active",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"acquirers",
										"a22e8e59-1fcf-431a-8b85-e88a26f61113",
										"active"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 03:18:52 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "96"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "921958613a213b6c-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "13923da3-da36-44db-8c9f-3008dd7f203b"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"message\":\"Multi-acquirer system and companies updated successfully\"}"
						}
					]
				},
				{
					"name": "Alterar Taxas Adquirente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"mdr_1x_adquirente\": 10.95,\n    \"mdr_2x_adquirente\": 3.0,\n    \"mdr_3x_adquirente\": 3.5,\n    \"mdr_4x_adquirente\": 4.0,\n    \"mdr_5x_adquirente\": 4.5,\n    \"mdr_6x_adquirente\": 5.0,\n    \"mdr_7x_adquirente\": 5.5,\n    \"mdr_8x_adquirente\": 6.0,\n    \"mdr_9x_adquirente\": 6.5,\n    \"mdr_10x_adquirente\": 7.0,\n    \"mdr_11x_adquirente\": 7.5,\n    \"mdr_12x_adquirente\": 8.0,\n    \"pix_fee_percentage\": 0.5,\n    \"pix_fee_fixed\": 0.25,\n    \"card_fee_percentage\": 2.0,\n    \"card_fee_fixed\": 0.30,\n    \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n    \"boleto_fee_percentage\": 1.2,\n    \"boleto_fee_fixed\": 0.75\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"acquirers",
								"a22e8e59-1fcf-431a-8b85-e88a26f61113",
								"taxas"
							]
						}
					},
					"response": [
						{
							"name": "Alterar Taxas Adquirente",
							"originalRequest": {
								"method": "PATCH",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NjQ5ODU4LCJpYXQiOjE3Mjk2NDYyNTgsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjk2NDYyNTh9XSwic2Vzc2lvbl9pZCI6IjVjN2NmY2Y0LWZjOGMtNDA3YS1iODk1LTk1ZDRmMDgyZjFhYSIsImlzX2Fub255bW91cyI6ZmFsc2V9.yBCVE7uwpWP8rg5uFH2D62eNErDD8I5JlltiZfoGJnw",
										"disabled": true
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"mdr_1x_adquirente\": 10.95,\n    \"mdr_2x_adquirente\": 3.0,\n    \"mdr_3x_adquirente\": 3.5,\n    \"mdr_4x_adquirente\": 4.0,\n    \"mdr_5x_adquirente\": 4.5,\n    \"mdr_6x_adquirente\": 5.0,\n    \"mdr_7x_adquirente\": 5.5,\n    \"mdr_8x_adquirente\": 6.0,\n    \"mdr_9x_adquirente\": 6.5,\n    \"mdr_10x_adquirente\": 7.0,\n    \"mdr_11x_adquirente\": 7.5,\n    \"mdr_12x_adquirente\": 8.0,\n    \"pix_fee_percentage\": 0.5,\n    \"pix_fee_fixed\": 0.25,\n    \"card_fee_percentage\": 2.0,\n    \"card_fee_fixed\": 0.30,\n    \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n    \"boleto_fee_percentage\": 1.2,\n    \"boleto_fee_fixed\": 0.75\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://irxrumcabffstzoncjfk.supabase.co/functions/v1/acquirers/a22e8e59-1fcf-431a-8b85-e88a26f61113/taxas",
									"protocol": "https",
									"host": [
										"irxrumcabffstzoncjfk",
										"supabase",
										"co"
									],
									"path": [
										"functions",
										"v1",
										"acquirers",
										"a22e8e59-1fcf-431a-8b85-e88a26f61113",
										"taxas"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "plain",
							"header": [
								{
									"key": "Date",
									"value": "Mon, 17 Mar 2025 03:19:28 GMT"
								},
								{
									"key": "Content-Type",
									"value": "text/plain;charset=UTF-8"
								},
								{
									"key": "Content-Length",
									"value": "647"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "9219594f48ef059b-IAD"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains; preload"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "sb-project-ref",
									"value": "irxrumcabffstzoncjfk"
								},
								{
									"key": "x-deno-execution-id",
									"value": "36967a4f-f4da-446a-b534-742bbd41dde0"
								},
								{
									"key": "x-sb-edge-region",
									"value": "us-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\"success\":true,\"message\":\"Taxas updated successfully\",\"acquirer\":{\"id\":\"a22e8e59-1fcf-431a-8b85-e88a26f61113\",\"created_date\":\"2024-06-01T02:24:25\",\"modified_date\":\"2024-06-01T02:24:28\",\"nome\":\"PAGAR-ME\",\"process_card\":true,\"process_pix\":true,\"process_boleto\":true,\"description\":\"PAGAR-ME\",\"chave_key_adquirente\":\"c2tfdGVzdF9kNzYyZmZjYWMxNTE0YWQ0YTdiZTUwNDY3ZWVjOTM3Zjo=\",\"cor\":\"#a8c02c\",\"foto\":\"https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/1949/PagarMe_Logo_PRINCIPAL-02.png\",\"boleto_fee_percentage\":1.2,\"boleto_fee_fixed\":0.75,\"card_fee_percentage\":2,\"card_fee_fixed\":0.3,\"pix_fee_percentage\":0.5,\"pix_fee_fixed\":0.25,\"fee_type_boleto\":\"Taxa Fixa + Taxa variável\",\"fee_type_card\":\"Taxa Fixa + Taxa variável\",\"fee_type_pix\":\"Taxa Fixa + Taxa variável\",\"fee_type_fixed_boleto\":\"R$\",\"fee_type_fixed_card\":\"R$\",\"fee_type_fixed_pix\":\"R$\",\"mdr_1x_adquirente\":10.95,\"mdr_2x_adquirente\":3,\"mdr_3x_adquirente\":3.5,\"mdr_4x_adquirente\":4,\"mdr_5x_adquirente\":4.5,\"mdr_6x_adquirente\":5,\"mdr_7x_adquirente\":5.5,\"mdr_8x_adquirente\":6,\"mdr_9x_adquirente\":6.5,\"mdr_10x_adquirente\":7,\"mdr_11x_adquirente\":7.5,\"mdr_12x_adquirente\":8,\"client_key_adquirente\":null,\"emailClient\":null,\"passwordClient\":null,\"id_sub_adquirente\":null,\"url_pfx\":null,\"url_key\":null,\"url_crt\":null,\"pixactive\":true,\"cardactive\":true,\"boletoactive\":true}}"
						}
					]
				}
			]
		},
		{
			"name": "Empresa",
			"item": [
				{
					"name": "Todas Empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies?status=approved",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies"
							],
							"query": [
								{
									"key": "status",
									"value": "approved"
								}
							]
						}
					},
					"response": [
						{
							"name": "Lista de Empresas",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzAwNjk3LCJpYXQiOjE3Mjg2OTcwOTcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg2OTcwOTd9XSwic2Vzc2lvbl9pZCI6ImZiNmYzNGRjLTU1MTQtNGRlNi1iZDA3LTE5ZjExYmE1NWNjNyIsImlzX2Fub255bW91cyI6ZmFsc2V9.HGez3iGe-E9OMpVMIkDkm2vs1zZsnVrQLezl94qvFeM",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/companies",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"companies"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 02:02:50 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "1327"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d13828e3a816aa5-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "dab02dd9-5df2-45e9-8aa9-30fef9b5bc0d"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": [\n        {\n            \"id\": \"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\n            \"name\": \"Conta Secundaria Teste\",\n            \"taxid\": \"97.423.573/0001-60\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-09-08T01:40:46.904946\",\n            \"invoicename\": \"B5WEB\",\n            \"website\": \"https:site.com\",\n            \"postalcode\": \"15045-464\",\n            \"address\": \"Rua alcides cardoso treme\",\n            \"city\": \"São José do rio preto\",\n            \"neighborhood\": \"Ana Celia\",\n            \"complement\": \"Casa\",\n            \"housenumber\": \"165\",\n            \"ispj\": true,\n            \"creator\": \"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": true,\n            \"sold_products\": \"Site\"\n        },\n        {\n            \"id\": \"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\n            \"name\": \"MS MEIO DE PAGAMENTOS LTDA\",\n            \"taxid\": \"48.211.140/0001-35\",\n            \"status\": \"denied\",\n            \"createdat\": \"2024-06-28T15:21:17.247247\",\n            \"invoicename\": \"MS\",\n            \"website\": \"https://ms.com\",\n            \"postalcode\": \"15045-432\",\n            \"address\": \"RODOVIA DEMÓCRITO MOREIRA\",\n            \"city\": \"ARACRUZ\",\n            \"neighborhood\": \"FÁTIMA\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"176\",\n            \"ispj\": true,\n            \"creator\": \"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\n            \"MotivoRecusa\": \"Não vai ser possível aprovar!\",\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": null\n        },\n        {\n            \"id\": \"32a76d7e-6428-4f6e-9ce6-48784ef90120\",\n            \"name\": \"FARTURAO COMERCIO DE PECAS E ACESSORIOS LTDA\",\n            \"taxid\": \"17.386.591/0001-80\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-07-06T09:15:51.237299\",\n            \"invoicename\": \"Digital Mkt\",\n            \"website\": \"www.flaflubrasil.com\",\n            \"postalcode\": \"18.870-000\",\n            \"address\": \"RUA BERTONI\",\n            \"city\": \"FARTURA\",\n            \"neighborhood\": \"CENTRO\",\n            \"complement\": \"BARRACAO\",\n            \"housenumber\": \"648\",\n            \"ispj\": true,\n            \"creator\": \"0e06d6fb-062b-48e0-b771-1192078e2f65\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": null\n        },\n        {\n            \"id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"name\": \"Codiguz\",\n            \"taxid\": \"00.000.000/0000-00\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-05-25T01:07:00.527045\",\n            \"invoicename\": \"LOJA\",\n            \"website\": \"https://codiguz.com\",\n            \"postalcode\": \"15045-464\",\n            \"address\": \"Rua Alcides Cardoso Treme\",\n            \"city\": \"São José do Rio Preto\",\n            \"neighborhood\": \"Residencial Ana Célia\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"165\",\n            \"ispj\": true,\n            \"creator\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": \"Produtos de casa\"\n        },\n        {\n            \"id\": \"d004da0f-594b-4dc9-9601-ad101001c041\",\n            \"name\": \"56.387.192 DANIEL BARROS PEREIRA SILVA\",\n            \"taxid\": \"56.387.192/0001-95\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-09-09T21:27:10.031884\",\n            \"invoicename\": \"56.387.192\",\n            \"website\": \"teste\",\n            \"postalcode\": \"77.500-000\",\n            \"address\": \"4A RUA RUA PEDRO AIRES SOBRINHO\",\n            \"city\": \"PORTO NACIONAL\",\n            \"neighborhood\": \"JARDIM BRASILIA\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"220\",\n            \"ispj\": true,\n            \"creator\": \"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": true,\n            \"sold_products\": \"casa\"\n        }\n    ],\n    \"count\": 10,\n    \"limit\": 5,\n    \"offset\": 0,\n    \"totalPages\": 2\n}"
						}
					]
				},
				{
					"name": "Contagem",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/contagem",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"contagem"
							]
						}
					},
					"response": [
						{
							"name": "Lista de Empresas",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzAwNjk3LCJpYXQiOjE3Mjg2OTcwOTcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg2OTcwOTd9XSwic2Vzc2lvbl9pZCI6ImZiNmYzNGRjLTU1MTQtNGRlNi1iZDA3LTE5ZjExYmE1NWNjNyIsImlzX2Fub255bW91cyI6ZmFsc2V9.HGez3iGe-E9OMpVMIkDkm2vs1zZsnVrQLezl94qvFeM",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/companies",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"companies"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 02:02:50 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "1327"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d13828e3a816aa5-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "dab02dd9-5df2-45e9-8aa9-30fef9b5bc0d"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"data\": [\n        {\n            \"id\": \"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\n            \"name\": \"Conta Secundaria Teste\",\n            \"taxid\": \"97.423.573/0001-60\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-09-08T01:40:46.904946\",\n            \"invoicename\": \"B5WEB\",\n            \"website\": \"https:site.com\",\n            \"postalcode\": \"15045-464\",\n            \"address\": \"Rua alcides cardoso treme\",\n            \"city\": \"São José do rio preto\",\n            \"neighborhood\": \"Ana Celia\",\n            \"complement\": \"Casa\",\n            \"housenumber\": \"165\",\n            \"ispj\": true,\n            \"creator\": \"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": true,\n            \"sold_products\": \"Site\"\n        },\n        {\n            \"id\": \"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0\",\n            \"name\": \"MS MEIO DE PAGAMENTOS LTDA\",\n            \"taxid\": \"48.211.140/0001-35\",\n            \"status\": \"denied\",\n            \"createdat\": \"2024-06-28T15:21:17.247247\",\n            \"invoicename\": \"MS\",\n            \"website\": \"https://ms.com\",\n            \"postalcode\": \"15045-432\",\n            \"address\": \"RODOVIA DEMÓCRITO MOREIRA\",\n            \"city\": \"ARACRUZ\",\n            \"neighborhood\": \"FÁTIMA\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"176\",\n            \"ispj\": true,\n            \"creator\": \"b85f1cd3-7e2c-4bc1-bc84-2e1a669a3d71\",\n            \"MotivoRecusa\": \"Não vai ser possível aprovar!\",\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": null\n        },\n        {\n            \"id\": \"32a76d7e-6428-4f6e-9ce6-48784ef90120\",\n            \"name\": \"FARTURAO COMERCIO DE PECAS E ACESSORIOS LTDA\",\n            \"taxid\": \"17.386.591/0001-80\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-07-06T09:15:51.237299\",\n            \"invoicename\": \"Digital Mkt\",\n            \"website\": \"www.flaflubrasil.com\",\n            \"postalcode\": \"18.870-000\",\n            \"address\": \"RUA BERTONI\",\n            \"city\": \"FARTURA\",\n            \"neighborhood\": \"CENTRO\",\n            \"complement\": \"BARRACAO\",\n            \"housenumber\": \"648\",\n            \"ispj\": true,\n            \"creator\": \"0e06d6fb-062b-48e0-b771-1192078e2f65\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": null\n        },\n        {\n            \"id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n            \"name\": \"Codiguz\",\n            \"taxid\": \"00.000.000/0000-00\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-05-25T01:07:00.527045\",\n            \"invoicename\": \"LOJA\",\n            \"website\": \"https://codiguz.com\",\n            \"postalcode\": \"15045-464\",\n            \"address\": \"Rua Alcides Cardoso Treme\",\n            \"city\": \"São José do Rio Preto\",\n            \"neighborhood\": \"Residencial Ana Célia\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"165\",\n            \"ispj\": true,\n            \"creator\": \"354afdd4-933a-4c38-831f-973f570eab15\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": false,\n            \"sold_products\": \"Produtos de casa\"\n        },\n        {\n            \"id\": \"d004da0f-594b-4dc9-9601-ad101001c041\",\n            \"name\": \"56.387.192 DANIEL BARROS PEREIRA SILVA\",\n            \"taxid\": \"56.387.192/0001-95\",\n            \"status\": \"approved\",\n            \"createdat\": \"2024-09-09T21:27:10.031884\",\n            \"invoicename\": \"56.387.192\",\n            \"website\": \"teste\",\n            \"postalcode\": \"77.500-000\",\n            \"address\": \"4A RUA RUA PEDRO AIRES SOBRINHO\",\n            \"city\": \"PORTO NACIONAL\",\n            \"neighborhood\": \"JARDIM BRASILIA\",\n            \"complement\": \"casa\",\n            \"housenumber\": \"220\",\n            \"ispj\": true,\n            \"creator\": \"a8a47251-1d84-46dd-b69d-ce94d12de79b\",\n            \"MotivoRecusa\": null,\n            \"blocked\": false,\n            \"reason_for_blocking\": null,\n            \"tangible_products\": true,\n            \"sold_products\": \"casa\"\n        }\n    ],\n    \"count\": 10,\n    \"limit\": 5,\n    \"offset\": 0,\n    \"totalPages\": 2\n}"
						}
					]
				},
				{
					"name": "Buscar Empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490"
							]
						}
					},
					"response": [
						{
							"name": "Listar Empresa",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzAwNjk3LCJpYXQiOjE3Mjg2OTcwOTcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg2OTcwOTd9XSwic2Vzc2lvbl9pZCI6ImZiNmYzNGRjLTU1MTQtNGRlNi1iZDA3LTE5ZjExYmE1NWNjNyIsImlzX2Fub255bW91cyI6ZmFsc2V9.HGez3iGe-E9OMpVMIkDkm2vs1zZsnVrQLezl94qvFeM",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/companies/6d68e2a7-d7fd-491e-9381-40bf449ac634",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"companies",
										"6d68e2a7-d7fd-491e-9381-40bf449ac634"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 02:03:48 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "408"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1383f77d256aa5-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "836ec745-250f-4191-ae65-9f09d5856b01"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"id\": \"6d68e2a7-d7fd-491e-9381-40bf449ac634\",\n    \"name\": \"Conta Secundaria Teste\",\n    \"taxid\": \"97.423.573/0001-60\",\n    \"status\": \"approved\",\n    \"createdat\": \"2024-09-08T01:40:46.904946\",\n    \"invoicename\": \"B5WEB\",\n    \"website\": \"https:site.com\",\n    \"postalcode\": \"15045-464\",\n    \"address\": \"Rua alcides cardoso treme\",\n    \"city\": \"São José do rio preto\",\n    \"neighborhood\": \"Ana Celia\",\n    \"complement\": \"Casa\",\n    \"housenumber\": \"165\",\n    \"ispj\": true,\n    \"creator\": \"310e1004-57bd-4b76-90bf-c9e290f6cfb8\",\n    \"MotivoRecusa\": null,\n    \"blocked\": false,\n    \"reason_for_blocking\": null,\n    \"tangible_products\": true,\n    \"sold_products\": \"Site\"\n}"
						}
					]
				},
				{
					"name": "Taxas da Empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"taxas"
							]
						}
					},
					"response": [
						{
							"name": "taxas",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZzUUZDOVFPMXRZZG1WMG4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3hlYm1yeHN2Y294dGZqb2l4eWhsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIzNTRhZmRkNC05MzNhLTRjMzgtODMxZi05NzNmNTcwZWFiMTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4NzAwNjk3LCJpYXQiOjE3Mjg2OTcwOTcsImVtYWlsIjoiZXVicmVuc29hbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg2OTcwOTd9XSwic2Vzc2lvbl9pZCI6ImZiNmYzNGRjLTU1MTQtNGRlNi1iZDA3LTE5ZjExYmE1NWNjNyIsImlzX2Fub255bW91cyI6ZmFsc2V9.HGez3iGe-E9OMpVMIkDkm2vs1zZsnVrQLezl94qvFeM",
										"type": "text"
									},
									{
										"key": "",
										"value": "",
										"type": "text",
										"disabled": true
									}
								],
								"url": {
									"raw": "https://api.codiguz.tech/functions/v1/companies/6d68e2a7-d7fd-491e-9381-40bf449ac634/taxas",
									"protocol": "https",
									"host": [
										"api",
										"codiguz",
										"tech"
									],
									"path": [
										"functions",
										"v1",
										"companies",
										"6d68e2a7-d7fd-491e-9381-40bf449ac634",
										"taxas"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Sat, 12 Oct 2024 02:12:31 GMT"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								},
								{
									"key": "Content-Length",
									"value": "275"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "CF-Ray",
									"value": "8d1390b36b0b6aa4-SJP"
								},
								{
									"key": "CF-Cache-Status",
									"value": "DYNAMIC"
								},
								{
									"key": "Content-Encoding",
									"value": "gzip"
								},
								{
									"key": "Strict-Transport-Security",
									"value": "max-age=31536000; includeSubDomains"
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding"
								},
								{
									"key": "x-deno-execution-id",
									"value": "55c5f0f6-5f16-4062-b576-9721aed3ba0e"
								},
								{
									"key": "x-sb-edge-region",
									"value": "sa-east-1"
								},
								{
									"key": "x-served-by",
									"value": "supabase-edge-runtime"
								},
								{
									"key": "Server",
									"value": "cloudflare"
								},
								{
									"key": "alt-svc",
									"value": "h3=\":443\"; ma=86400"
								}
							],
							"cookie": [],
							"body": "{\n    \"taxas\": {\n        \"mdr_1x_adquirente\": 9,\n        \"mdr_2x_adquirente\": 16,\n        \"mdr_3x_adquirente\": 18,\n        \"mdr_4x_adquirente\": 21,\n        \"mdr_5x_adquirente\": 24,\n        \"mdr_6x_adquirente\": 27,\n        \"mdr_7x_adquirente\": 29,\n        \"mdr_8x_adquirente\": 32,\n        \"mdr_9x_adquirente\": 33,\n        \"mdr_10x_adquirente\": 35,\n        \"mdr_11x_adquirente\": 37,\n        \"mdr_12x_adquirente\": 40,\n        \"pix_fee_percentage\": 1.99,\n        \"pix_fee_fixed\": 2,\n        \"withdrawal_fee_percentage\": 3,\n        \"withdrawal_fee_fixed\": 5,\n        \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n        \"fee_type_card\": \"Taxa Fixa\",\n        \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n        \"fee_type_withdrawal\": \"Taxa Fixa\",\n        \"fee_type_fixed_boleto\": \"R$\",\n        \"fee_type_fixed_card\": \"R$\",\n        \"fee_type_fixed_pix\": \"R$\",\n        \"fee_type_fixed_withdrawal\": \"R$\",\n        \"boleto_fee_percentage\": 2,\n        \"boleto_fee_fixed\": 3,\n        \"card_fee_percentage\": 3,\n        \"card_fee_fixed\": 3\n    }\n}"
						}
					]
				},
				{
					"name": "Reserva",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/6d68e2a7-d7fd-491e-9381-40bf449ac634/reserva",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"6d68e2a7-d7fd-491e-9381-40bf449ac634",
								"reserva"
							]
						}
					},
					"response": []
				},
				{
					"name": "Config",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/config",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"config"
							]
						}
					},
					"response": []
				},
				{
					"name": "Docs",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/6d68e2a7-d7fd-491e-9381-40bf449ac634/docs",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"6d68e2a7-d7fd-491e-9381-40bf449ac634",
								"docs"
							]
						}
					},
					"response": []
				},
				{
					"name": "Adquirentes",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/ba2e4c35-4df7-43d2-9c9a-d8e605f0caee/adq",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"ba2e4c35-4df7-43d2-9c9a-d8e605f0caee",
								"adq"
							]
						}
					},
					"response": []
				},
				{
					"name": "Financeiro",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/financial-info",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"financial-info"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Taxas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"mdr_1x_adquirente\": 2.0,\n    \"mdr_2x_adquirente\": 3.0,\n    \"mdr_3x_adquirente\": 3.5,\n    \"mdr_4x_adquirente\": 4.0,\n    \"mdr_5x_adquirente\": 4.5,\n    \"mdr_6x_adquirente\": 5.0,\n    \"mdr_7x_adquirente\": 5.5,\n    \"mdr_8x_adquirente\": 6.0,\n    \"mdr_9x_adquirente\": 6.5,\n    \"mdr_10x_adquirente\": 7.0,\n    \"mdr_11x_adquirente\": 7.5,\n    \"mdr_12x_adquirente\": 8.0,\n    \"pix_fee_percentage\": 0.5,\n    \"pix_fee_fixed\": 0.25,\n    \"withdrawal_fee_percentage\": 1.0,\n    \"withdrawal_fee_fixed\": 0.50,\n    \"card_fee_percentage\": 2.0,\n    \"card_fee_fixed\": 0.30,\n    \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_withdrawal\": \"Taxa Fixa + Taxa variável\",\n    \"boleto_fee_percentage\": 1.2,\n    \"boleto_fee_fixed\": 0.75\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"taxas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Cadastro",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"mdr_1x_adquirente\": 2.0,\n    \"mdr_2x_adquirente\": 3.0,\n    \"mdr_3x_adquirente\": 3.5,\n    \"mdr_4x_adquirente\": 4.0,\n    \"mdr_5x_adquirente\": 4.5,\n    \"mdr_6x_adquirente\": 5.0,\n    \"mdr_7x_adquirente\": 5.5,\n    \"mdr_8x_adquirente\": 6.0,\n    \"mdr_9x_adquirente\": 6.5,\n    \"mdr_10x_adquirente\": 7.0,\n    \"mdr_11x_adquirente\": 7.5,\n    \"mdr_12x_adquirente\": 8.0,\n    \"pix_fee_percentage\": 0.5,\n    \"pix_fee_fixed\": 0.25,\n    \"withdrawal_fee_percentage\": 1.0,\n    \"withdrawal_fee_fixed\": 0.50,\n    \"card_fee_percentage\": 2.0,\n    \"card_fee_fixed\": 0.30,\n    \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_withdrawal\": \"Taxa Fixa + Taxa variável\",\n    \"boleto_fee_percentage\": 1.2,\n    \"boleto_fee_fixed\": 0.75\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"taxas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Taxas em Massa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"mdr_1x_adquirente\": 5.99,\n    \"mdr_2x_adquirente\": 3.0,\n    \"mdr_3x_adquirente\": 3.5,\n    \"mdr_4x_adquirente\": 4.0,\n    \"mdr_5x_adquirente\": 4.5,\n    \"mdr_6x_adquirente\": 5.0,\n    \"mdr_7x_adquirente\": 5.5,\n    \"mdr_8x_adquirente\": 6.0,\n    \"mdr_9x_adquirente\": 6.5,\n    \"mdr_10x_adquirente\": 7.0,\n    \"mdr_11x_adquirente\": 7.5,\n    \"mdr_12x_adquirente\": 8.0,\n    \"pix_fee_percentage\": 0.5,\n    \"pix_fee_fixed\": 0.29,\n    \"withdrawal_fee_percentage\": 1.0,\n    \"withdrawal_fee_fixed\": 0.50,\n    \"card_fee_percentage\": 2.0,\n    \"card_fee_fixed\": 0.30,\n    \"fee_type_boleto\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_pix\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_card\": \"Taxa Fixa + Taxa variável\",\n    \"fee_type_withdrawal\": \"Taxa Fixa + Taxa variável\",\n    \"boleto_fee_percentage\": 1.2,\n    \"boleto_fee_fixed\": 0.75\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/taxas-bulk",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"taxas-bulk"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Documentos",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"selfie_url\": \"//20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1725826493375x463343643809226700/check-circle-svgrepo-com.png\",\n    \"documentoenviados\": true,\n    \"verso_documento_url\": \"//20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1725826491918x955721143471467600/check-circle-svgrepo-com.png\",\n    \"frente_documento_url\": \"//20bda466a7ed06ce45ce77d44f4b71dc.cdn.bubble.io/f1725826489721x766749325959210200/check-circle-svgrepo-com.png\",\n    \"contrato_social\": \"https://google.com/google.jpg\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/0f1035ef-75d1-46a4-924a-fe1b1e88d0c0/docs",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"0f1035ef-75d1-46a4-924a-fe1b1e88d0c0",
								"docs"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Permissões",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"autotransfer\": false,\n    \"autotransferCard\": false,\n    \"transferenabled\": true,\n    \"maxtransferamount\": 9999999,\n    \"mintransferamount\": 15,\n    \"anticipationenabled\": true,\n    \"autoapproveanticipation\": true,\n    \"daystoanticipate\": 3,\n    \"anticipation_fee_monthly\": 3,\n    \"paymentmethods\": [\"PIX\", \"CARD\", \"BOLETO\"],\n    \"max_valor_transacao\": 100000,\n    \"min_valor_transacao\": 1,\n    \"max_saque_diario\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/config",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"config"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Permissões em Massa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"autotransfer\": false,\n    \"autotransferCard\": false,\n    \"transferenabled\": true,\n    \"maxtransferamount\": 32000,\n    \"mintransferamount\": 15,\n    \"anticipationenabled\": true,\n    \"autoapproveanticipation\": true,\n    \"daystoanticipate\": 3,\n    \"anticipation_fee_monthly\": 3,\n    \"paymentmethods\": [\"PIX\", \"CARD\", \"BOLETO\"],\n    \"max_valor_transacao\": 32000,\n    \"min_valor_transacao\": 1,\n    \"max_saque_diario\": 12\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/config-bulk",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"config-bulk"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Reserva",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"reservedaysanticipation\": 180,\n    \"reservedaysboleto\": 180,\n    \"reservedayspix\": 180,\n    \"reservepercentageanticipation\": 15,\n    \"reservepercentageboleto\": 15,\n    \"reservepercentagepix\": 17\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/reserva",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"reserva"
							]
						}
					},
					"response": []
				},
				{
					"name": "Atualizar Adquirente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n        \"acquirers_pix\": \"e0ad6386-1849-4b40-85be-4132342727e0\",\n        \"acquirers_boleto\": \"e0ad6386-1849-4b40-85be-4132342727e0\",\n        \"acquirers_card\": \"e0ad6386-1849-4b40-85be-4132342727e0\"\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/ba2e4c35-4df7-43d2-9c9a-d8e605f0caee/adq",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"ba2e4c35-4df7-43d2-9c9a-d8e605f0caee",
								"adq"
							]
						}
					},
					"response": []
				},
				{
					"name": "Bloquear/Desbloquear Empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\": \"blocked\",\n    \"reason\": \"Teste de bloqueio\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies/5a151c11-71fc-4074-9dce-ddbc2f88ea83/status",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"5a151c11-71fc-4074-9dce-ddbc2f88ea83",
								"status"
							]
						}
					},
					"response": []
				},
				{
					"name": "Criar Empresa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"name\": \"Empresa criada de teste\",\n  \"averagebilling\": 45000,\n  \"averageticket\": 250,\n  \"website\": \"https://www.techsolutions.com\",\n  \"postalcode\": \"12345-678\",\n  \"address\": \"Avenida Principal, 500\",\n  \"city\": \"São Paulo\",\n  \"neighborhood\": \"Centro\",\n  \"complement\": \"Sala 501\",\n  \"housenumber\": \"500\",\n  \"taxid\": \"22236522545\",\n  \"areacode\": \"11\",\n  \"ispj\": true,\n  \"slug\": \"tech-solutions\",\n  \"company_name\": \"Tech Solutions Ltda.\",\n  \"creator\": \"dfd5ebb3-6fd0-44a6-abe4-87a26f3347ab\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/companies",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies"
							]
						}
					},
					"response": []
				},
				{
					"name": "Calcular Taxas",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"company_id\": \"d94f8d44-5ae6-4a29-8d7c-f9b394c56490\",\n    \"valor\": 100,\n    \"payment_method\": \"PIX\",\n    \"parcelas\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://{{base_url}}/functions/v1/taxas",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"taxas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Aceitar os termos",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://{{base_url}}/functions/v1/configuracoes/acecitar-termos",
							"protocol": "https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"configuracoes",
								"acecitar-termos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar Reserva Em massa",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{access_token}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer {{access_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "curl --location --request PATCH 'https://{{base_url}}/functions/v1/companies/d94f8d44-5ae6-4a29-8d7c-f9b394c56490/reserva-bulk' /\n--header 'Content-Type: application/json' /\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ2Nzk4MTgyLCJpYXQiOjE3NDY3OTQ1ODIsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDY3OTQ1ODJ9XSwic2Vzc2lvbl9pZCI6IjVhNzE4NDQ2LTcyOWUtNDA2OS1iMWIzLTIzMDg5ZThlY2FjOSIsImlzX2Fub255bW91cyI6ZmFsc2V9.mdLhjoHGypyYXqWovs5m3H-1H41RDZqQC3pkSvxn5y4' /\n--data '{\n    \"reservedaysanticipation\": 3,\n    \"reservedaysboleto\": 3,\n    \"reservedayspix\": 3,\n    \"reservepercentageanticipation\": 15,\n    \"reservepercentageboleto\": 15,\n    \"reservepercentagepix\": 15\n}'",
							"protocol": "curl --location --request PATCH 'https",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"functions",
								"v1",
								"companies",
								"d94f8d44-5ae6-4a29-8d7c-f9b394c56490",
								"reserva-bulk' ",
								"\n--header 'Content-Type: application",
								"json' ",
								"\n--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InpSWGVlSngwMXdTOHZSODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyeHJ1bWNhYmZmc3R6b25jamZrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1ZTAxNjMyOS03MjBiLTQ3ZjMtYjA3ZS1mY2M3NGIxYjgzMjAiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ2Nzk4MTgyLCJpYXQiOjE3NDY3OTQ1ODIsImVtYWlsIjoiZXVicmVub3NhbnRvc3NAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDY3OTQ1ODJ9XSwic2Vzc2lvbl9pZCI6IjVhNzE4NDQ2LTcyOWUtNDA2OS1iMWIzLTIzMDg5ZThlY2FjOSIsImlzX2Fub255bW91cyI6ZmFsc2V9.mdLhjoHGypyYXqWovs5m3H-1H41RDZqQC3pkSvxn5y4' ",
								"\n--data '{\n    \"reservedaysanticipation\": 3,\n    \"reservedaysboleto\": 3,\n    \"reservedayspix\": 3,\n    \"reservepercentageanticipation\": 15,\n    \"reservepercentageboleto\": 15,\n    \"reservepercentagepix\": 15\n}'"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					"const authUrl = pm.environment.get(\"auth_url\");",
					"const email = pm.environment.get(\"email\");",
					"const password = pm.environment.get(\"password\");",
					"",
					"pm.sendRequest({",
					"    url: authUrl,",
					"    method: 'POST',",
					"    header: {",
					"        'Content-Type': 'application/json',",
					"        'apikey': pm.environment.get(\"api_key\")",
					"    },",
					"    body: {",
					"        mode: 'raw',",
					"        raw: JSON.stringify({",
					"            email: email,",
					"            password: password",
					"        })",
					"    }",
					"}, function (err, res) {",
					"    if (err) {",
					"        console.log('❌ Erro ao obter token:', err);",
					"        return;",
					"    }",
					"",
					"    const jsonResponse = res.json();",
					"    const token = jsonResponse.access_token;",
					"",
					"    if (token) {",
					"        pm.environment.set('access_token', token);",
					"        console.log('✅ Access token atualizado:', token);",
					"    } else {",
					"        console.log('❌ Não foi possível obter access_token.');",
					"    }",
					"});"
				]
			}
		}
	]
}