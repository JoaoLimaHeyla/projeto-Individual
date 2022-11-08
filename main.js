const seta = document.getElementById('setaSubidinha');
function subir(){
window.scrollTo(0, 0);// parâmetro para mandar para a posição zero da página(início)
};

seta.addEventListener('click',subir); //eventListener funciona como um 'observador', o comando no primeiro parâmetro indica a ação que ele espera para poder ser executado, e o segundo a função que ele chama após execução
