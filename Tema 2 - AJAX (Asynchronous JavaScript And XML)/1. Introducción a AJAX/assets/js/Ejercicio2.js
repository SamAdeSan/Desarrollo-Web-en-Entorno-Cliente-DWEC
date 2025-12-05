let objeto = new XMLHttpRequest();
function cargarPagina(pagina) {
    objeto.open("GET", pagina, true);
    objeto.onload = function() {
        if(objeto.status === 200) {
            document.getElementById("contenido").innerHTML = objeto.responseText;
        } else {
            document.getElementById("contenido").innerHTML = "Error al cargar la página.";
        }
    };
    objeto.send();
}