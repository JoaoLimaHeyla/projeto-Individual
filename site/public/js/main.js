const scrowUp = document.getElementById('setaSubida');
const scrowDown = document.getElementById('seta');

scrowDown.addEventListener('click', () => {
    window.scrollTo(0,520);
});

scrowUp.addEventListener('click', () => {
  window.scrollTo(0,0);  
}); //eventListener funciona como um 'observador'

function opacidade(){
  const fakeLoading = document.getElementById('fakeLoading');

  setTimeout(() =>{
    fakeLoading.style.opacity = 0;

    setTimeout(() => fakeLoading.style.display = 'none' , 400)//arrow function resumida 

  }, 4800);


};
opacidade();


const ctgSaturno = document.getElementById("SrSaturno");
var loucura = 0
ctgSaturno.addEventListener('click', () => {
  loucura++
  alert(`Você clicou no srSaturno ${loucura} vezes!`)
})
