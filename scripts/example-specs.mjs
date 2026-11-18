import { conditionalModules } from "./catalog-source.mjs";

const defaultArchitecture = [
  { layer: "Experience", description: "Interface responsiva, acessível e orientada à jornada principal." },
  { layer: "Application", description: "Casos de uso, autorização, workflows e transações." },
  { layer: "Domain", description: "Entidades, políticas e invariantes independentes da infraestrutura." },
  { layer: "Infrastructure", description: "Persistência, filas, billing, notificações e integrações atrás de portas." }
];

const defaultMetrics = [
  { id: "activation", name: "Ativação", category: "product", target: "≥60%", direction: "increase", progress: 0 },
  { id: "retention", name: "Retenção em 4 semanas", category: "product", target: "≥35%", direction: "increase", progress: 0 },
  { id: "conversion", name: "Trial para pago", category: "commercial", target: "≥10%", direction: "increase", progress: 0 },
  { id: "availability", name: "Disponibilidade mensal", category: "quality", target: "≥99,9%", direction: "maintain", progress: 0 },
  { id: "security", name: "Vulnerabilidades críticas abertas", category: "security", target: "0", direction: "decrease", progress: 0 }
];

const defaultRaci = roles => [
  { area: "Produto", responsible: roles.product, accountable: roles.founder, consulted: [roles.engineering], informed: [roles.operations] },
  { area: "Engenharia", responsible: roles.engineering, accountable: roles.founder, consulted: [roles.product], informed: [roles.operations] },
  { area: "Go to market", responsible: roles.operations, accountable: roles.founder, consulted: [roles.product], informed: [roles.engineering] },
  { area: "Segurança e release", responsible: roles.engineering, accountable: roles.founder, consulted: [roles.operations], informed: [roles.product] }
];

function moduleMatrix(included, uncertain = []) {
  return Object.fromEntries(conditionalModules.map(module => [module.id, {
    status: included.includes(module.id) ? "included" : uncertain.includes(module.id) ? "uncertain" : "not_applicable",
    reason: included.includes(module.id) ? "Necessário para a jornada e modelo de negócio desta fixture." : uncertain.includes(module.id) ? "Hipótese a validar antes de comprometer implementação." : "Não faz parte do escopo confirmado desta fixture."
  }]));
}

function domainTasks(module, track, owner, riskId, titles) {
  return titles.map((title, index) => ({
    catalogKey: `${module}.${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    track,
    module,
    title,
    description: `Entregar ${title.toLowerCase()} como parte verificável do workflow específico do produto.`,
    rationale: "Esta tarefa implementa uma capacidade própria do domínio e não pertence ao catálogo universal.",
    priority: index < 2 ? "P1" : "P2",
    effort: index % 3 === 0 ? "L" : "M",
    ownerRole: owner,
    acceptanceCriteria: [`${title} funciona na jornada principal.`, "Uma pessoa diferente valida o resultado com dados representativos."],
    riskIds: [riskId],
    dependsOnCatalogKeys: index ? [`${module}.${titles[index - 1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`] : [],
    defaultStage: Math.min(13, 5 + index)
  }));
}

function base({ name, slug, prefix, description, northStar, stage, months, theme, team, included, uncertain, outOfScope, roles, domainTrack, domainModule, domainTitles }) {
  return {
    schemaVersion: "1.0.0",
    project: { name, slug, prefix, description, stage, artifactLanguage: "pt-BR", northStar, outOfScope, repositoryPath: null },
    theme: { ...theme, surface: "#ffffff", background: "#f4f7f5", text: "#172b36", tone: "claro, direto e confiável", logoDataUrl: null },
    timelineMonths: months,
    team,
    modules: moduleMatrix(included, uncertain),
    architecture: defaultArchitecture,
    risks: [
      { id: "R-DOMAIN", title: "Workflow principal não entrega o resultado prometido", probability: "medium", impact: "critical", owner: roles.product, mitigation: "Validar a fatia vertical com usuários e fixtures representativas antes de expandir." }
    ],
    metrics: defaultMetrics,
    raci: defaultRaci(roles),
    domainTracks: [domainTrack],
    domainTasks: domainTasks(domainModule, domainTrack, roles.product, "R-DOMAIN", domainTitles)
  };
}

export const examples = {
  "b2c-simple": base({
    name: "Habit Bloom", slug: "habit-bloom", prefix: "HBLM", stage: "validation", months: 8,
    description: "SaaS B2C que ajuda profissionais a criar rotinas sustentáveis por meio de planos pequenos, acompanhamento de progresso e reflexão semanal.",
    northStar: "Semanas em que o usuário conclui pelo menos três ações planejadas.",
    theme: { primary: "#173b35", accent: "#2f9e73" },
    team: [{ name: "Fundadora", role: "Produto", capacity: "full-time" }, { name: "Parceiro", role: "Engenharia", capacity: "part-time" }],
    included: ["subscriptions", "mobile-pwa", "internationalization", "community-referral", "data-migration"], uncertain: [],
    outOfScope: ["Marketplace", "Dados regulados", "Venda enterprise"],
    roles: { founder: "Fundadora", product: "Produto", engineering: "Engenharia", operations: "Growth" }, domainTrack: "behavior-change", domainModule: "habit-loop",
    domainTitles: ["Definir modelo de hábito", "Criar plano semanal", "Registrar ação concluída", "Gerar reflexão semanal"]
  }),
  "b2b-multitenant": base({
    name: "Ops Ledger", slug: "ops-ledger", prefix: "OPSL", stage: "mvp", months: 12,
    description: "SaaS B2B multi-tenant para equipes operacionais registrarem procedimentos, evidências de execução, aprovações e auditorias internas.",
    northStar: "Processos críticos concluídos com evidência e aprovação dentro do SLA.",
    theme: { primary: "#172554", accent: "#2563eb" },
    team: [{ name: "CEO", role: "Produto e vendas", capacity: "full-time" }, { name: "CTO", role: "Engenharia", capacity: "full-time" }, { name: "Ops", role: "Operações", capacity: "part-time" }],
    included: ["subscriptions", "teams-rbac", "enterprise", "public-api", "internationalization", "sales-customer-success", "data-migration"], uncertain: ["realtime-collaboration"],
    outOfScope: ["Aplicativo móvel nativo", "Marketplace", "UGC público"],
    roles: { founder: "CEO", product: "Produto", engineering: "CTO", operations: "Operações" }, domainTrack: "process-governance", domainModule: "controlled-procedure",
    domainTitles: ["Modelar procedimento controlado", "Versionar procedimento", "Executar checklist operacional", "Anexar evidência", "Solicitar aprovação", "Registrar não conformidade", "Gerar trilha de auditoria", "Exportar pacote de auditoria"]
  }),
  "ai-regulated": base({
    name: "Care Signal", slug: "care-signal", prefix: "CARE", stage: "validation", months: 18,
    description: "SaaS regulado que auxilia equipes clínicas a priorizar documentos e sinais operacionais, mantendo revisão humana e evidência auditável.",
    northStar: "Casos priorizados corretamente e revisados dentro do tempo clínico definido.",
    theme: { primary: "#102a43", accent: "#0e7490" },
    team: [{ name: "CEO", role: "Produto clínico", capacity: "full-time" }, { name: "CTO", role: "Engenharia", capacity: "full-time" }, { name: "DPO", role: "Privacidade", capacity: "external" }, { name: "Especialista", role: "Validação clínica", capacity: "part-time" }],
    included: ["ai-automation", "subscriptions", "teams-rbac", "document-processing", "public-api", "regulated-data", "internationalization", "data-migration", "sales-customer-success"], uncertain: [],
    outOfScope: ["Decisão clínica autônoma", "Dados sem base legal", "Marketplace"],
    roles: { founder: "CEO", product: "Produto clínico", engineering: "CTO", operations: "DPO" }, domainTrack: "clinical-validation", domainModule: "clinical-triage",
    domainTitles: ["Definir indicação de uso", "Definir eventos clínicos críticos", "Criar protocolo de anotação", "Construir gold dataset", "Medir sensibilidade", "Medir especificidade", "Implementar revisão clínica", "Aprovar validação clínica"]
  }),
  "marketplace": base({
    name: "Local Makers", slug: "local-makers", prefix: "LMKT", stage: "mvp", months: 14,
    description: "Marketplace que conecta pequenos produtores locais a consumidores, com catálogo, disponibilidade, pedidos, reputação e retirada agendada.",
    northStar: "Pedidos concluídos por comprador ativo sem intervenção do suporte.",
    theme: { primary: "#422006", accent: "#d97706" },
    team: [{ name: "CEO", role: "Marketplace e growth", capacity: "full-time" }, { name: "Tech", role: "Engenharia", capacity: "full-time" }, { name: "Ops", role: "Operação local", capacity: "full-time" }],
    included: ["marketplace", "subscriptions", "teams-rbac", "realtime-collaboration", "public-api", "mobile-pwa", "internationalization", "ugc-moderation", "community-referral", "sales-customer-success"], uncertain: [],
    outOfScope: ["Logística própria", "Crédito ao consumidor", "Venda internacional na primeira release"],
    roles: { founder: "CEO", product: "Marketplace", engineering: "Tech", operations: "Ops" }, domainTrack: "local-commerce", domainModule: "order-fulfillment",
    domainTitles: ["Cadastrar produtor", "Publicar catálogo local", "Gerenciar disponibilidade", "Criar pedido", "Confirmar pagamento", "Agendar retirada", "Confirmar entrega", "Avaliar transação"]
  })
};

