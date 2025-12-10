let objeto = new XMLHttpRequest();

function ejecutarPHP() {
    objeto.open("GET", "archivos-ejercicios/fecha.php", true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById("resultadoPHP").innerHTML = objeto.responseText;
        }
    };
    objeto.send();
}