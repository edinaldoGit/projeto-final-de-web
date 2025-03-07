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
let buttonLoginModal = document.getElementById('button-modal-login');
let buttonLogin = document.getElementById('button-login');

let msgResultLoginError = document.getElementById('result-login-error');
let resultLoginSuccess = document.getElementById('result-login-success');
let imgLoginModal = document.getElementById('img-logo-icon-login-modal');
let titleLoginModal = document.getElementById('title-login-section');
let nameUser = document.getElementById('name-user');

//Verifica se o email é valido
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

//Limpa os alertas
function cleanAlertsLogin(camp){
    if(camp === emailLogin){
        alertEmailLogin.style.display = 'none';
        alertMsgEmail1.style.display = 'none';
        alertMsgEmail2.style.display = 'none';
        iconEmail.classList.remove('form-i-alert');
        emailLogin.classList.remove('input-login-alert');
        contEmail.classList.remove('icon-and-placeholder-alert');
        msgResultLoginError.style.display = 'none';
    }
    
    if(camp === senhaLogin){
        alertSenhaLogin.style.display = 'none';
        alertMsgSenha.style.display = 'none';
        iconSenha.classList.remove('form-i-alert');
        senhaLogin.classList.remove('input-login-alert');
        contSenha.classList.remove('icon-and-placeholder-alert');
        msgResultLoginError.style.display = 'none';
    }
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
        cleanAlertsLogin(emailLogin);
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
        cleanAlertsLogin(senhaLogin);
    }

    console.log("Evento submit capturado"); // Debug

    if (!isValid) {
        console.log("Formulário inválido, impedindo envio..."); // Debug
        event.preventDefault();
    } else {
        console.log("Formulário válido, permitindo envio..."); // Debug
    }
}

//Retorna apenas o primeiro nome de um usuário
function getFirstName(str) {
    const spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
}

//Faz a validação dos campos
loginForm.addEventListener('submit', verifyValidateLogin);

//Limpa os alertas e o conteúdo digitado caso o usuário clique novamente no botão de login do modal
buttonLoginModal.addEventListener('click', function(){
    emailLogin.value = '';
    senhaLogin.value = '';
    cleanAlertsLogin(emailLogin);
    cleanAlertsLogin(senhaLogin);
});

//Limpa os alertas e o conteúdo digitado caso o usuário clique no botão de login do inicio
buttonLogin.addEventListener('click', function(){
    emailLogin.value = '';
    senhaLogin.value = '';
    cleanAlertsLogin(emailLogin);
    cleanAlertsLogin(senhaLogin);
});

//Limpa os alertas quando o usuário começa a digitar 
emailLogin.addEventListener('input', function(){
    cleanAlertsLogin(emailLogin);
});

//Limpa os alertas quando o usuário começa a digitar 
senhaLogin.addEventListener('input', function(){
    cleanAlertsLogin(senhaLogin);
});


//Área de LOGIN de usuário (BACKEND)
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    //Dialog de Login feito com sucesso
    let successDialogLogin = document.getElementById('successDialogLogin');
    let msgSuccessDialogLogin = document.getElementById('mensagemSuccessDialogLogin');
    let btnCloseSuccessDialogLogin = document.getElementById('btn-close-dialog-msg-success-login');

    
    try {
        const response = await fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                identifier: emailLogin.value,
                password: senhaLogin.value
            })
        });

        const data = await response.json();
        const respostauser = await axios.get(`http://localhost:1337/api/users/me`,{
            headers: {
                'Authorization': `Bearer ${data.jwt}`
            },
            params:{
                populate:'role'
            }
        })

        localStorage.setItem('role',respostauser.data.role.name)

        if (response.ok) {
            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            const userNameT = JSON.parse(localStorage.getItem('user'));

            msgSuccessDialogLogin.innerText = 'Bem-vindo(a) de volta, ' + getFirstName(userNameT.nameUser) + '!';

            successDialogLogin.showModal();

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 4000);
        } else {
            if (data.error && data.error.message) {
                if (data.error.message.includes("Invalid")) {
                    msgResultLoginError.innerHTML = "Email ou senha incorretos. Tente novamente.";
                    msgResultLoginError.style.display = 'flex';
                }
            } else {
                msgResultLoginError.innerHTML = "Erro ao tentar fazer login. Tente novamente.";
                msgResultLoginError.style.display = 'flex';
            }
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        resultDiv.textContent = 'Erro ao tentar fazer login. Tente novamente mais tarde.';
    }
});

