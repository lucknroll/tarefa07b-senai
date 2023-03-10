//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
}

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === 'admin' && senha === '1234') {
        window.location = "index.html";
        logado = 1;
    }

    if (logado === 0) {
        alert("Acesso negado. Dados incorretos.")
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    var usuarioCadastro = document.getElementById("usuario-cadastro").value;
    var senhaCadastro = document.getElementById("senha-cadastro").value;
    var emailCadastro = document.getElementById("email-cadastro").value;

    if (usuarioCadastro.length > 0 && senhaCadastro.length > 0 && emailCadastro.length) {
        alert("Cadastrado com sucesso");
        window.location.href = "index.html";
    } else {
        alert("Informe e-mail, usuário e senha");
    }
}