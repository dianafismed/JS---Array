const elementoParaInserirLivros = document.getElementById('livros')
const total = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela (listaDeLivros) { 
  total.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade>0 ? 'livro__imagens':'livro__imagens indisponivel' // if ternário
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.titulo}" />
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
  });
}