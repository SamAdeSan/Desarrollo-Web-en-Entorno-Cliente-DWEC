let objeto = new XMLHttpRequest();

function ejecutarPHPconPOST() {
    objeto.open("POST", "archivos-ejercicios/datos.php", true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById("resultadoPHP").innerHTML = objeto.responseText;
        }
    };
    objeto.send();
}