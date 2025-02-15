let buttonLogin = document.getElementById('button-login');
let modalLoginSignup = document.getElementById('modal-login-register');
let secLogin = document.getElementById('sec-login');
let secSignup = document.getElementById('sec-register');
let buttonLoginModal = document.getElementById('button-modal-login');
let buttonSignupModal = document.getElementById('button-modal-register');
let buttonCloseM = document.getElementById('button-close-modal');

//Troca os estados dos botões (Login / Criar Conta)
function toggleButtonEnable(button) {
  buttonLoginModal.classList.remove('button-modal-enable', 'button-modal-disable');
  buttonSignupModal.classList.remove('button-modal-enable', 'button-modal-disable');

  if (button === buttonSignupModal) {
    buttonLoginModal.classList.add('button-modal-disable');
    buttonSignupModal.classList.add('button-modal-enable');
  } else {
    buttonLoginModal.classList.add('button-modal-enable');
    buttonSignupModal.classList.add('button-modal-disable');   
  }
}
 
 // Quando o botão de login for clicado, o modal será exibido
buttonLogin.addEventListener('click', function(event) {

  modalLoginSignup.style.display = 'flex';

  // Garante que o estado inicial seja a tela de login
  secLogin.style.display = 'block';
  secSignup.style.display = 'none';

  //Reseta os estados dos botões 
  buttonLoginModal.classList.remove('button-modal-enable', 'button-modal-disable');
  buttonSignupModal.classList.remove('button-modal-enable', 'button-modal-disable');
  
  buttonLoginModal.classList.add('button-modal-enable');
  buttonSignupModal.classList.add('button-modal-disable');

  event.preventDefault();
});

// Quando o botão de fechar for clicado, o modal será fechado
buttonCloseM.addEventListener('click', function() {
  modalLoginSignup.style.display = 'none';
});

buttonLoginModal.addEventListener('click', function () {
  secLogin.style.display = 'block';
  secSignup.style.display = 'none';
  toggleButtonEnable(buttonLoginModal);
});

buttonSignupModal.addEventListener('click', function () {
  secLogin.style.display = 'none';
  secSignup.style.display = 'block';
  toggleButtonEnable(buttonSignupModal);
});




