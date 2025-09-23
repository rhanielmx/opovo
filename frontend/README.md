# UANE Frontend

Este é o frontend do projeto UANE, desenvolvido com React, TypeScript e Vite. O objetivo do projeto é fornecer uma interface moderna e responsiva para o portal da UANE, incluindo navegação adaptativa, integração com componentes customizados e uma experiência de usuário otimizada para desktop e dispositivos móveis.

## Tech Stack

- **React** (com JSX/TSX)
- **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utilitários de estilo)
- **Lucide React** (ícones)
- **Componentes customizados** (UI: NavigationMenu, DropdownMenu, Avatar, Button)

## Como clonar e rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rhanielmx/opovo.git
   cd rhanielmx/frontend
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install   
   ```

3. **Rode o projeto localmente:**
   ```bash
   pnpm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## Scripts úteis

- `pnpm run dev` — inicia o servidor de desenvolvimento com HMR.
- `pnpm run build` — gera a build de produção.
- `pnpm run preview` — faz preview da build de produção.

## Observações

- Certifique-se de ter o Node.js instalado (recomendado v18+).
- O projeto utiliza componentes customizados localizados em `src/components/ui/`.
- Para personalizar estilos, edite o arquivo `tailwind.config.js`.