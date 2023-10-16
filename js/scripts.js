const botoes11 = document.querySelectorAll("#escolha-iphone11 li");
const imagem = document.querySelector("#imagem-produto");

const botoes12 = document.querySelectorAll("#escolha-iphone12 li");
const imagemIp12 = document.querySelector("#imagem-produto-12");

botoes11.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    botoes11.forEach((btns) => {
      btns.querySelector(".cor").classList.remove("selecionado");
    });

    const botao11 = e.target;
    const id11 = botao11.getAttribute("id");

    console.log(id11);

    botao11.querySelector(".cor").classList.add("selecionado");

    imagem.classList.add("transparencia");
    imagem.setAttribute("src", `img/img_iphone11/iphone11_${id11}.png`);

    setTimeout(() => {
      imagem.classList.remove("transparencia");
    }, 300);
  });
});

botoes12.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    botoes12.forEach((btns) => {
      btns.querySelector(".cor").classList.remove("selecionado");
    });

    const botao12 = e.target;
    const id12 = e.target.getAttribute("id");

    botao12.querySelector(".cor").classList.add("selecionado");

    imagemIp12.classList.add("transparencia");
    imagemIp12.setAttribute("src", `img/img_iphone12/iphone12_${id12}.png`);

    setTimeout(() => {
      imagemIp12.classList.remove("transparencia");
    }, 300);
  });
});
