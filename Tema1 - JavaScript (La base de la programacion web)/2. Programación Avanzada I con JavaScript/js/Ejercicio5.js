function mostrarFecha() {
    // en fomato inglés
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "septiembre", "octubre", "noviembre", "diciembre"];
    let fechaHoy = new Date();
    document.getElementById("resultado").innerHTML = dias[fechaHoy.getDay()] + ", " + fechaHoy.getDate() + " de " + meses[fechaHoy.getMonth()] + " de " + fechaHoy.getFullYear();
}