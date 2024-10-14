import {create} from "../controllers/tickets/create.js"

// Exporta uma constante chamada tickets que contém uma lista de rotas

export const tickets = [
  {
    // Define o método HTTP da rota como POST
    method: "POST",

    // Define o caminho da rota como /tickets
    path: "/tickets",

    // Define o controlador da rota, que é uma função que lida com a requisição e a resposta
    controller: create,
  },
]

// o código está criando uma lista de rotas chamada tickets.
// Essa lista tem uma rota que responde a requisições POST no caminho /tickets.
// Quando alguém faz uma requisição para essa rota, o servidor responde com o texto "teste de rota".
