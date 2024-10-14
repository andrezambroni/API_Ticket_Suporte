// Importa as rotas do arquivo index.js
import { routes } from "../routes/index.js"

// Função que lida com as rotas das requisições
export function routeHandler(request, response) {
  // Procura a rota que corresponde ao método e ao caminho da requisição
  const route = routes.find((route) => {
    // Verifica se o método e o caminho da rota são iguais aos da requisição
    return route.method === request.method && route.path === request.url
  })

  // Se encontrar a rota correspondente
  if (route) {
    // Chama o controlador da rota passando a requisição e a resposta
    return route.controller(request, response)
  }

  // Se não encontrar a rota, retorna um erro 404 (não encontrado)
  return response.writeHead(404).end()
}



// o código está procurando uma rota que corresponda ao método (GET, POST, etc.) e ao caminho (URL) da requisição. 
// Se encontrar, ele chama a função controladora dessa rota. 
// Se não encontrar, ele retorna um erro 404, que significa que a página não foi encontrada.