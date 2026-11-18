# Local Makers — SaaS Roadmap

Marketplace que conecta pequenos produtores locais a consumidores, com catálogo, disponibilidade, pedidos, reputação e retirada agendada.

**North Star:** Pedidos concluídos por comprador ativo sem intervenção do suporte.
**Horizonte:** 14 meses
**Tarefas ativas:** 288

## F0 — Descoberta e contexto

**Janela:** Início–mês 1.2
**Gate:** Problema, fontes e restrições estão documentados com hipóteses explícitas.

- [ ] **LMKT-001** Registrar visão e resultado desejado · P0 · S · Produto
- [ ] **LMKT-002** Definir ICP primário · P1 · M · Produto · depende de LMKT-001
- [ ] **LMKT-003** Definir comprador e usuário · P1 · M · Produto · depende de LMKT-002
- [ ] **LMKT-004** Documentar problema prioritário · P1 · L · Produto · depende de LMKT-003

## F1 — Estratégia e validação

**Janela:** Mês 1.2–2.3
**Gate:** ICP, JTBD, posicionamento e critérios de validação foram aprovados.

- [ ] **LMKT-005** Mapear alternativas atuais · P1 · S · Produto · depende de LMKT-004
- [ ] **LMKT-006** Formalizar job to be done · P2 · M · Produto · depende de LMKT-005
- [ ] **LMKT-007** Definir proposta de valor · P2 · L · Produto · depende de LMKT-006
- [ ] **LMKT-008** Registrar hipóteses críticas · P2 · M · Produto · depende de LMKT-007
- [ ] **LMKT-017** Criar plano contínuo de pesquisa · P0 · S · Produto e Design
- [ ] **LMKT-018** Definir perfis comportamentais · P1 · M · Produto e Design · depende de LMKT-017
- [ ] **LMKT-019** Mapear jornada atual · P1 · M · Produto e Design · depende de LMKT-018
- [ ] **LMKT-020** Mapear jornada desejada · P1 · L · Produto e Design · depende de LMKT-019
- [ ] **LMKT-105** Definir narrativa comercial · P0 · S · Growth e Produto
- [ ] **LMKT-106** Criar hipótese de pricing · P1 · M · Growth e Produto · depende de LMKT-105
- [ ] **LMKT-107** Testar disposição a pagar · P1 · M · Growth e Produto · depende de LMKT-106
- [ ] **LMKT-108** Definir evento de ativação · P1 · L · Growth e Produto · depende de LMKT-107

## F2 — Sistema de produto

**Janela:** Mês 2.3–3.5
**Gate:** Jornada, escopo, arquitetura da informação e fatia vertical estão testáveis.

- [ ] **LMKT-009** Planejar entrevistas de problema · P2 · S · Produto · depende de LMKT-008
- [ ] **LMKT-010** Executar entrevistas de problema · P2 · L · Produto · depende de LMKT-009
- [ ] **LMKT-011** Sintetizar evidências de discovery · P3 · M · Produto · depende de LMKT-010
- [ ] **LMKT-012** Definir critérios de validação · P3 · XL · Produto · depende de LMKT-011
- [ ] **LMKT-021** Inventariar pontos de fricção · P1 · S · Produto e Design · depende de LMKT-020
- [ ] **LMKT-022** Definir princípios de experiência · P2 · M · Produto e Design · depende de LMKT-021
- [ ] **LMKT-023** Criar arquitetura da informação · P2 · L · Produto e Design · depende de LMKT-022
- [ ] **LMKT-024** Prototipar fluxo de ativação · P2 · M · Produto e Design · depende de LMKT-023
- [ ] **LMKT-031** Definir arquitetura do frontend · P0 · S · Engenharia
- [ ] **LMKT-032** Configurar padrões de componentes · P1 · M · Engenharia · depende de LMKT-031
- [ ] **LMKT-033** Criar shell responsivo da aplicação · P1 · M · Engenharia · depende de LMKT-032
- [ ] **LMKT-034** Implementar navegação autenticada · P1 · L · Engenharia · depende de LMKT-033
- [ ] **LMKT-043** Registrar decisão arquitetural inicial · P0 · S · Engenharia
- [ ] **LMKT-044** Definir contextos do domínio · P1 · M · Engenharia · depende de LMKT-043
- [ ] **LMKT-045** Definir ambientes de desenvolvimento · P1 · M · Engenharia · depende de LMKT-044
- [ ] **LMKT-046** Configurar integração contínua · P1 · L · Engenharia · depende de LMKT-045
- [ ] **LMKT-061** Definir modelo conceitual de dados · P0 · S · Produto e Dados
- [ ] **LMKT-062** Criar dicionário de eventos · P1 · M · Produto e Dados · depende de LMKT-061
- [ ] **LMKT-063** Definir propriedade dos dados · P1 · M · Produto e Dados · depende de LMKT-062
- [ ] **LMKT-064** Implementar analytics de ativação · P1 · L · Produto e Dados · depende de LMKT-063
- [ ] **LMKT-073** Classificar dados processados · P0 · S · Segurança e Engenharia
- [ ] **LMKT-074** Criar threat model inicial · P1 · M · Segurança e Engenharia · depende de LMKT-073
- [ ] **LMKT-075** Definir fronteiras de confiança · P1 · M · Segurança e Engenharia · depende de LMKT-074
- [ ] **LMKT-076** Implementar gestão segura de segredos · P1 · L · Segurança e Engenharia · depende de LMKT-075
- [ ] **LMKT-109** Desenhar onboarding comercial · P1 · S · Growth e Produto · depende de LMKT-108
- [ ] **LMKT-110** Criar landing page inicial · P2 · M · Growth e Produto · depende de LMKT-109
- [ ] **LMKT-111** Configurar analytics de aquisição · P2 · L · Growth e Produto · depende de LMKT-110
- [ ] **LMKT-112** Definir canal de aquisição primário · P2 · M · Growth e Produto · depende de LMKT-111
- [ ] **LMKT-131** Inventariar obrigações legais · P0 · S · Jurídico e Operações
- [ ] **LMKT-132** Definir titularidade da propriedade intelectual · P1 · M · Jurídico e Operações · depende de LMKT-131
- [ ] **LMKT-133** Criar ledger de componentes terceiros · P1 · M · Jurídico e Operações · depende de LMKT-132
- [ ] **LMKT-134** Definir termos de uso · P1 · L · Jurídico e Operações · depende de LMKT-133

## F3 — Fundação

**Janela:** Mês 3.5–4.7
**Gate:** Ambientes, identidade, dados, segurança e CI suportam desenvolvimento seguro.

- [ ] **LMKT-013** Priorizar jornada principal · P3 · M · Produto · depende de LMKT-012
- [ ] **LMKT-014** Definir fronteiras do MVP · P3 · L · Produto · depende de LMKT-013
- [ ] **LMKT-015** Criar mapa de outcomes · P3 · S · Produto · depende de LMKT-014
- [ ] **LMKT-016** Aprovar estratégia inicial do produto · P0 · M · Produto · depende de LMKT-015
- [ ] **LMKT-025** Testar protótipo sem orientação · P2 · S · Produto e Design · depende de LMKT-024
- [ ] **LMKT-026** Registrar decisões de usabilidade · P2 · L · Produto e Design · depende de LMKT-025
- [ ] **LMKT-027** Definir padrão de conteúdo · P3 · M · Produto e Design · depende de LMKT-026
- [ ] **LMKT-028** Definir requisitos de acessibilidade · P3 · XL · Produto e Design · depende de LMKT-027
- [ ] **LMKT-029** Criar design tokens iniciais · P3 · M · Produto e Design · depende de LMKT-028
- [ ] **LMKT-030** Aprovar experiência da fatia vertical · P0 · L · Produto e Design · depende de LMKT-029
- [ ] **LMKT-035** Criar estados de loading e empty · P1 · S · Engenharia · depende de LMKT-034
- [ ] **LMKT-036** Criar padrão de tratamento de erros · P2 · M · Engenharia · depende de LMKT-035
- [ ] **LMKT-037** Implementar formulários acessíveis · P2 · L · Engenharia · depende de LMKT-036
- [ ] **LMKT-038** Configurar estratégia de cache no cliente · P2 · M · Engenharia · depende de LMKT-037
- [ ] **LMKT-039** Criar política de compatibilidade de navegadores · P2 · S · Engenharia · depende de LMKT-038
- [ ] **LMKT-040** Configurar testes visuais · P2 · L · Engenharia · depende de LMKT-039
- [ ] **LMKT-041** Definir orçamento de performance · P3 · M · Engenharia · depende de LMKT-040
- [ ] **LMKT-042** Validar frontend da fatia vertical · P3 · XL · Engenharia · depende de LMKT-041
- [ ] **LMKT-047** Configurar preview por mudança · P1 · S · Engenharia · depende de LMKT-046
- [ ] **LMKT-048** Configurar produção protegida · P2 · M · Engenharia · depende de LMKT-047
- [ ] **LMKT-049** Definir estratégia de configuração · P2 · L · Engenharia · depende de LMKT-048
- [ ] **LMKT-050** Implementar autenticação base · P2 · M · Engenharia · depende de LMKT-049
- [ ] **LMKT-051** Implementar autorização server-side · P2 · S · Engenharia · depende de LMKT-050
- [ ] **LMKT-052** Criar modelo de tenancy · P2 · L · Engenharia · depende de LMKT-051
- [ ] **LMKT-053** Definir contratos de aplicação · P3 · M · Engenharia · depende de LMKT-052
- [ ] **LMKT-054** Criar camada de persistência · P3 · XL · Engenharia · depende de LMKT-053
- [ ] **LMKT-065** Implementar analytics de retenção · P1 · S · Produto e Dados · depende de LMKT-064
- [ ] **LMKT-066** Definir qualidade mínima dos eventos · P2 · M · Produto e Dados · depende de LMKT-065
- [ ] **LMKT-067** Criar validação de payloads analíticos · P2 · L · Produto e Dados · depende de LMKT-066
- [ ] **LMKT-068** Definir política de retenção · P2 · M · Produto e Dados · depende de LMKT-067
- [ ] **LMKT-069** Criar dashboard operacional · P2 · S · Produto e Dados · depende de LMKT-068
- [ ] **LMKT-070** Criar dashboard de produto · P2 · L · Produto e Dados · depende de LMKT-069
- [ ] **LMKT-071** Auditar consistência das métricas · P3 · M · Produto e Dados · depende de LMKT-070
- [ ] **LMKT-072** Aprovar baseline de dados · P0 · XL · Produto e Dados · depende de LMKT-071
- [ ] **LMKT-077** Aplicar princípio de menor privilégio · P1 · S · Segurança e Engenharia · depende de LMKT-076
- [ ] **LMKT-078** Definir política de sessões · P2 · M · Segurança e Engenharia · depende de LMKT-077
- [ ] **LMKT-079** Implementar proteção contra abuso · P2 · L · Segurança e Engenharia · depende de LMKT-078
- [ ] **LMKT-080** Configurar headers de segurança · P2 · M · Segurança e Engenharia · depende de LMKT-079
- [ ] **LMKT-081** Validar isolamento entre tenants · P2 · S · Segurança e Engenharia · depende de LMKT-080
- [ ] **LMKT-082** Criar logging de ações sensíveis · P2 · L · Segurança e Engenharia · depende de LMKT-081
- [ ] **LMKT-083** Definir resposta a incidentes · P3 · M · Segurança e Engenharia · depende de LMKT-082
- [ ] **LMKT-084** Configurar secret scanning · P3 · XL · Segurança e Engenharia · depende de LMKT-083
- [ ] **LMKT-091** Definir estratégia de testes · P0 · S · Engenharia e QA
- [ ] **LMKT-092** Criar pirâmide de testes · P1 · M · Engenharia e QA · depende de LMKT-091
- [ ] **LMKT-093** Configurar testes unitários · P1 · M · Engenharia e QA · depende de LMKT-092
- [ ] **LMKT-094** Configurar testes de integração · P1 · L · Engenharia e QA · depende de LMKT-093
- [ ] **LMKT-095** Configurar testes end to end · P1 · S · Engenharia e QA · depende de LMKT-094
- [ ] **LMKT-096** Definir testes de contrato · P2 · M · Engenharia e QA · depende de LMKT-095
- [ ] **LMKT-097** Criar fixtures representativas · P2 · L · Engenharia e QA · depende de LMKT-096
- [ ] **LMKT-098** Definir SLOs iniciais · P2 · M · Engenharia e QA · depende de LMKT-097
- [ ] **LMKT-113** Criar experimento de demanda · P2 · S · Growth e Produto · depende de LMKT-112
- [ ] **LMKT-114** Definir processo de coleta de feedback · P2 · L · Growth e Produto · depende de LMKT-113
- [ ] **LMKT-115** Criar estratégia de conteúdo · P3 · M · Growth e Produto · depende de LMKT-114
- [ ] **LMKT-116** Definir comunicação de lançamento · P3 · XL · Growth e Produto · depende de LMKT-115
- [ ] **LMKT-117** Criar programa de early adopters · P3 · M · Growth e Produto · depende de LMKT-116
- [ ] **LMKT-118** Medir conversão por etapa · P3 · L · Growth e Produto · depende de LMKT-117
- [ ] **LMKT-119** Revisar pricing com evidências · P3 · S · Growth e Produto · depende de LMKT-118
- [ ] **LMKT-120** Aprovar plano de go to market · P0 · M · Growth e Produto · depende de LMKT-119
- [ ] **LMKT-121** Definir política de planos · P0 · S · Financeiro e Engenharia
- [ ] **LMKT-122** Definir matriz de entitlements · P1 · M · Financeiro e Engenharia · depende de LMKT-121
- [ ] **LMKT-123** Mapear eventos financeiros · P1 · M · Financeiro e Engenharia · depende de LMKT-122
- [ ] **LMKT-124** Definir política de cancelamento · P1 · L · Financeiro e Engenharia · depende de LMKT-123
- [ ] **LMKT-135** Definir política de privacidade · P1 · S · Jurídico e Operações · depende de LMKT-134
- [ ] **LMKT-136** Definir política de cookies · P2 · M · Jurídico e Operações · depende de LMKT-135
- [ ] **LMKT-137** Mapear subprocessadores · P2 · L · Jurídico e Operações · depende de LMKT-136
- [ ] **LMKT-138** Definir processo de solicitação de titular · P2 · M · Jurídico e Operações · depende de LMKT-137
- [ ] **LMKT-139** Revisar claims comerciais · P2 · S · Jurídico e Operações · depende de LMKT-138
- [ ] **LMKT-140** Definir política de retenção legal · P2 · L · Jurídico e Operações · depende de LMKT-139
- [ ] **LMKT-141** Preparar documentação de lançamento · P3 · M · Jurídico e Operações · depende de LMKT-140
- [ ] **LMKT-142** Aprovar gate jurídico · P0 · XL · Jurídico e Operações · depende de LMKT-141
- [ ] **LMKT-143** Definir modelo operacional · P0 · S · Operações
- [ ] **LMKT-144** Criar RACI da equipe · P1 · M · Operações · depende de LMKT-143
- [ ] **LMKT-145** Definir definition of ready · P1 · M · Operações · depende de LMKT-144
- [ ] **LMKT-146** Definir definition of done · P1 · L · Operações · depende de LMKT-145
- [ ] **LMKT-147** Configurar gestão de backlog · P1 · S · Operações · depende de LMKT-146
- [ ] **LMKT-148** Definir fluxo de branches e revisão · P2 · M · Operações · depende de LMKT-147
- [ ] **LMKT-149** Criar playbook de release · P2 · L · Operações · depende de LMKT-148
- [ ] **LMKT-150** Criar changelog · P2 · M · Operações · depende de LMKT-149
- [ ] **LMKT-185** Definir lados do marketplace · P0 · S · Produto e Operações
- [ ] **LMKT-186** Definir unidade de liquidez · P1 · M · Produto e Operações · depende de LMKT-185
- [ ] **LMKT-187** Modelar oferta e demanda · P1 · M · Produto e Operações · depende de LMKT-186
- [ ] **LMKT-188** Definir regras de matching · P1 · L · Produto e Operações · depende de LMKT-187
- [ ] **LMKT-189** Criar onboarding de fornecedores · P1 · S · Produto e Operações · depende de LMKT-188
- [ ] **LMKT-190** Criar onboarding de compradores · P2 · M · Produto e Operações · depende de LMKT-189
- [ ] **LMKT-191** Implementar descoberta e filtros · P2 · L · Produto e Operações · depende de LMKT-190
- [ ] **LMKT-192** Implementar confiança e reputação · P2 · M · Produto e Operações · depende de LMKT-191
- [ ] **LMKT-197** Modelar workspace e membership · P0 · S · Engenharia e Segurança
- [ ] **LMKT-198** Definir papéis canônicos · P1 · M · Engenharia e Segurança · depende de LMKT-197
- [ ] **LMKT-199** Criar matriz de permissões · P1 · M · Engenharia e Segurança · depende de LMKT-198
- [ ] **LMKT-200** Implementar convites · P1 · L · Engenharia e Segurança · depende de LMKT-199
- [ ] **LMKT-201** Implementar troca de workspace · P1 · S · Engenharia e Segurança · depende de LMKT-200
- [ ] **LMKT-202** Aplicar isolamento no banco · P2 · M · Engenharia e Segurança · depende de LMKT-201
- [ ] **LMKT-203** Aplicar autorização no servidor · P2 · L · Engenharia e Segurança · depende de LMKT-202
- [ ] **LMKT-204** Controlar administração do workspace · P2 · M · Engenharia e Segurança · depende de LMKT-203
- [ ] **LMKT-281** Definir idiomas suportados · P0 · S · Produto e Operações
- [ ] **LMKT-282** Escolher idioma canônico · P1 · M · Produto e Operações · depende de LMKT-281
- [ ] **LMKT-283** Externalizar strings · P1 · M · Produto e Operações · depende de LMKT-282
- [ ] **LMKT-284** Localizar datas e números · P1 · L · Produto e Operações · depende de LMKT-283

## F4 — Fatia vertical

**Janela:** Mês 4.7–5.8
**Gate:** Um usuário percorre o caminho principal e produz valor observável.

- [ ] **LMKT-055** Definir processamento assíncrono · P3 · M · Engenharia · depende de LMKT-054
- [ ] **LMKT-056** Criar trilha de auditoria · P3 · L · Engenharia · depende de LMKT-055
- [ ] **LMKT-057** Configurar feature flags · P3 · S · Engenharia · depende de LMKT-056
- [ ] **LMKT-058** Documentar rollback · P3 · M · Engenharia · depende de LMKT-057
- [ ] **LMKT-085** Configurar dependency scanning · P3 · M · Segurança e Engenharia · depende de LMKT-084
- [ ] **LMKT-086** Executar revisão de autenticação · P3 · L · Segurança e Engenharia · depende de LMKT-085
- [ ] **LMKT-087** Executar revisão de autorização · P3 · S · Segurança e Engenharia · depende de LMKT-086
- [ ] **LMKT-088** Planejar pentest proporcional ao risco · P3 · M · Segurança e Engenharia · depende de LMKT-087
- [ ] **LMKT-099** Configurar error tracking · P2 · S · Engenharia e QA · depende de LMKT-098
- [ ] **LMKT-100** Configurar logs estruturados · P2 · L · Engenharia e QA · depende de LMKT-099
- [ ] **LMKT-101** Criar alertas acionáveis · P3 · M · Engenharia e QA · depende de LMKT-100
- [ ] **LMKT-102** Executar teste de carga inicial · P3 · XL · Engenharia e QA · depende de LMKT-101
- [ ] **LMKT-125** Definir tratamento de falhas de pagamento · P1 · S · Financeiro e Engenharia · depende de LMKT-124
- [ ] **LMKT-126** Definir reconciliação financeira · P2 · M · Financeiro e Engenharia · depende de LMKT-125
- [ ] **LMKT-127** Criar projeção de custos unitários · P2 · L · Financeiro e Engenharia · depende de LMKT-126
- [ ] **LMKT-128** Definir controles contra abuso de plano · P2 · M · Financeiro e Engenharia · depende de LMKT-127
- [ ] **LMKT-151** Definir canais de suporte · P2 · S · Operações · depende de LMKT-150
- [ ] **LMKT-152** Criar taxonomia de tickets · P2 · L · Operações · depende de LMKT-151
- [ ] **LMKT-153** Definir SLA interno · P3 · M · Operações · depende de LMKT-152
- [ ] **LMKT-154** Criar base de conhecimento · P3 · XL · Operações · depende de LMKT-153
- [ ] **LMKT-173** Escolher provedor de billing · P0 · S · Financeiro e Engenharia
- [ ] **LMKT-174** Modelar produtos e preços · P1 · M · Financeiro e Engenharia · depende de LMKT-173
- [ ] **LMKT-175** Implementar checkout · P1 · M · Financeiro e Engenharia · depende de LMKT-174
- [ ] **LMKT-176** Implementar assinatura mensal e anual · P1 · L · Financeiro e Engenharia · depende de LMKT-175
- [ ] **LMKT-193** Definir disputa e reembolso · P2 · S · Produto e Operações · depende de LMKT-192
- [ ] **LMKT-194** Implementar split ou repasse · P2 · L · Produto e Operações · depende de LMKT-193
- [ ] **LMKT-195** Medir liquidez · P3 · M · Produto e Operações · depende de LMKT-194
- [ ] **LMKT-196** Aprovar operação do marketplace · P0 · XL · Produto e Operações · depende de LMKT-195
- [ ] **LMKT-205** Registrar mudanças de acesso · P2 · S · Engenharia e Segurança · depende de LMKT-204
- [ ] **LMKT-206** Testar escalada de privilégio · P2 · L · Engenharia e Segurança · depende de LMKT-205
- [ ] **LMKT-207** Testar acesso cross-tenant · P3 · M · Engenharia e Segurança · depende de LMKT-206
- [ ] **LMKT-208** Aprovar gate de tenancy · P0 · XL · Engenharia e Segurança · depende de LMKT-207
- [ ] **LMKT-233** Definir casos de uso realtime · P0 · S · Engenharia
- [ ] **LMKT-234** Escolher modelo de sincronização · P1 · M · Engenharia · depende de LMKT-233
- [ ] **LMKT-235** Definir resolução de conflitos · P1 · M · Engenharia · depende de LMKT-234
- [ ] **LMKT-236** Implementar presença · P1 · L · Engenharia · depende de LMKT-235
- [ ] **LMKT-245** Definir casos de uso da API · P0 · S · Plataforma
- [ ] **LMKT-246** Versionar contratos públicos · P1 · M · Plataforma · depende de LMKT-245
- [ ] **LMKT-247** Implementar autenticação da API · P1 · M · Plataforma · depende de LMKT-246
- [ ] **LMKT-248** Implementar scopes · P1 · L · Plataforma · depende de LMKT-247
- [ ] **LMKT-257** Definir estratégia mobile · P0 · S · Produto e Engenharia
- [ ] **LMKT-258** Priorizar jornadas móveis · P1 · M · Produto e Engenharia · depende de LMKT-257
- [ ] **LMKT-259** Definir suporte offline · P1 · M · Produto e Engenharia · depende de LMKT-258
- [ ] **LMKT-260** Implementar layout mobile · P1 · L · Produto e Engenharia · depende de LMKT-259
- [ ] **LMKT-285** Localizar moedas e preços · P1 · S · Produto e Operações · depende de LMKT-284
- [ ] **LMKT-286** Criar glossário de produto · P2 · M · Produto e Operações · depende de LMKT-285
- [ ] **LMKT-287** Definir processo de tradução · P2 · L · Produto e Operações · depende de LMKT-286
- [ ] **LMKT-288** Revisar conteúdo crítico · P2 · M · Produto e Operações · depende de LMKT-287
- [ ] **LMKT-293** Definir política de conteúdo · P0 · S · Trust and Safety
- [ ] **LMKT-294** Criar taxonomia de violações · P1 · M · Trust and Safety · depende de LMKT-293
- [ ] **LMKT-295** Implementar denúncia · P1 · M · Trust and Safety · depende de LMKT-294
- [ ] **LMKT-296** Implementar bloqueio e silenciamento · P1 · L · Trust and Safety · depende de LMKT-295
- [ ] **LMKT-353** Cadastrar produtor · P1 · L · Marketplace

## F5 — Produto principal

**Janela:** Mês 5.8–7
**Gate:** Workflows essenciais atendem critérios funcionais e de domínio.

- [ ] **LMKT-059** Testar build reproduzível · P3 · L · Engenharia · depende de LMKT-058
- [ ] **LMKT-060** Aprovar fundação da plataforma · P0 · M · Engenharia · depende de LMKT-059
- [ ] **LMKT-089** Testar recuperação após incidente · P3 · L · Segurança e Engenharia · depende de LMKT-088
- [ ] **LMKT-090** Aprovar gate de segurança · P0 · M · Segurança e Engenharia · depende de LMKT-089
- [ ] **LMKT-103** Executar drill de backup e restore · P3 · M · Engenharia e QA · depende de LMKT-102
- [ ] **LMKT-104** Aprovar readiness técnico · P0 · L · Engenharia e QA · depende de LMKT-103
- [ ] **LMKT-129** Validar fluxo financeiro ponta a ponta · P0 · S · Financeiro e Engenharia · depende de LMKT-128
- [ ] **LMKT-130** Aprovar gate de monetização · P0 · L · Financeiro e Engenharia · depende de LMKT-129
- [ ] **LMKT-155** Definir processo de incidentes · P3 · M · Operações · depende de LMKT-154
- [ ] **LMKT-156** Criar runbook de manutenção · P3 · L · Operações · depende de LMKT-155
- [ ] **LMKT-157** Planejar continuidade do negócio · P3 · S · Operações · depende de LMKT-156
- [ ] **LMKT-158** Definir rotina de métricas · P3 · M · Operações · depende de LMKT-157
- [ ] **LMKT-177** Implementar trial e cupons · P1 · S · Financeiro e Engenharia · depende de LMKT-176
- [ ] **LMKT-178** Implementar portal do cliente · P2 · M · Financeiro e Engenharia · depende de LMKT-177
- [ ] **LMKT-179** Implementar entitlements server-side · P2 · L · Financeiro e Engenharia · depende de LMKT-178
- [ ] **LMKT-180** Validar assinatura de webhooks · P2 · M · Financeiro e Engenharia · depende de LMKT-179
- [ ] **LMKT-237** Implementar atualizações em tempo real · P1 · S · Engenharia · depende de LMKT-236
- [ ] **LMKT-238** Implementar edição colaborativa · P2 · M · Engenharia · depende de LMKT-237
- [ ] **LMKT-239** Persistir eventos relevantes · P2 · L · Engenharia · depende de LMKT-238
- [ ] **LMKT-240** Tratar reconexão · P2 · M · Engenharia · depende de LMKT-239
- [ ] **LMKT-249** Definir rate limits · P1 · S · Plataforma · depende de LMKT-248
- [ ] **LMKT-250** Criar idempotency keys · P2 · M · Plataforma · depende de LMKT-249
- [ ] **LMKT-251** Implementar webhooks assinados · P2 · L · Plataforma · depende de LMKT-250
- [ ] **LMKT-252** Implementar retry de webhooks · P2 · M · Plataforma · depende de LMKT-251
- [ ] **LMKT-261** Implementar navegação touch · P1 · S · Produto e Engenharia · depende de LMKT-260
- [ ] **LMKT-262** Configurar instalação PWA · P2 · M · Produto e Engenharia · depende de LMKT-261
- [ ] **LMKT-263** Implementar notificações push · P2 · L · Produto e Engenharia · depende de LMKT-262
- [ ] **LMKT-264** Tratar permissões do dispositivo · P2 · M · Produto e Engenharia · depende de LMKT-263
- [ ] **LMKT-289** Testar expansão de texto · P2 · S · Produto e Operações · depende de LMKT-288
- [ ] **LMKT-290** Testar direção e caracteres · P2 · L · Produto e Operações · depende de LMKT-289
- [ ] **LMKT-291** Executar QA por locale · P3 · M · Produto e Operações · depende de LMKT-290
- [ ] **LMKT-292** Aprovar lançamento internacional · P0 · XL · Produto e Operações · depende de LMKT-291
- [ ] **LMKT-297** Criar fila de moderação · P1 · S · Trust and Safety · depende de LMKT-296
- [ ] **LMKT-298** Definir níveis de enforcement · P2 · M · Trust and Safety · depende de LMKT-297
- [ ] **LMKT-299** Criar processo de apelação · P2 · L · Trust and Safety · depende de LMKT-298
- [ ] **LMKT-300** Detectar abuso coordenado · P2 · M · Trust and Safety · depende de LMKT-299
- [ ] **LMKT-341** Definir etapas do pipeline · P0 · S · Vendas e Sucesso do Cliente
- [ ] **LMKT-342** Definir critérios de qualificação · P1 · M · Vendas e Sucesso do Cliente · depende de LMKT-341
- [ ] **LMKT-343** Criar discovery comercial · P1 · M · Vendas e Sucesso do Cliente · depende de LMKT-342
- [ ] **LMKT-344** Criar demonstração repetível · P1 · L · Vendas e Sucesso do Cliente · depende de LMKT-343
- [ ] **LMKT-354** Publicar catálogo local · P1 · M · Marketplace · depende de LMKT-353

## F6 — Dados e integrações

**Janela:** Mês 7–8.2
**Gate:** Dados, jobs e integrações são auditáveis, resilientes e operáveis.

- [ ] **LMKT-159** Executar ensaio de lançamento · P3 · L · Operações · depende de LMKT-158
- [ ] **LMKT-160** Aprovar operação pós-lançamento · P0 · M · Operações · depende de LMKT-159
- [ ] **LMKT-181** Garantir idempotência financeira · P2 · S · Financeiro e Engenharia · depende de LMKT-180
- [ ] **LMKT-182** Implementar dunning · P2 · L · Financeiro e Engenharia · depende de LMKT-181
- [ ] **LMKT-183** Implementar reconciliação · P3 · M · Financeiro e Engenharia · depende de LMKT-182
- [ ] **LMKT-184** Aprovar checkout real · P0 · XL · Financeiro e Engenharia · depende de LMKT-183
- [ ] **LMKT-241** Aplicar autorização em canais · P2 · S · Engenharia · depende de LMKT-240
- [ ] **LMKT-242** Testar concorrência · P2 · L · Engenharia · depende de LMKT-241
- [ ] **LMKT-243** Medir latência percebida · P3 · M · Engenharia · depende de LMKT-242
- [ ] **LMKT-244** Aprovar colaboração realtime · P0 · XL · Engenharia · depende de LMKT-243
- [ ] **LMKT-253** Criar portal de documentação · P2 · S · Plataforma · depende de LMKT-252
- [ ] **LMKT-254** Criar sandbox de integração · P2 · L · Plataforma · depende de LMKT-253
- [ ] **LMKT-255** Monitorar consumo e erros · P3 · M · Plataforma · depende de LMKT-254
- [ ] **LMKT-256** Aprovar estabilidade da API · P0 · XL · Plataforma · depende de LMKT-255
- [ ] **LMKT-265** Otimizar redes lentas · P2 · S · Produto e Engenharia · depende de LMKT-264
- [ ] **LMKT-266** Testar dispositivos alvo · P2 · L · Produto e Engenharia · depende de LMKT-265
- [ ] **LMKT-267** Definir distribuição em lojas · P3 · M · Produto e Engenharia · depende de LMKT-266
- [ ] **LMKT-268** Aprovar experiência mobile · P0 · XL · Produto e Engenharia · depende de LMKT-267
- [ ] **LMKT-301** Proteger moderadores · P2 · S · Trust and Safety · depende de LMKT-300
- [ ] **LMKT-302** Registrar decisões de moderação · P2 · L · Trust and Safety · depende de LMKT-301
- [ ] **LMKT-303** Medir precisão e tempo de resposta · P3 · M · Trust and Safety · depende de LMKT-302
- [ ] **LMKT-304** Aprovar operação de trust and safety · P0 · XL · Trust and Safety · depende de LMKT-303
- [ ] **LMKT-329** Definir objetivo da comunidade · P0 · S · Growth e Comunidade
- [ ] **LMKT-330** Escolher canal comunitário · P1 · M · Growth e Comunidade · depende de LMKT-329
- [ ] **LMKT-331** Criar código de conduta · P1 · M · Growth e Comunidade · depende de LMKT-330
- [ ] **LMKT-332** Definir programa de embaixadores · P1 · L · Growth e Comunidade · depende de LMKT-331
- [ ] **LMKT-345** Definir proposta e aprovação · P1 · S · Vendas e Sucesso do Cliente · depende de LMKT-344
- [ ] **LMKT-346** Implementar CRM mínimo · P2 · M · Vendas e Sucesso do Cliente · depende de LMKT-345
- [ ] **LMKT-347** Criar handoff vendas para sucesso · P2 · L · Vendas e Sucesso do Cliente · depende de LMKT-346
- [ ] **LMKT-348** Criar onboarding assistido · P2 · M · Vendas e Sucesso do Cliente · depende de LMKT-347
- [ ] **LMKT-355** Gerenciar disponibilidade · P2 · M · Marketplace · depende de LMKT-354

## F7 — Monetização

**Janela:** Mês 8.2–9.3
**Gate:** Entitlements e fluxos financeiros reais são reconciliáveis.

- [ ] **LMKT-333** Projetar mecanismo de indicação · P1 · S · Growth e Comunidade · depende de LMKT-332
- [ ] **LMKT-334** Definir incentivo sustentável · P2 · M · Growth e Comunidade · depende de LMKT-333
- [ ] **LMKT-335** Implementar atribuição de referral · P2 · L · Growth e Comunidade · depende de LMKT-334
- [ ] **LMKT-336** Prevenir fraude de indicação · P2 · M · Growth e Comunidade · depende de LMKT-335
- [ ] **LMKT-349** Definir health score · P2 · S · Vendas e Sucesso do Cliente · depende de LMKT-348
- [ ] **LMKT-350** Criar playbook de risco de churn · P2 · L · Vendas e Sucesso do Cliente · depende de LMKT-349
- [ ] **LMKT-351** Criar processo de renovação · P3 · M · Vendas e Sucesso do Cliente · depende de LMKT-350
- [ ] **LMKT-352** Aprovar operação de receita · P0 · XL · Vendas e Sucesso do Cliente · depende de LMKT-351
- [ ] **LMKT-356** Criar pedido · P2 · L · Marketplace · depende de LMKT-355

## F8 — Qualidade e segurança

**Janela:** Mês 9.3–10.5
**Gate:** Testes, SLOs e controles proporcionais ao risco foram aprovados.

- [ ] **LMKT-337** Criar calendário de comunidade · P2 · S · Growth e Comunidade · depende de LMKT-336
- [ ] **LMKT-338** Medir participação qualificada · P2 · L · Growth e Comunidade · depende de LMKT-337
- [ ] **LMKT-339** Medir conversão por referral · P3 · M · Growth e Comunidade · depende de LMKT-338
- [ ] **LMKT-340** Aprovar escala comunitária · P0 · XL · Growth e Comunidade · depende de LMKT-339
- [ ] **LMKT-357** Confirmar pagamento · P2 · M · Marketplace · depende de LMKT-356
- [ ] **LMKT-358** Agendar retirada · P2 · M · Marketplace · depende de LMKT-357

## F9 — Alpha

**Janela:** Mês 10.5–11.7
**Gate:** Usuários controlados completam jornadas reais e os riscos críticos estão fechados.

- [ ] **LMKT-359** Confirmar entrega · P2 · L · Marketplace · depende de LMKT-358

## F10 — Beta

**Janela:** Mês 11.7–12.8
**Gate:** Uso real confirma valor, qualidade e suporte sustentável.

- [ ] **LMKT-360** Avaliar transação · P2 · M · Marketplace · depende de LMKT-359

## F11 — Lançamento e escala

**Janela:** Mês 12.8–14
**Gate:** Métricas de negócio e operação autorizam expansão gradual.


## Fora de escopo / N/A

- **LMKT-161** Definir tarefa exata da IA — Não faz parte do escopo confirmado desta fixture.
- **LMKT-162** Classificar riscos de automação — Não faz parte do escopo confirmado desta fixture.
- **LMKT-163** Definir política de provedores — Não faz parte do escopo confirmado desta fixture.
- **LMKT-164** Definir fronteira entre IA e regras — Não faz parte do escopo confirmado desta fixture.
- **LMKT-165** Criar contratos de entrada e saída — Não faz parte do escopo confirmado desta fixture.
- **LMKT-166** Criar dataset de avaliação — Não faz parte do escopo confirmado desta fixture.
- **LMKT-167** Implementar versionamento de prompts — Não faz parte do escopo confirmado desta fixture.
- **LMKT-168** Implementar revisão humana — Não faz parte do escopo confirmado desta fixture.
- **LMKT-169** Testar prompt injection — Não faz parte do escopo confirmado desta fixture.
- **LMKT-170** Definir fallback determinístico — Não faz parte do escopo confirmado desta fixture.
- **LMKT-171** Monitorar qualidade e custo — Não faz parte do escopo confirmado desta fixture.
- **LMKT-172** Aprovar gate de IA — Não faz parte do escopo confirmado desta fixture.
- **LMKT-209** Definir ICP enterprise — Não faz parte do escopo confirmado desta fixture.
- **LMKT-210** Mapear processo de procurement — Não faz parte do escopo confirmado desta fixture.
- **LMKT-211** Criar pacote de security review — Não faz parte do escopo confirmado desta fixture.
- **LMKT-212** Definir contratos enterprise — Não faz parte do escopo confirmado desta fixture.
- **LMKT-213** Implementar SSO — Não faz parte do escopo confirmado desta fixture.
- **LMKT-214** Implementar provisionamento de usuários — Não faz parte do escopo confirmado desta fixture.
- **LMKT-215** Criar controles administrativos — Não faz parte do escopo confirmado desta fixture.
- **LMKT-216** Definir data residency — Não faz parte do escopo confirmado desta fixture.
- **LMKT-217** Criar SLA comercial — Não faz parte do escopo confirmado desta fixture.
- **LMKT-218** Definir onboarding assistido — Não faz parte do escopo confirmado desta fixture.
- **LMKT-219** Preparar renovação e expansão — Não faz parte do escopo confirmado desta fixture.
- **LMKT-220** Aprovar readiness enterprise — Não faz parte do escopo confirmado desta fixture.
- **LMKT-221** Definir formatos aceitos — Não faz parte do escopo confirmado desta fixture.
- **LMKT-222** Definir limites de arquivo — Não faz parte do escopo confirmado desta fixture.
- **LMKT-223** Criar storage privado — Não faz parte do escopo confirmado desta fixture.
- **LMKT-224** Implementar upload resiliente — Não faz parte do escopo confirmado desta fixture.
- **LMKT-225** Validar MIME e extensão — Não faz parte do escopo confirmado desta fixture.
- **LMKT-226** Criar quarentena — Não faz parte do escopo confirmado desta fixture.
- **LMKT-227** Detectar arquivos maliciosos — Não faz parte do escopo confirmado desta fixture.
- **LMKT-228** Proteger contra zip bombs — Não faz parte do escopo confirmado desta fixture.
- **LMKT-229** Implementar processamento assíncrono — Não faz parte do escopo confirmado desta fixture.
- **LMKT-230** Criar retry e dead letter — Não faz parte do escopo confirmado desta fixture.
- **LMKT-231** Definir retenção e exclusão — Não faz parte do escopo confirmado desta fixture.
- **LMKT-232** Aprovar segurança de uploads — Não faz parte do escopo confirmado desta fixture.
- **LMKT-269** Classificar categorias reguladas — Não faz parte do escopo confirmado desta fixture.
- **LMKT-270** Definir base legal — Não faz parte do escopo confirmado desta fixture.
- **LMKT-271** Executar avaliação de impacto — Não faz parte do escopo confirmado desta fixture.
- **LMKT-272** Aplicar minimização de dados — Não faz parte do escopo confirmado desta fixture.
- **LMKT-273** Definir consentimento — Não faz parte do escopo confirmado desta fixture.
- **LMKT-274** Implementar trilha de auditoria reforçada — Não faz parte do escopo confirmado desta fixture.
- **LMKT-275** Definir residência dos dados — Não faz parte do escopo confirmado desta fixture.
- **LMKT-276** Implementar retenção por categoria — Não faz parte do escopo confirmado desta fixture.
- **LMKT-277** Criar processo de direitos do titular — Não faz parte do escopo confirmado desta fixture.
- **LMKT-278** Revisar subprocessadores — Não faz parte do escopo confirmado desta fixture.
- **LMKT-279** Executar auditoria independente — Não faz parte do escopo confirmado desta fixture.
- **LMKT-280** Aprovar gate regulatório — Não faz parte do escopo confirmado desta fixture.
- **LMKT-305** Inventariar fontes de dados — Não faz parte do escopo confirmado desta fixture.
- **LMKT-306** Definir mapeamento de campos — Não faz parte do escopo confirmado desta fixture.
- **LMKT-307** Criar contrato de importação — Não faz parte do escopo confirmado desta fixture.
- **LMKT-308** Implementar validação prévia — Não faz parte do escopo confirmado desta fixture.
- **LMKT-309** Implementar importação idempotente — Não faz parte do escopo confirmado desta fixture.
- **LMKT-310** Criar relatório de inconsistências — Não faz parte do escopo confirmado desta fixture.
- **LMKT-311** Preservar proveniência — Não faz parte do escopo confirmado desta fixture.
- **LMKT-312** Criar estratégia de rollback — Não faz parte do escopo confirmado desta fixture.
- **LMKT-313** Testar volumes representativos — Não faz parte do escopo confirmado desta fixture.
- **LMKT-314** Executar dry run — Não faz parte do escopo confirmado desta fixture.
- **LMKT-315** Reconciliar amostras migradas — Não faz parte do escopo confirmado desta fixture.
- **LMKT-316** Aprovar cutover — Não faz parte do escopo confirmado desta fixture.
- **LMKT-317** Definir persona desenvolvedora — Não faz parte do escopo confirmado desta fixture.
- **LMKT-318** Projetar quickstart — Não faz parte do escopo confirmado desta fixture.
- **LMKT-319** Definir convenções da API — Não faz parte do escopo confirmado desta fixture.
- **LMKT-320** Criar SDK inicial — Não faz parte do escopo confirmado desta fixture.
- **LMKT-321** Criar CLI inicial — Não faz parte do escopo confirmado desta fixture.
- **LMKT-322** Criar exemplos executáveis — Não faz parte do escopo confirmado desta fixture.
- **LMKT-323** Documentar erros e limites — Não faz parte do escopo confirmado desta fixture.
- **LMKT-324** Versionar changelog técnico — Não faz parte do escopo confirmado desta fixture.
- **LMKT-325** Criar ambiente de testes — Não faz parte do escopo confirmado desta fixture.
- **LMKT-326** Medir time to first success — Não faz parte do escopo confirmado desta fixture.
- **LMKT-327** Testar documentação sem ajuda — Não faz parte do escopo confirmado desta fixture.
- **LMKT-328** Aprovar developer experience — Não faz parte do escopo confirmado desta fixture.
