const botoes11 = document.querySelectorAll("#escolha-iphone11 li");
const imagem = document.querySelector("#imagem-produto");

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
