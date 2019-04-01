function addListener(elementClass) {
    menuItems = document.getElementsByClassName('menu-item');
    for (var i = 0; i < menuItems.length; i++)
        menuItems[i].addEventListener('click', setAsCurrent, false);
}

function setAsCurrent() {
    removeLastCurrent();
    document.title = 'DSC - ' + this.textContent;
    this.classList.add("current")
}

function removeLastCurrent() {
    menuItems = document.getElementsByClassName('menu-item');
    for (var i = 0; i < menuItems.length; i++)
        menuItems[i].classList.remove("current");
}

function realizarLogin(loginForm) {
    var usuario = document.getElementById('loginUser');
    var senha = document.getElementById('loginPassword');
    
    var msgAlert = '';
    if (usuario.value == '' && senha.value == '')
        msgAlert = 'Usuário e senha devem ser informados.';
    else if (usuario.value == '' && senha.value != '')
        msgAlert = 'Usuário deve ser informado.';
    else if (usuario.value != '' && senha.value == '')
        msgAlert = 'Senha deve ser informada.';

    if (msgAlert != '')
        alert(msgAlert);
    else {
        loginForm.hidden = true;
        logoutForm = document.getElementById('logoutForm');
        logoutForm.hidden = false;
        logoutForm.innerHTML = 'Boas vindas, <b>' + usuario.value + `</b>. <button onclick="realizarLogout('logoutForm', 'loginForm')">Sair</button>`;
        usuario.value = '';
        senha.value = '';
    }
}

function realizarLogout(logoutFormId, loginFormId) {
    console.log(logoutFormId);
    console.log(loginFormId);

    logoutForm = document.getElementById(logoutFormId);
    logoutForm.hidden = true;
    loginForm = document.getElementById(loginFormId);
    loginForm.hidden = false;
}