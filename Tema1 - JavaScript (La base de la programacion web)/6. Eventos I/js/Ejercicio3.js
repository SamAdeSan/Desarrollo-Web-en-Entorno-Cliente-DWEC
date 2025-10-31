let div = document.getElementById("texto");
div.style.fontSize = "12pt";
div.onmouseover = (event) => {
    cambiarTamano(event);
}
div.onmouseout = (event) => {
    cambiarTamano(event);
}
function cambiarTamano(event) {
    if (event.type === "mouseover") {
        event.target.style.fontSize = "16pt";
    } else if (event.type === "mouseout") {
        event.target.style.fontSize = "12pt";
    }
}