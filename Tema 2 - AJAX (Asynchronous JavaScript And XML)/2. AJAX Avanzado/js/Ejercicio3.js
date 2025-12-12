let objeto = new XMLHttpRequest();

function ejecutarPHPconPOSTconParametros() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let parametros = "nombre=" + nombre + "&edad=" + edad;

    objeto.open("POST", "archivos-ejercicios/datos2.php", true);

    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById("respuesta").innerHTML = objeto.responseText;
        }
    };
    objeto.send(parametros);
}