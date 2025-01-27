 // Quando o botão de login for clicado, o modal será exibido
document.getElementById('button-login').addEventListener('click', function(event) {
  // Exibe o modal
  document.getElementById('modal-login-register').style.display = 'flex';

  // Garante que o estado inicial seja a tela de login
  document.getElementById('sec-register').style.display = 'none';
  document.getElementById('sec-login').style.display = 'block';
  document.getElementById('button-modal-login').style.color = '#0047A5';
  document.getElementById('button-modal-login').style.backgroundColor = 'white';
  document.getElementById('button-modal-register').style.color = 'white';
  document.getElementById('button-modal-register').style.backgroundColor = 'transparent';

  // Previne o comportamento padrão do botão (caso haja algo mais vinculado)
  event.preventDefault();
});

// Quando o botão de fechar for clicado, o modal será fechado
document.getElementById('button-close-modal').addEventListener('click', function() {
  document.getElementById('modal-login-register').style.display = 'none';
});

document.getElementById('button-modal-register').addEventListener('click', function() {
  document.getElementById('sec-login').style.display = 'none';
  document.getElementById('sec-register').style.display = 'block';
  document.getElementById('button-modal-register').style.color = '#0047A5';
  document.getElementById('button-modal-register').style.backgroundColor = 'white';
  document.getElementById('button-modal-login').style.color = 'white';
  document.getElementById('button-modal-login').style.backgroundColor = 'transparent';
});

document.getElementById('button-modal-login').addEventListener('click', function() {
  document.getElementById('sec-register').style.display = 'none';
  document.getElementById('sec-login').style.display = 'block';
  document.getElementById('button-modal-login').style.color = '#0047A5';
  document.getElementById('button-modal-login').style.backgroundColor = 'white';
  document.getElementById('button-modal-register').style.color = 'white';
  document.getElementById('button-modal-register').style.backgroundColor = 'transparent';
});

const modalOverlay = document.querySelector('.modal-overlay');
const openModalBtn = document.querySelector('#button-modal-login');
const closeModalBtn = document.querySelector('#button-close-modal');

// Abrir modal
openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex'; // Mostra o modal
  modalOverlay.classList.add('fade-in'); // Aplica a animação
});

// Fechar modal
closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('fade-out'); // Aplica animação de saída
  setTimeout(() => {
      modalOverlay.style.display = 'none'; // Esconde após a animação
      modalOverlay.classList.remove('fade-in', 'fade-out'); // Remove classes
  }, 500); // O tempo aqui deve corresponder ao tempo da animação
});

const selectElement = document.getElementById('register-type-user-select');
  // Adiciona um evento para capturar a mudança no select
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value; // Obtém o valor da opção selecionada

  if (selectedValue === "locador") {
      document.getElementById('locatario-info').style.display = 'none';
      document.getElementById('locador-info').style.display = 'flex';
  } else {
      document.getElementById('locador-info').style.display = 'none';
      document.getElementById('locatario-info').style.display = 'flex';
  }
});



