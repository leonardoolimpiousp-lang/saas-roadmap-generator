# Runbook operacional

## Pré-requisitos

- Node.js 20 ou superior.
- Nenhuma dependência de runtime.
- Um `project-spec.json` validável.

## Gerar um roadmap

```bash
node scripts/generate-roadmap.mjs \
  --spec caminho/project-spec.json \
  --out caminho/roadmap
```

Arquivos esperados:

```text
roadmap/
├── project-spec.json
├── tasks.json
├── backlog.md
└── tasks.html
```

## Validar

```bash
node validate-roadmap.mjs caminho/roadmap
```

O comando falha quando encontra:

- schema incompatível;
- ID ou `catalogKey` duplicado;
- dependência inexistente;
- ciclo no grafo;
- critical path inconsistente;
- tarefa P0 sem owner ou risco;
- fase sem gate;
- item N/A sem justificativa.

Contagem fora de 220–400 tarefas ativas gera warning, não falha automática.

## Atualizar um roadmap existente

1. Preserve o `tasks.json` anterior no diretório de saída.
2. Atualize o `project-spec.json`.
3. Execute o gerador novamente.
4. Revise tarefas novas, removidas e alteradas por `catalogKey`.
5. Execute o validador.
6. Versione os quatro artefatos juntos.

O gerador lê o backlog anterior e preserva IDs conhecidos.

## Atualizar o catálogo

1. Edite `scripts/catalog-source.mjs`.
2. Não altere um `catalogKey` publicado sem uma migração explícita.
3. Recrie o catálogo:

```bash
npm run build:catalog
```

4. Regenere fixtures e execute a suíte:

```bash
npm run check
```

5. Revise a mudança na contagem core/conditional.

## Quality gates

Antes de uma release:

- testes aprovados;
- quatro fixtures válidas;
- nenhum ciclo;
- screenshots representativos atualizados quando a interface mudar;
- README e case study coerentes com as capacidades reais;
- nenhuma credencial, dado pessoal ou recurso remoto no HTML;
- exemplos abertos em desktop e mobile;
- changelog do catálogo registrado no commit.

## CI

O workflow `.github/workflows/ci.yml` usa Node.js 20 e executa `npm run check` em pushes para `main` e pull requests.

## Recuperação

### HTML não abre

- confirme que o arquivo foi gerado a partir do template atual;
- execute `node validate-roadmap.mjs`;
- verifique erros de sintaxe com a suíte de testes;
- regenere a partir do `project-spec.json` e do `tasks.json` anterior.

### IDs foram alterados

- restaure o `tasks.json` anterior no diretório de saída;
- confirme que os `catalogKey` não foram renomeados;
- regenere antes de publicar.

### Ciclo detectado

- identifique as tarefas indicadas pelo validador;
- remova a dependência de menor valor causal;
- não force a geração ignorando o erro.

### Import do painel recusado

- confirme que o `project.slug` é o mesmo;
- confirme `schemaVersion: 1.0.0`;
- use o JSON exportado pelo próprio painel como referência.

## Release recomendada

```text
issue → branch curta → testes → revisão → preview dos HTMLs
→ validação das fixtures → merge → tag semântica
```

