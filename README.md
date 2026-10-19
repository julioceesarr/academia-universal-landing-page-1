# Academia Universal — Landing Page

Landing page estática da Academia Universal, desenvolvida como projeto das atividades de Gerência de Configuração de Software (PGCS com enfoque DevOps).

## Sobre o projeto

Site de página única apresentando a academia, planos de matrícula, modalidades, depoimentos de alunos e formulário de contato com validação nativa do HTML.

## Tecnologias

- HTML5
- CSS3 (sem framework, variáveis CSS nativas)
- Google Fonts (Anton + Work Sans)

## Estrutura do repositório

```
academia-universal-landing-page-1/
├── index.html
├── README.md
├── .gitignore
├── .gitattributes
├── css/
│   └── style.css
├── docs/
│   ├── PGCS.pdf
│   └── adr/
└── .github/
    ├── CODEOWNERS
    ├── pull_request_template.md
    └── ISSUE_TEMPLATE/
```

## Como rodar localmente

Não há build nem dependências. Abra o `index.html` no navegador ou sirva a pasta:

```
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como testar

- Valide o HTML em https://validator.w3.org/ (sem erros).
- Use o DevTools do navegador para conferir o layout em celular e computador.
- Confira os links do menu, os botões e a validação do formulário.

## Dependências e variáveis de ambiente

O projeto não tem dependências gerenciadas nem variáveis de ambiente, por isso não há lockfile nem `.env.example`. A única dependência externa é o Google Fonts (CDN), com fontes alternativas no CSS.

## Fluxo de contribuição

Issue → branch (`feature/`, `fix/` ou `docs/`) → Pull Request com checklist → squash merge na `main`. A `main` é protegida: não aceita push direto. Commits seguem Conventional Commits (`feat`, `fix`, `style`, `docs`, `content`). Detalhes no [PGCS](docs/PGCS.pdf).

## Deploy

GitHub Pages: em **Settings → Pages**, branch `main`, pasta raiz (`/`).

## Autor

Júlio Cesar Maçaneiro
