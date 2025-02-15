let loginForm = document.getElementById('login-form');
let contEmail = document.getElementById('container-email');
let contSenha = document.getElementById('container-senha');
let emailLogin = document.getElementById('login-email');
let senhaLogin = document.getElementById('login-senha');
let alertEmailLogin = document.getElementById('alert-email-login');
let alertSenhaLogin = document.getElementById('alert-password-login');
let iconEmail = document.getElementById('i-email');
let iconSenha = document.getElementById('i-senha');
let alertMsgEmail1 = document.getElementById('alert-msg-email-login-1');
let alertMsgEmail2 = document.getElementById('alert-msg-email-login-2');
let alertMsgSenha = document.getElementById('alert-msg-password-login');

//Verifica se o email é valido
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function verifyValidateLogin(event) {
    let isValid = true;

    //Valida email
    if (emailLogin.value === '') {
        alertEmailLogin.style.display = 'unset';
        alertMsgEmail1.style.display = 'unset';
        alertMsgEmail2.style.display = 'none';
        iconEmail.classList.add('form-i-alert');
        emailLogin.classList.add('input-login-alert');
        contEmail.classList.add('icon-and-placeholder-alert');
        isValid = false;
    } else if (!validateEmail(emailLogin.value)) {
        alertEmailLogin.style.display = 'unset';
        alertMsgEmail1.style.display = 'none';
        alertMsgEmail2.style.display = 'unset';
        iconEmail.classList.add('form-i-alert');
        emailLogin.classList.add('input-login-alert');
        contEmail.classList.add('icon-and-placeholder-alert');
        isValid = false;
    } else {
        alertEmailLogin.style.display = 'none';
        alertMsgEmail1.style.display = 'none';
        alertMsgEmail2.style.display = 'none';
        iconEmail.classList.remove('form-i-alert');
        emailLogin.classList.remove('input-login-alert');
        contEmail.classList.remove('icon-and-placeholder-alert');
    }

    //valida senha
    if (senhaLogin.value === '') {
        alertSenhaLogin.style.display = 'unset';
        alertMsgSenha.style.display = 'unset';
        iconSenha.classList.add('form-i-alert');
        senhaLogin.classList.add('input-login-alert');
        contSenha.classList.add('icon-and-placeholder-alert');
        isValid = false;
    } else {
        alertSenhaLogin.style.display = 'none';
        alertMsgSenha.style.display = 'none';
        iconSenha.classList.remove('form-i-alert');
        senhaLogin.classList.remove('input-login-alert');
        contSenha.classList.remove('icon-and-placeholder-alert');
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
loginForm.addEventListener('submit', verifyValidateLogin);

//Limpa os alertas quando o usuário começa a digitar 
emailLogin.addEventListener('input', function(){
    alertEmailLogin.style.display = 'none';
    alertMsgEmail1.style.display = 'none';
    alertMsgEmail2.style.display = 'none';
    iconEmail.classList.remove('form-i-alert');
    emailLogin.classList.remove('input-login-alert');
    contEmail.classList.remove('icon-and-placeholder-alert');
});

//Limpa os alertas quando o usuário começa a digitar 
senhaLogin.addEventListener('input', function(){
    alertSenhaLogin.style.display = 'none';
    alertMsgSenha.style.display = 'none';
    iconSenha.classList.remove('form-i-alert');
    senhaLogin.classList.remove('input-login-alert');
    contSenha.classList.remove('icon-and-placeholder-alert');
});