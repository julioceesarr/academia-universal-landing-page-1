# Academia Universal — Landing Page

Landing page estática para a Academia Universal, desenvolvida como projeto de apoio à Atividade Avaliativa II (Plano de Gerenciamento de Configuração de Software — enfoque DevOps).

## Sobre o projeto

Site de página única (one-page) apresentando a academia, planos de matrícula, modalidades oferecidas, depoimentos de alunos e formulário de contato com validação nativa do HTML.

## Tecnologias

- HTML5
- CSS3 (sem framework, variáveis CSS nativas)
- Google Fonts (Anton + Work Sans)

## Estrutura do repositório

```
academia-universal-landing/
├── index.html          # Estrutura da página
├── css/
│   └── style.css        # Estilos
├── docs/
│   └── PGCS.pdf         # Plano de Gerência de Configuração de Software
└── README.md
```

## Como rodar localmente

Não há build nem dependências. Basta abrir o `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8000

# Node (http-server)
npx http-server .
```

Depois acesse `http://localhost:8000`.

## Deploy

Projeto compatível com GitHub Pages: em **Settings → Pages**, selecione a branch `main` e a pasta raiz (`/`).

## Autor

Júlio Cesar Maçaneiro
