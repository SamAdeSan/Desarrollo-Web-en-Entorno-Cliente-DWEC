let objeto = new XMLHttpRequest();

function cargarDatos() {
    let zona = document.getElementById("resultadoCarga");
    zona.innerHTML = "<img src='archivos-ejercicios/just-like-the-simulations.gif' width='auto'>";

    objeto.open("GET", "archivos-ejercicios/datos.php", true);

    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            zona.innerHTML = objeto.responseText;
        }
    };

    objeto.send();
}