// Carrega o conteúdo da main dinamicamente
window.onload = function() {
    carregarConteudo('home'); // Carrega a página inicial
};
  
  // Função para carregar o conteúdo da main
function carregarConteudo(pagina) {
    let url;
    if (pagina === 'home') {
      url = 'assets/components/home.html';
    } else if (pagina === 'pontos-estrategicos') {
      url = 'assets/components/pontos-estrategicos.html';
    } else if (pagina === 'sobre') {
      url = 'assets/components/sobre.html';
    } else if (pagina === 'suporte') {
        url = 'assets/components/suporte.html';
    }
  
    // Carregar o conteúdo da página principal
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('main-content').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}
  
// Adicionar eventos aos links de navegação
document.getElementById('button-home').addEventListener('click', () => carregarConteudo('home'));

document.getElementById('button-pontos-e').addEventListener('click', () => carregarConteudo('pontos-estrategicos'));

document.getElementById('button-sobre').addEventListener('click', () => carregarConteudo('sobre'));
  
document.getElementById('button-suporte').addEventListener('click', () => carregarConteudo('suporte'));
  