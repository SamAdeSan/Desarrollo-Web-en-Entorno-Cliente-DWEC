document.getElementById("formulario").texto.onkeypress = function (event) {
    let charCode = event.charCode || event.keyCode;
    // rango en ascii
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
}