// Captura os botões de navegação
let buttonHome = document.getElementById('button-home');
let buttonPontosE = document.getElementById('button-pontos-e');
let buttonSobre = document.getElementById('button-sobre');
let buttonSuporte = document.getElementById('button-suporte');
let buttonLogin = document.getElementById('button-login');
let buttonLogout = document.getElementById('button-logout');
let buttonProfile = document.getElementById('button-profile');
let currentYear = document.getElementById('currentYear');
let modalLoginSignup = document.getElementById('modal-login-register');
let secLogin = document.getElementById('sec-login');
let secSignup = document.getElementById('sec-register');
let buttonLoginModal = document.getElementById('button-modal-login');
let buttonSignupModal = document.getElementById('button-modal-register');
let buttonCloseM = document.getElementById('button-close-modal');

// Carrega o conteúdo da seção inicial
window.onload = function () {
    loadContentSection('home', initHome);
};

// Função para carregar o conteúdo da main 
function loadContentSection(pagina, callback) {
    let url;

    if (pagina === 'home') {
        url = 'assets/components/home.html';
    } else if (pagina === 'sobre') {
        url = 'assets/components/sobre.html';
    } else if (pagina === 'pontos-e') {
        url = 'assets/components/pontos-estrategicos.html';
    } else if (pagina === 'suporte') {
        url = 'assets/components/suporte.html';
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            if (callback) callback(); // Executa o JavaScript específico da seção após carregar
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

// Funções específicas de cada seção
function initHome() {
    console.log("Home carregada!");
    let modalAdCard = document.getElementById('modal-ad-card');
    let bttnCloseModal = document.getElementById('bttn-close-modal-ad-card');
    let buttonAnnounce = document.getElementById('btn-anunciar');

    // Dados fictícios simulando anúncios de imóveis
    const anuncios = [
        {
            id: 1,
            titulo: "Kitnet perto da UFC",
            preco: "R$ 800",
            localizacao: "Centro",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        },
        {
            id: 2,
            titulo: "Apartamento mobiliado",
            preco: "R$ 950",
            localizacao: "Próximo ao supermercado",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        },
        {
            id: 3,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-2.jpg"
        },
        {
            id: 4,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-3.jpg"
        },
        {
            id: 5,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-4.jpg"
        },
        {
            id: 6,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        },
        {
            id: 1,
            titulo: "Kitnet perto da UFC",
            preco: "R$ 800",
            localizacao: "Centro",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        },
        {
            id: 2,
            titulo: "Apartamento mobiliado",
            preco: "R$ 950",
            localizacao: "Próximo ao supermercado",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        },
        {
            id: 3,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-2.jpg"
        },
        {
            id: 4,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-3.jpg"
        },
        {
            id: 5,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-4.jpg"
        },
        {
            id: 6,
            titulo: "Casa com 2 quartos",
            preco: "R$ 1000",
            localizacao: "Bairro Lagoa",
            imagem: "assets/img/anuncios/anuncio-1.jpg"
        }
    ];

    // Função para exibir os anúncios
    function carregarAnuncios(lista) {
        const container = document.getElementById('ad-grid');
        container.innerHTML = ''; // Limpa os anúncios antes de recarregar

        lista.forEach(anuncio => {
            const card = document.createElement("div");
            card.classList.add("anuncio-card");
            card.innerHTML = `
                <img src="${anuncio.imagem}" alt="${anuncio.titulo}">
                <h3>${anuncio.titulo}</h3>
                <p><i class="bi bi-geo-alt"></i> ${anuncio.localizacao}</p>
                <p><i class="bi bi-cash-stack"></i> <strong>${anuncio.preco}</strong></p>
            `;
            container.appendChild(card);
        });

        // Reatribui o evento de clique aos novos cards
        document.querySelectorAll(".anuncio-card").forEach(elemento => {
            elemento.addEventListener("click", () => {
                modalAdCard.style.display = 'block';
            });
        });
    }

    // Busca dinâmica
    document.getElementById("search-ad").addEventListener("input", (event) => {
        const termo = event.target.value.toLowerCase();
        const resultados = anuncios.filter(anuncio => 
            anuncio.titulo.toLowerCase().includes(termo) || 
            anuncio.localizacao.toLowerCase().includes(termo)
        );
        carregarAnuncios(resultados);
    });

    // Carrega os anúncios ao iniciar
    carregarAnuncios(anuncios);

    //comportamento do botão de anunciar
    buttonAnnounce.addEventListener('click', function(){

        if(userIsLogged()){
            //Chamar a página de criar anúncio 
        } else {
            modalLoginSignup.style.display = 'flex';

            // Garante que o estado inicial seja a tela de login
            secLogin.style.display = 'block';
            secSignup.style.display = 'none';

            //Reseta os estados dos botões 
            buttonLoginModal.classList.remove('button-modal-enable', 'button-modal-disable');
            buttonSignupModal.classList.remove('button-modal-enable', 'button-modal-disable');
            
            buttonLoginModal.classList.add('button-modal-enable');
            buttonSignupModal.classList.add('button-modal-disable');
        }
    });


    // Clicar em um card de anúncio
    document.querySelectorAll(".anuncio-card").forEach(elemento => {
        elemento.addEventListener("click", () => {
            modalAdCard.style.display = 'block';
        });
    });

    // fechar modal 
    bttnCloseModal.addEventListener('click', function(){
        modalAdCard.style.display = 'none';
    });


    //Galeria de imagens dos anúncios 
    const images = document.querySelectorAll('.gallery-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active-img-gallery');
            if (i === index) {
                img.classList.add('active-img-gallery');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Mostrar a primeira imagem ao carregar a página
    showImage(currentIndex);
    
}

function initSobre() {
    console.log("Sobre carregada!");
   
}

function initPontosE() {
    console.log("Pontos estratégicos carregados!");

    // Inicializa um mapa com coordenadas
    function initMap() {
        const quixada = { lat: -4.9792, lng: -39.0567 };
        const mapElement = document.getElementById("map");

        if (mapElement) {
            new google.maps.Map(mapElement, {
                zoom: 14,
                center: quixada,
            });
        } else {
            console.error("Elemento com id 'map' não encontrado.");
        }
    }

    initMap();
}

function initSuporte() {
    const main = document.querySelector("main");

    // Delegação de eventos para o menu de suporte
    main.addEventListener("click", function (event) {
        const clickedLink = event.target.closest(".suporte-menu a");

        if (clickedLink) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Remove a classe ativa de todos os links
            main.querySelectorAll(".suporte-menu a").forEach(link => link.classList.remove("active"));

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

    // Marca o primeiro item do menu como ativo ao carregar a seção de suporte
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
    }

    // Delegação de eventos para mudança de cor do menu de suporte
    main.addEventListener('click', function(event) {
        const background = document.getElementById('background-suporte-menu');
        if (!background) return;

        const link_faq = event.target.closest('#link-faq');
        const link_form = event.target.closest('#link-form-contact');
        const link_contact = event.target.closest('#link-direct-contact');

        if (link_faq || link_contact) {
            background.style.backgroundColor = 'white';
        } else if (link_form) {
            background.style.backgroundColor = 'var(--color-A)';
        }
    });

    // Delegação de eventos para abrir/fechar itens do FAQ
    main.addEventListener('click', function(event) {
        const item = event.target.closest('.faq-item');
        if (item) {
            // Fecha todos os itens, exceto o clicado
            main.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });

            // Alterna a classe 'open' no item clicado
            item.classList.toggle('open');
        }
    });
}

// Carregando as seções com base nos pontões clicados
buttonHome.addEventListener('click', () => loadContentSection('home', initHome));
buttonPontosE.addEventListener('click', () => loadContentSection('pontos-e', initPontosE));
buttonSobre.addEventListener('click', () => loadContentSection('sobre', initSobre));
buttonSuporte.addEventListener('click', () => loadContentSection('suporte', initSuporte));

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-bar li button:not(#button-login, #button-profile, #button-logout)"); // Seleciona todos os botões, exceto o botão de login
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


    AOS.init({
        duration: 1000, // Tempo da animação (1s)
        easing: 'ease-out', // Efeito de suavização
        once: true // Para a animação acontecer apenas uma vez
    });

    //FOOTER
    //Insere o ano automaticamente
    currentYear.textContent = new Date().getFullYear();
});
  

// Autenticação de usuário ---------------------------------------------------------------
function userIsLogged(){
    return localStorage.getItem('jwt');
}

// Usuário LOGADO
if (userIsLogged()) {
    buttonLogin.style.display = 'none';
    buttonLogout.style.display = 'flex';
    buttonProfile.style.display = 'flex';
}

// Usuário NÃO LOGADO
if (!userIsLogged()) {
    buttonLogin.style.display = 'flex';
    buttonLogout.style.display = 'none';
    buttonProfile.style.display = 'none';
}

// LOGOUT
function logout() {
    localStorage.removeItem('jwt');  
    window.location.href = 'index.html';  
}

buttonLogout.addEventListener('click', logout);
