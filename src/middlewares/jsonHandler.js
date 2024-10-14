export async function jsonHandler(request, response) {

  const buffers = [];

  for await (const chunk of request) {

    buffers.push(chunk);
  }


  try {

    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {

    request.body = null;
  }

  if (!response.headersSent) {
    response.setHeader("Content-Type", "application/json");
  }
}

// o código está pegando todos os pedaços da requisição, juntando-os e tentando transformá-los em um objeto JSON.
// Se conseguir, ele coloca esse objeto no request.body.
// Se não conseguir, ele coloca null no request.body. Por fim, ele define que a resposta será do tipo JSON.
