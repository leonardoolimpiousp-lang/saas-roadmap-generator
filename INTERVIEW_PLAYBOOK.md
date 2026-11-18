# Playbook da Entrevista Adaptativa

## Objetivo

Converter contexto incompleto de um fundador em decisões explícitas suficientes para compor um roadmap SaaS. A entrevista não serve para confirmar uma solução pronta: ela identifica problema, escopo, riscos, capacidade e módulos aplicáveis.

## Protocolo de conversa

1. Faça de três a cinco perguntas por rodada.
2. Prefira perguntas com alternativas claras e uma recomendação justificada.
3. Não pergunte o que puder ser descoberto no repositório ou nos documentos fornecidos.
4. Ao receber “não sei”, registre uma hipótese com confiança `low`, proponha um default reversível e siga.
5. Ao final de cada bloco, apresente: decisões, hipóteses, lacunas e impacto no roadmap.
6. Permita que o usuário corrija qualquer resumo antes de avançar.
7. Nunca gere o backlog final antes de o usuário confirmar a matriz de módulos.
8. Não trate prazo desejado como evidência de capacidade.
9. Não elimine segurança, privacidade, backup, acessibilidade ou observabilidade silenciosamente.
10. Separe fatos observados, declarações do fundador, recomendações e inferências.

## Bloco 0 — Abertura e idioma

Descobrir:

- Idioma da entrevista e dos artefatos.
- Se o produto é greenfield, MVP, receita ou escala.
- Se existe repositório, documentação ou produto navegável.
- Nome, prefixo desejado e descrição em uma frase.
- Decisão de usar modo completo ou retomada de entrevista anterior.

Saída: identidade provisória do projeto e lista de fontes disponíveis.

## Bloco 1 — Problema e mercado

Descobrir:

- ICP primário e usuário comprador.
- Problema frequente, caro ou arriscado.
- Alternativas atuais e por que são insuficientes.
- Job-to-be-done e resultado mensurável.
- Posicionamento e diferenciais que não dependem apenas de features.

Saída: tese do produto, ICP, JTBD e hipótese de posicionamento.

## Bloco 2 — Jornada e escopo

Descobrir:

- Evento que inicia a jornada e resultado final.
- Caminho crítico do usuário.
- Funcionalidades obrigatórias, desejáveis e explicitamente fora de escopo.
- Trabalho humano que permanece necessário.
- Critério de ativação e momento de valor.

Saída: jornada, fatia vertical inicial, limites e principais artefatos.

## Bloco 3 — Negócio e monetização

Descobrir:

- B2C, B2B, B2B2C, marketplace ou híbrido.
- Assinatura, uso, transação, licença ou serviço.
- Trial, freemium, planos, moedas e regiões.
- Necessidade de impostos, invoices, refunds e reconciliação.
- Processo de compra self-service, vendas assistidas ou procurement.

Saída: modelo de receita e ativação dos módulos de billing, marketplace ou enterprise.

## Bloco 4 — Equipe e capacidade

Descobrir:

- Pessoas, papéis, disponibilidade e autoridade de decisão.
- Trabalho interno versus fornecedores.
- Orçamento aproximado e restrições de prazo.
- Conhecimento técnico, comercial e de domínio.
- Processo de revisão, QA e aprovação.

Saída: RACI inicial, gargalos e horizonte realista.

## Bloco 5 — Tecnologia e dados

Descobrir:

- Stack existente ou liberdade de escolha.
- Web, mobile, desktop, extensão ou API.
- Modelo de tenancy, autenticação e autorização.
- Tipos, volume, origem, retenção e residência dos dados.
- Integrações, imports, exports, webhooks e migrações.
- Realtime, colaboração, uploads e processamento assíncrono.

Saída: arquitetura em camadas e matriz de módulos técnicos.

## Bloco 6 — IA e automação

Aplicar somente quando houver IA, regras automáticas ou decisões assistidas.

Descobrir:

- Tarefa exata executada pela IA.
- Provedor, BYOC, custo e política de dados.
- Necessidade de evals, explicabilidade e revisão humana.
- Conteúdo não confiável, prompt injection e ferramentas disponíveis.
- Fallback, limites, observabilidade e controle de versões.

Saída: fronteiras de automação e gates de qualidade de IA.

## Bloco 7 — Segurança, privacidade e compliance

Descobrir:

- Dados pessoais, financeiros, de saúde, crianças ou segredos comerciais.
- Regiões e regimes aplicáveis.
- Riscos de acesso cross-tenant e privilégios administrativos.
- Necessidade de auditoria, consentimento, exportação e exclusão.
- Requisitos enterprise, SSO, DPA, pentest e incident response.

Saída: classificação dos dados, controles e tarefas que não podem ser omitidas.

## Bloco 8 — Experiência, marca e acesso

Descobrir:

- Perfil de experiência dos usuários.
- Desktop, mobile e condições de uso.
- Idiomas, localização e acessibilidade.
- Identidade visual, tom e referências.
- Onboarding, ajuda contextual e suporte dentro do produto.

Saída: princípios de UX e tokens de tema.

## Bloco 9 — Métricas e qualidade operacional

Descobrir:

- North-star metric e evento de ativação.
- Conversão, retenção, receita e eficiência.
- SLOs, performance e disponibilidade.
- Analytics, experimentação e observabilidade.
- Critérios de aceite, rollback e feature flags.

Saída: scorecard e gates mensuráveis.

## Bloco 10 — Go-to-market e operação

Descobrir:

- Canal inicial, estratégia de aquisição e conteúdo.
- Processo de onboarding e customer success.
- Suporte, SLA e incidentes.
- SEO, referrals, comunidade ou parcerias.
- Processo de lançamento, beta e feedback.

Saída: plano de validação comercial e operação pós-lançamento.

## Bloco 11 — Riscos e horizonte

Descobrir:

- Três hipóteses capazes de invalidar o negócio.
- Riscos técnicos, legais, comerciais e operacionais.
- Dependências externas e decisões irreversíveis.
- Data-alvo e motivo real.
- Critérios para pausar, reduzir escopo ou cancelar um módulo.

Saída: risk register, premissas e horizonte de 6–18 meses.

## Bloco 12 — Domínio específico

Descobrir:

- Workflow e vocabulário próprios do setor.
- Regras, artefatos e especialistas necessários.
- Padrões, certificações ou fontes autoritativas.
- Erros intoleráveis e revisão humana.
- Evals ou fixtures próprios do domínio.

Saída: trilhas e tarefas `domain-specific` sem contaminar o catálogo universal.

## Matriz de escopo obrigatória

Antes da geração, mostrar uma tabela com todos os módulos do catálogo:

| Módulo | Estado | Evidência | Efeito no backlog | Risco da exclusão |
|---|---|---|---|---|
| subscriptions | included | Assinatura mensal | Ativa billing recorrente | — |
| regulated-data | not_applicable | Não coleta dados sensíveis | Mantém tarefas como N/A | Baixo |
| ai-automation | uncertain | Hipótese ainda não testada | Inclui descoberta e spike | Médio |

Estados permitidos: `included`, `not_applicable`, `uncertain`.

O usuário confirma digitando uma frase equivalente a “Aprovo a matriz de escopo”. Correções reabrem somente o bloco afetado.

## Entrega e autoauditoria

Antes de entregar:

- Validar os arquivos contra os schemas.
- Verificar unicidade de IDs e `catalogKey`.
- Resolver ou bloquear ciclos.
- Recalcular critical path.
- Confirmar gates em todas as fases.
- Confirmar owner, critérios e risco nas tarefas P0.
- Contar tarefas ativas e explicar exceções ao intervalo 220–400.
- Confirmar que conteúdos dinâmicos estão escapados no HTML.
- Separar claramente fatos, hipóteses e decisões pendentes.

