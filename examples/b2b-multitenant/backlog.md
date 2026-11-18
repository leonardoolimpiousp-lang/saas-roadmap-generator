# Ops Ledger — SaaS Roadmap

SaaS B2B multi-tenant para equipes operacionais registrarem procedimentos, evidências de execução, aprovações e auditorias internas.

**North Star:** Processos críticos concluídos com evidência e aprovação dentro do SLA.
**Horizonte:** 12 meses
**Tarefas ativas:** 264

## F0 — Descoberta e contexto

**Janela:** Início–mês 1.2
**Gate:** Problema, fontes e restrições estão documentados com hipóteses explícitas.

- [ ] **OPSL-001** Registrar visão e resultado desejado · P0 · S · Produto
- [ ] **OPSL-002** Definir ICP primário · P1 · M · Produto · depende de OPSL-001
- [ ] **OPSL-003** Definir comprador e usuário · P1 · M · Produto · depende de OPSL-002
- [ ] **OPSL-004** Documentar problema prioritário · P1 · L · Produto · depende de OPSL-003

## F1 — Estratégia e validação

**Janela:** Mês 1.2–2.4
**Gate:** ICP, JTBD, posicionamento e critérios de validação foram aprovados.

- [ ] **OPSL-005** Mapear alternativas atuais · P1 · S · Produto · depende de OPSL-004
- [ ] **OPSL-006** Formalizar job to be done · P2 · M · Produto · depende de OPSL-005
- [ ] **OPSL-007** Definir proposta de valor · P2 · L · Produto · depende de OPSL-006
- [ ] **OPSL-008** Registrar hipóteses críticas · P2 · M · Produto · depende de OPSL-007
- [ ] **OPSL-009** Planejar entrevistas de problema · P2 · S · Produto · depende de OPSL-008
- [ ] **OPSL-010** Executar entrevistas de problema · P2 · L · Produto · depende de OPSL-009
- [ ] **OPSL-011** Sintetizar evidências de discovery · P3 · M · Produto · depende de OPSL-010
- [ ] **OPSL-012** Definir critérios de validação · P3 · XL · Produto · depende de OPSL-011
- [ ] **OPSL-017** Criar plano contínuo de pesquisa · P0 · S · Produto e Design
- [ ] **OPSL-018** Definir perfis comportamentais · P1 · M · Produto e Design · depende de OPSL-017
- [ ] **OPSL-019** Mapear jornada atual · P1 · M · Produto e Design · depende de OPSL-018
- [ ] **OPSL-020** Mapear jornada desejada · P1 · L · Produto e Design · depende de OPSL-019
- [ ] **OPSL-021** Inventariar pontos de fricção · P1 · S · Produto e Design · depende de OPSL-020
- [ ] **OPSL-022** Definir princípios de experiência · P2 · M · Produto e Design · depende de OPSL-021
- [ ] **OPSL-023** Criar arquitetura da informação · P2 · L · Produto e Design · depende de OPSL-022
- [ ] **OPSL-024** Prototipar fluxo de ativação · P2 · M · Produto e Design · depende de OPSL-023
- [ ] **OPSL-031** Definir arquitetura do frontend · P0 · S · Engenharia
- [ ] **OPSL-032** Configurar padrões de componentes · P1 · M · Engenharia · depende de OPSL-031
- [ ] **OPSL-033** Criar shell responsivo da aplicação · P1 · M · Engenharia · depende de OPSL-032
- [ ] **OPSL-034** Implementar navegação autenticada · P1 · L · Engenharia · depende de OPSL-033
- [ ] **OPSL-043** Registrar decisão arquitetural inicial · P0 · S · Engenharia
- [ ] **OPSL-044** Definir contextos do domínio · P1 · M · Engenharia · depende de OPSL-043
- [ ] **OPSL-045** Definir ambientes de desenvolvimento · P1 · M · Engenharia · depende de OPSL-044
- [ ] **OPSL-046** Configurar integração contínua · P1 · L · Engenharia · depende de OPSL-045
- [ ] **OPSL-061** Definir modelo conceitual de dados · P0 · S · Produto e Dados
- [ ] **OPSL-062** Criar dicionário de eventos · P1 · M · Produto e Dados · depende de OPSL-061
- [ ] **OPSL-063** Definir propriedade dos dados · P1 · M · Produto e Dados · depende de OPSL-062
- [ ] **OPSL-064** Implementar analytics de ativação · P1 · L · Produto e Dados · depende de OPSL-063
- [ ] **OPSL-073** Classificar dados processados · P0 · S · Segurança e Engenharia
- [ ] **OPSL-074** Criar threat model inicial · P1 · M · Segurança e Engenharia · depende de OPSL-073
- [ ] **OPSL-075** Definir fronteiras de confiança · P1 · M · Segurança e Engenharia · depende de OPSL-074
- [ ] **OPSL-076** Implementar gestão segura de segredos · P1 · L · Segurança e Engenharia · depende de OPSL-075
- [ ] **OPSL-105** Definir narrativa comercial · P0 · S · Growth e Produto
- [ ] **OPSL-106** Criar hipótese de pricing · P1 · M · Growth e Produto · depende de OPSL-105
- [ ] **OPSL-107** Testar disposição a pagar · P1 · M · Growth e Produto · depende de OPSL-106
- [ ] **OPSL-108** Definir evento de ativação · P1 · L · Growth e Produto · depende de OPSL-107
- [ ] **OPSL-109** Desenhar onboarding comercial · P1 · S · Growth e Produto · depende de OPSL-108
- [ ] **OPSL-110** Criar landing page inicial · P2 · M · Growth e Produto · depende de OPSL-109
- [ ] **OPSL-111** Configurar analytics de aquisição · P2 · L · Growth e Produto · depende de OPSL-110
- [ ] **OPSL-112** Definir canal de aquisição primário · P2 · M · Growth e Produto · depende de OPSL-111
- [ ] **OPSL-131** Inventariar obrigações legais · P0 · S · Jurídico e Operações
- [ ] **OPSL-132** Definir titularidade da propriedade intelectual · P1 · M · Jurídico e Operações · depende de OPSL-131
- [ ] **OPSL-133** Criar ledger de componentes terceiros · P1 · M · Jurídico e Operações · depende de OPSL-132
- [ ] **OPSL-134** Definir termos de uso · P1 · L · Jurídico e Operações · depende de OPSL-133

## F2 — Arquitetura

**Janela:** Mês 2.4–3.6
**Gate:** Decisões estruturais, riscos e contratos técnicos foram revisados.

- [ ] **OPSL-013** Priorizar jornada principal · P3 · M · Produto · depende de OPSL-012
- [ ] **OPSL-014** Definir fronteiras do MVP · P3 · L · Produto · depende de OPSL-013
- [ ] **OPSL-015** Criar mapa de outcomes · P3 · S · Produto · depende de OPSL-014
- [ ] **OPSL-016** Aprovar estratégia inicial do produto · P0 · M · Produto · depende de OPSL-015
- [ ] **OPSL-025** Testar protótipo sem orientação · P2 · S · Produto e Design · depende de OPSL-024
- [ ] **OPSL-026** Registrar decisões de usabilidade · P2 · L · Produto e Design · depende de OPSL-025
- [ ] **OPSL-027** Definir padrão de conteúdo · P3 · M · Produto e Design · depende de OPSL-026
- [ ] **OPSL-028** Definir requisitos de acessibilidade · P3 · XL · Produto e Design · depende de OPSL-027
- [ ] **OPSL-035** Criar estados de loading e empty · P1 · S · Engenharia · depende de OPSL-034
- [ ] **OPSL-036** Criar padrão de tratamento de erros · P2 · M · Engenharia · depende de OPSL-035
- [ ] **OPSL-037** Implementar formulários acessíveis · P2 · L · Engenharia · depende de OPSL-036
- [ ] **OPSL-038** Configurar estratégia de cache no cliente · P2 · M · Engenharia · depende de OPSL-037
- [ ] **OPSL-047** Configurar preview por mudança · P1 · S · Engenharia · depende de OPSL-046
- [ ] **OPSL-048** Configurar produção protegida · P2 · M · Engenharia · depende de OPSL-047
- [ ] **OPSL-049** Definir estratégia de configuração · P2 · L · Engenharia · depende de OPSL-048
- [ ] **OPSL-050** Implementar autenticação base · P2 · M · Engenharia · depende de OPSL-049
- [ ] **OPSL-065** Implementar analytics de retenção · P1 · S · Produto e Dados · depende de OPSL-064
- [ ] **OPSL-066** Definir qualidade mínima dos eventos · P2 · M · Produto e Dados · depende de OPSL-065
- [ ] **OPSL-067** Criar validação de payloads analíticos · P2 · L · Produto e Dados · depende de OPSL-066
- [ ] **OPSL-068** Definir política de retenção · P2 · M · Produto e Dados · depende de OPSL-067
- [ ] **OPSL-077** Aplicar princípio de menor privilégio · P1 · S · Segurança e Engenharia · depende de OPSL-076
- [ ] **OPSL-078** Definir política de sessões · P2 · M · Segurança e Engenharia · depende de OPSL-077
- [ ] **OPSL-079** Implementar proteção contra abuso · P2 · L · Segurança e Engenharia · depende de OPSL-078
- [ ] **OPSL-080** Configurar headers de segurança · P2 · M · Segurança e Engenharia · depende de OPSL-079
- [ ] **OPSL-091** Definir estratégia de testes · P0 · S · Engenharia e QA
- [ ] **OPSL-092** Criar pirâmide de testes · P1 · M · Engenharia e QA · depende de OPSL-091
- [ ] **OPSL-093** Configurar testes unitários · P1 · M · Engenharia e QA · depende de OPSL-092
- [ ] **OPSL-094** Configurar testes de integração · P1 · L · Engenharia e QA · depende de OPSL-093
- [ ] **OPSL-113** Criar experimento de demanda · P2 · S · Growth e Produto · depende de OPSL-112
- [ ] **OPSL-114** Definir processo de coleta de feedback · P2 · L · Growth e Produto · depende de OPSL-113
- [ ] **OPSL-115** Criar estratégia de conteúdo · P3 · M · Growth e Produto · depende de OPSL-114
- [ ] **OPSL-116** Definir comunicação de lançamento · P3 · XL · Growth e Produto · depende de OPSL-115
- [ ] **OPSL-135** Definir política de privacidade · P1 · S · Jurídico e Operações · depende de OPSL-134
- [ ] **OPSL-136** Definir política de cookies · P2 · M · Jurídico e Operações · depende de OPSL-135
- [ ] **OPSL-137** Mapear subprocessadores · P2 · L · Jurídico e Operações · depende de OPSL-136
- [ ] **OPSL-138** Definir processo de solicitação de titular · P2 · M · Jurídico e Operações · depende de OPSL-137
- [ ] **OPSL-143** Definir modelo operacional · P0 · S · Operações
- [ ] **OPSL-144** Criar RACI da equipe · P1 · M · Operações · depende de OPSL-143
- [ ] **OPSL-145** Definir definition of ready · P1 · M · Operações · depende de OPSL-144
- [ ] **OPSL-146** Definir definition of done · P1 · L · Operações · depende de OPSL-145
- [ ] **OPSL-197** Modelar workspace e membership · P0 · S · Engenharia e Segurança
- [ ] **OPSL-198** Definir papéis canônicos · P1 · M · Engenharia e Segurança · depende de OPSL-197
- [ ] **OPSL-199** Criar matriz de permissões · P1 · M · Engenharia e Segurança · depende de OPSL-198
- [ ] **OPSL-200** Implementar convites · P1 · L · Engenharia e Segurança · depende de OPSL-199

## F3 — Fundação

**Janela:** Mês 3.6–4.8
**Gate:** Ambientes, identidade, dados, segurança e CI suportam desenvolvimento seguro.

- [ ] **OPSL-029** Criar design tokens iniciais · P3 · M · Produto e Design · depende de OPSL-028
- [ ] **OPSL-030** Aprovar experiência da fatia vertical · P0 · L · Produto e Design · depende de OPSL-029
- [ ] **OPSL-039** Criar política de compatibilidade de navegadores · P2 · S · Engenharia · depende de OPSL-038
- [ ] **OPSL-040** Configurar testes visuais · P2 · L · Engenharia · depende de OPSL-039
- [ ] **OPSL-041** Definir orçamento de performance · P3 · M · Engenharia · depende de OPSL-040
- [ ] **OPSL-042** Validar frontend da fatia vertical · P3 · XL · Engenharia · depende de OPSL-041
- [ ] **OPSL-051** Implementar autorização server-side · P2 · S · Engenharia · depende de OPSL-050
- [ ] **OPSL-052** Criar modelo de tenancy · P2 · L · Engenharia · depende de OPSL-051
- [ ] **OPSL-053** Definir contratos de aplicação · P3 · M · Engenharia · depende de OPSL-052
- [ ] **OPSL-054** Criar camada de persistência · P3 · XL · Engenharia · depende de OPSL-053
- [ ] **OPSL-055** Definir processamento assíncrono · P3 · M · Engenharia · depende de OPSL-054
- [ ] **OPSL-056** Criar trilha de auditoria · P3 · L · Engenharia · depende de OPSL-055
- [ ] **OPSL-057** Configurar feature flags · P3 · S · Engenharia · depende de OPSL-056
- [ ] **OPSL-058** Documentar rollback · P3 · M · Engenharia · depende de OPSL-057
- [ ] **OPSL-069** Criar dashboard operacional · P2 · S · Produto e Dados · depende de OPSL-068
- [ ] **OPSL-070** Criar dashboard de produto · P2 · L · Produto e Dados · depende de OPSL-069
- [ ] **OPSL-071** Auditar consistência das métricas · P3 · M · Produto e Dados · depende de OPSL-070
- [ ] **OPSL-072** Aprovar baseline de dados · P0 · XL · Produto e Dados · depende de OPSL-071
- [ ] **OPSL-081** Validar isolamento entre tenants · P2 · S · Segurança e Engenharia · depende de OPSL-080
- [ ] **OPSL-082** Criar logging de ações sensíveis · P2 · L · Segurança e Engenharia · depende de OPSL-081
- [ ] **OPSL-083** Definir resposta a incidentes · P3 · M · Segurança e Engenharia · depende de OPSL-082
- [ ] **OPSL-084** Configurar secret scanning · P3 · XL · Segurança e Engenharia · depende de OPSL-083
- [ ] **OPSL-085** Configurar dependency scanning · P3 · M · Segurança e Engenharia · depende de OPSL-084
- [ ] **OPSL-086** Executar revisão de autenticação · P3 · L · Segurança e Engenharia · depende de OPSL-085
- [ ] **OPSL-087** Executar revisão de autorização · P3 · S · Segurança e Engenharia · depende de OPSL-086
- [ ] **OPSL-088** Planejar pentest proporcional ao risco · P3 · M · Segurança e Engenharia · depende de OPSL-087
- [ ] **OPSL-095** Configurar testes end to end · P1 · S · Engenharia e QA · depende de OPSL-094
- [ ] **OPSL-096** Definir testes de contrato · P2 · M · Engenharia e QA · depende de OPSL-095
- [ ] **OPSL-097** Criar fixtures representativas · P2 · L · Engenharia e QA · depende de OPSL-096
- [ ] **OPSL-098** Definir SLOs iniciais · P2 · M · Engenharia e QA · depende de OPSL-097
- [ ] **OPSL-099** Configurar error tracking · P2 · S · Engenharia e QA · depende de OPSL-098
- [ ] **OPSL-100** Configurar logs estruturados · P2 · L · Engenharia e QA · depende de OPSL-099
- [ ] **OPSL-101** Criar alertas acionáveis · P3 · M · Engenharia e QA · depende de OPSL-100
- [ ] **OPSL-102** Executar teste de carga inicial · P3 · XL · Engenharia e QA · depende de OPSL-101
- [ ] **OPSL-117** Criar programa de early adopters · P3 · M · Growth e Produto · depende de OPSL-116
- [ ] **OPSL-118** Medir conversão por etapa · P3 · L · Growth e Produto · depende de OPSL-117
- [ ] **OPSL-119** Revisar pricing com evidências · P3 · S · Growth e Produto · depende de OPSL-118
- [ ] **OPSL-120** Aprovar plano de go to market · P0 · M · Growth e Produto · depende de OPSL-119
- [ ] **OPSL-121** Definir política de planos · P0 · S · Financeiro e Engenharia
- [ ] **OPSL-122** Definir matriz de entitlements · P1 · M · Financeiro e Engenharia · depende de OPSL-121
- [ ] **OPSL-123** Mapear eventos financeiros · P1 · M · Financeiro e Engenharia · depende de OPSL-122
- [ ] **OPSL-124** Definir política de cancelamento · P1 · L · Financeiro e Engenharia · depende de OPSL-123
- [ ] **OPSL-125** Definir tratamento de falhas de pagamento · P1 · S · Financeiro e Engenharia · depende de OPSL-124
- [ ] **OPSL-126** Definir reconciliação financeira · P2 · M · Financeiro e Engenharia · depende de OPSL-125
- [ ] **OPSL-127** Criar projeção de custos unitários · P2 · L · Financeiro e Engenharia · depende de OPSL-126
- [ ] **OPSL-128** Definir controles contra abuso de plano · P2 · M · Financeiro e Engenharia · depende de OPSL-127
- [ ] **OPSL-139** Revisar claims comerciais · P2 · S · Jurídico e Operações · depende de OPSL-138
- [ ] **OPSL-140** Definir política de retenção legal · P2 · L · Jurídico e Operações · depende de OPSL-139
- [ ] **OPSL-141** Preparar documentação de lançamento · P3 · M · Jurídico e Operações · depende de OPSL-140
- [ ] **OPSL-142** Aprovar gate jurídico · P0 · XL · Jurídico e Operações · depende de OPSL-141
- [ ] **OPSL-147** Configurar gestão de backlog · P1 · S · Operações · depende de OPSL-146
- [ ] **OPSL-148** Definir fluxo de branches e revisão · P2 · M · Operações · depende de OPSL-147
- [ ] **OPSL-149** Criar playbook de release · P2 · L · Operações · depende de OPSL-148
- [ ] **OPSL-150** Criar changelog · P2 · M · Operações · depende de OPSL-149
- [ ] **OPSL-151** Definir canais de suporte · P2 · S · Operações · depende de OPSL-150
- [ ] **OPSL-152** Criar taxonomia de tickets · P2 · L · Operações · depende de OPSL-151
- [ ] **OPSL-153** Definir SLA interno · P3 · M · Operações · depende de OPSL-152
- [ ] **OPSL-154** Criar base de conhecimento · P3 · XL · Operações · depende de OPSL-153
- [ ] **OPSL-173** Escolher provedor de billing · P0 · S · Financeiro e Engenharia
- [ ] **OPSL-174** Modelar produtos e preços · P1 · M · Financeiro e Engenharia · depende de OPSL-173
- [ ] **OPSL-175** Implementar checkout · P1 · M · Financeiro e Engenharia · depende de OPSL-174
- [ ] **OPSL-176** Implementar assinatura mensal e anual · P1 · L · Financeiro e Engenharia · depende de OPSL-175
- [ ] **OPSL-201** Implementar troca de workspace · P1 · S · Engenharia e Segurança · depende de OPSL-200
- [ ] **OPSL-202** Aplicar isolamento no banco · P2 · M · Engenharia e Segurança · depende de OPSL-201
- [ ] **OPSL-203** Aplicar autorização no servidor · P2 · L · Engenharia e Segurança · depende de OPSL-202
- [ ] **OPSL-204** Controlar administração do workspace · P2 · M · Engenharia e Segurança · depende de OPSL-203
- [ ] **OPSL-205** Registrar mudanças de acesso · P2 · S · Engenharia e Segurança · depende de OPSL-204
- [ ] **OPSL-206** Testar escalada de privilégio · P2 · L · Engenharia e Segurança · depende de OPSL-205
- [ ] **OPSL-207** Testar acesso cross-tenant · P3 · M · Engenharia e Segurança · depende de OPSL-206
- [ ] **OPSL-208** Aprovar gate de tenancy · P0 · XL · Engenharia e Segurança · depende de OPSL-207
- [ ] **OPSL-233** Definir casos de uso realtime · P0 · S · Engenharia
- [ ] **OPSL-234** Escolher modelo de sincronização · P1 · M · Engenharia · depende de OPSL-233
- [ ] **OPSL-235** Definir resolução de conflitos · P1 · M · Engenharia · depende de OPSL-234
- [ ] **OPSL-236** Implementar presença · P1 · L · Engenharia · depende de OPSL-235
- [ ] **OPSL-245** Definir casos de uso da API · P0 · S · Plataforma
- [ ] **OPSL-246** Versionar contratos públicos · P1 · M · Plataforma · depende de OPSL-245
- [ ] **OPSL-247** Implementar autenticação da API · P1 · M · Plataforma · depende de OPSL-246
- [ ] **OPSL-248** Implementar scopes · P1 · L · Plataforma · depende de OPSL-247
- [ ] **OPSL-281** Definir idiomas suportados · P0 · S · Produto e Operações
- [ ] **OPSL-282** Escolher idioma canônico · P1 · M · Produto e Operações · depende de OPSL-281
- [ ] **OPSL-283** Externalizar strings · P1 · M · Produto e Operações · depende de OPSL-282
- [ ] **OPSL-284** Localizar datas e números · P1 · L · Produto e Operações · depende de OPSL-283
- [ ] **OPSL-285** Localizar moedas e preços · P1 · S · Produto e Operações · depende de OPSL-284
- [ ] **OPSL-286** Criar glossário de produto · P2 · M · Produto e Operações · depende de OPSL-285
- [ ] **OPSL-287** Definir processo de tradução · P2 · L · Produto e Operações · depende de OPSL-286
- [ ] **OPSL-288** Revisar conteúdo crítico · P2 · M · Produto e Operações · depende de OPSL-287
- [ ] **OPSL-305** Inventariar fontes de dados · P0 · S · Dados e Engenharia
- [ ] **OPSL-306** Definir mapeamento de campos · P1 · M · Dados e Engenharia · depende de OPSL-305
- [ ] **OPSL-307** Criar contrato de importação · P1 · M · Dados e Engenharia · depende de OPSL-306
- [ ] **OPSL-308** Implementar validação prévia · P1 · L · Dados e Engenharia · depende de OPSL-307
- [ ] **OPSL-309** Implementar importação idempotente · P1 · S · Dados e Engenharia · depende de OPSL-308
- [ ] **OPSL-310** Criar relatório de inconsistências · P2 · M · Dados e Engenharia · depende de OPSL-309
- [ ] **OPSL-311** Preservar proveniência · P2 · L · Dados e Engenharia · depende de OPSL-310
- [ ] **OPSL-312** Criar estratégia de rollback · P2 · M · Dados e Engenharia · depende de OPSL-311
- [ ] **OPSL-353** Modelar procedimento controlado · P1 · L · Produto

## F4 — Produto principal

**Janela:** Mês 4.8–6
**Gate:** Workflows essenciais atendem critérios funcionais e de domínio.

- [ ] **OPSL-059** Testar build reproduzível · P3 · L · Engenharia · depende de OPSL-058
- [ ] **OPSL-060** Aprovar fundação da plataforma · P0 · M · Engenharia · depende de OPSL-059
- [ ] **OPSL-089** Testar recuperação após incidente · P3 · L · Segurança e Engenharia · depende de OPSL-088
- [ ] **OPSL-090** Aprovar gate de segurança · P0 · M · Segurança e Engenharia · depende de OPSL-089
- [ ] **OPSL-103** Executar drill de backup e restore · P3 · M · Engenharia e QA · depende de OPSL-102
- [ ] **OPSL-104** Aprovar readiness técnico · P0 · L · Engenharia e QA · depende de OPSL-103
- [ ] **OPSL-129** Validar fluxo financeiro ponta a ponta · P0 · S · Financeiro e Engenharia · depende de OPSL-128
- [ ] **OPSL-130** Aprovar gate de monetização · P0 · L · Financeiro e Engenharia · depende de OPSL-129
- [ ] **OPSL-155** Definir processo de incidentes · P3 · M · Operações · depende de OPSL-154
- [ ] **OPSL-156** Criar runbook de manutenção · P3 · L · Operações · depende de OPSL-155
- [ ] **OPSL-157** Planejar continuidade do negócio · P3 · S · Operações · depende de OPSL-156
- [ ] **OPSL-158** Definir rotina de métricas · P3 · M · Operações · depende de OPSL-157
- [ ] **OPSL-177** Implementar trial e cupons · P1 · S · Financeiro e Engenharia · depende de OPSL-176
- [ ] **OPSL-178** Implementar portal do cliente · P2 · M · Financeiro e Engenharia · depende de OPSL-177
- [ ] **OPSL-179** Implementar entitlements server-side · P2 · L · Financeiro e Engenharia · depende de OPSL-178
- [ ] **OPSL-180** Validar assinatura de webhooks · P2 · M · Financeiro e Engenharia · depende de OPSL-179
- [ ] **OPSL-209** Definir ICP enterprise · P0 · S · Comercial e Segurança
- [ ] **OPSL-210** Mapear processo de procurement · P1 · M · Comercial e Segurança · depende de OPSL-209
- [ ] **OPSL-211** Criar pacote de security review · P1 · M · Comercial e Segurança · depende de OPSL-210
- [ ] **OPSL-212** Definir contratos enterprise · P1 · L · Comercial e Segurança · depende de OPSL-211
- [ ] **OPSL-237** Implementar atualizações em tempo real · P1 · S · Engenharia · depende de OPSL-236
- [ ] **OPSL-238** Implementar edição colaborativa · P2 · M · Engenharia · depende de OPSL-237
- [ ] **OPSL-239** Persistir eventos relevantes · P2 · L · Engenharia · depende de OPSL-238
- [ ] **OPSL-240** Tratar reconexão · P2 · M · Engenharia · depende de OPSL-239
- [ ] **OPSL-249** Definir rate limits · P1 · S · Plataforma · depende de OPSL-248
- [ ] **OPSL-250** Criar idempotency keys · P2 · M · Plataforma · depende de OPSL-249
- [ ] **OPSL-251** Implementar webhooks assinados · P2 · L · Plataforma · depende de OPSL-250
- [ ] **OPSL-252** Implementar retry de webhooks · P2 · M · Plataforma · depende de OPSL-251
- [ ] **OPSL-289** Testar expansão de texto · P2 · S · Produto e Operações · depende de OPSL-288
- [ ] **OPSL-290** Testar direção e caracteres · P2 · L · Produto e Operações · depende de OPSL-289
- [ ] **OPSL-291** Executar QA por locale · P3 · M · Produto e Operações · depende de OPSL-290
- [ ] **OPSL-292** Aprovar lançamento internacional · P0 · XL · Produto e Operações · depende de OPSL-291
- [ ] **OPSL-313** Testar volumes representativos · P2 · S · Dados e Engenharia · depende de OPSL-312
- [ ] **OPSL-314** Executar dry run · P2 · L · Dados e Engenharia · depende de OPSL-313
- [ ] **OPSL-315** Reconciliar amostras migradas · P3 · M · Dados e Engenharia · depende de OPSL-314
- [ ] **OPSL-316** Aprovar cutover · P0 · XL · Dados e Engenharia · depende de OPSL-315
- [ ] **OPSL-341** Definir etapas do pipeline · P0 · S · Vendas e Sucesso do Cliente
- [ ] **OPSL-342** Definir critérios de qualificação · P1 · M · Vendas e Sucesso do Cliente · depende de OPSL-341
- [ ] **OPSL-343** Criar discovery comercial · P1 · M · Vendas e Sucesso do Cliente · depende de OPSL-342
- [ ] **OPSL-344** Criar demonstração repetível · P1 · L · Vendas e Sucesso do Cliente · depende de OPSL-343
- [ ] **OPSL-354** Versionar procedimento · P1 · M · Produto · depende de OPSL-353

## F5 — Dados e integrações

**Janela:** Mês 6–7.2
**Gate:** Dados, jobs e integrações são auditáveis, resilientes e operáveis.

- [ ] **OPSL-159** Executar ensaio de lançamento · P3 · L · Operações · depende de OPSL-158
- [ ] **OPSL-160** Aprovar operação pós-lançamento · P0 · M · Operações · depende de OPSL-159
- [ ] **OPSL-181** Garantir idempotência financeira · P2 · S · Financeiro e Engenharia · depende de OPSL-180
- [ ] **OPSL-182** Implementar dunning · P2 · L · Financeiro e Engenharia · depende de OPSL-181
- [ ] **OPSL-183** Implementar reconciliação · P3 · M · Financeiro e Engenharia · depende de OPSL-182
- [ ] **OPSL-184** Aprovar checkout real · P0 · XL · Financeiro e Engenharia · depende de OPSL-183
- [ ] **OPSL-213** Implementar SSO · P1 · S · Comercial e Segurança · depende de OPSL-212
- [ ] **OPSL-214** Implementar provisionamento de usuários · P2 · M · Comercial e Segurança · depende de OPSL-213
- [ ] **OPSL-215** Criar controles administrativos · P2 · L · Comercial e Segurança · depende de OPSL-214
- [ ] **OPSL-216** Definir data residency · P2 · M · Comercial e Segurança · depende de OPSL-215
- [ ] **OPSL-241** Aplicar autorização em canais · P2 · S · Engenharia · depende de OPSL-240
- [ ] **OPSL-242** Testar concorrência · P2 · L · Engenharia · depende de OPSL-241
- [ ] **OPSL-243** Medir latência percebida · P3 · M · Engenharia · depende de OPSL-242
- [ ] **OPSL-244** Aprovar colaboração realtime · P0 · XL · Engenharia · depende de OPSL-243
- [ ] **OPSL-253** Criar portal de documentação · P2 · S · Plataforma · depende de OPSL-252
- [ ] **OPSL-254** Criar sandbox de integração · P2 · L · Plataforma · depende de OPSL-253
- [ ] **OPSL-255** Monitorar consumo e erros · P3 · M · Plataforma · depende de OPSL-254
- [ ] **OPSL-256** Aprovar estabilidade da API · P0 · XL · Plataforma · depende de OPSL-255
- [ ] **OPSL-345** Definir proposta e aprovação · P1 · S · Vendas e Sucesso do Cliente · depende de OPSL-344
- [ ] **OPSL-346** Implementar CRM mínimo · P2 · M · Vendas e Sucesso do Cliente · depende de OPSL-345
- [ ] **OPSL-347** Criar handoff vendas para sucesso · P2 · L · Vendas e Sucesso do Cliente · depende de OPSL-346
- [ ] **OPSL-348** Criar onboarding assistido · P2 · M · Vendas e Sucesso do Cliente · depende de OPSL-347
- [ ] **OPSL-355** Executar checklist operacional · P2 · M · Produto · depende de OPSL-354

## F6 — Qualidade e segurança

**Janela:** Mês 7.2–8.4
**Gate:** Testes, SLOs e controles proporcionais ao risco foram aprovados.

- [ ] **OPSL-217** Criar SLA comercial · P2 · S · Comercial e Segurança · depende de OPSL-216
- [ ] **OPSL-218** Definir onboarding assistido · P2 · L · Comercial e Segurança · depende de OPSL-217
- [ ] **OPSL-219** Preparar renovação e expansão · P3 · M · Comercial e Segurança · depende de OPSL-218
- [ ] **OPSL-220** Aprovar readiness enterprise · P0 · XL · Comercial e Segurança · depende de OPSL-219
- [ ] **OPSL-349** Definir health score · P2 · S · Vendas e Sucesso do Cliente · depende de OPSL-348
- [ ] **OPSL-350** Criar playbook de risco de churn · P2 · L · Vendas e Sucesso do Cliente · depende de OPSL-349
- [ ] **OPSL-351** Criar processo de renovação · P3 · M · Vendas e Sucesso do Cliente · depende de OPSL-350
- [ ] **OPSL-352** Aprovar operação de receita · P0 · XL · Vendas e Sucesso do Cliente · depende de OPSL-351
- [ ] **OPSL-356** Anexar evidência · P2 · L · Produto · depende de OPSL-355
- [ ] **OPSL-357** Solicitar aprovação · P2 · M · Produto · depende de OPSL-356

## F7 — Prontidão de lançamento

**Janela:** Mês 8.4–9.6
**Gate:** Operação, suporte, jurídico e go-to-market estão prontos.

- [ ] **OPSL-358** Registrar não conformidade · P2 · M · Produto · depende de OPSL-357

## F8 — Beta

**Janela:** Mês 9.6–10.8
**Gate:** Uso real confirma valor, qualidade e suporte sustentável.

- [ ] **OPSL-359** Gerar trilha de auditoria · P2 · L · Produto · depende de OPSL-358
- [ ] **OPSL-360** Exportar pacote de auditoria · P2 · M · Produto · depende de OPSL-359

## F9 — Lançamento e escala

**Janela:** Mês 10.8–12
**Gate:** Métricas de negócio e operação autorizam expansão gradual.


## Fora de escopo / N/A

- **OPSL-161** Definir tarefa exata da IA — Não faz parte do escopo confirmado desta fixture.
- **OPSL-162** Classificar riscos de automação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-163** Definir política de provedores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-164** Definir fronteira entre IA e regras — Não faz parte do escopo confirmado desta fixture.
- **OPSL-165** Criar contratos de entrada e saída — Não faz parte do escopo confirmado desta fixture.
- **OPSL-166** Criar dataset de avaliação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-167** Implementar versionamento de prompts — Não faz parte do escopo confirmado desta fixture.
- **OPSL-168** Implementar revisão humana — Não faz parte do escopo confirmado desta fixture.
- **OPSL-169** Testar prompt injection — Não faz parte do escopo confirmado desta fixture.
- **OPSL-170** Definir fallback determinístico — Não faz parte do escopo confirmado desta fixture.
- **OPSL-171** Monitorar qualidade e custo — Não faz parte do escopo confirmado desta fixture.
- **OPSL-172** Aprovar gate de IA — Não faz parte do escopo confirmado desta fixture.
- **OPSL-185** Definir lados do marketplace — Não faz parte do escopo confirmado desta fixture.
- **OPSL-186** Definir unidade de liquidez — Não faz parte do escopo confirmado desta fixture.
- **OPSL-187** Modelar oferta e demanda — Não faz parte do escopo confirmado desta fixture.
- **OPSL-188** Definir regras de matching — Não faz parte do escopo confirmado desta fixture.
- **OPSL-189** Criar onboarding de fornecedores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-190** Criar onboarding de compradores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-191** Implementar descoberta e filtros — Não faz parte do escopo confirmado desta fixture.
- **OPSL-192** Implementar confiança e reputação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-193** Definir disputa e reembolso — Não faz parte do escopo confirmado desta fixture.
- **OPSL-194** Implementar split ou repasse — Não faz parte do escopo confirmado desta fixture.
- **OPSL-195** Medir liquidez — Não faz parte do escopo confirmado desta fixture.
- **OPSL-196** Aprovar operação do marketplace — Não faz parte do escopo confirmado desta fixture.
- **OPSL-221** Definir formatos aceitos — Não faz parte do escopo confirmado desta fixture.
- **OPSL-222** Definir limites de arquivo — Não faz parte do escopo confirmado desta fixture.
- **OPSL-223** Criar storage privado — Não faz parte do escopo confirmado desta fixture.
- **OPSL-224** Implementar upload resiliente — Não faz parte do escopo confirmado desta fixture.
- **OPSL-225** Validar MIME e extensão — Não faz parte do escopo confirmado desta fixture.
- **OPSL-226** Criar quarentena — Não faz parte do escopo confirmado desta fixture.
- **OPSL-227** Detectar arquivos maliciosos — Não faz parte do escopo confirmado desta fixture.
- **OPSL-228** Proteger contra zip bombs — Não faz parte do escopo confirmado desta fixture.
- **OPSL-229** Implementar processamento assíncrono — Não faz parte do escopo confirmado desta fixture.
- **OPSL-230** Criar retry e dead letter — Não faz parte do escopo confirmado desta fixture.
- **OPSL-231** Definir retenção e exclusão — Não faz parte do escopo confirmado desta fixture.
- **OPSL-232** Aprovar segurança de uploads — Não faz parte do escopo confirmado desta fixture.
- **OPSL-257** Definir estratégia mobile — Não faz parte do escopo confirmado desta fixture.
- **OPSL-258** Priorizar jornadas móveis — Não faz parte do escopo confirmado desta fixture.
- **OPSL-259** Definir suporte offline — Não faz parte do escopo confirmado desta fixture.
- **OPSL-260** Implementar layout mobile — Não faz parte do escopo confirmado desta fixture.
- **OPSL-261** Implementar navegação touch — Não faz parte do escopo confirmado desta fixture.
- **OPSL-262** Configurar instalação PWA — Não faz parte do escopo confirmado desta fixture.
- **OPSL-263** Implementar notificações push — Não faz parte do escopo confirmado desta fixture.
- **OPSL-264** Tratar permissões do dispositivo — Não faz parte do escopo confirmado desta fixture.
- **OPSL-265** Otimizar redes lentas — Não faz parte do escopo confirmado desta fixture.
- **OPSL-266** Testar dispositivos alvo — Não faz parte do escopo confirmado desta fixture.
- **OPSL-267** Definir distribuição em lojas — Não faz parte do escopo confirmado desta fixture.
- **OPSL-268** Aprovar experiência mobile — Não faz parte do escopo confirmado desta fixture.
- **OPSL-269** Classificar categorias reguladas — Não faz parte do escopo confirmado desta fixture.
- **OPSL-270** Definir base legal — Não faz parte do escopo confirmado desta fixture.
- **OPSL-271** Executar avaliação de impacto — Não faz parte do escopo confirmado desta fixture.
- **OPSL-272** Aplicar minimização de dados — Não faz parte do escopo confirmado desta fixture.
- **OPSL-273** Definir consentimento — Não faz parte do escopo confirmado desta fixture.
- **OPSL-274** Implementar trilha de auditoria reforçada — Não faz parte do escopo confirmado desta fixture.
- **OPSL-275** Definir residência dos dados — Não faz parte do escopo confirmado desta fixture.
- **OPSL-276** Implementar retenção por categoria — Não faz parte do escopo confirmado desta fixture.
- **OPSL-277** Criar processo de direitos do titular — Não faz parte do escopo confirmado desta fixture.
- **OPSL-278** Revisar subprocessadores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-279** Executar auditoria independente — Não faz parte do escopo confirmado desta fixture.
- **OPSL-280** Aprovar gate regulatório — Não faz parte do escopo confirmado desta fixture.
- **OPSL-293** Definir política de conteúdo — Não faz parte do escopo confirmado desta fixture.
- **OPSL-294** Criar taxonomia de violações — Não faz parte do escopo confirmado desta fixture.
- **OPSL-295** Implementar denúncia — Não faz parte do escopo confirmado desta fixture.
- **OPSL-296** Implementar bloqueio e silenciamento — Não faz parte do escopo confirmado desta fixture.
- **OPSL-297** Criar fila de moderação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-298** Definir níveis de enforcement — Não faz parte do escopo confirmado desta fixture.
- **OPSL-299** Criar processo de apelação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-300** Detectar abuso coordenado — Não faz parte do escopo confirmado desta fixture.
- **OPSL-301** Proteger moderadores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-302** Registrar decisões de moderação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-303** Medir precisão e tempo de resposta — Não faz parte do escopo confirmado desta fixture.
- **OPSL-304** Aprovar operação de trust and safety — Não faz parte do escopo confirmado desta fixture.
- **OPSL-317** Definir persona desenvolvedora — Não faz parte do escopo confirmado desta fixture.
- **OPSL-318** Projetar quickstart — Não faz parte do escopo confirmado desta fixture.
- **OPSL-319** Definir convenções da API — Não faz parte do escopo confirmado desta fixture.
- **OPSL-320** Criar SDK inicial — Não faz parte do escopo confirmado desta fixture.
- **OPSL-321** Criar CLI inicial — Não faz parte do escopo confirmado desta fixture.
- **OPSL-322** Criar exemplos executáveis — Não faz parte do escopo confirmado desta fixture.
- **OPSL-323** Documentar erros e limites — Não faz parte do escopo confirmado desta fixture.
- **OPSL-324** Versionar changelog técnico — Não faz parte do escopo confirmado desta fixture.
- **OPSL-325** Criar ambiente de testes — Não faz parte do escopo confirmado desta fixture.
- **OPSL-326** Medir time to first success — Não faz parte do escopo confirmado desta fixture.
- **OPSL-327** Testar documentação sem ajuda — Não faz parte do escopo confirmado desta fixture.
- **OPSL-328** Aprovar developer experience — Não faz parte do escopo confirmado desta fixture.
- **OPSL-329** Definir objetivo da comunidade — Não faz parte do escopo confirmado desta fixture.
- **OPSL-330** Escolher canal comunitário — Não faz parte do escopo confirmado desta fixture.
- **OPSL-331** Criar código de conduta — Não faz parte do escopo confirmado desta fixture.
- **OPSL-332** Definir programa de embaixadores — Não faz parte do escopo confirmado desta fixture.
- **OPSL-333** Projetar mecanismo de indicação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-334** Definir incentivo sustentável — Não faz parte do escopo confirmado desta fixture.
- **OPSL-335** Implementar atribuição de referral — Não faz parte do escopo confirmado desta fixture.
- **OPSL-336** Prevenir fraude de indicação — Não faz parte do escopo confirmado desta fixture.
- **OPSL-337** Criar calendário de comunidade — Não faz parte do escopo confirmado desta fixture.
- **OPSL-338** Medir participação qualificada — Não faz parte do escopo confirmado desta fixture.
- **OPSL-339** Medir conversão por referral — Não faz parte do escopo confirmado desta fixture.
- **OPSL-340** Aprovar escala comunitária — Não faz parte do escopo confirmado desta fixture.
