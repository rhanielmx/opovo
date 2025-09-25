# \# API de Cursos Online

Esta é uma API RESTful desenvolvida em **PHP puro** para gerenciamento de cursos, professores e módulos, utilizando **PostgreSQL** (Supabase) como banco de dados.

---

## Tecnologias Utilizadas

- **PHP**
- **PostgreSQL** (Supabase)
- **PDO** para conexão com banco de dados
- Organização em camadas: `models`, `controllers`, `config`

---

## Funcionalidades

- Listagem de cursos, professores e módulos
- Detalhes completos de cursos (incluindo professores e módulos)
- Filtros e endpoints específicos para cada entidade
- Respostas em JSON
- Suporte a CORS para integração com frontends

---

## Como rodar o projeto

### 1. Clone o repositório

```
git clone https://github.com/rhanielmx/opovo.git
cd opovo/backend
```

### 2. Configure o banco de dados
Crie um banco PostgreSQL (como Supabase).
Execute o script SQL de criação das tabelas (veja exemplo abaixo):

```sql
-- Tabela de Professores
CREATE TABLE professors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  formations TEXT NOT NULL,
  description TEXT NOT NULL,
  profile_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Cursos
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  workload INTEGER NOT NULL, 
  price DECIMAL(10,2) NOT NULL,
  access_period INTEGER NOT NULL, -- em meses
  modality VARCHAR(50) NOT NULL, 
  tags TEXT[] NOT NULL,
  banner_image TEXT, 
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Módulos
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Relacionamento Professor-Curso (Many-to-Many)
CREATE TABLE course_professors (
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  professor_id UUID REFERENCES professors(id) ON DELETE CASCADE,
  PRIMARY KEY (course_id, professor_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX idx_modules_course_id ON modules(course_id);
CREATE INDEX idx_modules_order ON modules(course_id, order_number);
CREATE INDEX idx_course_professors_course ON course_professors(course_id);
CREATE INDEX idx_course_professors_professor ON course_professors(professor_id);

```
### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
SUPABASE_HOST=
SUPABASE_DB=
SUPABASE_USER=
SUPABASE_PASSWORD=
```

### 4. Rode o servidor embutido do PHP
```
php -S localhost:8000
```
A API estará disponível em http://localhost:8000.

---

## Endpoints Principais

### Cursos

- `GET /courses`  
  Lista todos os cursos.

- `GET /courses?include_details=true`  
  Lista todos os cursos com professores e módulos.

- `GET /courses/{id}`  
  Detalhes de um curso pelo ID.

- `GET /courses/{id}/modules`  
  Lista módulos de um curso pelo ID.

- `GET /courses/{id}/details`  
  Detalhes completos de um curso pelo ID (incluindo professores e módulos).

### Professores

- `GET /professors`  
  Lista todos os professores.

- `GET /professors/{id}`  
  Detalhes de um professor pelo ID.

- `GET /professors/{id}/courses`  
  Retorna o professor com seus cursos pelo ID.

### Módulos

- `GET /modules/{id}`  
  Detalhes de um módulo pelo ID.