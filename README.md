# Portal UANE - Sistema de Cursos Online

![UANE Portal](https://img.shields.io/badge/UANE-Portal%20de%20Cursos-blue)
![React](https://img.shields.io/badge/React-19.x-61dafb)
![PHP](https://img.shields.io/badge/PHP-7.4+-777bb4)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)

Portal completo para gerenciamento e visualização de cursos online da UANE, composto por uma API REST em PHP e uma aplicação frontend moderna em React.

---

## 📋 Sobre o Projeto

O Portal UANE é uma plataforma educacional completa que permite a gestão e exibição de cursos online, professores e módulos educacionais. O sistema é dividido em duas partes principais:

- **Backend**: API RESTful desenvolvida em PHP puro com PostgreSQL
- **Frontend**: Aplicação React com TypeScript e Tailwind CSS

### ✨ Funcionalidades

- 📚 **Gestão de Cursos**: Listagem, detalhes e filtragem de cursos
- 👨‍🏫 **Perfis de Professores**: Visualização detalhada dos educadores
- 📖 **Módulos Educacionais**: Organização estruturada do conteúdo
- 🎨 **Interface Responsiva**: Design adaptativo para desktop e mobile
- 🔍 **Navegação Intuitiva**: Experiência de usuário otimizada
- 🌐 **API RESTful**: Backend com endpoints bem definidos

---

## 🏗️ Arquitetura do Sistema

```
opovo/
├── backend/          # API RESTful em PHP
│   ├── config/       # Configurações de banco de dados
│   ├── controllers/  # Controladores da API
│   ├── models/       # Modelos de dados
│   └── index.php     # Ponto de entrada da API
└── frontend/         # Aplicação React
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── pages/       # Páginas da aplicação
    │   ├── contexts/    # Contextos React
    │   └── assets/      # Recursos estáticos
    └── public/          # Arquivos públicos
```

---

## 🚀 Tecnologias Utilizadas

### Backend
- **PHP 7.4+** - Linguagem de programação
- **PostgreSQL** - Banco de dados (Supabase)
- **PDO** - Camada de abstração de banco de dados
- **Arquitetura MVC** - Organização em Models, Views e Controllers

### Frontend
- **React 19.x** - Biblioteca JavaScript
- **TypeScript** - Superset do JavaScript com tipagem
- **Vite** - Build tool e desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Navegação entre páginas
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Biblioteca de ícones
- **TanStack Query** - Gerenciamento de estado assíncrono

---

## 📦 Instalação e Configuração

### Pré-requisitos

- **PHP 7.4+**
- **Composer**
- **Node.js 18+**
- **pnpm**
- **PostgreSQL**

### 🔧 Configuração do Backend

1. **Navegue para o diretório do backend:**
   ```bash
   cd backend/
   ```

2. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env` com suas credenciais do banco:
   ```env
   SUPABASE_HOST=your_host
   SUPABASE_DB=your_database
   SUPABASE_USER=your_user
   SUPABASE_PASSWORD=your_password
   ```

3. **Configure o banco de dados:**
   Execute o script SQL disponível no README do backend para criar as tabelas necessárias.

4. **Inicie o servidor:**
   ```bash
   php -S localhost:8000
   ```

A API estará disponível em `http://localhost:8000`

### 🎨 Configuração do Frontend

1. **Navegue para o diretório do frontend:**
   ```bash
   cd frontend/
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

A aplicação estará disponível em `http://localhost:5173`

---

## 📚 Documentação da API

### Endpoints Principais

#### 📖 Cursos
- `GET /courses` - Lista todos os cursos
- `GET /courses?include_details=true` - Lista cursos com detalhes completos
- `GET /courses/{id}` - Detalhes de um curso específico
- `GET /courses/{id}/modules` - Módulos de um curso
- `GET /courses/{id}/details` - Detalhes completos do curso

#### 👨‍🏫 Professores
- `GET /professors` - Lista todos os professores
- `GET /professors/{id}` - Detalhes de um professor
- `GET /professors/{id}/courses` - Cursos de um professor

#### 📋 Módulos
- `GET /modules/{id}` - Detalhes de um módulo específico

---

## 🌐 Estrutura do Frontend

### Páginas Principais
- **Home** (`/`) - Página inicial com banner e cursos em destaque
- **Professores** (`/professores`) - Listagem de todos os professores
- **Detalhes do Professor** (`/professores/:id`) - Página individual do professor
- **Sobre** (`/sobre`) - Informações sobre a UANE

### Componentes Principais
- **Navbar** - Navegação principal responsiva
- **Banner** - Banner promocional da página inicial
- **Course Card** - Cartão de exibição de cursos
- **Information Card** - Cartões informativos
- **Tag** - Componente de tags personalizáveis

---

## 🛠️ Scripts Disponíveis

### Backend
```bash
# Iniciar servidor de desenvolvimento
php -S localhost:8000
```

### Frontend
```bash
# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview da build
pnpm run preview

# Linting
pnpm run lint
```

---

## 🗄️ Estrutura do Banco de Dados

O sistema utiliza as seguintes tabelas principais:

- **`professors`** - Dados dos professores
- **`courses`** - Informações dos cursos
- **`modules`** - Módulos dos cursos
- **`course_professors`** - Relacionamento many-to-many entre cursos e professores

Consulte o README do backend para o script SQL completo de criação das tabelas.




---

## 🚧 Planejamentos Futuros

- 🔐 **Autenticação de Usuários**
   - Implementação de login e cadastro para alunos e administradores
   - Controle de acesso a conteúdos exclusivos e área do aluno

- 🤖 **Chatbot Inteligente (RAG)**
   - Chatbot alimentado por RAG (Retrieval-Augmented Generation) usando as informações dos cursos, professores e módulos
   - Responde dúvidas de possíveis interessados e alunos diretamente no portal
   - Integração com IA para respostas contextuais e automação de atendimento

- 📑 **Detalhes Avançados de Cursos**
   - Página dedicada para cada curso com informações detalhadas, módulos, professores, pré-requisitos e FAQ
   - Possibilidade de inscrição direta pelo portal
   - Seção de avaliações e depoimentos de alunos

Sugestões e colaborações para novas funcionalidades são bem-vindas!

---

## 📞 Contato

**UANE** - Universidade Aberta do Nordeste
- Website: [Portal UANE](https://opovo.rhanielmx.com.br)
- Repositório: [github.com/rhanielmx/opovo](https://github.com/rhanielmx/opovo)