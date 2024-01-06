let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi() { 
  const res = await fetch(endpointDaApi) // trouxe as informações dos livros
  livros = await res.json()
  //console.table(livros)
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivrosNaTela(livrosComDesconto)

}

