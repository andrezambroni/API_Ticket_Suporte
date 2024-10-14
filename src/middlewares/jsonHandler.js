
// Exporta a função jsonHandler para que possa ser usada em outros lugares
export async function jsonHandler(request, response) {
  // Cria um array vazio para armazenar os pedaços (chunks) da requisição
  const buffers = [];

  for await (const chunk of request) {
    // Adiciona o pedaço ao array buffers
    buffers.push(chunk);
  }

  // Tenta fazer algo que pode dar errado
  try {
    // Junta todos os pedaços em um só e converte para string, depois transforma em um objeto JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    // Se der erro, define o corpo da requisição como null
    request.body = null;
  }

  // Define o cabeçalho da resposta para indicar que o conteúdo é JSON
  if (!response.headersSent) {
    response.setHeader("Content-Type", "application/json");
  }
}

// o código está pegando todos os pedaços da requisição, juntando-os e tentando transformá-los em um objeto JSON.
// Se conseguir, ele coloca esse objeto no request.body.
// Se não conseguir, ele coloca null no request.body. Por fim, ele define que a resposta será do tipo JSON.
