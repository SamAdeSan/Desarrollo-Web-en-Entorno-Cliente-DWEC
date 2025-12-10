let objeto = new XMLHttpRequest();

function cargarJS() {
    objeto.open("GET", "archivos-ejercicios/extension.js", true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            eval(objeto.responseText);
        }
    };
    objeto.send();
}