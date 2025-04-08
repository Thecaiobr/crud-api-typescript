# CRUD API com TypeScript, Express e Prisma

Este projeto é uma API CRUD (Create, Read, Update, Delete) desenvolvida com **TypeScript**, **Express** e **Prisma**. Ele utiliza o Prisma como ORM para interagir com o banco de dados e o Zod para validação de dados.

## Funcionalidades

- **Criar Usuário**: Adiciona um novo usuário ao banco de dados.
- **Listar Usuários**: Retorna todos os usuários cadastrados.
- **Buscar Usuário por ID**: Retorna os detalhes de um usuário específico.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Deletar Usuário**: Remove um usuário do banco de dados.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM para interagir com o banco de dados.
- **Zod**: Biblioteca para validação e parsing de dados.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Estrutura do projeto

```plaintext
crud-api-typescript/
├── src/
│   ├── controllers/
│   │   └── user.controller.ts       # Controladores para lidar com as requisições
│   ├── routes/
│   │   └── user.routes.ts           # Rotas da API
│   ├── services/
│   │   └── user.service.ts          # Lógica de negócio e interação com o banco
│   ├── validations/
│   │   └── user.schema.ts           # Validação de dados com Zod
│   ├── server.ts                    # Configuração do servidor Express
├── prisma/
│   ├── schema.prisma                # Configuração do banco de dados Prisma
├── package.json                     # Configuração do projeto e dependências
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/crud-api-typescript.git
   cd crud-api-typescript
   
2. Instale as dependências:
    ```bash
   npm install
  
3. Configure o banco de dados no arquivo prisma/schema.prisma.
4. Gere o prisma client:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
5. Rodar o codigo: 
   ```bash
   npm run dev
