const carrossel = document.querySelector(".carrossel");
const botoes = carrossel.querySelectorAll(".botaoCarrossel");
const itens = carrossel.querySelectorAll(".carrosselImg");//aqui ele pega todos as .class com esse nome e transforma em array 


botoes.forEach((botao, i) => { // botao é apenas um apelido pelo o que eu peço pra ele rodar tudo dentro e o i de index passa a posição
    botao.addEventListener("click",() => { // função sem parâmetro
        itens.forEach(item => item.classList.remove("carrosselImg-Selecionado"));//item apelido e como é em uma linha ele não precisa de colchetes
        botoes.forEach(botao => botao.classList.remove("botaoCarrossel-Selecionado"));//removo todas as class e só na selecionada que fica graças ao add abaixo

        itens[i].classList.add("carrosselImg-Selecionado");
        botao.classList.add("botaoCarrossel-Selecionado");
    });
});

//Seleciona o primeiro item assim que a página carregar
itens[0].classList.add("carrosselImg-Selecionado");
