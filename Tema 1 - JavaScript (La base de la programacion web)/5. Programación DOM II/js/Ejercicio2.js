document.getElementById("sumar").onclick = () => {
    let contador = document.getElementById("contador");
    contador.value = parseInt(contador.value) + 10;
}
document.getElementById("inicializar").onclick = () => {
    document.getElementById("contador").value = 0;
}