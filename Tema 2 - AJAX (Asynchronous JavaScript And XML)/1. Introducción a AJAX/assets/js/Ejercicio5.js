let objeto = new XMLHttpRequest();

function cargarJS() {
    objeto.open("GET", "extension.js", true);
    objeto.onreadystatechange = function() {
        if (objeto.readyState === 4 && objeto.status === 200) {
            document.getElementById('div1').innerHTML = objeto.responseText;
            eval(objeto.responseText);
        }
    };
    objeto.send();
}