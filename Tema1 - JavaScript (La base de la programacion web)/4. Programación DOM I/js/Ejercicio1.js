let divisor = document.getElementById('divisor');

document.getElementById('btnA').onclick = function () {
    let parrafo = document.createElement("p");
    parrafo.textContent = "Animal nuevo";
    divisor.appendChild(parrafo);
}

document.getElementById('btnI').onclick = function () {
    let parrafo = document.createElement("p");
    parrafo.textContent = prompt("Inserta tú un animal nuevo");
    let items = divisor.querySelectorAll('p');
    if (items.length === 0){
        divisor.appendChild(parrafo);
    } else {
        let primero = items[1]
        divisor.insertBefore(parrafo, primero)
    }
}

document.getElementById('btnR').onclick = function () {
    let parrafos = divisor.querySelectorAll("p");
    if (parrafos.length >= 2){
        parrafos[1].textContent = "Animal reemplazado";
    }
}

document.getElementById('btnD').onclick = function () {
    let parrafos = divisor.querySelectorAll("p");
    if (parrafos.length >= 2){
        divisor.removeChild(parrafos[1]);
    }
}

document.getElementById('btnC').onclick = function () {
    document.body.appendChild(divisor.cloneNode(true));
}