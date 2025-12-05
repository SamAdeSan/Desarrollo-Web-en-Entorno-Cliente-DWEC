let objeto = new XMLHttpRequest();
function cambiarImagen() {
    objeto.open("GET", "../../img/foto-intro.jpg", true);
    objeto.responseType = "blob"; // Para imágenes
    objeto.onload = function() {
        if (objeto.status === 200) {
            document.getElementById("miImagen").src = URL.createObjectURL(objeto.response);
        }
    };
    objeto.send();
}