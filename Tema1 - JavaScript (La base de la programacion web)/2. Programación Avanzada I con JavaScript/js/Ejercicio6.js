function horaActual(){
    let horas = new Date().getHours().toString().padStart(2, "0");
    let mins = new Date().getMinutes().toString().padStart(2, "0");
    let segs = new Date().getSeconds().toString().padStart(2, "0");
    if (horas >= 8 && horas <= 12) {
        document.getElementById("resultado").innerHTML = "Buenos días! Hoy mismo, son las " + horas + ":" + mins + ":" + segs;
    }
    else if (horas > 12 && horas <= 21){
        document.getElementById("resultado").innerHTML = "Buenas tardes! Hoy mismo, son las " + horas + ":" + mins + ":" + segs;
    }
    else {
        document.getElementById("resultado").innerHTML = "Buenos noches! Hoy mismo, son las " + horas + ":" + mins + ":" + segs;
    }
}