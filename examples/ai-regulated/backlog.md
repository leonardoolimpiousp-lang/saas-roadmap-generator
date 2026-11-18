# Care Signal — SaaS Roadmap

SaaS regulado que auxilia equipes clínicas a priorizar documentos e sinais operacionais, mantendo revisão humana e evidência auditável.

**North Star:** Casos priorizados corretamente e revisados dentro do tempo clínico definido.
**Horizonte:** 18 meses
**Tarefas ativas:** 276

## F0 — Descoberta e contexto

**Janela:** Início–mês 1.3
**Gate:** Problema, fontes e restrições estão documentados com hipóteses explícitas.

- [ ] **CARE-001** Registrar visão e resultado desejado · P0 · S · Produto
- [ ] **CARE-002** Definir ICP primário · P1 · M · Produto · depende de CARE-001
- [ ] **CARE-003** Definir comprador e usuário · P1 · M · Produto · depende de CARE-002
- [ ] **CARE-004** Documentar problema prioritário · P1 · L · Produto · depende de CARE-003

## F1 — Estratégia e validação

**Janela:** Mês 1.3–2.6
**Gate:** ICP, JTBD, posicionamento e critérios de validação foram aprovados.

- [ ] **CARE-005** Mapear alternativas atuais · P1 · S · Produto · depende de CARE-004
- [ ] **CARE-006** Formalizar job to be done · P2 · M · Produto · depende de CARE-005
- [ ] **CARE-007** Definir proposta de valor · P2 · L · Produto · depende de CARE-006
- [ ] **CARE-008** Registrar hipóteses críticas · P2 · M · Produto · depende de CARE-007
- [ ] **CARE-017** Criar plano contínuo de pesquisa · P0 · S · Produto e Design
- [ ] **CARE-018** Definir perfis comportamentais · P1 · M · Produto e Design · depende de CARE-017
- [ ] **CARE-019** Mapear jornada atual · P1 · M · Produto e Design · depende de CARE-018
- [ ] **CARE-020** Mapear jornada desejada · P1 · L · Produto e Design · depende de CARE-019
- [ ] **CARE-105** Definir narrativa comercial · P0 · S · Growth e Produto
- [ ] **CARE-106** Criar hipótese de pricing · P1 · M · Growth e Produto · depende de CARE-105
- [ ] **CARE-107** Testar disposição a pagar · P1 · M · Growth e Produto · depende de CARE-106
- [ ] **CARE-108** Definir evento de ativação · P1 · L · Growth e Produto · depende de CARE-107

## F2 — Sistema de produto

**Janela:** Mês 2.6–3.9
**Gate:** Jornada, escopo, arquitetura da informação e fatia vertical estão testáveis.

- [ ] **CARE-009** Planejar entrevistas de problema · P2 · S · Produto · depende de CARE-008
- [ ] **CARE-010** Executar entrevistas de problema · P2 · L · Produto · depende de CARE-009
- [ ] **CARE-011** Sintetizar evidências de discovery · P3 · M · Produto · depende de CARE-010
- [ ] **CARE-012** Definir critérios de validação · P3 · XL · Produto · depende de CARE-011
- [ ] **CARE-021** Inventariar pontos de fricção · P1 · S · Produto e Design · depende de CARE-020
- [ ] **CARE-022** Definir princípios de experiência · P2 · M · Produto e Design · depende de CARE-021
- [ ] **CARE-023** Criar arquitetura da informação · P2 · L · Produto e Design · depende de CARE-022
- [ ] **CARE-024** Prototipar fluxo de ativação · P2 · M · Produto e Design · depende de CARE-023
- [ ] **CARE-031** Definir arquitetura do frontend · P0 · S · Engenharia
- [ ] **CARE-032** Configurar padrões de componentes · P1 · M · Engenharia · depende de CARE-031
- [ ] **CARE-033** Criar shell responsivo da aplicação · P1 · M · Engenharia · depende de CARE-032
- [ ] **CARE-034** Implementar navegação autenticada · P1 · L · Engenharia · depende de CARE-033
- [ ] **CARE-043** Registrar decisão arquitetural inicial · P0 · S · Engenharia
- [ ] **CARE-044** Definir contextos do domínio · P1 · M · Engenharia · depende de CARE-043
- [ ] **CARE-045** Definir ambientes de desenvolvimento · P1 · M · Engenharia · depende de CARE-044
- [ ] **CARE-046** Configurar integração contínua · P1 · L · Engenharia · depende de CARE-045
- [ ] **CARE-061** Definir modelo conceitual de dados · P0 · S · Produto e Dados
- [ ] **CARE-062** Criar dicionário de eventos · P1 · M · Produto e Dados · depende de CARE-061
- [ ] **CARE-063** Definir propriedade dos dados · P1 · M · Produto e Dados · depende de CARE-062
- [ ] **CARE-064** Implementar analytics de ativação · P1 · L · Produto e Dados · depende de CARE-063
- [ ] **CARE-073** Classificar dados processados · P0 · S · Segurança e Engenharia
- [ ] **CARE-074** Criar threat model inicial · P1 · M · Segurança e Engenharia · depende de CARE-073
- [ ] **CARE-075** Definir fronteiras de confiança · P1 · M · Segurança e Engenharia · depende de CARE-074
- [ ] **CARE-076** Implementar gestão segura de segredos · P1 · L · Segurança e Engenharia · depende de CARE-075
- [ ] **CARE-109** Desenhar onboarding comercial · P1 · S · Growth e Produto · depende de CARE-108
- [ ] **CARE-110** Criar landing page inicial · P2 · M · Growth e Produto · depende de CARE-109
- [ ] **CARE-111** Configurar analytics de aquisição · P2 · L · Growth e Produto · depende de CARE-110
- [ ] **CARE-112** Definir canal de aquisição primário · P2 · M · Growth e Produto · depende de CARE-111
- [ ] **CARE-131** Inventariar obrigações legais · P0 · S · Jurídico e Operações
- [ ] **CARE-132** Definir titularidade da propriedade intelectual · P1 · M · Jurídico e Operações · depende de CARE-131
- [ ] **CARE-133** Criar ledger de componentes terceiros · P1 · M · Jurídico e Operações · depende de CARE-132
- [ ] **CARE-134** Definir termos de uso · P1 · L · Jurídico e Operações · depende de CARE-133
- [ ] **CARE-269** Classificar categorias reguladas · P0 · S · Privacidade e Segurança
- [ ] **CARE-270** Definir base legal · P1 · M · Privacidade e Segurança · depende de CARE-269
- [ ] **CARE-271** Executar avaliação de impacto · P1 · M · Privacidade e Segurança · depende de CARE-270
- [ ] **CARE-272** Aplicar minimização de dados · P1 · L · Privacidade e Segurança · depende de CARE-271

## F3 — Arquitetura

**Janela:** Mês 3.9–5.1
**Gate:** Decisões estruturais, riscos e contratos técnicos foram revisados.

- [ ] **CARE-013** Priorizar jornada principal · P3 · M · Produto · depende de CARE-012
- [ ] **CARE-014** Definir fronteiras do MVP · P3 · L · Produto · depende de CARE-013
- [ ] **CARE-015** Criar mapa de outcomes · P3 · S · Produto · depende de CARE-014
- [ ] **CARE-016** Aprovar estratégia inicial do produto · P0 · M · Produto · depende de CARE-015
- [ ] **CARE-025** Testar protótipo sem orientação · P2 · S · Produto e Design · depende de CARE-024
- [ ] **CARE-026** Registrar decisões de usabilidade · P2 · L · Produto e Design · depende de CARE-025
- [ ] **CARE-027** Definir padrão de conteúdo · P3 · M · Produto e Design · depende de CARE-026
- [ ] **CARE-028** Definir requisitos de acessibilidade · P3 · XL · Produto e Design · depende de CARE-027
- [ ] **CARE-035** Criar estados de loading e empty · P1 · S · Engenharia · depende de CARE-034
- [ ] **CARE-036** Criar padrão de tratamento de erros · P2 · M · Engenharia · depende de CARE-035
- [ ] **CARE-037** Implementar formulários acessíveis · P2 · L · Engenharia · depende de CARE-036
- [ ] **CARE-038** Configurar estratégia de cache no cliente · P2 · M · Engenharia · depende de CARE-037
- [ ] **CARE-047** Configurar preview por mudança · P1 · S · Engenharia · depende de CARE-046
- [ ] **CARE-048** Configurar produção protegida · P2 · M · Engenharia · depende de CARE-047
- [ ] **CARE-049** Definir estratégia de configuração · P2 · L · Engenharia · depende de CARE-048
- [ ] **CARE-050** Implementar autenticação base · P2 · M · Engenharia · depende de CARE-049
- [ ] **CARE-065** Implementar analytics de retenção · P1 · S · Produto e Dados · depende de CARE-064
- [ ] **CARE-066** Definir qualidade mínima dos eventos · P2 · M · Produto e Dados · depende de CARE-065
- [ ] **CARE-067** Criar validação de payloads analíticos · P2 · L · Produto e Dados · depende de CARE-066
- [ ] **CARE-068** Definir política de retenção · P2 · M · Produto e Dados · depende de CARE-067
- [ ] **CARE-077** Aplicar princípio de menor privilégio · P1 · S · Segurança e Engenharia · depende de CARE-076
- [ ] **CARE-078** Definir política de sessões · P2 · M · Segurança e Engenharia · depende de CARE-077
- [ ] **CARE-079** Implementar proteção contra abuso · P2 · L · Segurança e Engenharia · depende de CARE-078
- [ ] **CARE-080** Configurar headers de segurança · P2 · M · Segurança e Engenharia · depende de CARE-079
- [ ] **CARE-091** Definir estratégia de testes · P0 · S · Engenharia e QA
- [ ] **CARE-092** Criar pirâmide de testes · P1 · M · Engenharia e QA · depende de CARE-091
- [ ] **CARE-093** Configurar testes unitários · P1 · M · Engenharia e QA · depende de CARE-092
- [ ] **CARE-094** Configurar testes de integração · P1 · L · Engenharia e QA · depende de CARE-093
- [ ] **CARE-113** Criar experimento de demanda · P2 · S · Growth e Produto · depende de CARE-112
- [ ] **CARE-114** Definir processo de coleta de feedback · P2 · L · Growth e Produto · depende de CARE-113
- [ ] **CARE-115** Criar estratégia de conteúdo · P3 · M · Growth e Produto · depende de CARE-114
- [ ] **CARE-116** Definir comunicação de lançamento · P3 · XL · Growth e Produto · depende de CARE-115
- [ ] **CARE-135** Definir política de privacidade · P1 · S · Jurídico e Operações · depende de CARE-134
- [ ] **CARE-136** Definir política de cookies · P2 · M · Jurídico e Operações · depende de CARE-135
- [ ] **CARE-137** Mapear subprocessadores · P2 · L · Jurídico e Operações · depende de CARE-136
- [ ] **CARE-138** Definir processo de solicitação de titular · P2 · M · Jurídico e Operações · depende de CARE-137
- [ ] **CARE-143** Definir modelo operacional · P0 · S · Operações
- [ ] **CARE-144** Criar RACI da equipe · P1 · M · Operações · depende de CARE-143
- [ ] **CARE-145** Definir definition of ready · P1 · M · Operações · depende de CARE-144
- [ ] **CARE-146** Definir definition of done · P1 · L · Operações · depende de CARE-145
- [ ] **CARE-161** Definir tarefa exata da IA · P0 · S · IA e Produto
- [ ] **CARE-162** Classificar riscos de automação · P1 · M · IA e Produto · depende de CARE-161
- [ ] **CARE-163** Definir política de provedores · P1 · M · IA e Produto · depende de CARE-162
- [ ] **CARE-164** Definir fronteira entre IA e regras · P1 · L · IA e Produto · depende de CARE-163
- [ ] **CARE-197** Modelar workspace e membership · P0 · S · Engenharia e Segurança
- [ ] **CARE-198** Definir papéis canônicos · P1 · M · Engenharia e Segurança · depende de CARE-197
- [ ] **CARE-199** Criar matriz de permissões · P1 · M · Engenharia e Segurança · depende de CARE-198
- [ ] **CARE-200** Implementar convites · P1 · L · Engenharia e Segurança · depende de CARE-199
- [ ] **CARE-273** Definir consentimento · P1 · S · Privacidade e Segurança · depende de CARE-272
- [ ] **CARE-274** Implementar trilha de auditoria reforçada · P2 · M · Privacidade e Segurança · depende de CARE-273
- [ ] **CARE-275** Definir residência dos dados · P2 · L · Privacidade e Segurança · depende de CARE-274
- [ ] **CARE-276** Implementar retenção por categoria · P2 · M · Privacidade e Segurança · depende de CARE-275

## F4 — Fundação

**Janela:** Mês 5.1–6.4
**Gate:** Ambientes, identidade, dados, segurança e CI suportam desenvolvimento seguro.

- [ ] **CARE-029** Criar design tokens iniciais · P3 · M · Produto e Design · depende de CARE-028
- [ ] **CARE-030** Aprovar experiência da fatia vertical · P0 · L · Produto e Design · depende de CARE-029
- [ ] **CARE-039** Criar política de compatibilidade de navegadores · P2 · S · Engenharia · depende de CARE-038
- [ ] **CARE-040** Configurar testes visuais · P2 · L · Engenharia · depende de CARE-039
- [ ] **CARE-041** Definir orçamento de performance · P3 · M · Engenharia · depende de CARE-040
- [ ] **CARE-042** Validar frontend da fatia vertical · P3 · XL · Engenharia · depende de CARE-041
- [ ] **CARE-051** Implementar autorização server-side · P2 · S · Engenharia · depende de CARE-050
- [ ] **CARE-052** Criar modelo de tenancy · P2 · L · Engenharia · depende de CARE-051
- [ ] **CARE-053** Definir contratos de aplicação · P3 · M · Engenharia · depende de CARE-052
- [ ] **CARE-054** Criar camada de persistência · P3 · XL · Engenharia · depende de CARE-053
- [ ] **CARE-069** Criar dashboard operacional · P2 · S · Produto e Dados · depende de CARE-068
- [ ] **CARE-070** Criar dashboard de produto · P2 · L · Produto e Dados · depende de CARE-069
- [ ] **CARE-071** Auditar consistência das métricas · P3 · M · Produto e Dados · depende de CARE-070
- [ ] **CARE-072** Aprovar baseline de dados · P0 · XL · Produto e Dados · depende de CARE-071
- [ ] **CARE-081** Validar isolamento entre tenants · P2 · S · Segurança e Engenharia · depende de CARE-080
- [ ] **CARE-082** Criar logging de ações sensíveis · P2 · L · Segurança e Engenharia · depende de CARE-081
- [ ] **CARE-083** Definir resposta a incidentes · P3 · M · Segurança e Engenharia · depende de CARE-082
- [ ] **CARE-084** Configurar secret scanning · P3 · XL · Segurança e Engenharia · depende de CARE-083
- [ ] **CARE-095** Configurar testes end to end · P1 · S · Engenharia e QA · depende de CARE-094
- [ ] **CARE-096** Definir testes de contrato · P2 · M · Engenharia e QA · depende de CARE-095
- [ ] **CARE-097** Criar fixtures representativas · P2 · L · Engenharia e QA · depende de CARE-096
- [ ] **CARE-098** Definir SLOs iniciais · P2 · M · Engenharia e QA · depende de CARE-097
- [ ] **CARE-117** Criar programa de early adopters · P3 · M · Growth e Produto · depende de CARE-116
- [ ] **CARE-118** Medir conversão por etapa · P3 · L · Growth e Produto · depende de CARE-117
- [ ] **CARE-119** Revisar pricing com evidências · P3 · S · Growth e Produto · depende de CARE-118
- [ ] **CARE-120** Aprovar plano de go to market · P0 · M · Growth e Produto · depende de CARE-119
- [ ] **CARE-121** Definir política de planos · P0 · S · Financeiro e Engenharia
- [ ] **CARE-122** Definir matriz de entitlements · P1 · M · Financeiro e Engenharia · depende de CARE-121
- [ ] **CARE-123** Mapear eventos financeiros · P1 · M · Financeiro e Engenharia · depende de CARE-122
- [ ] **CARE-124** Definir política de cancelamento · P1 · L · Financeiro e Engenharia · depende de CARE-123
- [ ] **CARE-139** Revisar claims comerciais · P2 · S · Jurídico e Operações · depende de CARE-138
- [ ] **CARE-140** Definir política de retenção legal · P2 · L · Jurídico e Operações · depende de CARE-139
- [ ] **CARE-141** Preparar documentação de lançamento · P3 · M · Jurídico e Operações · depende de CARE-140
- [ ] **CARE-142** Aprovar gate jurídico · P0 · XL · Jurídico e Operações · depende de CARE-141
- [ ] **CARE-147** Configurar gestão de backlog · P1 · S · Operações · depende de CARE-146
- [ ] **CARE-148** Definir fluxo de branches e revisão · P2 · M · Operações · depende de CARE-147
- [ ] **CARE-149** Criar playbook de release · P2 · L · Operações · depende de CARE-148
- [ ] **CARE-150** Criar changelog · P2 · M · Operações · depende de CARE-149
- [ ] **CARE-165** Criar contratos de entrada e saída · P1 · S · IA e Produto · depende de CARE-164
- [ ] **CARE-166** Criar dataset de avaliação · P2 · M · IA e Produto · depende de CARE-165
- [ ] **CARE-167** Implementar versionamento de prompts · P2 · L · IA e Produto · depende de CARE-166
- [ ] **CARE-168** Implementar revisão humana · P2 · M · IA e Produto · depende de CARE-167
- [ ] **CARE-201** Implementar troca de workspace · P1 · S · Engenharia e Segurança · depende de CARE-200
- [ ] **CARE-202** Aplicar isolamento no banco · P2 · M · Engenharia e Segurança · depende de CARE-201
- [ ] **CARE-203** Aplicar autorização no servidor · P2 · L · Engenharia e Segurança · depende de CARE-202
- [ ] **CARE-204** Controlar administração do workspace · P2 · M · Engenharia e Segurança · depende de CARE-203
- [ ] **CARE-221** Definir formatos aceitos · P0 · S · Engenharia e Segurança
- [ ] **CARE-222** Definir limites de arquivo · P1 · M · Engenharia e Segurança · depende de CARE-221
- [ ] **CARE-223** Criar storage privado · P1 · M · Engenharia e Segurança · depende de CARE-222
- [ ] **CARE-224** Implementar upload resiliente · P1 · L · Engenharia e Segurança · depende de CARE-223
- [ ] **CARE-277** Criar processo de direitos do titular · P2 · S · Privacidade e Segurança · depende de CARE-276
- [ ] **CARE-278** Revisar subprocessadores · P2 · L · Privacidade e Segurança · depende de CARE-277
- [ ] **CARE-279** Executar auditoria independente · P3 · M · Privacidade e Segurança · depende de CARE-278
- [ ] **CARE-280** Aprovar gate regulatório · P0 · XL · Privacidade e Segurança · depende de CARE-279
- [ ] **CARE-281** Definir idiomas suportados · P0 · S · Produto e Operações
- [ ] **CARE-282** Escolher idioma canônico · P1 · M · Produto e Operações · depende de CARE-281
- [ ] **CARE-283** Externalizar strings · P1 · M · Produto e Operações · depende de CARE-282
- [ ] **CARE-284** Localizar datas e números · P1 · L · Produto e Operações · depende de CARE-283
- [ ] **CARE-305** Inventariar fontes de dados · P0 · S · Dados e Engenharia
- [ ] **CARE-306** Definir mapeamento de campos · P1 · M · Dados e Engenharia · depende de CARE-305
- [ ] **CARE-307** Criar contrato de importação · P1 · M · Dados e Engenharia · depende de CARE-306
- [ ] **CARE-308** Implementar validação prévia · P1 · L · Dados e Engenharia · depende de CARE-307

## F5 — Fatia vertical

**Janela:** Mês 6.4–7.7
**Gate:** Um usuário percorre o caminho principal e produz valor observável.

- [ ] **CARE-055** Definir processamento assíncrono · P3 · M · Engenharia · depende de CARE-054
- [ ] **CARE-056** Criar trilha de auditoria · P3 · L · Engenharia · depende de CARE-055
- [ ] **CARE-057** Configurar feature flags · P3 · S · Engenharia · depende de CARE-056
- [ ] **CARE-058** Documentar rollback · P3 · M · Engenharia · depende de CARE-057
- [ ] **CARE-085** Configurar dependency scanning · P3 · M · Segurança e Engenharia · depende de CARE-084
- [ ] **CARE-086** Executar revisão de autenticação · P3 · L · Segurança e Engenharia · depende de CARE-085
- [ ] **CARE-087** Executar revisão de autorização · P3 · S · Segurança e Engenharia · depende de CARE-086
- [ ] **CARE-088** Planejar pentest proporcional ao risco · P3 · M · Segurança e Engenharia · depende de CARE-087
- [ ] **CARE-099** Configurar error tracking · P2 · S · Engenharia e QA · depende de CARE-098
- [ ] **CARE-100** Configurar logs estruturados · P2 · L · Engenharia e QA · depende de CARE-099
- [ ] **CARE-101** Criar alertas acionáveis · P3 · M · Engenharia e QA · depende de CARE-100
- [ ] **CARE-102** Executar teste de carga inicial · P3 · XL · Engenharia e QA · depende de CARE-101
- [ ] **CARE-125** Definir tratamento de falhas de pagamento · P1 · S · Financeiro e Engenharia · depende de CARE-124
- [ ] **CARE-126** Definir reconciliação financeira · P2 · M · Financeiro e Engenharia · depende de CARE-125
- [ ] **CARE-127** Criar projeção de custos unitários · P2 · L · Financeiro e Engenharia · depende de CARE-126
- [ ] **CARE-128** Definir controles contra abuso de plano · P2 · M · Financeiro e Engenharia · depende de CARE-127
- [ ] **CARE-151** Definir canais de suporte · P2 · S · Operações · depende de CARE-150
- [ ] **CARE-152** Criar taxonomia de tickets · P2 · L · Operações · depende de CARE-151
- [ ] **CARE-153** Definir SLA interno · P3 · M · Operações · depende de CARE-152
- [ ] **CARE-154** Criar base de conhecimento · P3 · XL · Operações · depende de CARE-153
- [ ] **CARE-169** Testar prompt injection · P2 · S · IA e Produto · depende de CARE-168
- [ ] **CARE-170** Definir fallback determinístico · P2 · L · IA e Produto · depende de CARE-169
- [ ] **CARE-171** Monitorar qualidade e custo · P3 · M · IA e Produto · depende de CARE-170
- [ ] **CARE-172** Aprovar gate de IA · P0 · XL · IA e Produto · depende de CARE-171
- [ ] **CARE-173** Escolher provedor de billing · P0 · S · Financeiro e Engenharia
- [ ] **CARE-174** Modelar produtos e preços · P1 · M · Financeiro e Engenharia · depende de CARE-173
- [ ] **CARE-175** Implementar checkout · P1 · M · Financeiro e Engenharia · depende de CARE-174
- [ ] **CARE-176** Implementar assinatura mensal e anual · P1 · L · Financeiro e Engenharia · depende de CARE-175
- [ ] **CARE-205** Registrar mudanças de acesso · P2 · S · Engenharia e Segurança · depende de CARE-204
- [ ] **CARE-206** Testar escalada de privilégio · P2 · L · Engenharia e Segurança · depende de CARE-205
- [ ] **CARE-207** Testar acesso cross-tenant · P3 · M · Engenharia e Segurança · depende de CARE-206
- [ ] **CARE-208** Aprovar gate de tenancy · P0 · XL · Engenharia e Segurança · depende de CARE-207
- [ ] **CARE-225** Validar MIME e extensão · P1 · S · Engenharia e Segurança · depende de CARE-224
- [ ] **CARE-226** Criar quarentena · P2 · M · Engenharia e Segurança · depende de CARE-225
- [ ] **CARE-227** Detectar arquivos maliciosos · P2 · L · Engenharia e Segurança · depende de CARE-226
- [ ] **CARE-228** Proteger contra zip bombs · P2 · M · Engenharia e Segurança · depende de CARE-227
- [ ] **CARE-245** Definir casos de uso da API · P0 · S · Plataforma
- [ ] **CARE-246** Versionar contratos públicos · P1 · M · Plataforma · depende de CARE-245
- [ ] **CARE-247** Implementar autenticação da API · P1 · M · Plataforma · depende de CARE-246
- [ ] **CARE-248** Implementar scopes · P1 · L · Plataforma · depende de CARE-247
- [ ] **CARE-285** Localizar moedas e preços · P1 · S · Produto e Operações · depende de CARE-284
- [ ] **CARE-286** Criar glossário de produto · P2 · M · Produto e Operações · depende de CARE-285
- [ ] **CARE-287** Definir processo de tradução · P2 · L · Produto e Operações · depende de CARE-286
- [ ] **CARE-288** Revisar conteúdo crítico · P2 · M · Produto e Operações · depende de CARE-287
- [ ] **CARE-309** Implementar importação idempotente · P1 · S · Dados e Engenharia · depende de CARE-308
- [ ] **CARE-310** Criar relatório de inconsistências · P2 · M · Dados e Engenharia · depende de CARE-309
- [ ] **CARE-311** Preservar proveniência · P2 · L · Dados e Engenharia · depende de CARE-310
- [ ] **CARE-312** Criar estratégia de rollback · P2 · M · Dados e Engenharia · depende de CARE-311
- [ ] **CARE-353** Definir indicação de uso · P1 · L · Produto clínico

## F6 — Produto principal

**Janela:** Mês 7.7–9
**Gate:** Workflows essenciais atendem critérios funcionais e de domínio.

- [ ] **CARE-059** Testar build reproduzível · P3 · L · Engenharia · depende de CARE-058
- [ ] **CARE-060** Aprovar fundação da plataforma · P0 · M · Engenharia · depende de CARE-059
- [ ] **CARE-089** Testar recuperação após incidente · P3 · L · Segurança e Engenharia · depende de CARE-088
- [ ] **CARE-090** Aprovar gate de segurança · P0 · M · Segurança e Engenharia · depende de CARE-089
- [ ] **CARE-103** Executar drill de backup e restore · P3 · M · Engenharia e QA · depende de CARE-102
- [ ] **CARE-104** Aprovar readiness técnico · P0 · L · Engenharia e QA · depende de CARE-103
- [ ] **CARE-129** Validar fluxo financeiro ponta a ponta · P0 · S · Financeiro e Engenharia · depende de CARE-128
- [ ] **CARE-130** Aprovar gate de monetização · P0 · L · Financeiro e Engenharia · depende de CARE-129
- [ ] **CARE-155** Definir processo de incidentes · P3 · M · Operações · depende de CARE-154
- [ ] **CARE-156** Criar runbook de manutenção · P3 · L · Operações · depende de CARE-155
- [ ] **CARE-157** Planejar continuidade do negócio · P3 · S · Operações · depende de CARE-156
- [ ] **CARE-158** Definir rotina de métricas · P3 · M · Operações · depende de CARE-157
- [ ] **CARE-177** Implementar trial e cupons · P1 · S · Financeiro e Engenharia · depende de CARE-176
- [ ] **CARE-178** Implementar portal do cliente · P2 · M · Financeiro e Engenharia · depende de CARE-177
- [ ] **CARE-179** Implementar entitlements server-side · P2 · L · Financeiro e Engenharia · depende de CARE-178
- [ ] **CARE-180** Validar assinatura de webhooks · P2 · M · Financeiro e Engenharia · depende de CARE-179
- [ ] **CARE-229** Implementar processamento assíncrono · P2 · S · Engenharia e Segurança · depende de CARE-228
- [ ] **CARE-230** Criar retry e dead letter · P2 · L · Engenharia e Segurança · depende de CARE-229
- [ ] **CARE-231** Definir retenção e exclusão · P3 · M · Engenharia e Segurança · depende de CARE-230
- [ ] **CARE-232** Aprovar segurança de uploads · P0 · XL · Engenharia e Segurança · depende de CARE-231
- [ ] **CARE-249** Definir rate limits · P1 · S · Plataforma · depende de CARE-248
- [ ] **CARE-250** Criar idempotency keys · P2 · M · Plataforma · depende de CARE-249
- [ ] **CARE-251** Implementar webhooks assinados · P2 · L · Plataforma · depende de CARE-250
- [ ] **CARE-252** Implementar retry de webhooks · P2 · M · Plataforma · depende de CARE-251
- [ ] **CARE-289** Testar expansão de texto · P2 · S · Produto e Operações · depende de CARE-288
- [ ] **CARE-290** Testar direção e caracteres · P2 · L · Produto e Operações · depende de CARE-289
- [ ] **CARE-291** Executar QA por locale · P3 · M · Produto e Operações · depende de CARE-290
- [ ] **CARE-292** Aprovar lançamento internacional · P0 · XL · Produto e Operações · depende de CARE-291
- [ ] **CARE-313** Testar volumes representativos · P2 · S · Dados e Engenharia · depende de CARE-312
- [ ] **CARE-314** Executar dry run · P2 · L · Dados e Engenharia · depende de CARE-313
- [ ] **CARE-315** Reconciliar amostras migradas · P3 · M · Dados e Engenharia · depende de CARE-314
- [ ] **CARE-316** Aprovar cutover · P0 · XL · Dados e Engenharia · depende de CARE-315
- [ ] **CARE-341** Definir etapas do pipeline · P0 · S · Vendas e Sucesso do Cliente
- [ ] **CARE-342** Definir critérios de qualificação · P1 · M · Vendas e Sucesso do Cliente · depende de CARE-341
- [ ] **CARE-343** Criar discovery comercial · P1 · M · Vendas e Sucesso do Cliente · depende de CARE-342
- [ ] **CARE-344** Criar demonstração repetível · P1 · L · Vendas e Sucesso do Cliente · depende de CARE-343
- [ ] **CARE-354** Definir eventos clínicos críticos · P1 · M · Produto clínico · depende de CARE-353

## F7 — Dados e integrações

**Janela:** Mês 9–10.3
**Gate:** Dados, jobs e integrações são auditáveis, resilientes e operáveis.

- [ ] **CARE-159** Executar ensaio de lançamento · P3 · L · Operações · depende de CARE-158
- [ ] **CARE-160** Aprovar operação pós-lançamento · P0 · M · Operações · depende de CARE-159
- [ ] **CARE-181** Garantir idempotência financeira · P2 · S · Financeiro e Engenharia · depende de CARE-180
- [ ] **CARE-182** Implementar dunning · P2 · L · Financeiro e Engenharia · depende de CARE-181
- [ ] **CARE-183** Implementar reconciliação · P3 · M · Financeiro e Engenharia · depende de CARE-182
- [ ] **CARE-184** Aprovar checkout real · P0 · XL · Financeiro e Engenharia · depende de CARE-183
- [ ] **CARE-253** Criar portal de documentação · P2 · S · Plataforma · depende de CARE-252
- [ ] **CARE-254** Criar sandbox de integração · P2 · L · Plataforma · depende de CARE-253
- [ ] **CARE-255** Monitorar consumo e erros · P3 · M · Plataforma · depende de CARE-254
- [ ] **CARE-256** Aprovar estabilidade da API · P0 · XL · Plataforma · depende de CARE-255
- [ ] **CARE-345** Definir proposta e aprovação · P1 · S · Vendas e Sucesso do Cliente · depende de CARE-344
- [ ] **CARE-346** Implementar CRM mínimo · P2 · M · Vendas e Sucesso do Cliente · depende de CARE-345
- [ ] **CARE-347** Criar handoff vendas para sucesso · P2 · L · Vendas e Sucesso do Cliente · depende de CARE-346
- [ ] **CARE-348** Criar onboarding assistido · P2 · M · Vendas e Sucesso do Cliente · depende de CARE-347
- [ ] **CARE-355** Criar protocolo de anotação · P2 · M · Produto clínico · depende de CARE-354

## F8 — Monetização

**Janela:** Mês 10.3–11.6
**Gate:** Entitlements e fluxos financeiros reais são reconciliáveis.

- [ ] **CARE-349** Definir health score · P2 · S · Vendas e Sucesso do Cliente · depende de CARE-348
- [ ] **CARE-350** Criar playbook de risco de churn · P2 · L · Vendas e Sucesso do Cliente · depende de CARE-349
- [ ] **CARE-351** Criar processo de renovação · P3 · M · Vendas e Sucesso do Cliente · depende de CARE-350
- [ ] **CARE-352** Aprovar operação de receita · P0 · XL · Vendas e Sucesso do Cliente · depende de CARE-351
- [ ] **CARE-356** Construir gold dataset · P2 · L · Produto clínico · depende de CARE-355

## F9 — Qualidade e segurança

**Janela:** Mês 11.6–12.9
**Gate:** Testes, SLOs e controles proporcionais ao risco foram aprovados.

- [ ] **CARE-357** Medir sensibilidade · P2 · M · Produto clínico · depende de CARE-356

## F10 — Prontidão de lançamento

**Janela:** Mês 12.9–14.1
**Gate:** Operação, suporte, jurídico e go-to-market estão prontos.

- [ ] **CARE-358** Medir especificidade · P2 · M · Produto clínico · depende de CARE-357

## F11 — Alpha

**Janela:** Mês 14.1–15.4
**Gate:** Usuários controlados completam jornadas reais e os riscos críticos estão fechados.

- [ ] **CARE-359** Implementar revisão clínica · P2 · L · Produto clínico · depende de CARE-358

## F12 — Beta

**Janela:** Mês 15.4–16.7
**Gate:** Uso real confirma valor, qualidade e suporte sustentável.

- [ ] **CARE-360** Aprovar validação clínica · P2 · M · Produto clínico · depende de CARE-359

## F13 — Lançamento e escala

**Janela:** Mês 16.7–18
**Gate:** Métricas de negócio e operação autorizam expansão gradual.


## Fora de escopo / N/A

- **CARE-185** Definir lados do marketplace — Não faz parte do escopo confirmado desta fixture.
- **CARE-186** Definir unidade de liquidez — Não faz parte do escopo confirmado desta fixture.
- **CARE-187** Modelar oferta e demanda — Não faz parte do escopo confirmado desta fixture.
- **CARE-188** Definir regras de matching — Não faz parte do escopo confirmado desta fixture.
- **CARE-189** Criar onboarding de fornecedores — Não faz parte do escopo confirmado desta fixture.
- **CARE-190** Criar onboarding de compradores — Não faz parte do escopo confirmado desta fixture.
- **CARE-191** Implementar descoberta e filtros — Não faz parte do escopo confirmado desta fixture.
- **CARE-192** Implementar confiança e reputação — Não faz parte do escopo confirmado desta fixture.
- **CARE-193** Definir disputa e reembolso — Não faz parte do escopo confirmado desta fixture.
- **CARE-194** Implementar split ou repasse — Não faz parte do escopo confirmado desta fixture.
- **CARE-195** Medir liquidez — Não faz parte do escopo confirmado desta fixture.
- **CARE-196** Aprovar operação do marketplace — Não faz parte do escopo confirmado desta fixture.
- **CARE-209** Definir ICP enterprise — Não faz parte do escopo confirmado desta fixture.
- **CARE-210** Mapear processo de procurement — Não faz parte do escopo confirmado desta fixture.
- **CARE-211** Criar pacote de security review — Não faz parte do escopo confirmado desta fixture.
- **CARE-212** Definir contratos enterprise — Não faz parte do escopo confirmado desta fixture.
- **CARE-213** Implementar SSO — Não faz parte do escopo confirmado desta fixture.
- **CARE-214** Implementar provisionamento de usuários — Não faz parte do escopo confirmado desta fixture.
- **CARE-215** Criar controles administrativos — Não faz parte do escopo confirmado desta fixture.
- **CARE-216** Definir data residency — Não faz parte do escopo confirmado desta fixture.
- **CARE-217** Criar SLA comercial — Não faz parte do escopo confirmado desta fixture.
- **CARE-218** Definir onboarding assistido — Não faz parte do escopo confirmado desta fixture.
- **CARE-219** Preparar renovação e expansão — Não faz parte do escopo confirmado desta fixture.
- **CARE-220** Aprovar readiness enterprise — Não faz parte do escopo confirmado desta fixture.
- **CARE-233** Definir casos de uso realtime — Não faz parte do escopo confirmado desta fixture.
- **CARE-234** Escolher modelo de sincronização — Não faz parte do escopo confirmado desta fixture.
- **CARE-235** Definir resolução de conflitos — Não faz parte do escopo confirmado desta fixture.
- **CARE-236** Implementar presença — Não faz parte do escopo confirmado desta fixture.
- **CARE-237** Implementar atualizações em tempo real — Não faz parte do escopo confirmado desta fixture.
- **CARE-238** Implementar edição colaborativa — Não faz parte do escopo confirmado desta fixture.
- **CARE-239** Persistir eventos relevantes — Não faz parte do escopo confirmado desta fixture.
- **CARE-240** Tratar reconexão — Não faz parte do escopo confirmado desta fixture.
- **CARE-241** Aplicar autorização em canais — Não faz parte do escopo confirmado desta fixture.
- **CARE-242** Testar concorrência — Não faz parte do escopo confirmado desta fixture.
- **CARE-243** Medir latência percebida — Não faz parte do escopo confirmado desta fixture.
- **CARE-244** Aprovar colaboração realtime — Não faz parte do escopo confirmado desta fixture.
- **CARE-257** Definir estratégia mobile — Não faz parte do escopo confirmado desta fixture.
- **CARE-258** Priorizar jornadas móveis — Não faz parte do escopo confirmado desta fixture.
- **CARE-259** Definir suporte offline — Não faz parte do escopo confirmado desta fixture.
- **CARE-260** Implementar layout mobile — Não faz parte do escopo confirmado desta fixture.
- **CARE-261** Implementar navegação touch — Não faz parte do escopo confirmado desta fixture.
- **CARE-262** Configurar instalação PWA — Não faz parte do escopo confirmado desta fixture.
- **CARE-263** Implementar notificações push — Não faz parte do escopo confirmado desta fixture.
- **CARE-264** Tratar permissões do dispositivo — Não faz parte do escopo confirmado desta fixture.
- **CARE-265** Otimizar redes lentas — Não faz parte do escopo confirmado desta fixture.
- **CARE-266** Testar dispositivos alvo — Não faz parte do escopo confirmado desta fixture.
- **CARE-267** Definir distribuição em lojas — Não faz parte do escopo confirmado desta fixture.
- **CARE-268** Aprovar experiência mobile — Não faz parte do escopo confirmado desta fixture.
- **CARE-293** Definir política de conteúdo — Não faz parte do escopo confirmado desta fixture.
- **CARE-294** Criar taxonomia de violações — Não faz parte do escopo confirmado desta fixture.
- **CARE-295** Implementar denúncia — Não faz parte do escopo confirmado desta fixture.
- **CARE-296** Implementar bloqueio e silenciamento — Não faz parte do escopo confirmado desta fixture.
- **CARE-297** Criar fila de moderação — Não faz parte do escopo confirmado desta fixture.
- **CARE-298** Definir níveis de enforcement — Não faz parte do escopo confirmado desta fixture.
- **CARE-299** Criar processo de apelação — Não faz parte do escopo confirmado desta fixture.
- **CARE-300** Detectar abuso coordenado — Não faz parte do escopo confirmado desta fixture.
- **CARE-301** Proteger moderadores — Não faz parte do escopo confirmado desta fixture.
- **CARE-302** Registrar decisões de moderação — Não faz parte do escopo confirmado desta fixture.
- **CARE-303** Medir precisão e tempo de resposta — Não faz parte do escopo confirmado desta fixture.
- **CARE-304** Aprovar operação de trust and safety — Não faz parte do escopo confirmado desta fixture.
- **CARE-317** Definir persona desenvolvedora — Não faz parte do escopo confirmado desta fixture.
- **CARE-318** Projetar quickstart — Não faz parte do escopo confirmado desta fixture.
- **CARE-319** Definir convenções da API — Não faz parte do escopo confirmado desta fixture.
- **CARE-320** Criar SDK inicial — Não faz parte do escopo confirmado desta fixture.
- **CARE-321** Criar CLI inicial — Não faz parte do escopo confirmado desta fixture.
- **CARE-322** Criar exemplos executáveis — Não faz parte do escopo confirmado desta fixture.
- **CARE-323** Documentar erros e limites — Não faz parte do escopo confirmado desta fixture.
- **CARE-324** Versionar changelog técnico — Não faz parte do escopo confirmado desta fixture.
- **CARE-325** Criar ambiente de testes — Não faz parte do escopo confirmado desta fixture.
- **CARE-326** Medir time to first success — Não faz parte do escopo confirmado desta fixture.
- **CARE-327** Testar documentação sem ajuda — Não faz parte do escopo confirmado desta fixture.
- **CARE-328** Aprovar developer experience — Não faz parte do escopo confirmado desta fixture.
- **CARE-329** Definir objetivo da comunidade — Não faz parte do escopo confirmado desta fixture.
- **CARE-330** Escolher canal comunitário — Não faz parte do escopo confirmado desta fixture.
- **CARE-331** Criar código de conduta — Não faz parte do escopo confirmado desta fixture.
- **CARE-332** Definir programa de embaixadores — Não faz parte do escopo confirmado desta fixture.
- **CARE-333** Projetar mecanismo de indicação — Não faz parte do escopo confirmado desta fixture.
- **CARE-334** Definir incentivo sustentável — Não faz parte do escopo confirmado desta fixture.
- **CARE-335** Implementar atribuição de referral — Não faz parte do escopo confirmado desta fixture.
- **CARE-336** Prevenir fraude de indicação — Não faz parte do escopo confirmado desta fixture.
- **CARE-337** Criar calendário de comunidade — Não faz parte do escopo confirmado desta fixture.
- **CARE-338** Medir participação qualificada — Não faz parte do escopo confirmado desta fixture.
- **CARE-339** Medir conversão por referral — Não faz parte do escopo confirmado desta fixture.
- **CARE-340** Aprovar escala comunitária — Não faz parte do escopo confirmado desta fixture.
