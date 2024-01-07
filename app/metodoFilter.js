const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
  const elemento = document.getElementById(this.id)
  const categoria = elemento.value
  let livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade() : filtarPorCategoria(categoria)
  exibirLivrosNaTela(livrosFiltrados)
  if(categoria == 'disponivel'){
    const valor = valorTotal(livrosFiltrados)
    exibirTotal(valor)
  }
}

function filtarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirTotal (valor) { 
  total.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
  `
 }
