# Roteiro de demonstração — 5 minutos

## 0:00–0:40 — Problema

“Roadmaps gerados por IA normalmente são listas genéricas. Este projeto transforma uma entrevista em um sistema de execução com contratos, dependências e validações.”

Mostre `MASTER_PROMPT.md` e a matriz de módulos no playbook.

## 0:40–1:30 — Um motor, quatro produtos

Abra os exemplos:

- Habit Bloom para B2C;
- Ops Ledger para B2B multi-tenant;
- Care Signal para IA regulada;
- Local Makers para marketplace.

Destaque mudança de marca, horizonte, módulos e quantidade de tarefas.

## 1:30–2:20 — Backlog operacional

No Ops Ledger:

1. busque `OPSL-001`;
2. filtre por `Segurança & Privacidade`;
3. abra os detalhes de uma tarefa;
4. navegue por uma dependência;
5. altere o status e recarregue a página.

Explique o `localStorage` namespaced e os IDs estáveis.

## 2:20–3:10 — Grafo e critical path

Abra a timeline do Care Signal. Mostre as 14 fases, release gates e a sequência do critical path.

Explique que um ciclo bloqueia a geração e que o caminho usa pesos de esforço.

## 3:10–4:00 — Segurança e portabilidade

Mostre que `tasks.html` abre offline. Explique escaping de conteúdo, import validado por slug e ausência de recursos remotos.

Execute:

```bash
npm test
npm run validate:examples
```

## 4:00–4:40 — Regeneração

Altere uma decisão de módulo em uma cópia do spec e gere novamente. Compare `catalogKey` e ID para demonstrar estabilidade.

## 4:40–5:00 — Encerramento

“O projeto demonstra como eu trabalho: começo pelo problema, transformo decisões em contratos, automatizo a parte repetível e mantenho o resultado verificável.”

