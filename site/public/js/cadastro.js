var validacaoVOTO = 0;
//FOCO ^^^^^^^^^^ FOCO ^^^^^^^^^^^^^^^^
const botao = document.getElementById('botaoCadastro');

botao.addEventListener('click',

function cadastrar() {
    

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var analiseVar = validacaoVOTO; //---------------------------------------------------------------------------
    //FOCO ^^^^^^^^^^ FOCO ^^^^^^^^^^^^^^^^

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        return false;
    }else if(!emailVar.includes("@") || !emailVar.endsWith(".com")){
        alert("Por favor, verifique se as credênciais de email estão corretas");
        return false;

    }else if(senhaVar.length <= 7 || senhaVar != confirmacaoSenhaVar){
        alert("A senha precisa ter no mínimo 8 caracteres, e também refaça a verificação");
        return false;

    }else {
        setInterval(sumirMensagem, 3000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            analiseServer: analiseVar, // =========================================
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
            
            limparFormulario();
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
    });

    return false;
}
    
);

function sumirMensagem() {
    cardErro.style.display = "none"
};
