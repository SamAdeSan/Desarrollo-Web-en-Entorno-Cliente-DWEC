let objeto = new XMLHttpRequest();
function mostrarXML() {
    objeto.open("GET", "archivos-ejercicios/datos.xml", true);
    objeto.onload = function() {
        if (objeto.status === 200) {
            let xml = objeto.responseXML;
            let elementos = xml.getElementsByTagName("item");
            let html = "";
            for(let i = 0; i < elementos.length; i++) {
                html += elementos[i].textContent + "<br>";
            }
            document.getElementById("contenidoXML").innerHTML = html;
        }
    };
    objeto.send(null);
}