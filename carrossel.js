document.querySelectorAll(".carrossel").forEach(carrossel => {
    const itens = carrossel.querySelectorAll(".carrosselImg");//aqui ele pega todos as .class com esse nome 
    const botoesImg = Array.from(itens, () =>{ 
        return `<span class = "botaoCarrossel"></span>`;
    });

    carrossel.insertAdjacentHTML("beforeend",`
        <div class = "carrosselNavegacao">
            ${botoesImg.join("")}
        </div>
    `);

    const botoes = carrossel.querySelectorAll(".botaoCarrossel");

    botoes.forEach((botao, i) => {
        botao.addEventListener("click",() => {
            itens.forEach(item => item.classList.remove("carrosselImg-Selecionado"));
            botoes.forEach(botao => botao.classList.remove("botaoCarrossel-Selecionado"));

            itens[i].classList.add("carrosselImg-Selecionado");
            botao.classList.add("botaoCarrossel-Selecionado");
        });
    });

    //Seleciona o primeiro item assim que a página carregar
    itens[0].classList.add("carrosselImg-Selecionado");
    
});

