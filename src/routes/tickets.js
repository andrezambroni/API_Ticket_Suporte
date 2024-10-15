import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"
import { update } from "../controllers/tickets/update.js"


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
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
]

// o código está criando uma lista de rotas chamada tickets.
// Essa lista tem uma rota que responde a requisições POST no caminho /tickets.
// Quando alguém faz uma requisição para essa rota, o servidor responde com o texto "teste de rota".
