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
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("VOTO ADICIONADO COM SUCESSO");
           
                setTimeout(() => {
                    window.location = "posLogin.html";
                }, "1000")

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
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("VOTO ADICIONADO COM SUCESSO");
                //N PRECISA SER SET TIMEOUT MAS ADICIONAR UM 'BLOQUEIO' APÓS O VOTO

                //setTimeout
                setTimeout(() => {
                    window.location = "posLogin.html";
                }, "1000")

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
function totalVotos(){

        fetch(`/usuarios/totalVotos`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },

        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("VOTO ADICIONADO COM SUCESSO");
                //N PRECISA SER SET TIMEOUT MAS ADICIONAR UM 'BLOQUEIO' APÓS O VOTO

                //setTimeout
                setTimeout(() => {
                    window.location = "posLogin.html";
                }, "1000")

            } else {
                console.log("HOUVE UM ERRO");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`)
        })
        return false;
}
//==================================================