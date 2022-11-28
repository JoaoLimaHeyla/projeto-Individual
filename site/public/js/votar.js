const botaoGostei = document.getElementById('gostei');

const botaoNGostei = document.getElementById('nGostei');

botaoGostei.addEventListener('click',
    function gostou() {

        var idUsuario = sessionStorage.ID_USUARIO;
        
        fetch(`/usuarios/votar/${idUsuario}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
        
        }).then(function (resposta) {
            alert(`Voto adicionado como Smaaaash!(Gostei!).`);

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("VOTO ADICIONADO COM SUCESSO");
           
                setTimeout(() => {
                    window.location = "posLogin.html";
                }, "500")

            } else {
                console.log("HOUVE UM ERRO");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`)
        })
        return false;
    });


botaoNGostei.addEventListener('click',
    function ngostou() {

        var idUsuario = sessionStorage.ID_USUARIO;

        fetch(`/usuarios/naoVotar/${idUsuario}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },

        }).then(function (resposta) {
            alert(`Voto adicionado como Meh!(Não gostei!).`);
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("VOTO ADICIONADO COM SUCESSO");
                //N PRECISA SER SET TIMEOUT MAS ADICIONAR UM 'BLOQUEIO' APÓS O VOTO

                //setTimeout
                setTimeout(() => {
                    window.location = "posLogin.html";
                }, "500")

            } else {
                console.log("HOUVE UM ERRO");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`)
        })
        return false;
    });
        //
//=========================================================================
function totalVotos() {
    //aguardar();
    fetch("/usuarios/totalVotos").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                var feed = document.getElementById("contagem");
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                var feed = document.getElementById("contagem");

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];   
                    //finalizarAguardar();
                    feed.innerHTML = "<br> Total de votos: " + publicacao.contagem; //esse publicacao.contagem o contagem é o apelido dado a count(fkVotos) 
                    
                    if(publicacao.contagem < 5){
                        feed.style.color = 'red';
                    }else if(publicacao.contagem < 10){
                        feed.style.color = 'orange';
                    }else{
                        feed.style.color = 'lightgreen';
                    }
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        //finalizarAguardar();
    });
}
//==================================================