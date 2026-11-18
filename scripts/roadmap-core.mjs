export const effortWeights = { XS: 1, S: 2, M: 3, L: 5, XL: 8 };

export const trackMeta = {
  product: { label: "Produto", color: "#2563eb" },
  ux: { label: "UX & Research", color: "#8b5cf6" },
  frontend: { label: "Frontend", color: "#0ea5e9" },
  platform: { label: "Plataforma & Backend", color: "#0f766e" },
  data: { label: "Dados & Analytics", color: "#0891b2" },
  ai: { label: "IA & Automação", color: "#7c3aed" },
  security: { label: "Segurança & Privacidade", color: "#dc2626" },
  quality: { label: "Qualidade & Reliability", color: "#ea580c" },
  commercial: { label: "Comercial & Growth", color: "#16a34a" },
  billing: { label: "Billing & Financeiro", color: "#ca8a04" },
  legal: { label: "Jurídico & Compliance", color: "#be123c" },
  operations: { label: "Operações & Suporte", color: "#475569" }
};

const stageDefinitions = [
  ["Descoberta e contexto", "Problema, fontes e restrições estão documentados com hipóteses explícitas."],
  ["Estratégia e validação", "ICP, JTBD, posicionamento e critérios de validação foram aprovados."],
  ["Sistema de produto", "Jornada, escopo, arquitetura da informação e fatia vertical estão testáveis."],
  ["Arquitetura", "Decisões estruturais, riscos e contratos técnicos foram revisados."],
  ["Fundação", "Ambientes, identidade, dados, segurança e CI suportam desenvolvimento seguro."],
  ["Fatia vertical", "Um usuário percorre o caminho principal e produz valor observável."],
  ["Produto principal", "Workflows essenciais atendem critérios funcionais e de domínio."],
  ["Dados e integrações", "Dados, jobs e integrações são auditáveis, resilientes e operáveis."],
  ["Monetização", "Entitlements e fluxos financeiros reais são reconciliáveis."],
  ["Qualidade e segurança", "Testes, SLOs e controles proporcionais ao risco foram aprovados."],
  ["Prontidão de lançamento", "Operação, suporte, jurídico e go-to-market estão prontos."],
  ["Alpha", "Usuários controlados completam jornadas reais e os riscos críticos estão fechados."],
  ["Beta", "Uso real confirma valor, qualidade e suporte sustentável."],
  ["Lançamento e escala", "Métricas de negócio e operação autorizam expansão gradual."]
];

const phaseColors = ["#b42318", "#b54708", "#175cd3", "#6941c6", "#087a68", "#027a48", "#0e7090", "#3538cd", "#b54708", "#b42318", "#475467", "#3b7c0f", "#087a68", "#1d2939"];

export function phaseCountForMonths(months) {
  if (months <= 7) return 6;
  if (months <= 9) return 8;
  if (months <= 13) return 10;
  if (months <= 15) return 12;
  return 14;
}

export function createPhases(months) {
  const count = phaseCountForMonths(months);
  return Array.from({ length: count }, (_, index) => {
    const stageIndex = count === 1 ? 0 : Math.round(index * 13 / (count - 1));
    const [name, gate] = stageDefinitions[stageIndex];
    const start = Number((index * months / count).toFixed(1));
    const end = Number(((index + 1) * months / count).toFixed(1));
    return {
      id: `F${index}`,
      name,
      window: start === 0 ? `Início–mês ${end}` : `Mês ${start}–${end}`,
      objective: `Concluir ${name.toLowerCase()} com evidências suficientes para decidir o próximo investimento.`,
      milestone: `${name} aprovada`,
      gate,
      color: phaseColors[stageIndex]
    };
  });
}

function phaseForStage(stage, phases) {
  const index = Math.round(Math.max(0, Math.min(13, stage)) * (phases.length - 1) / 13);
  return phases[index];
}

function highestExistingSequence(previousTasks, prefix) {
  return previousTasks.reduce((max, task) => {
    const match = new RegExp(`^${prefix}-(\\d+)$`).exec(task.id || "");
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
}

function builtInRisk(id, owner) {
  const labels = {
    "R-PRODUCT": "Construir sem evidência de problema", "R-USABILITY": "Usuários não completam a jornada", "R-DELIVERY": "Entrega inconsistente",
    "R-PLATFORM": "Fundação técnica limita evolução", "R-DATA": "Métricas ou dados incorretos", "R-SECURITY": "Incidente de segurança",
    "R-QUALITY": "Falha em produção", "R-MARKET": "Baixa demanda", "R-REVENUE": "Receita ou cobrança incorreta", "R-LEGAL": "Não conformidade legal",
    "R-OPERATIONS": "Operação insustentável", "R-AI": "Automação incorreta ou não auditável", "R-MARKETPLACE": "Marketplace sem liquidez",
    "R-TENANCY": "Acesso indevido entre organizações", "R-ENTERPRISE": "Bloqueio em procurement", "R-UPLOAD": "Arquivo malicioso ou perda de dados",
    "R-REALTIME": "Conflito ou perda de atualização", "R-INTEGRATION": "Quebra de integração", "R-MOBILE": "Experiência móvel inadequada",
    "R-REGULATED": "Violação regulatória", "R-I18N": "Erro de localização", "R-UGC": "Abuso ou conteúdo ilegal", "R-MIGRATION": "Perda na migração",
    "R-DX": "Adoção técnica baixa", "R-COMMUNITY": "Crescimento incentivado sem qualidade", "R-CS": "Churn por operação comercial"
  };
  return { id, title: labels[id] || id, probability: "medium", impact: id.includes("SECURITY") || id.includes("REGULATED") ? "critical" : "high", owner, mitigation: "Executar as tarefas e gates associados, medir sinais antecipados e manter rollback documentado." };
}

export function findCriticalPath(tasks) {
  const active = tasks.filter(task => task.applicability !== "not_applicable");
  const byId = new Map(active.map(task => [task.id, task]));
  const indegree = new Map(active.map(task => [task.id, 0]));
  const outgoing = new Map(active.map(task => [task.id, []]));
  for (const task of active) {
    for (const dependency of task.dependencies) {
      if (!byId.has(dependency)) continue;
      indegree.set(task.id, indegree.get(task.id) + 1);
      outgoing.get(dependency).push(task.id);
    }
  }
  const queue = [...active.filter(task => indegree.get(task.id) === 0).map(task => task.id)].sort();
  const order = [];
  while (queue.length) {
    const id = queue.shift();
    order.push(id);
    for (const next of outgoing.get(id)) {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) queue.push(next);
    }
    queue.sort();
  }
  if (order.length !== active.length) throw new Error("Dependency graph contains a cycle");

  const distance = new Map();
  const parent = new Map();
  for (const id of order) {
    const task = byId.get(id);
    const dependencies = task.dependencies.filter(dep => byId.has(dep));
    let bestParent = null;
    let bestDistance = 0;
    for (const dep of dependencies) {
      if ((distance.get(dep) || 0) > bestDistance) {
        bestDistance = distance.get(dep);
        bestParent = dep;
      }
    }
    distance.set(id, bestDistance + effortWeights[task.effort]);
    if (bestParent) parent.set(id, bestParent);
  }
  let end = order[0];
  for (const id of order) if ((distance.get(id) || 0) > (distance.get(end) || 0)) end = id;
  const path = [];
  while (end) {
    path.unshift(end);
    end = parent.get(end);
  }
  return path;
}

export function composeRoadmap(spec, catalog, previousTasks = []) {
  const phases = createPhases(spec.timelineMonths);
  const priorIds = new Map(previousTasks.map(task => [task.catalogKey, task.id]));
  let nextSequence = highestExistingSequence(previousTasks, spec.project.prefix) + 1;
  const entries = [
    ...catalog.tasks,
    ...spec.domainTasks.map(task => ({ ...task, origin: "domain-specific", moduleLabel: task.module, epic: task.module, activation: { signals: ["Definido na entrevista de domínio"] } }))
  ];
  const seen = new Set();
  const deduplicated = entries.filter(entry => {
    if (seen.has(entry.catalogKey)) return false;
    seen.add(entry.catalogKey);
    return true;
  });

  const idByCatalogKey = new Map();
  for (const entry of deduplicated) {
    const existing = priorIds.get(entry.catalogKey);
    const id = existing || `${spec.project.prefix}-${String(nextSequence++).padStart(3, "0")}`;
    idByCatalogKey.set(entry.catalogKey, id);
  }

  const tasks = deduplicated.map(entry => {
    const moduleDecision = entry.origin === "core"
      ? { status: "included", reason: "Tarefa universal de SaaS." }
      : entry.origin === "domain-specific"
        ? { status: "included", reason: "Tarefa específica confirmada na entrevista." }
        : spec.modules[entry.module] || { status: "uncertain", reason: "Módulo não decidido na entrevista." };
    const applicability = moduleDecision.status;
    const phase = phaseForStage(entry.defaultStage, phases);
    return {
      id: idByCatalogKey.get(entry.catalogKey),
      catalogKey: entry.catalogKey,
      origin: entry.origin,
      module: entry.module,
      phase: phase.id,
      track: entry.track,
      epic: entry.epic || entry.moduleLabel || entry.module,
      title: entry.title,
      description: entry.description,
      rationale: entry.rationale,
      priority: entry.priority,
      effort: entry.effort,
      ownerRole: entry.ownerRole,
      dependencies: [],
      acceptanceCriteria: entry.acceptanceCriteria,
      riskIds: entry.riskIds,
      milestone: phase.milestone,
      releaseGate: phase.gate,
      applicability,
      ...(applicability === "not_applicable" ? { exclusionReason: moduleDecision.reason } : {}),
      status: applicability === "not_applicable" ? "not_applicable" : phase.id === "F0" ? "ready" : "backlog",
      critical: false
    };
  });

  const byCatalogKey = new Map(tasks.map(task => [task.catalogKey, task]));
  deduplicated.forEach((entry, index) => {
    const task = tasks[index];
    task.dependencies = (entry.dependsOnCatalogKeys || [])
      .map(key => byCatalogKey.get(key))
      .filter(dependency => dependency && dependency.applicability !== "not_applicable" && task.applicability !== "not_applicable")
      .map(dependency => dependency.id);
  });

  const criticalPath = findCriticalPath(tasks);
  const criticalOrder = new Map(criticalPath.map((id, index) => [id, index + 1]));
  tasks.forEach(task => {
    if (criticalOrder.has(task.id)) {
      task.critical = true;
      task.criticalPathOrder = criticalOrder.get(task.id);
    }
  });

  const providedRisks = new Map(spec.risks.map(risk => [risk.id, risk]));
  for (const task of tasks.filter(task => task.applicability !== "not_applicable")) {
    for (const riskId of task.riskIds) if (!providedRisks.has(riskId)) providedRisks.set(riskId, builtInRisk(riskId, task.ownerRole));
  }

  return {
    schemaVersion: "1.0.0",
    generatedAt: new Date().toISOString(),
    project: spec.project,
    theme: spec.theme,
    timelineMonths: spec.timelineMonths,
    phases,
    tracks: { ...trackMeta, ...(spec.domainTracks || []).reduce((acc, track, index) => ({ ...acc, [track]: { label: track, color: phaseColors[(index + 2) % phaseColors.length] } }), {}) },
    architecture: spec.architecture,
    tasks,
    criticalPath,
    risks: [...providedRisks.values()],
    metrics: spec.metrics,
    raci: spec.raci,
    moduleMatrix: spec.modules,
    outOfScope: spec.project.outOfScope || []
  };
}

export function validateProjectSpec(spec, catalog) {
  const errors = [];
  if (!spec || spec.schemaVersion !== "1.0.0") errors.push("Project spec schemaVersion must be 1.0.0");
  if (!spec?.project?.name || !spec?.project?.description || !spec?.project?.northStar) errors.push("Project identity, description and northStar are required");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(spec?.project?.slug || "")) errors.push("Project slug is invalid");
  if (!/^[A-Z][A-Z0-9]{1,7}$/.test(spec?.project?.prefix || "")) errors.push("Project prefix must contain 2–8 uppercase alphanumeric characters");
  if (!Number.isInteger(spec?.timelineMonths) || spec.timelineMonths < 6 || spec.timelineMonths > 18) errors.push("timelineMonths must be an integer between 6 and 18");
  for (const key of ["primary", "accent", "surface", "background", "text"]) if (!/^#[0-9a-f]{6}$/i.test(spec?.theme?.[key] || "")) errors.push(`Theme color ${key} must be a six-digit hex color`);
  if (!Array.isArray(spec?.team) || !spec.team.length) errors.push("At least one team member or role is required");
  if (!Array.isArray(spec?.architecture) || spec.architecture.length < 3) errors.push("At least three architecture layers are required");
  if (!Array.isArray(spec?.risks) || !spec.risks.length) errors.push("At least one product-specific risk is required");
  if (!Array.isArray(spec?.metrics) || !spec.metrics.length) errors.push("At least one metric is required");
  if (!Array.isArray(spec?.raci) || !spec.raci.length) errors.push("At least one RACI assignment is required");
  if (!Array.isArray(spec?.domainTasks)) errors.push("domainTasks must be an array");
  const validStatuses = new Set(["included", "not_applicable", "uncertain"]);
  for (const moduleDefinition of catalog?.modules || []) {
    const decision = spec?.modules?.[moduleDefinition.id];
    if (!decision) errors.push(`Module decision missing: ${moduleDefinition.id}`);
    else {
      if (!validStatuses.has(decision.status)) errors.push(`Module ${moduleDefinition.id} has invalid status`);
      if (!decision.reason?.trim()) errors.push(`Module ${moduleDefinition.id} needs a reason`);
    }
  }
  const domainKeys = new Set();
  for (const task of spec?.domainTasks || []) {
    if (!task.catalogKey || domainKeys.has(task.catalogKey)) errors.push(`Duplicate or missing domain catalogKey: ${task.catalogKey || "unknown"}`);
    domainKeys.add(task.catalogKey);
  }
  return { valid: errors.length === 0, errors };
}

export function validateRoadmap(payload) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const keys = new Set();
  const taskById = new Map();
  if (!payload || payload.schemaVersion !== "1.0.0") errors.push("schemaVersion must be 1.0.0");
  if (!Array.isArray(payload.phases) || payload.phases.length < 6 || payload.phases.length > 14) errors.push("Roadmap must contain 6–14 phases");
  for (const phase of payload.phases || []) if (!phase.gate || !phase.milestone) errors.push(`Phase ${phase.id || "unknown"} is missing gate or milestone`);
  for (const task of payload.tasks || []) {
    if (ids.has(task.id)) errors.push(`Duplicate task id: ${task.id}`);
    if (keys.has(task.catalogKey)) errors.push(`Duplicate catalogKey: ${task.catalogKey}`);
    ids.add(task.id); keys.add(task.catalogKey); taskById.set(task.id, task);
    if (!/^[A-Z][A-Z0-9]{1,7}-\d{3,}$/.test(task.id)) errors.push(`Invalid task id: ${task.id}`);
    if (!task.acceptanceCriteria || task.acceptanceCriteria.length < 2) errors.push(`${task.id} needs at least two acceptance criteria`);
    if (task.priority === "P0" && (!task.ownerRole || !task.riskIds?.length)) errors.push(`${task.id} P0 needs owner and risk`);
    if (task.applicability === "not_applicable" && (!task.exclusionReason || task.status !== "not_applicable")) errors.push(`${task.id} N/A needs reason and matching status`);
  }
  for (const task of payload.tasks || []) {
    for (const dependency of task.dependencies || []) {
      if (!taskById.has(dependency)) errors.push(`${task.id} has unknown dependency ${dependency}`);
      if (task.applicability !== "not_applicable" && taskById.get(dependency)?.applicability === "not_applicable") errors.push(`${task.id} depends on N/A task ${dependency}`);
    }
  }
  try {
    const calculated = findCriticalPath(payload.tasks || []);
    if (JSON.stringify(calculated) !== JSON.stringify(payload.criticalPath || [])) errors.push("Critical path does not match dependency graph");
  } catch (error) { errors.push(error.message); }
  const activeCount = (payload.tasks || []).filter(task => task.applicability !== "not_applicable").length;
  if (activeCount < 220 || activeCount > 400) warnings.push(`Active task count ${activeCount} is outside the expected 220–400 range`);
  return { valid: errors.length === 0, errors, warnings, stats: { tasks: payload.tasks?.length || 0, active: activeCount, notApplicable: (payload.tasks || []).filter(task => task.applicability === "not_applicable").length, phases: payload.phases?.length || 0, criticalPath: payload.criticalPath?.length || 0 } };
}
