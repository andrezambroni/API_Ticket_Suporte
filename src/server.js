import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"


const server = http.createServer(async (request, response) => {
  await jsonHandler(request, response)

  // Chama o routeHandler apenas após o corpo ser processado
  routeHandler(request, response)
})

async function listener(request, response) {

  jsonHandler(request, response)
  routeHandler(request, response)
}


http.createServer(listener).listen(3333)





// Então, basicamente, o código cria um servidor que escuta na porta 3333. 
// Quando alguém faz uma requisição para o servidor, ele primeiro processa a requisição e a resposta com o 
//     jsonHandler e depois encontra e executa a rota correta com o routeHandler.