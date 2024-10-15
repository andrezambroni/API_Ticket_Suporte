/**
 * CREATE - CRIAR
 * INDEX - LISTAR
 * UPDATE - ATUALIZAR
 * REMOVE - REMOVER
 * SHOW - EXIBIR UM UNICO REGISTRO
 */

export function index({ request, response, database }) {
  const { status } = request.query

  const filters = status ? { status } : null

  const tickets = database.select("tickets", filters)

  return response.end(JSON.stringify(tickets))
}
