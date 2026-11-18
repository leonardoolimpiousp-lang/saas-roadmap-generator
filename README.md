# Universal SaaS Roadmap Generator

Kit portátil para entrevistar fundadores e transformar decisões de produto em um roadmap autônomo, auditável e versionável.

## O que o kit entrega

- `tasks.html`: painel offline, responsivo e imprimível.
- `project-spec.json`: decisões e hipóteses confirmadas na entrevista.
- `tasks.json`: backlog canônico, inclusive itens marcados como `not_applicable`.
- `backlog.md`: visão pronta para revisão e criação de GitHub Issues.

O catálogo contém tarefas universais e módulos condicionais. Tarefas específicas do domínio entram pelo `project-spec.json`; conteúdo específico do MetaFlow não faz parte do kit.

## Uso com uma IA

1. Anexe esta pasta ou disponibilize seus arquivos à IA.
2. Cole o conteúdo de `MASTER_PROMPT.md`.
3. Responda à entrevista em blocos.
4. Confirme a matriz de escopo.
5. Peça a geração dos quatro artefatos.

Se a IA tiver terminal, ela deve executar:

```bash
node scripts/generate-roadmap.mjs --spec examples/b2c-simple/project-spec.json --out examples/b2c-simple
node validate-roadmap.mjs examples/b2c-simple
```

## Uso local

```bash
node scripts/build-catalog.mjs
node scripts/generate-examples.mjs
node --test tests/kit.test.mjs
```

O gerador usa apenas APIs nativas do Node.js e não instala dependências.

## Regeneração segura

Quando `tasks.json` já existe no diretório de saída, o gerador preserva o ID associado a cada `catalogKey`. Tarefas novas recebem o próximo número livre. Mudanças de fase ou prioridade não renumeram o backlog.

## Estrutura

```text
saas-roadmap-generator/
├── MASTER_PROMPT.md
├── INTERVIEW_PLAYBOOK.md
├── catalog/
│   └── universal-backlog.json
├── schemas/
├── template/
│   └── tasks.template.html
├── scripts/
├── examples/
├── tests/
└── validate-roadmap.mjs
```

## Princípios

- O roadmap é uma hipótese operacional, não uma promessa de prazo.
- Segurança, privacidade e qualidade não são removidas silenciosamente.
- Itens fora de escopo permanecem rastreáveis como `not_applicable`.
- Dependências formam um DAG; ciclos invalidam o roadmap.
- O estado compartilhado continua pertencendo ao sistema de gestão escolhido pela equipe.

