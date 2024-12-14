/*Tela de login*/
const usuarios = {
    cliente: { email: "cliente", senha: "123456", redirecionamento: "cliente/painel.html" },
    admin: { email: "ROMULO.DNA", senha: "123456", redirecionamento: "Empresa/painel.html" }
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


const nomeUsuario = "ROMULO"; 
document.getElementById("nomeUsuario").innerText = nomeUsuario;

    
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

/*Funcionario*/
document.getElementById("funcionarioForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const cargo = document.getElementById("cargo").value;
    const dataContratacao = document.getElementById("dataContratacao").value;
    const salario = document.getElementById("salario").value;
    const status = document.getElementById("status").value;

    if (nome && cpf && dataNascimento && telefone && endereco && cargo && dataContratacao && salario && status) {
        alert("Funcionário cadastrado com sucesso!");
        console.log({
            nome,
            cpf,
            dataNascimento,
            telefone,
            endereco,
            cargo,
            dataContratacao,
            salario,
            status
        });
        document.getElementById("funcionarioForm").reset(); 
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

/*Motorista*/
document.getElementById("motoristaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cnh = document.getElementById("cnh").value.trim();
    const categoriaCnh = document.getElementById("categoriaCnh").value;
    const validadeCnh = document.getElementById("validadeCnh").value;
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    if (nome && cpf && cnh && categoriaCnh && validadeCnh && telefone && endereco) {
        alert("Motorista cadastrado com sucesso!");
        console.log({
            nome,
            cpf,
            cnh,
            categoriaCnh,
            validadeCnh,
            telefone,
            endereco
        });
        document.getElementById("motoristaForm").reset(); 
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

/*Veiculo*/
document.getElementById("veiculoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const placa = document.getElementById("placa").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const ano = document.getElementById("ano").value;
    const tipo = document.getElementById("tipo").value;
    const capacidade = document.getElementById("capacidade").value;
    const status = document.getElementById("status").value;

    if (placa && modelo && marca && ano && tipo && capacidade && status) {
        alert("Veículo cadastrado com sucesso!");
        console.log({
            placa,
            modelo,
            marca,
            ano,
            tipo,
            capacidade,
            status
        });
        document.getElementById("veiculoForm").reset(); 
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

/*Rotas*/
const mockData = [
    { numero: 12345, tipo: "Coleta", origem: "São Paulo", destino: "Rio de Janeiro", status: "Em andamento", data: "2024-12-08" },
    { numero: 12346, tipo: "Distribuição", origem: "Rio de Janeiro", destino: "Cliente XYZ", status: "Finalizada", data: "2024-12-07" }
];

function carregarTabela() {
    const tabela = document.getElementById("rota-table");
    tabela.innerHTML = "";
    mockData.forEach(rota => {
        tabela.innerHTML += `
            <tr>
                <td>${rota.numero}</td>
                <td>${rota.tipo}</td>
                <td>${rota.origem}</td>
                <td>${rota.destino}</td>
                <td>${rota.status}</td>
                <td>${rota.data}</td>
                <td>
                    <button class="btn btn-warning btn-sm">Editar</button>
                    <button class="btn btn-danger btn-sm">Encerrar</button>
                </td>
            </tr>
        `;
    });
}

function inicializarMapa() {
    const map = L.map('map').setView([-23.5505, -46.6333], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);
}

document.addEventListener("DOMContentLoaded", () => {
    carregarTabela();
    inicializarMapa();
}); 

document.getElementById('contato-preferido').addEventListener('change', function() {
    if (this.value === 'telefone') {
        document.getElementById('telefone-container').style.display = 'block';
    } else {
        document.getElementById('telefone-container').style.display = 'none';
    }
});
