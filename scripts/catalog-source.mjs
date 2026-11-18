const coreGroups = [
  {
    id: "product-foundation", track: "product", owner: "Produto", risk: "R-PRODUCT", stage: 0,
    tasks: [
      "Registrar visão e resultado desejado", "Definir ICP primário", "Definir comprador e usuário", "Documentar problema prioritário",
      "Mapear alternativas atuais", "Formalizar job to be done", "Definir proposta de valor", "Registrar hipóteses críticas",
      "Planejar entrevistas de problema", "Executar entrevistas de problema", "Sintetizar evidências de discovery", "Definir critérios de validação",
      "Priorizar jornada principal", "Definir fronteiras do MVP", "Criar mapa de outcomes", "Aprovar estratégia inicial do produto"
    ]
  },
  {
    id: "ux-research", track: "ux", owner: "Produto e Design", risk: "R-USABILITY", stage: 1,
    tasks: [
      "Criar plano contínuo de pesquisa", "Definir perfis comportamentais", "Mapear jornada atual", "Mapear jornada desejada",
      "Inventariar pontos de fricção", "Definir princípios de experiência", "Criar arquitetura da informação", "Prototipar fluxo de ativação",
      "Testar protótipo sem orientação", "Registrar decisões de usabilidade", "Definir padrão de conteúdo", "Definir requisitos de acessibilidade",
      "Criar design tokens iniciais", "Aprovar experiência da fatia vertical"
    ]
  },
  {
    id: "frontend-foundation", track: "frontend", owner: "Engenharia", risk: "R-DELIVERY", stage: 2,
    tasks: [
      "Definir arquitetura do frontend", "Configurar padrões de componentes", "Criar shell responsivo da aplicação", "Implementar navegação autenticada",
      "Criar estados de loading e empty", "Criar padrão de tratamento de erros", "Implementar formulários acessíveis", "Configurar estratégia de cache no cliente",
      "Criar política de compatibilidade de navegadores", "Configurar testes visuais", "Definir orçamento de performance", "Validar frontend da fatia vertical"
    ]
  },
  {
    id: "platform-foundation", track: "platform", owner: "Engenharia", risk: "R-PLATFORM", stage: 2,
    tasks: [
      "Registrar decisão arquitetural inicial", "Definir contextos do domínio", "Definir ambientes de desenvolvimento", "Configurar integração contínua",
      "Configurar preview por mudança", "Configurar produção protegida", "Definir estratégia de configuração", "Implementar autenticação base",
      "Implementar autorização server-side", "Criar modelo de tenancy", "Definir contratos de aplicação", "Criar camada de persistência",
      "Definir processamento assíncrono", "Criar trilha de auditoria", "Configurar feature flags", "Documentar rollback",
      "Testar build reproduzível", "Aprovar fundação da plataforma"
    ]
  },
  {
    id: "data-analytics", track: "data", owner: "Produto e Dados", risk: "R-DATA", stage: 2,
    tasks: [
      "Definir modelo conceitual de dados", "Criar dicionário de eventos", "Definir propriedade dos dados", "Implementar analytics de ativação",
      "Implementar analytics de retenção", "Definir qualidade mínima dos eventos", "Criar validação de payloads analíticos", "Definir política de retenção",
      "Criar dashboard operacional", "Criar dashboard de produto", "Auditar consistência das métricas", "Aprovar baseline de dados"
    ]
  },
  {
    id: "security-privacy", track: "security", owner: "Segurança e Engenharia", risk: "R-SECURITY", stage: 2,
    tasks: [
      "Classificar dados processados", "Criar threat model inicial", "Definir fronteiras de confiança", "Implementar gestão segura de segredos",
      "Aplicar princípio de menor privilégio", "Definir política de sessões", "Implementar proteção contra abuso", "Configurar headers de segurança",
      "Validar isolamento entre tenants", "Criar logging de ações sensíveis", "Definir resposta a incidentes", "Configurar secret scanning",
      "Configurar dependency scanning", "Executar revisão de autenticação", "Executar revisão de autorização", "Planejar pentest proporcional ao risco",
      "Testar recuperação após incidente", "Aprovar gate de segurança"
    ]
  },
  {
    id: "quality-reliability", track: "quality", owner: "Engenharia e QA", risk: "R-QUALITY", stage: 3,
    tasks: [
      "Definir estratégia de testes", "Criar pirâmide de testes", "Configurar testes unitários", "Configurar testes de integração",
      "Configurar testes end to end", "Definir testes de contrato", "Criar fixtures representativas", "Definir SLOs iniciais",
      "Configurar error tracking", "Configurar logs estruturados", "Criar alertas acionáveis", "Executar teste de carga inicial",
      "Executar drill de backup e restore", "Aprovar readiness técnico"
    ]
  },
  {
    id: "commercial-growth", track: "commercial", owner: "Growth e Produto", risk: "R-MARKET", stage: 1,
    tasks: [
      "Definir narrativa comercial", "Criar hipótese de pricing", "Testar disposição a pagar", "Definir evento de ativação",
      "Desenhar onboarding comercial", "Criar landing page inicial", "Configurar analytics de aquisição", "Definir canal de aquisição primário",
      "Criar experimento de demanda", "Definir processo de coleta de feedback", "Criar estratégia de conteúdo", "Definir comunicação de lançamento",
      "Criar programa de early adopters", "Medir conversão por etapa", "Revisar pricing com evidências", "Aprovar plano de go to market"
    ]
  },
  {
    id: "billing-finance", track: "billing", owner: "Financeiro e Engenharia", risk: "R-REVENUE", stage: 4,
    tasks: [
      "Definir política de planos", "Definir matriz de entitlements", "Mapear eventos financeiros", "Definir política de cancelamento",
      "Definir tratamento de falhas de pagamento", "Definir reconciliação financeira", "Criar projeção de custos unitários", "Definir controles contra abuso de plano",
      "Validar fluxo financeiro ponta a ponta", "Aprovar gate de monetização"
    ]
  },
  {
    id: "legal-compliance", track: "legal", owner: "Jurídico e Operações", risk: "R-LEGAL", stage: 2,
    tasks: [
      "Inventariar obrigações legais", "Definir titularidade da propriedade intelectual", "Criar ledger de componentes terceiros", "Definir termos de uso",
      "Definir política de privacidade", "Definir política de cookies", "Mapear subprocessadores", "Definir processo de solicitação de titular",
      "Revisar claims comerciais", "Definir política de retenção legal", "Preparar documentação de lançamento", "Aprovar gate jurídico"
    ]
  },
  {
    id: "operations-support", track: "operations", owner: "Operações", risk: "R-OPERATIONS", stage: 3,
    tasks: [
      "Definir modelo operacional", "Criar RACI da equipe", "Definir definition of ready", "Definir definition of done",
      "Configurar gestão de backlog", "Definir fluxo de branches e revisão", "Criar playbook de release", "Criar changelog",
      "Definir canais de suporte", "Criar taxonomia de tickets", "Definir SLA interno", "Criar base de conhecimento",
      "Definir processo de incidentes", "Criar runbook de manutenção", "Planejar continuidade do negócio", "Definir rotina de métricas",
      "Executar ensaio de lançamento", "Aprovar operação pós-lançamento"
    ]
  }
];

const conditionalModules = [
  {
    id: "ai-automation", label: "IA, LLMs e agentes", track: "ai", owner: "IA e Produto", risk: "R-AI", stage: 3,
    signals: ["O produto gera, classifica, recomenda ou decide com modelos de IA", "Há automações probabilísticas"],
    tasks: ["Definir tarefa exata da IA", "Classificar riscos de automação", "Definir política de provedores", "Definir fronteira entre IA e regras", "Criar contratos de entrada e saída", "Criar dataset de avaliação", "Implementar versionamento de prompts", "Implementar revisão humana", "Testar prompt injection", "Definir fallback determinístico", "Monitorar qualidade e custo", "Aprovar gate de IA"]
  },
  {
    id: "subscriptions", label: "Assinaturas e usage billing", track: "billing", owner: "Financeiro e Engenharia", risk: "R-REVENUE", stage: 5,
    signals: ["Receita recorrente", "Cobrança por consumo", "Trial ou freemium"],
    tasks: ["Escolher provedor de billing", "Modelar produtos e preços", "Implementar checkout", "Implementar assinatura mensal e anual", "Implementar trial e cupons", "Implementar portal do cliente", "Implementar entitlements server-side", "Validar assinatura de webhooks", "Garantir idempotência financeira", "Implementar dunning", "Implementar reconciliação", "Aprovar checkout real"]
  },
  {
    id: "marketplace", label: "Marketplace de dois lados", track: "product", owner: "Produto e Operações", risk: "R-MARKETPLACE", stage: 3,
    signals: ["Dois grupos de usuários realizam transações", "Há oferta, demanda e take rate"],
    tasks: ["Definir lados do marketplace", "Definir unidade de liquidez", "Modelar oferta e demanda", "Definir regras de matching", "Criar onboarding de fornecedores", "Criar onboarding de compradores", "Implementar descoberta e filtros", "Implementar confiança e reputação", "Definir disputa e reembolso", "Implementar split ou repasse", "Medir liquidez", "Aprovar operação do marketplace"]
  },
  {
    id: "teams-rbac", label: "Times, multi-tenancy e RBAC", track: "security", owner: "Engenharia e Segurança", risk: "R-TENANCY", stage: 3,
    signals: ["Usuários colaboram em organizações", "Há papéis e dados compartilhados"],
    tasks: ["Modelar workspace e membership", "Definir papéis canônicos", "Criar matriz de permissões", "Implementar convites", "Implementar troca de workspace", "Aplicar isolamento no banco", "Aplicar autorização no servidor", "Controlar administração do workspace", "Registrar mudanças de acesso", "Testar escalada de privilégio", "Testar acesso cross-tenant", "Aprovar gate de tenancy"]
  },
  {
    id: "enterprise", label: "B2B enterprise, SSO e procurement", track: "commercial", owner: "Comercial e Segurança", risk: "R-ENTERPRISE", stage: 6,
    signals: ["Venda para empresas", "Procurement, SSO ou security review"],
    tasks: ["Definir ICP enterprise", "Mapear processo de procurement", "Criar pacote de security review", "Definir contratos enterprise", "Implementar SSO", "Implementar provisionamento de usuários", "Criar controles administrativos", "Definir data residency", "Criar SLA comercial", "Definir onboarding assistido", "Preparar renovação e expansão", "Aprovar readiness enterprise"]
  },
  {
    id: "document-processing", label: "Uploads e processamento de documentos", track: "platform", owner: "Engenharia e Segurança", risk: "R-UPLOAD", stage: 4,
    signals: ["Usuários enviam arquivos", "O sistema extrai ou transforma documentos"],
    tasks: ["Definir formatos aceitos", "Definir limites de arquivo", "Criar storage privado", "Implementar upload resiliente", "Validar MIME e extensão", "Criar quarentena", "Detectar arquivos maliciosos", "Proteger contra zip bombs", "Implementar processamento assíncrono", "Criar retry e dead letter", "Definir retenção e exclusão", "Aprovar segurança de uploads"]
  },
  {
    id: "realtime-collaboration", label: "Realtime e colaboração", track: "platform", owner: "Engenharia", risk: "R-REALTIME", stage: 5,
    signals: ["Múltiplos usuários editam simultaneamente", "Presença ou notificações em tempo real"],
    tasks: ["Definir casos de uso realtime", "Escolher modelo de sincronização", "Definir resolução de conflitos", "Implementar presença", "Implementar atualizações em tempo real", "Implementar edição colaborativa", "Persistir eventos relevantes", "Tratar reconexão", "Aplicar autorização em canais", "Testar concorrência", "Medir latência percebida", "Aprovar colaboração realtime"]
  },
  {
    id: "public-api", label: "APIs públicas, webhooks e integrações", track: "platform", owner: "Plataforma", risk: "R-INTEGRATION", stage: 5,
    signals: ["Clientes integram sistemas", "Há API pública ou webhooks"],
    tasks: ["Definir casos de uso da API", "Versionar contratos públicos", "Implementar autenticação da API", "Implementar scopes", "Definir rate limits", "Criar idempotency keys", "Implementar webhooks assinados", "Implementar retry de webhooks", "Criar portal de documentação", "Criar sandbox de integração", "Monitorar consumo e erros", "Aprovar estabilidade da API"]
  },
  {
    id: "mobile-pwa", label: "Mobile e PWA", track: "frontend", owner: "Produto e Engenharia", risk: "R-MOBILE", stage: 5,
    signals: ["Uso principal em dispositivos móveis", "Necessidade de app ou PWA"],
    tasks: ["Definir estratégia mobile", "Priorizar jornadas móveis", "Definir suporte offline", "Implementar layout mobile", "Implementar navegação touch", "Configurar instalação PWA", "Implementar notificações push", "Tratar permissões do dispositivo", "Otimizar redes lentas", "Testar dispositivos alvo", "Definir distribuição em lojas", "Aprovar experiência mobile"]
  },
  {
    id: "regulated-data", label: "Dados sensíveis ou regulados", track: "legal", owner: "Privacidade e Segurança", risk: "R-REGULATED", stage: 2,
    signals: ["Dados de saúde, finanças, crianças ou alto impacto", "Regulação setorial"],
    tasks: ["Classificar categorias reguladas", "Definir base legal", "Executar avaliação de impacto", "Aplicar minimização de dados", "Definir consentimento", "Implementar trilha de auditoria reforçada", "Definir residência dos dados", "Implementar retenção por categoria", "Criar processo de direitos do titular", "Revisar subprocessadores", "Executar auditoria independente", "Aprovar gate regulatório"]
  },
  {
    id: "internationalization", label: "Internacionalização", track: "ux", owner: "Produto e Operações", risk: "R-I18N", stage: 4,
    signals: ["Mais de um idioma ou país", "Moedas, datas ou regras locais"],
    tasks: ["Definir idiomas suportados", "Escolher idioma canônico", "Externalizar strings", "Localizar datas e números", "Localizar moedas e preços", "Criar glossário de produto", "Definir processo de tradução", "Revisar conteúdo crítico", "Testar expansão de texto", "Testar direção e caracteres", "Executar QA por locale", "Aprovar lançamento internacional"]
  },
  {
    id: "ugc-moderation", label: "UGC e moderação", track: "operations", owner: "Trust and Safety", risk: "R-UGC", stage: 5,
    signals: ["Usuários publicam conteúdo", "Há risco de abuso, fraude ou conteúdo ilegal"],
    tasks: ["Definir política de conteúdo", "Criar taxonomia de violações", "Implementar denúncia", "Implementar bloqueio e silenciamento", "Criar fila de moderação", "Definir níveis de enforcement", "Criar processo de apelação", "Detectar abuso coordenado", "Proteger moderadores", "Registrar decisões de moderação", "Medir precisão e tempo de resposta", "Aprovar operação de trust and safety"]
  },
  {
    id: "data-migration", label: "Migração e importação de dados", track: "data", owner: "Dados e Engenharia", risk: "R-MIGRATION", stage: 4,
    signals: ["Clientes trazem dados existentes", "Há migração de sistema legado"],
    tasks: ["Inventariar fontes de dados", "Definir mapeamento de campos", "Criar contrato de importação", "Implementar validação prévia", "Implementar importação idempotente", "Criar relatório de inconsistências", "Preservar proveniência", "Criar estratégia de rollback", "Testar volumes representativos", "Executar dry run", "Reconciliar amostras migradas", "Aprovar cutover"]
  },
  {
    id: "developer-product", label: "Developer tools", track: "platform", owner: "Developer Experience", risk: "R-DX", stage: 5,
    signals: ["Desenvolvedores são usuários", "SDK, CLI ou documentação técnica são produto"],
    tasks: ["Definir persona desenvolvedora", "Projetar quickstart", "Definir convenções da API", "Criar SDK inicial", "Criar CLI inicial", "Criar exemplos executáveis", "Documentar erros e limites", "Versionar changelog técnico", "Criar ambiente de testes", "Medir time to first success", "Testar documentação sem ajuda", "Aprovar developer experience"]
  },
  {
    id: "community-referral", label: "Comunidade e referral", track: "commercial", owner: "Growth e Comunidade", risk: "R-COMMUNITY", stage: 7,
    signals: ["Crescimento por rede ou comunidade", "Programa de indicação"],
    tasks: ["Definir objetivo da comunidade", "Escolher canal comunitário", "Criar código de conduta", "Definir programa de embaixadores", "Projetar mecanismo de indicação", "Definir incentivo sustentável", "Implementar atribuição de referral", "Prevenir fraude de indicação", "Criar calendário de comunidade", "Medir participação qualificada", "Medir conversão por referral", "Aprovar escala comunitária"]
  },
  {
    id: "sales-customer-success", label: "Vendas assistidas e customer success", track: "operations", owner: "Vendas e Sucesso do Cliente", risk: "R-CS", stage: 6,
    signals: ["Ticket alto ou implantação assistida", "Venda consultiva e renovação humana"],
    tasks: ["Definir etapas do pipeline", "Definir critérios de qualificação", "Criar discovery comercial", "Criar demonstração repetível", "Definir proposta e aprovação", "Implementar CRM mínimo", "Criar handoff vendas para sucesso", "Criar onboarding assistido", "Definir health score", "Criar playbook de risco de churn", "Criar processo de renovação", "Aprovar operação de receita"]
  }
];

const slugify = value => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const effortCycle = ["S", "M", "M", "L", "S", "M", "L", "M", "S", "L", "M", "XL", "M", "L", "S", "M", "L", "M"];

function expandGroup(group, origin) {
  return group.tasks.map((title, index) => {
    const catalogKey = `${group.id}.${slugify(title)}`;
    const previousTitle = index ? group.tasks[index - 1] : null;
    const isGate = /aprovar|validar fluxo|readiness|gate|cutover/i.test(title);
    const isCritical = index === 0 || isGate;
    return {
      catalogKey,
      origin,
      module: group.id,
      moduleLabel: group.label || group.id,
      track: group.track,
      epic: group.label || group.id,
      title,
      description: `Planejar, executar e documentar “${title}” com evidência verificável e responsabilidade humana explícita.`,
      rationale: `Esta tarefa reduz o risco ${group.risk} e prepara uma decisão ou gate do módulo ${group.label || group.id}.`,
      priority: isCritical ? "P0" : index < 5 ? "P1" : index < 10 ? "P2" : "P3",
      effort: effortCycle[index % effortCycle.length],
      ownerRole: group.owner,
      dependsOnCatalogKeys: previousTitle ? [`${group.id}.${slugify(previousTitle)}`] : [],
      acceptanceCriteria: [
        `${title} possui resultado observável e versionado.`,
        "Critérios funcionais e riscos foram revisados por outra pessoa.",
        "A issue contém evidência de teste, decisão ou validação proporcional ao risco."
      ],
      riskIds: [group.risk],
      defaultStage: Math.min(13, group.stage + Math.floor(index / 4)),
      criticalByDefault: isCritical,
      activation: origin === "core" ? { signals: ["Aplicável a qualquer SaaS"] } : { signals: group.signals }
    };
  });
}

export function buildCatalog() {
  const core = coreGroups.flatMap(group => expandGroup(group, "core"));
  const conditional = conditionalModules.flatMap(group => expandGroup(group, "conditional"));
  return {
    schemaVersion: "1.0.0",
    catalogVersion: "2026.08.1",
    generatedAt: "2026-08-19T00:00:00.000Z",
    trackTaxonomy: ["product", "ux", "frontend", "platform", "data", "ai", "security", "quality", "commercial", "billing", "legal", "operations"],
    counts: { core: core.length, conditional: conditional.length, total: core.length + conditional.length },
    modules: conditionalModules.map(({ id, label, track, signals }) => ({ id, label, track, signals })),
    tasks: [...core, ...conditional]
  };
}

export { coreGroups, conditionalModules };

