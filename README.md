# Braian Melo | Portfólio

Meu portfólio pessoal desenvolvido com React, TypeScript e Vite. O site apresenta minha trajetória, formação, projetos, habilidades e formas de contato.

**Acesse:** [braianmelo.github.io](https://braianmelo.github.io)

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS

## Executar localmente

Requer Node.js e npm.

```bash
cd portfolio
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Verificações

```bash
cd portfolio
npm run lint
npm run build
```

O build de produção é gerado em `portfolio/dist/`.

## Formulário de contato

O formulário usa EmailJS. Para habilitá-lo localmente, crie `portfolio/.env.local` com as credenciais da sua conta:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Configure o template do EmailJS para receber as variáveis `from_name`, `from_email`, `reply_to`, `subject` e `message`. Para o formulário funcionar no site publicado, as variáveis `VITE_*` precisam estar disponíveis no ambiente durante o build.

## Publicação no GitHub Pages

Este repositório usa o domínio de usuário `braianmelo.github.io`, então o Vite pode publicar na raiz (`/`). Configure a publicação do GitHub Pages por **GitHub Actions**: o workflow deve instalar as dependências e executar o build a partir de `portfolio/`, depois publicar `portfolio/dist/` como artefato do Pages.

O projeto fica na pasta `portfolio/`; publicar a raiz do repositório diretamente não serve o site compilado. As variáveis do EmailJS também devem ser configuradas no ambiente de build do workflow para habilitar o formulário.
