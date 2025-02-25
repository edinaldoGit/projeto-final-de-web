let signupForm = document.getElementById('signup-form');
let nomeSignup = document.getElementById('signup-nome');
let emailSignup = document.getElementById('signup-email');
let senhaSignup = document.getElementById('signup-senha');
let confSenhaSignup = document.getElementById('signup-conf-senha');
let telefoneSignup = document.getElementById('telefone');
let typeUserSignup = document.getElementById('register-type-user-select');
let labelName = document.getElementById('label-nome');
let labelEmail = document.getElementById('label-email');
let labelSenha = document.getElementById('label-senha');
let labelConfSenha = document.getElementById('label-conf-senha');
let labelTelefone = document.getElementById('label-telefone');
let labelTypeUser = document.getElementById('label-user-type');
let alertMsgName1Sig = document.getElementById('alert-msg-name-signup-1');
let alertMsgName2Sig = document.getElementById('alert-msg-name-signup-2');
let alertMsgEmail1Sig = document.getElementById('alert-msg-email-signup-1');
let alertMsgEmail2Sig = document.getElementById('alert-msg-email-signup-2');
let alertMsgSenhaSig = document.getElementById('alert-msg-senha-signup');
let alertMsgConfSenha1Sig = document.getElementById('alert-msg-conf-senha-signup-1');
let alertMsgConfSenha2Sig = document.getElementById('alert-msg-conf-senha-signup-2');
let alertMsgConfSenha3Sig = document.getElementById('alert-msg-conf-senha-signup-3');
let alertMsgTelefone1Sig = document.getElementById('alert-msg-telefone-signup-1');
let alertMsgTelefone2Sig = document.getElementById('alert-msg-telefone-signup-2');
let alertMsgTypeUserSig = document.getElementById('alert-msg-usuario-signup');
let alertMsgCheckboxTermsSig = document.getElementById('alert-msg-termos-signup');
const selectElement = document.getElementById('register-type-user-select');
const checkboxTerms = document.getElementById('checkbox-terms');
const buttonLogin = document.getElementById('button-login');
const buttonSignupModal = document.getElementById('button-modal-register');

//Limpa os alertas
function cleanAlertsSignup(camp){
  
  if(camp === nomeSignup){
    alertMsgName1Sig.style.display = 'none';
    alertMsgName2Sig.style.display = 'none';
    nomeSignup.classList.remove('signup-alert-box');
    labelName.classList.remove('label-alert');
  }

  if(camp === emailSignup){
    alertMsgEmail1Sig.style.display = 'none';
    alertMsgEmail2Sig.style.display = 'none';
    emailSignup.classList.remove('signup-alert-box');
    labelEmail.classList.remove('label-alert');  
  }
  
  if(camp === senhaSignup){
    alertMsgSenhaSig.style.display = 'none';
    senhaSignup.classList.remove('signup-alert-box');
    labelSenha.classList.remove('label-alert');  
  }

  if(camp === confSenhaSignup){
    alertMsgConfSenha1Sig.style.display = 'none';
    alertMsgConfSenha2Sig.style.display = 'none';
    alertMsgConfSenha3Sig.style.display = 'none';
    confSenhaSignup.classList.remove('signup-alert-box');
    labelConfSenha.classList.remove('label-alert');
  }

  if(camp === telefoneSignup){
    alertMsgTelefone1Sig.style.display = 'none';
    alertMsgTelefone2Sig.style.display = 'none';
    telefoneSignup.classList.remove('signup-alert-box');
    labelTelefone.classList.remove('label-alert');
  }

  if(camp === typeUserSignup){
    alertMsgTypeUserSig.style.display = 'none';
    typeUserSignup.classList.remove('signup-alert-box');
    typeUserSignup.classList.remove('box-alert-userType');
    labelTypeUser.classList.remove('label-alert');
  }

  if(camp === checkboxTerms){
    alertMsgCheckboxTermsSig.style.display = 'none';
  }
}

//Verifica se o email é valido
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Verifica se o nome é válido
function validateName(nome) {
    // Expressão regular para validar o nome
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    // Testa se o nome corresponde à expressão regular
    return regex.test(nome);
}

// Verifica se a senha está entre 6 e 15 caracteres
function validatePassword(password){
    return (password.length >= 6 && password.length <= 15);
}

// Verifica se as senhas correspondem
function passwordsMatch(senha, confSenha){
    return (senha.trim() === confSenha.trim());
}

//Verifica se o telefone informado é válido
function validateTel(telefone) {
     // Remove todos os caracteres não numéricos
     telefone = telefone.replace(/\D/g, '');

     // Verifica o comprimento do número
     if (telefone.length < 10 || telefone.length > 11) {
         return false;
     }

     const regex = /^(?:(?:\+|00)?(55))?([1-9][0-9])?((?:9\d|[2-9])\d{7})$/;
 
     return regex.test(telefone);
}

// Verifica se o usuário escolheu alguma opção do tipo de usuário
function validateUserType(){
    return (!(typeUserSignup.value === 'default'));
}

function verifyValidateSignup(event) {
  let isValid = true;

  //Valida nome
  if(nomeSignup.value === ''){
      alertMsgName1Sig.style.display = 'unset';
      alertMsgName2Sig.style.display = 'none';
      nomeSignup.classList.add('signup-alert-box');
      labelName.classList.add('label-alert');
      isValid = false;
  } else if (!validateName(nomeSignup.value)){
      alertMsgName1Sig.style.display = 'none';
      alertMsgName2Sig.style.display = 'unset';
      nomeSignup.classList.add('signup-alert-box');
      labelName.classList.add('label-alert');
      isValid = false;
  } else {
      cleanAlertsSignup(nomeSignup);
  }
  
  //Valida email
  if (emailSignup.value === '') {
      alertMsgEmail1Sig.style.display = 'unset';
      alertMsgEmail2Sig.style.display = 'none';
      emailSignup.classList.add('signup-alert-box');
      labelEmail.classList.add('label-alert');
      isValid = false;
  } else if (!validateEmail(emailSignup.value)) {
      alertMsgEmail1Sig.style.display = 'none';
      alertMsgEmail2Sig.style.display = 'unset';
      emailSignup.classList.add('signup-alert-box');
      labelEmail.classList.add('label-alert');
      isValid = false;
  } else {
      cleanAlertsSignup(emailSignup);
  }

  //valida senha
  if (senhaSignup.value === '') {
      alertMsgSenhaSig.style.display = 'unset';
      senhaSignup.classList.add('signup-alert-box');
      labelSenha.classList.add('label-alert');
      isValid = false;
  } else if (!validatePassword(senhaSignup.value)){
      alertMsgSenhaSig.style.display = 'unset';
      senhaSignup.classList.add('signup-alert-box');
      labelSenha.classList.add('label-alert');
      isValid = false;
  } else {
      cleanAlertsSignup(senhaSignup);
  }

  //Valida correspondencia entre as senhas
  if(senhaSignup.value != '' && confSenhaSignup.value === ''){
      alertMsgConfSenha1Sig.style.display = 'unset';
      alertMsgConfSenha2Sig.style.display = 'none';
      alertMsgConfSenha3Sig.style.display = 'none';
      confSenhaSignup.classList.add('signup-alert-box');
      labelConfSenha.classList.add('label-alert');
      isValid = false;
  } else if(senhaSignup.value === '' && confSenhaSignup.value != ''){
      alertMsgConfSenha1Sig.style.display = 'none';
      alertMsgConfSenha2Sig.style.display = 'none';
      alertMsgConfSenha3Sig.style.display = 'unset';
      confSenhaSignup.classList.add('signup-alert-box');
      labelConfSenha.classList.add('label-alert');
      isValid = false;
  } else if(!passwordsMatch(senhaSignup.value, confSenhaSignup.value)){
      alertMsgConfSenha1Sig.style.display = 'none';
      alertMsgConfSenha2Sig.style.display = 'unset';
      alertMsgConfSenha3Sig.style.display = 'none';
      confSenhaSignup.classList.add('signup-alert-box');
      labelConfSenha.classList.add('label-alert');
      isValid = false;
  } else{
      cleanAlertsSignup(confSenhaSignup);
  }

  // Valida Telefone
  if(telefoneSignup.value === ''){
      alertMsgTelefone1Sig.style.display = 'unset';
      alertMsgTelefone2Sig.style.display = 'none';
      telefoneSignup.classList.add('signup-alert-box');
      labelTelefone.classList.add('label-alert');
      isValid = false;
  } else if(!validateTel(telefoneSignup.value)){
      alertMsgTelefone1Sig.style.display = 'none';
      alertMsgTelefone2Sig.style.display = 'unset';
      telefoneSignup.classList.add('signup-alert-box');
      labelTelefone.classList.add('label-alert');
      isValid = false;
  } else {
      cleanAlertsSignup(telefoneSignup);
  }

  //Valida Tipo de usuário
  if(!validateUserType()){
      alertMsgTypeUserSig.style.display = 'unset';
      typeUserSignup.classList.add('signup-alert-box');
      typeUserSignup.classList.add('box-alert-userType');
      labelTypeUser.classList.add('label-alert');
      isValid = false;
  } else {
      cleanAlertsSignup(typeUserSignup);
  }

  // Valida se o usuário aceitou os termos
  if(!checkboxTerms.checked){
      alertMsgCheckboxTermsSig.style.display = 'unset';
      isValid = false;
  } else{
      cleanAlertsSignup(checkboxTerms);
  }

  console.log("Evento submit capturado"); // Debug

  if (!isValid) {
      console.log("Formulário inválido, impedindo envio..."); // Debug
      event.preventDefault();
  } else {
      console.log("Formulário válido, permitindo envio..."); // Debug
  }

}

//Faz a validação dos campos
signupForm.addEventListener('submit', verifyValidateSignup);

//Limpa os alertas quando o usuário começa a digitar
nomeSignup.addEventListener('input', function(){
  cleanAlertsSignup(nomeSignup);
});

emailSignup.addEventListener('input', function(){
  cleanAlertsSignup(emailSignup);
});

senhaSignup.addEventListener('input', function(){
  cleanAlertsSignup(senhaSignup);
});

confSenhaSignup.addEventListener('input', function(){
  cleanAlertsSignup(confSenhaSignup);
});

telefoneSignup.addEventListener('input', function(){
  cleanAlertsSignup(telefoneSignup);
});

typeUserSignup.addEventListener('change', function(){
  cleanAlertsSignup(typeUserSignup);
});

//Limpa os alertas e o conteúdo digitado caso o usuário clique novamente no botão de Criar conta do modal
buttonSignupModal.addEventListener('click', function(){
  nomeSignup.value = '';
  emailSignup.value = '';
  senhaSignup.value = '';
  confSenhaSignup.value = '';
  telefoneSignup.value = '';
  typeUserSignup.value = 'default';
  checkboxTerms.checked = false;
  cleanAlertsSignup(nomeSignup);
  cleanAlertsSignup(emailSignup);
  cleanAlertsSignup(senhaSignup);
  cleanAlertsSignup(confSenhaSignup);
  cleanAlertsSignup(telefoneSignup);
  cleanAlertsSignup(typeUserSignup);
  cleanAlertsSignup(checkboxTerms);
});

//Limpa os alertas e o conteúdo digitado caso o usuário clique no botão de login do inicio
buttonLogin.addEventListener('click', function(){
  nomeSignup.value = '';
  emailSignup.value = '';
  senhaSignup.value = '';
  confSenhaSignup.value = '';
  telefoneSignup.value = '';
  typeUserSignup.value = 'default';
  checkboxTerms.checked = false;
  cleanAlertsSignup(nomeSignup);
  cleanAlertsSignup(emailSignup);
  cleanAlertsSignup(senhaSignup);
  cleanAlertsSignup(confSenhaSignup);
  cleanAlertsSignup(telefoneSignup);
  cleanAlertsSignup(typeUserSignup);
  cleanAlertsSignup(checkboxTerms);
});

// Adiciona um evento para capturar a mudança no select
typeUserSignup.addEventListener('change', function () {
  const selectedValue = selectElement.value; 

  if (selectedValue === "locador") {
      document.getElementById('locatario-info').style.display = 'none';
      document.getElementById('locador-info').style.display = 'flex';
  } else {
      document.getElementById('locador-info').style.display = 'none';
      document.getElementById('locatario-info').style.display = 'flex';
  }
});

// Criando um novo usuário (CREATE USER)------------------------------------------------------
signupForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const userData = {
    nameUser: nomeSignup.value,
    username: emailSignup.value,
    email: emailSignup.value,
    password: senhaSignup.value,
    telephone: telefoneSignup.value,  
  };

  try {
    const response = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      userData
    );

    alert("Usuário cadastrado com sucesso!");
    console.log(response.data);
  } catch (error) {
    // Tratamento de erros aprimorado
    const errorMessage = error.response?.data?.error?.message 
      || error.message 
      || "Erro desconhecido ao cadastrar";
    
    console.error("Erro ao cadastrar usuário:", errorMessage);
    alert("Erro ao cadastrar: " + errorMessage);
  }
});
