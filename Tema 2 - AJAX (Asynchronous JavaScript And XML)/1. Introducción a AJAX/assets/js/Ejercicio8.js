let objeto = new XMLHttpRequest();

function mostrarJSON() {
    objeto.open("GET", "archivos-ejercicios/datos.json", true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            let datos = JSON.parse(objeto.responseText);
            let texto = "";

            for (let i = 0; i < datos.length; i++) {
                texto += datos[i].nombre + " - " + datos[i].edad + " años<br>";
            }
            document.getElementById("contenidoJSON").innerHTML = texto;
        }
    };
    objeto.send();
}