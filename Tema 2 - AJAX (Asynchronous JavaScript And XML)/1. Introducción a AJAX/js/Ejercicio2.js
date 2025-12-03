function cargarPagina(url, contenedorId) {
    let objeto = new XMLHttpRequest();
    objeto.open('GET', url, true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById(contenedorId).innerHTML = objeto.responseText;
        }
    };
    objeto.send();
}