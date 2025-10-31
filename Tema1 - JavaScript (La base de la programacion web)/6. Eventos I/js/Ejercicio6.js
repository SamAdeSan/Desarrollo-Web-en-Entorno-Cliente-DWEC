let botones = document.getElementsByTagName('button');
for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        alert("Ha pulsado un botón")
    }
}