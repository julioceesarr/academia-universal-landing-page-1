# ADR 0001: aprovações na main em projeto individual

- **Status:** aceito
- **Data:** 14/10/2026

## Contexto

O PGCS exige que as mudanças entrem na main por Pull Request revisado. O projeto Academia Universal é conduzido por uma única pessoa, e o GitHub não permite aprovar o próprio Pull Request. Com uma aprovação obrigatória, nenhum merge seria possível.

## Decisão

A main exige Pull Request, histórico linear e não permite contornar as regras, mas exige zero aprovações. A revisão é feita pelo próprio responsável, em etapa separada, pelo checklist da seção 5.3 do PGCS. O deploy em produção, quando automatizado por workflow, passará pela aprovação do Environment `production`.

## Alternativas consideradas

- **Segunda conta para aprovar os Pull Requests:** descartada. Os Termos de Serviço do GitHub permitem uma conta gratuita por pessoa, e a revisão cumpriria a regra apenas no papel.
- **Revisor permanente (colega ou monitor):** alternativa válida. Basta adicioná-lo como colaborador e voltar a exigência para uma aprovação.

## Consequências

Os merges não têm revisão de outra pessoa. O risco é aceitável: o site é estático, as mudanças são pequenas e cada uma passa pelo checklist. O desvio em relação à revisão por pares fica registrado, e não escondido em uma configuração.
