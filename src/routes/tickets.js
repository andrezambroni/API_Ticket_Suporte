import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"


export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
]

// o código está criando uma lista de rotas chamada tickets.
// Essa lista tem uma rota que responde a requisições POST no caminho /tickets.
// Quando alguém faz uma requisição para essa rota, o servidor responde com o texto "teste de rota".
