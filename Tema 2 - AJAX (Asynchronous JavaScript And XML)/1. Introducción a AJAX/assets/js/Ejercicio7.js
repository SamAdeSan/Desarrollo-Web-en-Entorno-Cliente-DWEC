let objeto = new XMLHttpRequest();
let nombre = "Samuel Aded"
let edad = 19
function enviarParametros() {
    objeto.open("GET", "archivos-ejercicios/procesar.php?nombre=" + nombre + "&edad=" + edad, true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById("resultadoGET").innerHTML = objeto.responseText;
        }
    };
    objeto.send();
}