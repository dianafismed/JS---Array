const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
  const elemento = document.getElementById(this.id)
  const categoria = elemento.value
  let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
  exibirLivrosNaTela(livrosFiltrados)
}