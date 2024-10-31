export async function jsonHandler(request, response) {
  const buffers = []

  // Coleta todos os pedaços do corpo da requisição
  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    // Tenta fazer o parse do corpo como JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    // Retorna um erro se o JSON for inválido
    response.writeHead(400, { "Content-Type": "application/json" })
    return response.end(JSON.stringify({ error: "Invalid JSON" }))
  }

  // Define o cabeçalho para JSON e chama o próximo middleware
  response.setHeader("Content-Type", "application/json")
}

// o código está pegando todos os pedaços da requisição, juntando-os e tentando transformá-los em um objeto JSON.
// Se conseguir, ele coloca esse objeto no request.body.
// Se não conseguir, ele coloca null no request.body. Por fim, ele define que a resposta será do tipo JSON.
