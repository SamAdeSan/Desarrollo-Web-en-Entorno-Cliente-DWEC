let suma = document.getElementById("suma");
let inicializar = document.getElementById("inicializar");
let valorNum = document.getElementById("valorNum");

inicializar.addEventListener("click", () => {
    valorNum.value = 0;
});

suma.addEventListener("click", () => {
    let num = parseInt(valorNum.value);
    num += 10;
    valorNum.value = num;
});
