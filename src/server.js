// Importa o módulo HTTP do Node.js para criar um servidor
import http from "node:http"

// Importa o manipulador de JSON do arquivo jsonHandler.js
import { jsonHandler } from "./middlewares/jsonHandler.js"

// Importa o manipulador de rotas do arquivo routeHandler.js
import { routeHandler } from "./middlewares/routeHandler.js"

// Função que será chamada sempre que o servidor receber uma requisição
async function listener(request, response) {
  // Chama o manipulador de JSON para processar a requisição e a resposta
  jsonHandler(request, response)

  // Chama o manipulador de rotas para encontrar e executar a rota correta
  routeHandler(request, response)
}

// Cria um servidor HTTP que usa a função listener para lidar com as requisições
http.createServer(listener).listen(3333)
// Faz o servidor escutar na porta 3333 para receber conexões




// Então, basicamente, o código cria um servidor que escuta na porta 3333. 
// Quando alguém faz uma requisição para o servidor, ele primeiro processa a requisição e a resposta com o 
//     jsonHandler e depois encontra e executa a rota correta com o routeHandler.