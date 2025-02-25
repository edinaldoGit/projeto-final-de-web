// Captura os botões de navegação
let buttonHome = document.getElementById('button-home');
let buttonPontosE = document.getElementById('button-pontos-e');
let buttonSobre = document.getElementById('button-sobre');
let buttonSuporte = document.getElementById('button-suporte');
let buttonAnunciar = document.getElementById('btn-announce');
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

//Retorna informações do usuários logado
function getDataUser(op){
    if(op === 'role'){
        const role = localStorage.getItem('role');
        return role;
    } else if (op === 'user'){
        const user = JSON.parse(localStorage.getItem('user'));
        return user;
    } else if(op === 'token'){
        const token = localStorage.getItem('jwt');
        return token;
    } else {
        console.log('Opção invalida')
    }
    return;
}

// Função que carrega modal de Login/Cadastro na tela
function loadModalLoginSignup(){
    
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
    }else if (pagina === 'anunciar'){
        url = 'assets/components/anunciar.html';
    }else if (pagina === 'profile'){
        url = 'assets/components/perfil.html';
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
    const token = getDataUser('token');
    const role = getDataUser('role');
    const user = getDataUser('user');

    console.log("Home carregada!");
    let modalAdCard = document.getElementById('modal-ad-card');
    let bttnCloseModal = document.getElementById('bttn-close-modal-ad-card');


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

function initAnunciar() {
    let mapa;
    let marcador;
    let adForm = document.getElementById('ad-form');

    //Função que exibe uma mensagem de erro em um dialog
    function exibirErro(mensagem) {
        document.getElementById('mensagemErroAnunciar').innerText = mensagem;
        document.getElementById('erroDialogAnunciar').showModal();
    }

    //Função que exibe uma mensagem de sucesso em um dialog
    function exibirSuccess(mensagem) {
        document.getElementById('mensagemSuccessAnunciar').innerText = mensagem;
        document.getElementById('successDialogAnunciar').showModal();
    }

    //Fecha os dialogs de erro e sucesso 
    document.getElementById('btn-close-dialog-msg-error-anunciar').addEventListener('click', () => {
        document.getElementById('erroDialogAnunciar').close();
    });

    document.getElementById('btn-close-dialog-msg-success-anunciar').addEventListener('click', () => {
        document.getElementById('successDialogAnunciar').close();
    });

    function initMap() {
        const quixada = { lat: -4.9669, lng: -39.0169 };
        mapa = new google.maps.Map(document.getElementById("mapa-anunciar"), {
            center: quixada,
            zoom: 14
        });

        const bounds = new google.maps.LatLngBounds(
            { lat: -5.05, lng: -39.10 },
            { lat: -4.90, lng: -38.95 }
        );

        const inputEndereco = document.getElementById("localizacao-ad");
        const autocomplete = new google.maps.places.Autocomplete(inputEndereco, {
            bounds: bounds,
            strictBounds: true,
            componentRestrictions: { country: "BR" },
            fields: ["geometry", "formatted_address"]
        });

        // Atualiza campos de latitude e longitude após escolher no autocomplete
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                exibirErro('Nenhuma localização encontrada.');
                return;
            }

            const location = place.geometry.location;
            mapa.setCenter(location);
            mapa.setZoom(17);

            // Atualiza o marcador
            if (marcador) marcador.setMap(null);
            marcador = new google.maps.Marker({
                map: mapa,
                position: location
            });

            // Preenche os campos ocultos com as coordenadas
            document.getElementById("latitude").value = location.lat();
            document.getElementById("longitude").value = location.lng();
        });

        // Seleção de local clicando no mapa
        mapa.addListener("click", (event) => {
            const location = event.latLng;

            if (marcador) marcador.setMap(null);
            marcador = new google.maps.Marker({
                position: location,
                map: mapa
            });

            // Atualiza os campos ocultos
            document.getElementById("latitude").value = location.lat();
            document.getElementById("longitude").value = location.lng();

            // Busca o endereço do ponto clicado
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: location }, (results, status) => {
                if (status === "OK" && results[0]) {
                    inputEndereco.value = results[0].formatted_address;
                }
            });
        });
    }

    initMap();


    let selectAlbum = document.getElementById('select-album')

    selectAlbum.addEventListener('change', function() {
        const arquivoSpan = document.getElementById('nome-arquivo');
        const arquivos = this.files;
        if (arquivos.length > 0) {
            const nomes = Array.from(arquivos).map(file => file.name).join(', ');
            arquivoSpan.textContent = nomes;
        } else {
            exibirErro('Nenhum arquivo selecionado');
        }
    });

    // Função para pegar os dados do formulário e cadastrar o imóvel
    adForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
      
        const imovelData = {
          titleAd: document.getElementById('titulo-ad').value,
          descriptionAd: document.getElementById('descricao-ad').value,
          neighborhood: document.getElementById('localizacao-ad').value,
          rentValue: document.getElementById('valor-aluguel').value,
          latitude: document.getElementById('latitude').value,
          longitude: document.getElementById('longitude').value,
          contractTime: document.getElementById('duracao-contrato').value,
          user: user.id, 
        };
      
        try {
          const response = await axios.post(
            "http://localhost:1337/api/imoveis",
            { data: imovelData },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            }
          );
          
          exibirSuccess('Imóvel cadastrado com sucesso!')
        } catch (error) {
            exibirErro('Erro ao cadastrar imóvel')
          console.error(
            "Erro ao cadastrar imóvel:",
            error.response ? error.response.data : error.message
          );
          exibirErro(
            "Erro ao cadastrar: " +
              (error.response && error.response.data.message
                ? error.response.data.message
                : error.message)
          );
        }
    });
}

function initProfile(){
    //Salvando dados do usuário usuário logado 
    const user = getDataUser('user');
    const token = getDataUser('token');
    const role = getDataUser('role');

    //DEFINIÇÃO DE FUNÇÕES --------------------------------------------

    //Exibe a seção que passada por parâmetro 
    function showSec(sec){
        secInfoProfile.style.display = 'none';
        secConfigAccount.style.display = 'none';
        secMyAds.style.display = 'none';
        secFavAds.style.display = 'none';
        secChat.style.display = 'none'; 
        secUserManage.style.display = 'none';
        secAdsManage.style.display = 'none';

        //Exibe apenas a seção que foi passada
        sec.style.display = 'flex';
    }

    // Função que exibe apenas as seções da seção INFORMAÇÕES PESSOAIS
    function showSecInfoProfile(sec){
        secUserDescProf.style.display = 'none';
        secUserEditProf.style.display = 'none';

        btnEditProfile.style.display = 'none';
        btnCloseEditProfile.style.display = 'none';

        //Exibe apenas a seção que foi passada
        sec.style.display = 'flex';
    }

    //Função que exibe uma mensagem de erro em um dialog
    function exibirErro(mensagem) {
        document.getElementById('mensagemErro').innerText = mensagem;
        document.getElementById('erroDialog').showModal();
    }

    //Função que exibe uma mensagem de sucesso em um dialog
    function exibirSuccess(mensagem) {
        document.getElementById('mensagemSuccess').innerText = mensagem;
        document.getElementById('successDialog').showModal();
    }

    //Função que exibe o Dialog de confirmação 
    function exibirDialogConfirm(mensagem) {
        document.getElementById('mensagemConfirm').innerText = mensagem;
        document.getElementById('confirmDialogDeleteAccount').showModal();
    }

    //Sincroniza as informações de usuário da página com os do banco de dados. 
    function syncUserProfile(){
        //Adicionando informações do usuário (DESCRIÇÃO PERFIL)
        nameUser.innerText = user.nameUser;
        emailUser.innerText = user.email;
        telephoneUser.innerText = user.telephone;
        typeUser.innerText =  role; 

        //Adicionando informações do usuário (FORM DE ATUALIZAR)
        nameUserForm.value = user.nameUser;
        emailUserForm.value = user.email;
        telephoneUserForm.value = user.telephone;
    }

    //Desabilida botões de acordo com o papel do usuário
    function disableButtonsByRole() {
        const userRole = localStorage.getItem('role');
        if (userRole === 'Authenticated'){
            document.getElementById('item-1-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-2-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-3-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-4-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-5-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-6-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-7-nav-bar-sec-prof').style.display = 'none';
        }else if(userRole === 'Administrador'){
            document.getElementById('item-1-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-2-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-3-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-4-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-5-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-6-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-7-nav-bar-sec-prof').style.display = 'flex';
        } else if(userRole ==='locador') {
            document.getElementById('item-1-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-2-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-3-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-4-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-5-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-6-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-7-nav-bar-sec-prof').style.display = 'none';
        } else if(userRole ==='locatario') {
            document.getElementById('item-1-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-2-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-3-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-4-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-5-nav-bar-sec-prof').style.display = 'flex';
            document.getElementById('item-6-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-7-nav-bar-sec-prof').style.display = 'none';
        }else {
            document.getElementById('item-1-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-2-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-3-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-4-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-5-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-6-nav-bar-sec-prof').style.display = 'none';
            document.getElementById('item-7-nav-bar-sec-prof').style.display = 'none';
        }
    }
 
    //VARIÁVEIS ---------------------------------------------------------------------------

    //Formulário de editar informações pessoais
    let formEditProfDesc = document.getElementById('profile-edit-form');
    //Formulário de Alterar senha de usuário
    let changePasswordForm = document.getElementById('change-password-form'); 

    //BOTÕES
    //Botões que seleciona as seções -> PERFIL USUÁRIO
    let btnInfoProfile = document.getElementById('button-info-profile-sec');
    let btnConfigAccount = document.getElementById('button-config-account-sec');
    let btnMyAds = document.getElementById('button-my-ad-sec');
    let btnFavAds = document.getElementById('button-fav-ad');
    let btnChat = document.getElementById('button-chat-sec');
    let btnUserManage = document.getElementById('button-user-manage');
    let btnAdsManage = document.getElementById('button-ads-manage');

    //Botões da área de -> ATUALIZAR USUÁRIO
    let btnEditProfile =  document.getElementById('button-edit-prof-description');
    let btnSaveEditProfile = document.getElementById('button-save-edit-profile');
    let btnCloseEditProfile = document.getElementById('button-close-edit-prof-description');

    //Botões de fechar dialog de mensagens de erro e sucesso
    const btnCloseDialogError = document.getElementById('btn-close-dialog-msg-error');
    const btnCloseDialogSuccess = document.getElementById('btn-close-dialog-msg-success');

    // Botão de excluir a conta
    let btnDeleteAccount = document.getElementById('delete-account-button');

    //Informações pessoais do usuário logado (EXIBIÇÃO)
    let nameUser = document.getElementById('user-name');
    let emailUser = document.getElementById('user-email');
    let typeUser = document.getElementById('user-type');
    let telephoneUser = document.getElementById('user-telefone');
    let picProfileUser = document.getElementById('pic-profile-user-sec-profile');

    //Informações pessoais do usuário logado (FORMULÁRIO)
    let nameUserForm = document.getElementById('name-form-edit');
    let emailUserForm = document.getElementById('email-form-edit');
    let telephoneUserForm= document.getElementById('contact-form-edit');

    //SEÇÕES
    //Seções do perfil de usuário
    let secInfoProfile = document.getElementById('personal-data-sec');
    let secConfigAccount = document.getElementById('config-account-sec');
    let secMyAds = document.getElementById('my-ad-sec');
    let secFavAds = document.getElementById('my-favorit-ad-sec');
    let secChat = document.getElementById('chat-sec');
    let secUserManage = document.getElementById('ads-manage');
    let secAdsManage = document.getElementById('users-manage');

    //Seções específicas da seção de INFORMAÇÕES PESSOAIS
    let secUserDescProf = document.getElementById('description-prof-user-sec-profile');
    let secUserEditProf = document.getElementById('profile-edit-form');

    //Dialogs de mensagem de Erro e Success
    let dialogMsgError = document.getElementById('erroDialog');
    let dialogMsgSuccess = document.getElementById('successDialog');

    //Dialog de confirmação de deletar conta
    let dialogConfirmDeleteAccount = document.getElementById('confirmDialogDeleteAccount');

    //CONTROLE DE FLUXO DA EXIBIÇÃO--------------------------------------------------------
    //Controlando Fluxo de Exibição na seção de PERFIL DO USUÁRIO
    btnInfoProfile.addEventListener('click', function(){
        showSec(secInfoProfile);
        secUserDescProf.style.display = 'flex';
        btnEditProfile.style.display = 'flex';
        secUserEditProf.style.display = 'none'
    });

    btnConfigAccount.addEventListener('click', function(){
        showSec(secConfigAccount);
    });

    btnMyAds.addEventListener('click', function(){
        showSec(secMyAds);
    });

    btnFavAds.addEventListener('click', function(){
        showSec(secFavAds);
    });

    btnChat.addEventListener('click', function(){
        showSec(secChat);
    });

    btnUserManage.addEventListener('click', function(){
        showSec(secUserManage);
    });

    btnAdsManage.addEventListener('click', function(){
        showSec(secAdsManage);
    });

    //Controlando fluxo de exibição na subseção INFO PESSOAIS de PERFIL DO USUÁRIO 
    btnEditProfile.addEventListener('click', function(){
        showSecInfoProfile(secUserEditProf);
        btnCloseEditProfile.style.display = 'flex'
    });

    btnCloseEditProfile.addEventListener('click', function(){
        showSecInfoProfile(secUserDescProf);
        btnEditProfile.style.display = 'flex'
    });

    //Fecha os dialogs de erro e sucesso 
    btnCloseDialogError.addEventListener('click', () => {
        dialogMsgError.close();
    });

    btnCloseDialogSuccess.addEventListener('click', () => {
        dialogMsgSuccess.close();
    });

    // (UPDATE USER) Atualizando informações do usuário  (BACKEND)
    formEditProfDesc.addEventListener("submit", async function(event) {
        event.preventDefault();

        let nomeUser = document.getElementById('name-form-edit');
        let username = document.getElementById('email-form-edit');
        let telephone = document.getElementById('contact-form-edit');
    
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem("jwt"); 
        const userId = user.id;

        const userData = {
        nameUser: nomeUser.value,
        username: username.value,
        email: username.value,
        telephone: telephone.value
        };
    
        try {
        const response = await axios.put(
            `http://localhost:1337/api/users/${userId}`,
            userData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        syncUserProfile();
        exibirSuccess('Informações do usuário atualizadas com sucesso!')
        } catch (error) {
        const errorMessage = error.response?.data?.error?.message 
            || error.message 
            || "Erro desconhecido ao atualizar";
    
        console.error("Erro ao atualizar usuário:", errorMessage);
        alert("Erro ao atualizar: " + errorMessage);
        }

        showSecInfoProfile(secUserDescProf);
        btnEditProfile.style.display = 'flex'
    });  

    // (UPDATE USER)Área de MUDAR SENHA de usuário  (BACKEND)
    changePasswordForm.addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-new-password').value;
    
        const token = localStorage.getItem('jwt');
        const user = JSON.parse(localStorage.getItem('user'));
    
        if (!token || !user) {
            exibirErro('Usuário não autenticado.');
            return;
        }
    
        if (newPassword !== confirmPassword) {
            exibirErro('As senhas não coincidem.');
            return;
        }
    
        try {
            //Valida se a senha atual está correta tentando fazer login novamente.
            const loginResponse = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    identifier: user.email,
                    password: currentPassword
                })
            });
    
            if (!loginResponse.ok) {
                exibirErro('A senha atual está incorreta.');
                return;
            }
    
            //Se a senha atual estiver correta, altera a senha.
            const updateResponse = await fetch(`http://localhost:1337/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ password: newPassword })
            });
    
            if (updateResponse.ok) {
                exibirSuccess('Senha alterada com sucesso!');
            } else {
                exibirErro('Falha ao alterar a senha.');
            }
        } catch (error) {
            console.error('Erro na troca de senha:', error);
            exibirErro('Erro ao processar a solicitação.');
        }
    });

    //(DELETE USER) Área de EXCLUIR CONTA de usuário  (BACKEND)
    btnDeleteAccount.addEventListener('click', function () {
        exibirDialogConfirm('Tem certeza que deseja excluir sua conta?');

        // Remove os event listeners anteriores, caso existam
        const btnNoConfirm = document.getElementById('btn-no-confirm-dialog');
        const btnYesConfirm = document.getElementById('btn-yes-confirm-dialog');

        const removeListeners = () => {
            btnNoConfirm.removeEventListener('click', onCancelDelete);
            btnYesConfirm.removeEventListener('click', onConfirmDelete);
        };

        // Função para cancelar a exclusão
        const onCancelDelete = () => {
            dialogConfirmDeleteAccount.close();
            removeListeners();
        };

        // Função para confirmar a exclusão
        const onConfirmDelete = async () => {
            const token = localStorage.getItem('jwt');
            const user = JSON.parse(localStorage.getItem('user'));

            if (!token || !user) {
                dialogConfirmDeleteAccount.close();
                exibirErro('Usuário não autenticado.');
                removeListeners();
                return;
            }

            try {
                const response = await fetch(`http://localhost:1337/api/users/${user.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response);
                if (response.ok) {
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('user');

                    dialogConfirmDeleteAccount.close();
                    exibirSuccess('Conta excluída com sucesso! Redirecionando...');

                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000); 
                } else {
                    const data = await response.json();
                    dialogConfirmDeleteAccount.close();
                    exibirErro(data.error?.message ?? 'Falha ao excluir a conta.');
                }
            } catch (error) {
                console.error('Erro ao excluir a conta:', error);
                dialogConfirmDeleteAccount.close();
                exibirErro('Erro ao processar a solicitação.');
            }
            removeListeners();
        };

        btnNoConfirm.addEventListener('click', onCancelDelete);
        btnYesConfirm.addEventListener('click', onConfirmDelete);
    });

    //(READ IMÓVEIS) Área de listar imóveis de um LOCADOR (BACKEND)
    async function listarImoveisDoUsuario(userId) {
        try {
          const response = await axios.get(`http://localhost:1337/api/imoveis`, {
            params: {
              filters: {
                user: {
                  id: {
                    $eq: userId
                  }
                }
              },
              populate: '*'
            }
          });
          console.log(response.data);
          return response.data.data;
        } catch (error) {
          console.error('Erro ao listar imóveis:', error);
        }
    }

    //(DELETE IMÓVEIS)
    //(UPDATE IMÓVEIS) 
    async function renderizarMeusImoveis() {
        const imoveis = await listarImoveisDoUsuario(user.id);
        const container = document.getElementById('my-ad-sec-container');

        if (imoveis.length === 0) {
          container.innerHTML = '<p>Você não possui imóveis cadastrados.</p>';
          return;
        }
      
        imoveis.forEach((imovel) => {
            const imovelElement = document.createElement('div');
            imovelElement.className = 'imovel-item';
            imovelElement.innerHTML = `
              <div class="column-description-imovel-item">
                <h3>${imovel.titleAd}</h3>
                <p>${imovel.descriptionAd}</p>
                <p><strong>Localização:</strong> ${imovel.neighborhood}</p>
                <p><strong>Valor do Aluguel:</strong> R$ ${imovel.rentValue}</p>
                <p><strong>Tempo de contrato:</strong> ${imovel.contractTime} meses</p>
              </div>
              <div class="column-buttons-imovel-item">
                <button data-id="${imovel.documentId}"  class="btn-imovel-item edit"><i class="bi bi-pencil"></i></button>
                <button data-id="${imovel.documentId}"  class="btn-imovel-item remove"><i class="bi bi-trash3-fill"></i></button>
              </div>
            `;
          container.appendChild(imovelElement);
        });

        const deleteButtons = document.querySelectorAll('.remove');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', async function () {
                const imovelId = this.getAttribute('data-id');
                if (!imovelId) {
                    console.error('ID do imóvel não encontrado');
                    return;
                }

                const confirmar = confirm('Tem certeza que deseja deletar este imóvel?');
                if (!confirmar) return;

                try {
                    const response = await fetch(`http://localhost:1337/api/imoveis/${imovelId}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    console.log(response);
                    if (response.ok) {
                        dialogConfirmDeleteAccount.close();
                        exibirSuccess('Imóvel excluído com sucesso! Redirecionando...');
    
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 2000); 
                    } else {
                        const data = await response.json();
                        dialogConfirmDeleteAccount.close();
                        exibirErro(data.error?.message ?? 'Falha ao excluir imóvel');
                    }
                } catch (error) {
                    console.error('Erro ao excluir imóvel:', error);
                    dialogConfirmDeleteAccount.close();
                    exibirErro('Erro ao processar a solicitação.');
                }
            });
        });

        const updateButtons = document.querySelectorAll('.edit');
        updateButtons.forEach((button) => {
            button.addEventListener('click', async function () {
                const imovelId = this.getAttribute('data-id');
                if (!imovelId) {
                    console.error('ID do imóvel não encontrado');
                    return;
                }

                try {
                    // Obter os dados atuais do imóvel
                    const response = await axios.get(`http://localhost:1337/api/imoveis/${imovelId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.status !== 200) {
                        console.error('Erro ao obter os dados do imóvel');
                        return;
                    }

                    const imovel = response.data.data;

                    // Solicitar novas informações ao usuário
                    const novoTitulo = prompt('Digite o novo título do anúncio:', imovel.titleAd);
                    if (novoTitulo === null) return; // Usuário cancelou

                    const novaDescricao = prompt('Digite a nova descrição do anúncio:', imovel.descriptionAd);
                    if (novaDescricao === null) return;

                    const novoBairro = prompt('Digite o novo bairro do imóvel:', imovel.neighborhood);
                    if (novoBairro === null) return;

                    const novoValorAluguel = prompt('Digite o novo valor do aluguel (R$):', imovel.rentValue);
                    if (novoValorAluguel === null) return;

                    const novoTempoContrato = prompt('Digite o novo tempo de contrato (meses):', imovel.contractTime);
                    if (novoTempoContrato === null) return;

                    // Confirmar se o usuário deseja salvar as alterações
                    const confirmar = confirm('Deseja alterar as informações do imóvel?');
                    if (!confirmar) return;

                    // Objeto com os dados atualizados
                    const imovelAtualizado = {
                        titleAd: novoTitulo,
                        descriptionAd: novaDescricao,
                        neighborhood: novoBairro,
                        rentValue: novoValorAluguel,
                        contractTime: novoTempoContrato
                    };

                    // Enviar os dados atualizados para o servidor
                    const updateResponse = await axios.put(`http://localhost:1337/api/imoveis/${imovelId}`, {
                        data: imovelAtualizado
                    }, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (updateResponse.status === 200) {
                        alert('Imóvel atualizado com sucesso!');
                        // Recarregar a lista de imóveis
                        renderizarMeusImoveis();
                    } else {
                        console.error('Falha ao atualizar imóvel');
                    }
                } catch (error) {
                    console.error('Erro ao atualizar imóvel:', error);
                }
            });
        });

    }


    //Desabilita botões de acordo com os papel do usuário
    disableButtonsByRole();

    // Renderiza, atualiza e remove (IMÓVEIS)
    renderizarMeusImoveis();
 
    // (READ USER) Sincroniza os dadaos com o banco de dados
    syncUserProfile();  
}

// Carregando as seções com base nos pontões clicados
buttonHome.addEventListener('click', () => loadContentSection('home', initHome));
buttonPontosE.addEventListener('click', () => loadContentSection('pontos-e', initPontosE));
buttonSobre.addEventListener('click', () => loadContentSection('sobre', initSobre));
buttonSuporte.addEventListener('click', () => loadContentSection('suporte', initSuporte));
buttonAnunciar.addEventListener('click', () => {
    let userRole = getDataUser('role');
    if(userIsLogged()){
        if(userRole === 'locador'){
            loadContentSection('anunciar', initAnunciar);
        }    
    }else{
        loadModalLoginSignup();
    }
});
buttonProfile.addEventListener('click', () => {
    loadContentSection('profile', initProfile);
});
    
// Ajusta o indicador de página atual 
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
const userRole = getDataUser('role');
if(userRole !== 'locador'){
    buttonAnunciar.classList.add('disabled');
} else{
    buttonAnunciar.classList.remove('disabled');
}

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
    buttonAnunciar.classList.remove('disabled');
}

// LOGOUT
function logout() {
    localStorage.removeItem('jwt');  
    window.location.href = 'index.html';
}

buttonLogout.addEventListener('click', logout);

const token = localStorage.getItem('jwt');

fetch('http://localhost:1337/api/users/me', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Falha ao buscar usuário.');
    }
    return response.json();
})
  .then(user => {
    console.log('Dados do usuário:', user);
    
    // Verificação do papel do usuário
    if (user?.role?.id === 2) {
      console.log('Usuário autenticado como administrador.');
    } else {
      console.log('Usuário autenticado, mas sem permissão de administrador.');
    }
})
  .catch(error => console.error('Erro ao buscar dados do usuário:', error));
