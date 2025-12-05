let objeto = new XMLHttpRequest(); //Creación de objeto

function sacardatos(datos, idDiv){
    let container = document.getElementById(idDiv); // Lugar de los objetos alojados.

    objeto.open("GET", datos);
    objeto.onreadystatechange = function(){
        if (objeto.readyState === 4 && objeto.status === 200) {
            container.innerHTML = objeto.responseText;
        }
    }
    objeto.send(null);
}