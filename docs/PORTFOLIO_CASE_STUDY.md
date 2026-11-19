# Case study — Universal SaaS Roadmap Generator

## Resumo

Desenvolvi um sistema que transforma uma entrevista com o fundador em um roadmap SaaS estruturado, auditável e navegável. A solução combina product discovery, modelagem de domínio, geração determinística, algoritmos de grafo e uma interface offline responsiva.

## Contexto

O ponto de partida foi um roadmap detalhado criado para um SaaS científico. A interface funcionava bem, mas o conteúdo e a lógica estavam acoplados ao produto original. O desafio foi extrair um motor universal sem transformar todos os próximos projetos em cópias do primeiro.

## Minha responsabilidade

- definir o contrato entre entrevista, catálogo e painel;
- separar tarefas universais, condicionais e de domínio;
- desenhar o modelo de identidade estável;
- implementar fases adaptativas e critical path;
- criar o shell HTML offline e responsivo;
- definir validações e casos de teste;
- documentar operação e exemplos.

## Restrições

- nenhum framework ou dependência de runtime;
- funcionamento direto por `file://`;
- compatibilidade com diferentes provedores de IA;
- nenhuma credencial no painel;
- regeneração sem quebrar IDs existentes;
- módulos excluídos continuam auditáveis.

## Decisões principais

### Catálogo versionado, não prompt monolítico

O prompt conduz a entrevista, mas o conhecimento reutilizável vive em um catálogo de 352 tarefas. Isso torna o resultado testável e reduz omissões silenciosas.

### `catalogKey` como identidade

IDs sequenciais são bons para pessoas, mas frágeis para regeneração. Usei uma chave semântica permanente para recuperar o mesmo ID mesmo após mudanças de fase ou prioridade.

### Exclusão rastreável

Remover uma tarefa apaga a decisão. Por isso, módulos fora do escopo permanecem com `applicability: not_applicable` e justificativa.

### Grafo como fonte de sequenciamento

O critical path não é uma etiqueta manual. Ele é calculado pelo caminho de maior peso no DAG usando esforços relativos.

### HTML standalone

O painel final contém dados, estilos e comportamento em um arquivo. Isso simplifica demonstração, handoff e arquivamento, sem backend ou build.

## Resultado técnico

- 160 tarefas universais;
- 192 tarefas condicionais;
- 16 módulos ativáveis;
- quatro fixtures entre 224 e 288 tarefas ativas;
- 6–14 fases calculadas por horizonte;
- nove testes cobrindo contratos, segurança e grafos;
- import/export JSON, CSV e Markdown;
- busca, filtros, status, RACI, riscos, métricas e impressão;
- zero dependências de runtime.

## Qualidade e segurança

A suíte testa unicidade, estabilidade de IDs, ciclos, referências inválidas, critical path, parsing de JSON, isolamento de storage e neutralização de payloads XSS. O template não carrega recursos externos.

## O que eu faria a seguir

1. Adicionar cálculo de capacidade por papel e calendário.
2. Gerar diff semântico entre duas versões do roadmap.
3. Integrar opcionalmente GitHub Projects sem armazenar credenciais no HTML.
4. Criar catálogo multilíngue revisado.
5. Medir a qualidade do roadmap com usuários e consultorias reais.

## Competências demonstradas

`Product engineering` · `Node.js` · `JavaScript` · `JSON Schema` · `Graph algorithms` · `Secure rendering` · `Responsive UI` · `CLI design` · `Testing` · `CI/CD` · `Technical writing`

