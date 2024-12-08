document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema NeoBank iniciado.");
});

/*Tela de login*/
const usuarios = {
    cliente: { email: "joao", senha: "123456", redirecionamento: "cliente/painel.html" },
    admin: { email: "admin", senha: "123456", redirecionamento: "Empresa/painel.html" }
};

function verificarLogin() {
    const usuarioDigitado = document.getElementById("login").value;
    const senhaDigitada = document.getElementById("senha").value;

    if (usuarioDigitado === usuarios.cliente.email && senhaDigitada === usuarios.cliente.senha) {
        alert("Login bem-sucedido! Bem-vindo(a), " + usuarioDigitado + ".");
        window.location.href = usuarios.cliente.redirecionamento;
    } else if (usuarioDigitado === usuarios.admin.email && senhaDigitada === usuarios.admin.senha) {
        alert("Login bem-sucedido! Bem-vindo(a), " + usuarioDigitado + ".");
        window.location.href = usuarios.admin.redirecionamento;
    } else {
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
}

/*rastreio*/
function trackPackage() {
    const trackingCode = document.getElementById('trackingCode').value;
    if (trackingCode) {
        alert('Buscando informações para o código: ' + trackingCode);
    } else {
        alert('Por favor, insira um código de rastreamento válido!');
    }
}
/*BOTAO VOLTAR*/
    function goBack() {
        window.history.back();
    }


