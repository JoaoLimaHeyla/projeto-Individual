const botaoGostei = document.getElementById('gostei');

const botaoNGostei = document.getElementById('nGostei');

botaoGostei.addEventListener('click',
function gostou(){
    var sGostei = 'Sim'

    fetch("/usuarios/votar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            votoServer: sGostei
        })
    }).then(function (resposta){
            console.log("resposta: ", resposta);
            
            if(resposta.ok){
                console.log("VOTO ADICIONADO COM SUCESSO");
                //N PRECISA SER SET TIMEOUT MAS ADICIONAR UM 'BLOQUEIO' APÓS O VOTO

                //setTimeout
            }else{
                console.log("HOUVE UM ERRO");
            }
        })
    }).catch(function(resposta){
        console.log(`#ERRO: ${resposta}`)
    });
    //return false; NÃO SEI PRA QUE SERVE EXATAMENTE
}
