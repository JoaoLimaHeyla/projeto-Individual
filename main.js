const scrowUp = document.getElementById('setaSubida');
const scrowDown = document.getElementById('seta');

scrowDown.addEventListener('click', descer => {
    window.scrollTo(0,520);
});

scrowUp.addEventListener('click', subir => {
  window.scrollTo(0,0);  
}); //eventListener funciona como um 'observador', o comando no primeiro parâmetro indica a ação que ele espera para poder ser executado, e o segundo a função que ele chama após execução
