# Habit Bloom — SaaS Roadmap

SaaS B2C que ajuda profissionais a criar rotinas sustentáveis por meio de planos pequenos, acompanhamento de progresso e reflexão semanal.

**North Star:** Semanas em que o usuário conclui pelo menos três ações planejadas.
**Horizonte:** 8 meses
**Tarefas ativas:** 224

## F0 — Descoberta e contexto

**Janela:** Início–mês 1
**Gate:** Problema, fontes e restrições estão documentados com hipóteses explícitas.

- [ ] **HBLM-001** Registrar visão e resultado desejado · P0 · S · Produto
- [ ] **HBLM-002** Definir ICP primário · P1 · M · Produto · depende de HBLM-001
- [ ] **HBLM-003** Definir comprador e usuário · P1 · M · Produto · depende de HBLM-002
- [ ] **HBLM-004** Documentar problema prioritário · P1 · L · Produto · depende de HBLM-003

## F1 — Sistema de produto

**Janela:** Mês 1–2
**Gate:** Jornada, escopo, arquitetura da informação e fatia vertical estão testáveis.

- [ ] **HBLM-005** Mapear alternativas atuais · P1 · S · Produto · depende de HBLM-004
- [ ] **HBLM-006** Formalizar job to be done · P2 · M · Produto · depende de HBLM-005
- [ ] **HBLM-007** Definir proposta de valor · P2 · L · Produto · depende de HBLM-006
- [ ] **HBLM-008** Registrar hipóteses críticas · P2 · M · Produto · depende de HBLM-007
- [ ] **HBLM-009** Planejar entrevistas de problema · P2 · S · Produto · depende de HBLM-008
- [ ] **HBLM-010** Executar entrevistas de problema · P2 · L · Produto · depende de HBLM-009
- [ ] **HBLM-011** Sintetizar evidências de discovery · P3 · M · Produto · depende de HBLM-010
- [ ] **HBLM-012** Definir critérios de validação · P3 · XL · Produto · depende de HBLM-011
- [ ] **HBLM-017** Criar plano contínuo de pesquisa · P0 · S · Produto e Design
- [ ] **HBLM-018** Definir perfis comportamentais · P1 · M · Produto e Design · depende de HBLM-017
- [ ] **HBLM-019** Mapear jornada atual · P1 · M · Produto e Design · depende de HBLM-018
- [ ] **HBLM-020** Mapear jornada desejada · P1 · L · Produto e Design · depende de HBLM-019
- [ ] **HBLM-021** Inventariar pontos de fricção · P1 · S · Produto e Design · depende de HBLM-020
- [ ] **HBLM-022** Definir princípios de experiência · P2 · M · Produto e Design · depende de HBLM-021
- [ ] **HBLM-023** Criar arquitetura da informação · P2 · L · Produto e Design · depende de HBLM-022
- [ ] **HBLM-024** Prototipar fluxo de ativação · P2 · M · Produto e Design · depende de HBLM-023
- [ ] **HBLM-031** Definir arquitetura do frontend · P0 · S · Engenharia
- [ ] **HBLM-032** Configurar padrões de componentes · P1 · M · Engenharia · depende de HBLM-031
- [ ] **HBLM-033** Criar shell responsivo da aplicação · P1 · M · Engenharia · depende de HBLM-032
- [ ] **HBLM-034** Implementar navegação autenticada · P1 · L · Engenharia · depende de HBLM-033
- [ ] **HBLM-043** Registrar decisão arquitetural inicial · P0 · S · Engenharia
- [ ] **HBLM-044** Definir contextos do domínio · P1 · M · Engenharia · depende de HBLM-043
- [ ] **HBLM-045** Definir ambientes de desenvolvimento · P1 · M · Engenharia · depende de HBLM-044
- [ ] **HBLM-046** Configurar integração contínua · P1 · L · Engenharia · depende de HBLM-045
- [ ] **HBLM-061** Definir modelo conceitual de dados · P0 · S · Produto e Dados
- [ ] **HBLM-062** Criar dicionário de eventos · P1 · M · Produto e Dados · depende de HBLM-061
- [ ] **HBLM-063** Definir propriedade dos dados · P1 · M · Produto e Dados · depende de HBLM-062
- [ ] **HBLM-064** Implementar analytics de ativação · P1 · L · Produto e Dados · depende de HBLM-063
- [ ] **HBLM-073** Classificar dados processados · P0 · S · Segurança e Engenharia
- [ ] **HBLM-074** Criar threat model inicial · P1 · M · Segurança e Engenharia · depende de HBLM-073
- [ ] **HBLM-075** Definir fronteiras de confiança · P1 · M · Segurança e Engenharia · depende de HBLM-074
- [ ] **HBLM-076** Implementar gestão segura de segredos · P1 · L · Segurança e Engenharia · depende de HBLM-075
- [ ] **HBLM-105** Definir narrativa comercial · P0 · S · Growth e Produto
- [ ] **HBLM-106** Criar hipótese de pricing · P1 · M · Growth e Produto · depende de HBLM-105
- [ ] **HBLM-107** Testar disposição a pagar · P1 · M · Growth e Produto · depende de HBLM-106
- [ ] **HBLM-108** Definir evento de ativação · P1 · L · Growth e Produto · depende de HBLM-107
- [ ] **HBLM-109** Desenhar onboarding comercial · P1 · S · Growth e Produto · depende de HBLM-108
- [ ] **HBLM-110** Criar landing page inicial · P2 · M · Growth e Produto · depende de HBLM-109
- [ ] **HBLM-111** Configurar analytics de aquisição · P2 · L · Growth e Produto · depende de HBLM-110
- [ ] **HBLM-112** Definir canal de aquisição primário · P2 · M · Growth e Produto · depende de HBLM-111
- [ ] **HBLM-131** Inventariar obrigações legais · P0 · S · Jurídico e Operações
- [ ] **HBLM-132** Definir titularidade da propriedade intelectual · P1 · M · Jurídico e Operações · depende de HBLM-131
- [ ] **HBLM-133** Criar ledger de componentes terceiros · P1 · M · Jurídico e Operações · depende de HBLM-132
- [ ] **HBLM-134** Definir termos de uso · P1 · L · Jurídico e Operações · depende de HBLM-133

## F2 — Fundação

**Janela:** Mês 2–3
**Gate:** Ambientes, identidade, dados, segurança e CI suportam desenvolvimento seguro.

- [ ] **HBLM-013** Priorizar jornada principal · P3 · M · Produto · depende de HBLM-012
- [ ] **HBLM-014** Definir fronteiras do MVP · P3 · L · Produto · depende de HBLM-013
- [ ] **HBLM-015** Criar mapa de outcomes · P3 · S · Produto · depende de HBLM-014
- [ ] **HBLM-016** Aprovar estratégia inicial do produto · P0 · M · Produto · depende de HBLM-015
- [ ] **HBLM-025** Testar protótipo sem orientação · P2 · S · Produto e Design · depende de HBLM-024
- [ ] **HBLM-026** Registrar decisões de usabilidade · P2 · L · Produto e Design · depende de HBLM-025
- [ ] **HBLM-027** Definir padrão de conteúdo · P3 · M · Produto e Design · depende de HBLM-026
- [ ] **HBLM-028** Definir requisitos de acessibilidade · P3 · XL · Produto e Design · depende de HBLM-027
- [ ] **HBLM-029** Criar design tokens iniciais · P3 · M · Produto e Design · depende de HBLM-028
- [ ] **HBLM-030** Aprovar experiência da fatia vertical · P0 · L · Produto e Design · depende de HBLM-029
- [ ] **HBLM-035** Criar estados de loading e empty · P1 · S · Engenharia · depende de HBLM-034
- [ ] **HBLM-036** Criar padrão de tratamento de erros · P2 · M · Engenharia · depende de HBLM-035
- [ ] **HBLM-037** Implementar formulários acessíveis · P2 · L · Engenharia · depende de HBLM-036
- [ ] **HBLM-038** Configurar estratégia de cache no cliente · P2 · M · Engenharia · depende de HBLM-037
- [ ] **HBLM-039** Criar política de compatibilidade de navegadores · P2 · S · Engenharia · depende de HBLM-038
- [ ] **HBLM-040** Configurar testes visuais · P2 · L · Engenharia · depende de HBLM-039
- [ ] **HBLM-041** Definir orçamento de performance · P3 · M · Engenharia · depende de HBLM-040
- [ ] **HBLM-042** Validar frontend da fatia vertical · P3 · XL · Engenharia · depende de HBLM-041
- [ ] **HBLM-047** Configurar preview por mudança · P1 · S · Engenharia · depende de HBLM-046
- [ ] **HBLM-048** Configurar produção protegida · P2 · M · Engenharia · depende de HBLM-047
- [ ] **HBLM-049** Definir estratégia de configuração · P2 · L · Engenharia · depende de HBLM-048
- [ ] **HBLM-050** Implementar autenticação base · P2 · M · Engenharia · depende de HBLM-049
- [ ] **HBLM-051** Implementar autorização server-side · P2 · S · Engenharia · depende de HBLM-050
- [ ] **HBLM-052** Criar modelo de tenancy · P2 · L · Engenharia · depende de HBLM-051
- [ ] **HBLM-053** Definir contratos de aplicação · P3 · M · Engenharia · depende de HBLM-052
- [ ] **HBLM-054** Criar camada de persistência · P3 · XL · Engenharia · depende de HBLM-053
- [ ] **HBLM-065** Implementar analytics de retenção · P1 · S · Produto e Dados · depende de HBLM-064
- [ ] **HBLM-066** Definir qualidade mínima dos eventos · P2 · M · Produto e Dados · depende de HBLM-065
- [ ] **HBLM-067** Criar validação de payloads analíticos · P2 · L · Produto e Dados · depende de HBLM-066
- [ ] **HBLM-068** Definir política de retenção · P2 · M · Produto e Dados · depende de HBLM-067
- [ ] **HBLM-069** Criar dashboard operacional · P2 · S · Produto e Dados · depende de HBLM-068
- [ ] **HBLM-070** Criar dashboard de produto · P2 · L · Produto e Dados · depende de HBLM-069
- [ ] **HBLM-071** Auditar consistência das métricas · P3 · M · Produto e Dados · depende de HBLM-070
- [ ] **HBLM-072** Aprovar baseline de dados · P0 · XL · Produto e Dados · depende de HBLM-071
- [ ] **HBLM-077** Aplicar princípio de menor privilégio · P1 · S · Segurança e Engenharia · depende de HBLM-076
- [ ] **HBLM-078** Definir política de sessões · P2 · M · Segurança e Engenharia · depende de HBLM-077
- [ ] **HBLM-079** Implementar proteção contra abuso · P2 · L · Segurança e Engenharia · depende de HBLM-078
- [ ] **HBLM-080** Configurar headers de segurança · P2 · M · Segurança e Engenharia · depende de HBLM-079
- [ ] **HBLM-081** Validar isolamento entre tenants · P2 · S · Segurança e Engenharia · depende de HBLM-080
- [ ] **HBLM-082** Criar logging de ações sensíveis · P2 · L · Segurança e Engenharia · depende de HBLM-081
- [ ] **HBLM-083** Definir resposta a incidentes · P3 · M · Segurança e Engenharia · depende de HBLM-082
- [ ] **HBLM-084** Configurar secret scanning · P3 · XL · Segurança e Engenharia · depende de HBLM-083
- [ ] **HBLM-091** Definir estratégia de testes · P0 · S · Engenharia e QA
- [ ] **HBLM-092** Criar pirâmide de testes · P1 · M · Engenharia e QA · depende de HBLM-091
- [ ] **HBLM-093** Configurar testes unitários · P1 · M · Engenharia e QA · depende de HBLM-092
- [ ] **HBLM-094** Configurar testes de integração · P1 · L · Engenharia e QA · depende de HBLM-093
- [ ] **HBLM-095** Configurar testes end to end · P1 · S · Engenharia e QA · depende de HBLM-094
- [ ] **HBLM-096** Definir testes de contrato · P2 · M · Engenharia e QA · depende de HBLM-095
- [ ] **HBLM-097** Criar fixtures representativas · P2 · L · Engenharia e QA · depende de HBLM-096
- [ ] **HBLM-098** Definir SLOs iniciais · P2 · M · Engenharia e QA · depende de HBLM-097
- [ ] **HBLM-113** Criar experimento de demanda · P2 · S · Growth e Produto · depende de HBLM-112
- [ ] **HBLM-114** Definir processo de coleta de feedback · P2 · L · Growth e Produto · depende de HBLM-113
- [ ] **HBLM-115** Criar estratégia de conteúdo · P3 · M · Growth e Produto · depende de HBLM-114
- [ ] **HBLM-116** Definir comunicação de lançamento · P3 · XL · Growth e Produto · depende de HBLM-115
- [ ] **HBLM-117** Criar programa de early adopters · P3 · M · Growth e Produto · depende de HBLM-116
- [ ] **HBLM-118** Medir conversão por etapa · P3 · L · Growth e Produto · depende de HBLM-117
- [ ] **HBLM-119** Revisar pricing com evidências · P3 · S · Growth e Produto · depende de HBLM-118
- [ ] **HBLM-120** Aprovar plano de go to market · P0 · M · Growth e Produto · depende de HBLM-119
- [ ] **HBLM-121** Definir política de planos · P0 · S · Financeiro e Engenharia
- [ ] **HBLM-122** Definir matriz de entitlements · P1 · M · Financeiro e Engenharia · depende de HBLM-121
- [ ] **HBLM-123** Mapear eventos financeiros · P1 · M · Financeiro e Engenharia · depende de HBLM-122
- [ ] **HBLM-124** Definir política de cancelamento · P1 · L · Financeiro e Engenharia · depende de HBLM-123
- [ ] **HBLM-135** Definir política de privacidade · P1 · S · Jurídico e Operações · depende de HBLM-134
- [ ] **HBLM-136** Definir política de cookies · P2 · M · Jurídico e Operações · depende de HBLM-135
- [ ] **HBLM-137** Mapear subprocessadores · P2 · L · Jurídico e Operações · depende de HBLM-136
- [ ] **HBLM-138** Definir processo de solicitação de titular · P2 · M · Jurídico e Operações · depende de HBLM-137
- [ ] **HBLM-139** Revisar claims comerciais · P2 · S · Jurídico e Operações · depende de HBLM-138
- [ ] **HBLM-140** Definir política de retenção legal · P2 · L · Jurídico e Operações · depende de HBLM-139
- [ ] **HBLM-141** Preparar documentação de lançamento · P3 · M · Jurídico e Operações · depende de HBLM-140
- [ ] **HBLM-142** Aprovar gate jurídico · P0 · XL · Jurídico e Operações · depende de HBLM-141
- [ ] **HBLM-143** Definir modelo operacional · P0 · S · Operações
- [ ] **HBLM-144** Criar RACI da equipe · P1 · M · Operações · depende de HBLM-143
- [ ] **HBLM-145** Definir definition of ready · P1 · M · Operações · depende de HBLM-144
- [ ] **HBLM-146** Definir definition of done · P1 · L · Operações · depende de HBLM-145
- [ ] **HBLM-147** Configurar gestão de backlog · P1 · S · Operações · depende de HBLM-146
- [ ] **HBLM-148** Definir fluxo de branches e revisão · P2 · M · Operações · depende de HBLM-147
- [ ] **HBLM-149** Criar playbook de release · P2 · L · Operações · depende de HBLM-148
- [ ] **HBLM-150** Criar changelog · P2 · M · Operações · depende de HBLM-149
- [ ] **HBLM-281** Definir idiomas suportados · P0 · S · Produto e Operações
- [ ] **HBLM-282** Escolher idioma canônico · P1 · M · Produto e Operações · depende de HBLM-281
- [ ] **HBLM-283** Externalizar strings · P1 · M · Produto e Operações · depende de HBLM-282
- [ ] **HBLM-284** Localizar datas e números · P1 · L · Produto e Operações · depende de HBLM-283
- [ ] **HBLM-305** Inventariar fontes de dados · P0 · S · Dados e Engenharia
- [ ] **HBLM-306** Definir mapeamento de campos · P1 · M · Dados e Engenharia · depende de HBLM-305
- [ ] **HBLM-307** Criar contrato de importação · P1 · M · Dados e Engenharia · depende de HBLM-306
- [ ] **HBLM-308** Implementar validação prévia · P1 · L · Dados e Engenharia · depende de HBLM-307

## F3 — Produto principal

**Janela:** Mês 3–4
**Gate:** Workflows essenciais atendem critérios funcionais e de domínio.

- [ ] **HBLM-055** Definir processamento assíncrono · P3 · M · Engenharia · depende de HBLM-054
- [ ] **HBLM-056** Criar trilha de auditoria · P3 · L · Engenharia · depende de HBLM-055
- [ ] **HBLM-057** Configurar feature flags · P3 · S · Engenharia · depende de HBLM-056
- [ ] **HBLM-058** Documentar rollback · P3 · M · Engenharia · depende de HBLM-057
- [ ] **HBLM-059** Testar build reproduzível · P3 · L · Engenharia · depende de HBLM-058
- [ ] **HBLM-060** Aprovar fundação da plataforma · P0 · M · Engenharia · depende de HBLM-059
- [ ] **HBLM-085** Configurar dependency scanning · P3 · M · Segurança e Engenharia · depende de HBLM-084
- [ ] **HBLM-086** Executar revisão de autenticação · P3 · L · Segurança e Engenharia · depende de HBLM-085
- [ ] **HBLM-087** Executar revisão de autorização · P3 · S · Segurança e Engenharia · depende de HBLM-086
- [ ] **HBLM-088** Planejar pentest proporcional ao risco · P3 · M · Segurança e Engenharia · depende de HBLM-087
- [ ] **HBLM-089** Testar recuperação após incidente · P3 · L · Segurança e Engenharia · depende de HBLM-088
- [ ] **HBLM-090** Aprovar gate de segurança · P0 · M · Segurança e Engenharia · depende de HBLM-089
- [ ] **HBLM-099** Configurar error tracking · P2 · S · Engenharia e QA · depende de HBLM-098
- [ ] **HBLM-100** Configurar logs estruturados · P2 · L · Engenharia e QA · depende de HBLM-099
- [ ] **HBLM-101** Criar alertas acionáveis · P3 · M · Engenharia e QA · depende de HBLM-100
- [ ] **HBLM-102** Executar teste de carga inicial · P3 · XL · Engenharia e QA · depende de HBLM-101
- [ ] **HBLM-103** Executar drill de backup e restore · P3 · M · Engenharia e QA · depende de HBLM-102
- [ ] **HBLM-104** Aprovar readiness técnico · P0 · L · Engenharia e QA · depende de HBLM-103
- [ ] **HBLM-125** Definir tratamento de falhas de pagamento · P1 · S · Financeiro e Engenharia · depende de HBLM-124
- [ ] **HBLM-126** Definir reconciliação financeira · P2 · M · Financeiro e Engenharia · depende de HBLM-125
- [ ] **HBLM-127** Criar projeção de custos unitários · P2 · L · Financeiro e Engenharia · depende de HBLM-126
- [ ] **HBLM-128** Definir controles contra abuso de plano · P2 · M · Financeiro e Engenharia · depende de HBLM-127
- [ ] **HBLM-129** Validar fluxo financeiro ponta a ponta · P0 · S · Financeiro e Engenharia · depende de HBLM-128
- [ ] **HBLM-130** Aprovar gate de monetização · P0 · L · Financeiro e Engenharia · depende de HBLM-129
- [ ] **HBLM-151** Definir canais de suporte · P2 · S · Operações · depende de HBLM-150
- [ ] **HBLM-152** Criar taxonomia de tickets · P2 · L · Operações · depende de HBLM-151
- [ ] **HBLM-153** Definir SLA interno · P3 · M · Operações · depende de HBLM-152
- [ ] **HBLM-154** Criar base de conhecimento · P3 · XL · Operações · depende de HBLM-153
- [ ] **HBLM-155** Definir processo de incidentes · P3 · M · Operações · depende de HBLM-154
- [ ] **HBLM-156** Criar runbook de manutenção · P3 · L · Operações · depende de HBLM-155
- [ ] **HBLM-157** Planejar continuidade do negócio · P3 · S · Operações · depende de HBLM-156
- [ ] **HBLM-158** Definir rotina de métricas · P3 · M · Operações · depende de HBLM-157
- [ ] **HBLM-173** Escolher provedor de billing · P0 · S · Financeiro e Engenharia
- [ ] **HBLM-174** Modelar produtos e preços · P1 · M · Financeiro e Engenharia · depende de HBLM-173
- [ ] **HBLM-175** Implementar checkout · P1 · M · Financeiro e Engenharia · depende de HBLM-174
- [ ] **HBLM-176** Implementar assinatura mensal e anual · P1 · L · Financeiro e Engenharia · depende de HBLM-175
- [ ] **HBLM-177** Implementar trial e cupons · P1 · S · Financeiro e Engenharia · depende de HBLM-176
- [ ] **HBLM-178** Implementar portal do cliente · P2 · M · Financeiro e Engenharia · depende de HBLM-177
- [ ] **HBLM-179** Implementar entitlements server-side · P2 · L · Financeiro e Engenharia · depende de HBLM-178
- [ ] **HBLM-180** Validar assinatura de webhooks · P2 · M · Financeiro e Engenharia · depende de HBLM-179
- [ ] **HBLM-257** Definir estratégia mobile · P0 · S · Produto e Engenharia
- [ ] **HBLM-258** Priorizar jornadas móveis · P1 · M · Produto e Engenharia · depende de HBLM-257
- [ ] **HBLM-259** Definir suporte offline · P1 · M · Produto e Engenharia · depende de HBLM-258
- [ ] **HBLM-260** Implementar layout mobile · P1 · L · Produto e Engenharia · depende de HBLM-259
- [ ] **HBLM-261** Implementar navegação touch · P1 · S · Produto e Engenharia · depende de HBLM-260
- [ ] **HBLM-262** Configurar instalação PWA · P2 · M · Produto e Engenharia · depende de HBLM-261
- [ ] **HBLM-263** Implementar notificações push · P2 · L · Produto e Engenharia · depende de HBLM-262
- [ ] **HBLM-264** Tratar permissões do dispositivo · P2 · M · Produto e Engenharia · depende de HBLM-263
- [ ] **HBLM-285** Localizar moedas e preços · P1 · S · Produto e Operações · depende de HBLM-284
- [ ] **HBLM-286** Criar glossário de produto · P2 · M · Produto e Operações · depende de HBLM-285
- [ ] **HBLM-287** Definir processo de tradução · P2 · L · Produto e Operações · depende de HBLM-286
- [ ] **HBLM-288** Revisar conteúdo crítico · P2 · M · Produto e Operações · depende de HBLM-287
- [ ] **HBLM-289** Testar expansão de texto · P2 · S · Produto e Operações · depende de HBLM-288
- [ ] **HBLM-290** Testar direção e caracteres · P2 · L · Produto e Operações · depende de HBLM-289
- [ ] **HBLM-291** Executar QA por locale · P3 · M · Produto e Operações · depende de HBLM-290
- [ ] **HBLM-292** Aprovar lançamento internacional · P0 · XL · Produto e Operações · depende de HBLM-291
- [ ] **HBLM-309** Implementar importação idempotente · P1 · S · Dados e Engenharia · depende de HBLM-308
- [ ] **HBLM-310** Criar relatório de inconsistências · P2 · M · Dados e Engenharia · depende de HBLM-309
- [ ] **HBLM-311** Preservar proveniência · P2 · L · Dados e Engenharia · depende de HBLM-310
- [ ] **HBLM-312** Criar estratégia de rollback · P2 · M · Dados e Engenharia · depende de HBLM-311
- [ ] **HBLM-313** Testar volumes representativos · P2 · S · Dados e Engenharia · depende de HBLM-312
- [ ] **HBLM-314** Executar dry run · P2 · L · Dados e Engenharia · depende de HBLM-313
- [ ] **HBLM-315** Reconciliar amostras migradas · P3 · M · Dados e Engenharia · depende de HBLM-314
- [ ] **HBLM-316** Aprovar cutover · P0 · XL · Dados e Engenharia · depende de HBLM-315
- [ ] **HBLM-353** Definir modelo de hábito · P1 · L · Produto
- [ ] **HBLM-354** Criar plano semanal · P1 · M · Produto · depende de HBLM-353

## F4 — Dados e integrações

**Janela:** Mês 4–5
**Gate:** Dados, jobs e integrações são auditáveis, resilientes e operáveis.

- [ ] **HBLM-159** Executar ensaio de lançamento · P3 · L · Operações · depende de HBLM-158
- [ ] **HBLM-160** Aprovar operação pós-lançamento · P0 · M · Operações · depende de HBLM-159
- [ ] **HBLM-181** Garantir idempotência financeira · P2 · S · Financeiro e Engenharia · depende de HBLM-180
- [ ] **HBLM-182** Implementar dunning · P2 · L · Financeiro e Engenharia · depende de HBLM-181
- [ ] **HBLM-183** Implementar reconciliação · P3 · M · Financeiro e Engenharia · depende de HBLM-182
- [ ] **HBLM-184** Aprovar checkout real · P0 · XL · Financeiro e Engenharia · depende de HBLM-183
- [ ] **HBLM-265** Otimizar redes lentas · P2 · S · Produto e Engenharia · depende de HBLM-264
- [ ] **HBLM-266** Testar dispositivos alvo · P2 · L · Produto e Engenharia · depende de HBLM-265
- [ ] **HBLM-267** Definir distribuição em lojas · P3 · M · Produto e Engenharia · depende de HBLM-266
- [ ] **HBLM-268** Aprovar experiência mobile · P0 · XL · Produto e Engenharia · depende de HBLM-267
- [ ] **HBLM-329** Definir objetivo da comunidade · P0 · S · Growth e Comunidade
- [ ] **HBLM-330** Escolher canal comunitário · P1 · M · Growth e Comunidade · depende de HBLM-329
- [ ] **HBLM-331** Criar código de conduta · P1 · M · Growth e Comunidade · depende de HBLM-330
- [ ] **HBLM-332** Definir programa de embaixadores · P1 · L · Growth e Comunidade · depende de HBLM-331
- [ ] **HBLM-333** Projetar mecanismo de indicação · P1 · S · Growth e Comunidade · depende de HBLM-332
- [ ] **HBLM-334** Definir incentivo sustentável · P2 · M · Growth e Comunidade · depende de HBLM-333
- [ ] **HBLM-335** Implementar atribuição de referral · P2 · L · Growth e Comunidade · depende de HBLM-334
- [ ] **HBLM-336** Prevenir fraude de indicação · P2 · M · Growth e Comunidade · depende de HBLM-335
- [ ] **HBLM-355** Registrar ação concluída · P2 · M · Produto · depende de HBLM-354
- [ ] **HBLM-356** Gerar reflexão semanal · P2 · L · Produto · depende de HBLM-355

## F5 — Qualidade e segurança

**Janela:** Mês 5–6
**Gate:** Testes, SLOs e controles proporcionais ao risco foram aprovados.

- [ ] **HBLM-337** Criar calendário de comunidade · P2 · S · Growth e Comunidade · depende de HBLM-336
- [ ] **HBLM-338** Medir participação qualificada · P2 · L · Growth e Comunidade · depende de HBLM-337
- [ ] **HBLM-339** Medir conversão por referral · P3 · M · Growth e Comunidade · depende de HBLM-338
- [ ] **HBLM-340** Aprovar escala comunitária · P0 · XL · Growth e Comunidade · depende de HBLM-339

## F6 — Alpha

**Janela:** Mês 6–7
**Gate:** Usuários controlados completam jornadas reais e os riscos críticos estão fechados.


## F7 — Lançamento e escala

**Janela:** Mês 7–8
**Gate:** Métricas de negócio e operação autorizam expansão gradual.


## Fora de escopo / N/A

- **HBLM-161** Definir tarefa exata da IA — Não faz parte do escopo confirmado desta fixture.
- **HBLM-162** Classificar riscos de automação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-163** Definir política de provedores — Não faz parte do escopo confirmado desta fixture.
- **HBLM-164** Definir fronteira entre IA e regras — Não faz parte do escopo confirmado desta fixture.
- **HBLM-165** Criar contratos de entrada e saída — Não faz parte do escopo confirmado desta fixture.
- **HBLM-166** Criar dataset de avaliação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-167** Implementar versionamento de prompts — Não faz parte do escopo confirmado desta fixture.
- **HBLM-168** Implementar revisão humana — Não faz parte do escopo confirmado desta fixture.
- **HBLM-169** Testar prompt injection — Não faz parte do escopo confirmado desta fixture.
- **HBLM-170** Definir fallback determinístico — Não faz parte do escopo confirmado desta fixture.
- **HBLM-171** Monitorar qualidade e custo — Não faz parte do escopo confirmado desta fixture.
- **HBLM-172** Aprovar gate de IA — Não faz parte do escopo confirmado desta fixture.
- **HBLM-185** Definir lados do marketplace — Não faz parte do escopo confirmado desta fixture.
- **HBLM-186** Definir unidade de liquidez — Não faz parte do escopo confirmado desta fixture.
- **HBLM-187** Modelar oferta e demanda — Não faz parte do escopo confirmado desta fixture.
- **HBLM-188** Definir regras de matching — Não faz parte do escopo confirmado desta fixture.
- **HBLM-189** Criar onboarding de fornecedores — Não faz parte do escopo confirmado desta fixture.
- **HBLM-190** Criar onboarding de compradores — Não faz parte do escopo confirmado desta fixture.
- **HBLM-191** Implementar descoberta e filtros — Não faz parte do escopo confirmado desta fixture.
- **HBLM-192** Implementar confiança e reputação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-193** Definir disputa e reembolso — Não faz parte do escopo confirmado desta fixture.
- **HBLM-194** Implementar split ou repasse — Não faz parte do escopo confirmado desta fixture.
- **HBLM-195** Medir liquidez — Não faz parte do escopo confirmado desta fixture.
- **HBLM-196** Aprovar operação do marketplace — Não faz parte do escopo confirmado desta fixture.
- **HBLM-197** Modelar workspace e membership — Não faz parte do escopo confirmado desta fixture.
- **HBLM-198** Definir papéis canônicos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-199** Criar matriz de permissões — Não faz parte do escopo confirmado desta fixture.
- **HBLM-200** Implementar convites — Não faz parte do escopo confirmado desta fixture.
- **HBLM-201** Implementar troca de workspace — Não faz parte do escopo confirmado desta fixture.
- **HBLM-202** Aplicar isolamento no banco — Não faz parte do escopo confirmado desta fixture.
- **HBLM-203** Aplicar autorização no servidor — Não faz parte do escopo confirmado desta fixture.
- **HBLM-204** Controlar administração do workspace — Não faz parte do escopo confirmado desta fixture.
- **HBLM-205** Registrar mudanças de acesso — Não faz parte do escopo confirmado desta fixture.
- **HBLM-206** Testar escalada de privilégio — Não faz parte do escopo confirmado desta fixture.
- **HBLM-207** Testar acesso cross-tenant — Não faz parte do escopo confirmado desta fixture.
- **HBLM-208** Aprovar gate de tenancy — Não faz parte do escopo confirmado desta fixture.
- **HBLM-209** Definir ICP enterprise — Não faz parte do escopo confirmado desta fixture.
- **HBLM-210** Mapear processo de procurement — Não faz parte do escopo confirmado desta fixture.
- **HBLM-211** Criar pacote de security review — Não faz parte do escopo confirmado desta fixture.
- **HBLM-212** Definir contratos enterprise — Não faz parte do escopo confirmado desta fixture.
- **HBLM-213** Implementar SSO — Não faz parte do escopo confirmado desta fixture.
- **HBLM-214** Implementar provisionamento de usuários — Não faz parte do escopo confirmado desta fixture.
- **HBLM-215** Criar controles administrativos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-216** Definir data residency — Não faz parte do escopo confirmado desta fixture.
- **HBLM-217** Criar SLA comercial — Não faz parte do escopo confirmado desta fixture.
- **HBLM-218** Definir onboarding assistido — Não faz parte do escopo confirmado desta fixture.
- **HBLM-219** Preparar renovação e expansão — Não faz parte do escopo confirmado desta fixture.
- **HBLM-220** Aprovar readiness enterprise — Não faz parte do escopo confirmado desta fixture.
- **HBLM-221** Definir formatos aceitos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-222** Definir limites de arquivo — Não faz parte do escopo confirmado desta fixture.
- **HBLM-223** Criar storage privado — Não faz parte do escopo confirmado desta fixture.
- **HBLM-224** Implementar upload resiliente — Não faz parte do escopo confirmado desta fixture.
- **HBLM-225** Validar MIME e extensão — Não faz parte do escopo confirmado desta fixture.
- **HBLM-226** Criar quarentena — Não faz parte do escopo confirmado desta fixture.
- **HBLM-227** Detectar arquivos maliciosos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-228** Proteger contra zip bombs — Não faz parte do escopo confirmado desta fixture.
- **HBLM-229** Implementar processamento assíncrono — Não faz parte do escopo confirmado desta fixture.
- **HBLM-230** Criar retry e dead letter — Não faz parte do escopo confirmado desta fixture.
- **HBLM-231** Definir retenção e exclusão — Não faz parte do escopo confirmado desta fixture.
- **HBLM-232** Aprovar segurança de uploads — Não faz parte do escopo confirmado desta fixture.
- **HBLM-233** Definir casos de uso realtime — Não faz parte do escopo confirmado desta fixture.
- **HBLM-234** Escolher modelo de sincronização — Não faz parte do escopo confirmado desta fixture.
- **HBLM-235** Definir resolução de conflitos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-236** Implementar presença — Não faz parte do escopo confirmado desta fixture.
- **HBLM-237** Implementar atualizações em tempo real — Não faz parte do escopo confirmado desta fixture.
- **HBLM-238** Implementar edição colaborativa — Não faz parte do escopo confirmado desta fixture.
- **HBLM-239** Persistir eventos relevantes — Não faz parte do escopo confirmado desta fixture.
- **HBLM-240** Tratar reconexão — Não faz parte do escopo confirmado desta fixture.
- **HBLM-241** Aplicar autorização em canais — Não faz parte do escopo confirmado desta fixture.
- **HBLM-242** Testar concorrência — Não faz parte do escopo confirmado desta fixture.
- **HBLM-243** Medir latência percebida — Não faz parte do escopo confirmado desta fixture.
- **HBLM-244** Aprovar colaboração realtime — Não faz parte do escopo confirmado desta fixture.
- **HBLM-245** Definir casos de uso da API — Não faz parte do escopo confirmado desta fixture.
- **HBLM-246** Versionar contratos públicos — Não faz parte do escopo confirmado desta fixture.
- **HBLM-247** Implementar autenticação da API — Não faz parte do escopo confirmado desta fixture.
- **HBLM-248** Implementar scopes — Não faz parte do escopo confirmado desta fixture.
- **HBLM-249** Definir rate limits — Não faz parte do escopo confirmado desta fixture.
- **HBLM-250** Criar idempotency keys — Não faz parte do escopo confirmado desta fixture.
- **HBLM-251** Implementar webhooks assinados — Não faz parte do escopo confirmado desta fixture.
- **HBLM-252** Implementar retry de webhooks — Não faz parte do escopo confirmado desta fixture.
- **HBLM-253** Criar portal de documentação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-254** Criar sandbox de integração — Não faz parte do escopo confirmado desta fixture.
- **HBLM-255** Monitorar consumo e erros — Não faz parte do escopo confirmado desta fixture.
- **HBLM-256** Aprovar estabilidade da API — Não faz parte do escopo confirmado desta fixture.
- **HBLM-269** Classificar categorias reguladas — Não faz parte do escopo confirmado desta fixture.
- **HBLM-270** Definir base legal — Não faz parte do escopo confirmado desta fixture.
- **HBLM-271** Executar avaliação de impacto — Não faz parte do escopo confirmado desta fixture.
- **HBLM-272** Aplicar minimização de dados — Não faz parte do escopo confirmado desta fixture.
- **HBLM-273** Definir consentimento — Não faz parte do escopo confirmado desta fixture.
- **HBLM-274** Implementar trilha de auditoria reforçada — Não faz parte do escopo confirmado desta fixture.
- **HBLM-275** Definir residência dos dados — Não faz parte do escopo confirmado desta fixture.
- **HBLM-276** Implementar retenção por categoria — Não faz parte do escopo confirmado desta fixture.
- **HBLM-277** Criar processo de direitos do titular — Não faz parte do escopo confirmado desta fixture.
- **HBLM-278** Revisar subprocessadores — Não faz parte do escopo confirmado desta fixture.
- **HBLM-279** Executar auditoria independente — Não faz parte do escopo confirmado desta fixture.
- **HBLM-280** Aprovar gate regulatório — Não faz parte do escopo confirmado desta fixture.
- **HBLM-293** Definir política de conteúdo — Não faz parte do escopo confirmado desta fixture.
- **HBLM-294** Criar taxonomia de violações — Não faz parte do escopo confirmado desta fixture.
- **HBLM-295** Implementar denúncia — Não faz parte do escopo confirmado desta fixture.
- **HBLM-296** Implementar bloqueio e silenciamento — Não faz parte do escopo confirmado desta fixture.
- **HBLM-297** Criar fila de moderação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-298** Definir níveis de enforcement — Não faz parte do escopo confirmado desta fixture.
- **HBLM-299** Criar processo de apelação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-300** Detectar abuso coordenado — Não faz parte do escopo confirmado desta fixture.
- **HBLM-301** Proteger moderadores — Não faz parte do escopo confirmado desta fixture.
- **HBLM-302** Registrar decisões de moderação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-303** Medir precisão e tempo de resposta — Não faz parte do escopo confirmado desta fixture.
- **HBLM-304** Aprovar operação de trust and safety — Não faz parte do escopo confirmado desta fixture.
- **HBLM-317** Definir persona desenvolvedora — Não faz parte do escopo confirmado desta fixture.
- **HBLM-318** Projetar quickstart — Não faz parte do escopo confirmado desta fixture.
- **HBLM-319** Definir convenções da API — Não faz parte do escopo confirmado desta fixture.
- **HBLM-320** Criar SDK inicial — Não faz parte do escopo confirmado desta fixture.
- **HBLM-321** Criar CLI inicial — Não faz parte do escopo confirmado desta fixture.
- **HBLM-322** Criar exemplos executáveis — Não faz parte do escopo confirmado desta fixture.
- **HBLM-323** Documentar erros e limites — Não faz parte do escopo confirmado desta fixture.
- **HBLM-324** Versionar changelog técnico — Não faz parte do escopo confirmado desta fixture.
- **HBLM-325** Criar ambiente de testes — Não faz parte do escopo confirmado desta fixture.
- **HBLM-326** Medir time to first success — Não faz parte do escopo confirmado desta fixture.
- **HBLM-327** Testar documentação sem ajuda — Não faz parte do escopo confirmado desta fixture.
- **HBLM-328** Aprovar developer experience — Não faz parte do escopo confirmado desta fixture.
- **HBLM-341** Definir etapas do pipeline — Não faz parte do escopo confirmado desta fixture.
- **HBLM-342** Definir critérios de qualificação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-343** Criar discovery comercial — Não faz parte do escopo confirmado desta fixture.
- **HBLM-344** Criar demonstração repetível — Não faz parte do escopo confirmado desta fixture.
- **HBLM-345** Definir proposta e aprovação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-346** Implementar CRM mínimo — Não faz parte do escopo confirmado desta fixture.
- **HBLM-347** Criar handoff vendas para sucesso — Não faz parte do escopo confirmado desta fixture.
- **HBLM-348** Criar onboarding assistido — Não faz parte do escopo confirmado desta fixture.
- **HBLM-349** Definir health score — Não faz parte do escopo confirmado desta fixture.
- **HBLM-350** Criar playbook de risco de churn — Não faz parte do escopo confirmado desta fixture.
- **HBLM-351** Criar processo de renovação — Não faz parte do escopo confirmado desta fixture.
- **HBLM-352** Aprovar operação de receita — Não faz parte do escopo confirmado desta fixture.
