# ADR 0002: Par de revisão e uma aprovação na main

Status: aceito (substitui o ADR 0001)
Data: 28/10/2026

## Contexto
O ADR 0001 registrou que o projeto, por ser individual, não teria
revisor e a main exigiria zero aprovações. A atividade N2 p2 exige
um par de revisão com acesso de escrita.

## Decisão
OtavioGelain foi adicionado como colaborador. A main passa a exigir
uma aprovação em Pull Request antes do merge, além de bloquear push direto.

## Consequências
Toda mudança na main passa por Pull Request revisado por outra pessoa.
O ADR 0001 fica como histórico, substituído por este.
