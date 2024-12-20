# API Ticket Suporte

Este projeto é uma API para gerenciamento de tickets de suporte. Ele permite criar, listar, atualizar, fechar e deletar tickets.

## Estrutura do Projeto

controllers/: Contém os controladores responsáveis pelas operações de tickets.

tickets/:   
create.js: Controlador para criar tickets.   
index.js: Controlador para listar tickets.   
remove.js: Controlador para remover tickets.    
update.js: Controlador para atualizar tickets.   
updateStatus.js: Controlador para atualizar o status dos tickets.   
database/: Contém a configuração e os dados do banco de dados.

database.js: Configuração do banco de dados.   
db.json: Arquivo JSON que armazena os dados dos tickets.   
middlewares/: Contém os middlewares utilizados no projeto.   

jsonHandler.js: Middleware para tratar requisições JSON.   
routeHandler.js: Middleware para tratar as rotas.   
routes/: Contém as definições de rotas do projeto.   

index.js: Arquivo principal de rotas.   
tickets.js: Definições de rotas relacionadas a tickets.   
server.js: Arquivo principal do servidor.   

utils/: Contém utilitários usados no projeto.   

extractQueryParams.js: Função para extrair parâmetros de consulta.   
parseRoutePath.js: Função para parsear caminhos de rotas.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/andrezambroni/API_Ticket_Suporte.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd API_Ticket_Suporte
    ```
3. Instale as dependências:
    ```sh
     npm init -y
    ```

## Uso

Para iniciar o servidor em modo de desenvolvimento, execute:
```sh
npm run dev

O servidor estará disponível em http://localhost:3333
```

## Endpoints

### Criar Ticket
URL: /tickets   
Método: POST   
Controller: create   

### Listar Tickets
URL: /tickets   
Método: GET   
Controller: index   

### Atualizar Ticket
URL: /tickets/:id   
Método: PUT   
Controller: update   

### Fechar Ticket
URL: /tickets/:id/close   
Método: PATCH   
Controller: updateStatus   

### Deletar Ticket
URL: /tickets/:id   
Método: DELETE   
Controller: remove   