//efeito do botão voltar ao Topo

function topo() {
    window.scrollTo(
        {
            top: 0, 
            left: 0,
            behavior: 'smooth'
        }
    )
}

//Validação de Login

function login() {
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '123456') {
        window.location = "index_logado.html";
        logado = 1;
    }

    if(logado == 0) {
        alert("Acesso negado, pois seus dados estão incorretos")
    }
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert('Cadsatrado com sucesso!');
    window.location.href = 'index.html';
}