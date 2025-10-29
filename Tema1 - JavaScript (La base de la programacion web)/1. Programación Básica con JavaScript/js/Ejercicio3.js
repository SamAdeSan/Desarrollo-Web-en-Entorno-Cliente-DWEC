/*
  3. Introducir un mes y decir a qué estación pertenece
  */
let mes = (prompt("Dime un mes: ").toLowerCase());
let epoca;

if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    epoca = "Es invierno.";
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    epoca = "Es primavera";
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    epoca = "Es verano.";
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    epoca = prompt("Es otoño.");
} else {
    epoca = "El valor introducido es erróneo"
}
alert(epoca);