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
  
//Insere o ano automaticamente
document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-bar li button:not(#button-login)"); // Seleciona todos os botões, exceto o botão de login
  const indicator = document.getElementById("indicator"); // Seleciona o indicador

  // Função para atualizar a posição do indicador
  function updateIndicator(button) {
      const buttonOffset = button.offsetLeft; // Posição do botão clicado
      const buttonWidth = button.offsetWidth; // Largura do botão clicado
      const indicatorWidth = buttonWidth * 0.8; // Reduz a largura do indicador para 80% do botão

      indicator.style.width = `${indicatorWidth}px`; // Ajusta a largura do indicador
      indicator.style.left = `${buttonOffset + (buttonWidth - indicatorWidth) / 2}px`; // Centraliza o indicador
  }

  // Função para resetar o indicador ao redimensionar a tela
  function resetIndicatorOnResize() {
      const activeButton = document.querySelector(".nav-bar li button.active"); // Seleciona o botão ativo
      if (activeButton) {
          updateIndicator(activeButton); // Atualiza o indicador com base no botão ativo
      }
  }

  // Adiciona evento de clique aos botões
  buttons.forEach((button) => {
      button.addEventListener("click", function () {
          // Remove a classe ativa de todos os botões
          buttons.forEach((btn) => {
              btn.classList.remove("active");
          });

          // Adiciona a classe ativa ao botão clicado
          this.classList.add("active");

          // Atualiza o indicador
          updateIndicator(this);
      });
  });

  // Adiciona evento de redimensionamento da tela
  window.addEventListener("resize", resetIndicatorOnResize);

  // Ativar o botão inicial (opcional)
  buttons[0].classList.add("active"); // Ativa o primeiro botão por padrão
  updateIndicator(buttons[0]); // Posiciona o indicador no botão inicial
});

document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
      duration: 1000, // Tempo da animação (1s)
      easing: 'ease-out', // Efeito de suavização
      once: true // Para a animação acontecer apenas uma vez
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const main = document.querySelector('main');
  
  // Quando o conteúdo é alterado, delega os eventos
  main.addEventListener('click', function(event) {
      const item = event.target.closest('.faq-item');
      if (item) {
          // Fecha todos os itens, exceto o clicado
          const faqItems = main.querySelectorAll('.faq-item');
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('open');
              }
          });

          // Abre ou fecha o item clicado
          item.classList.toggle('open');
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");

    // Monitora mudanças na main e adiciona eventos quando a seção de suporte for carregada
    main.addEventListener("click", function (event) {
        const clickedLink = event.target.closest(".suporte-menu a");

        if (clickedLink) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Remove a classe ativa de todos os links
            const menuLinks = main.querySelectorAll(".suporte-menu a");
            menuLinks.forEach(link => link.classList.remove("active"));

            // Adiciona a classe ativa ao link clicado
            clickedLink.classList.add("active");

            // Faz a rolagem suave para a seção correspondente
            const targetId = clickedLink.getAttribute("href").substring(1); // Remove o #
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });

    // Observa quando a seção de suporte for carregada na main para marcar o primeiro item do menu
    const observer = new MutationObserver(() => {
        const suporteMenu = main.querySelector(".suporte-menu");
        if (suporteMenu) {
            const firstLink = suporteMenu.querySelector("a");
            if (firstLink) {
                firstLink.classList.add("active");

                // Garante que a primeira seção também seja exibida ao carregar
                const firstSectionId = firstLink.getAttribute("href").substring(1);
                const firstSection = document.getElementById(firstSectionId);
                if (firstSection) {
                    firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
            observer.disconnect(); // Para de observar depois de adicionar a classe
        }
    });

    observer.observe(main, { childList: true, subtree: true });
});


document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    
    // Quando o conteúdo é alterado, delega os eventos
    main.addEventListener('click', function(event) {
        const link_faq = event.target.closest('#link-faq');
        const link_form = event.target.closest('#link-form-contact');
        const link_contact = event.target.closest('#link-direct-contact');
        if (link_faq) {
            document.getElementById('background-suporte-menu').style.backgroundColor = 'white';
        } else if (link_form){
            document.getElementById('background-suporte-menu').style.backgroundColor = 'var(--color-A';
        }else if(link_contact) {
            document.getElementById('background-suporte-menu').style.backgroundColor = 'white';
        }
    });
});

