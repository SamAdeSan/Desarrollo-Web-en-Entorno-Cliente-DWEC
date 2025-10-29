/*
5. Introducir el precio de un artículo. Calcular el iva y el precio total(con el iva incluido) que debe salir redondeado a dos decimales.
*/

let articulo = parseFloat(prompt("Introduce el precio del artículo"));
let iva;
if (articulo < 100) {
    iva = 0.21;
}else if (articulo >= 100 && articulo <= 1000) {
    iva = 0.1;
}else if (articulo > 1000) {
    iva = 0.04;
}

let importeIVA = articulo * iva;
let total = articulo + importeIVA;

alert(
    "Precio sin IVA: " + articulo.toFixed(2) +
    "\nIVA: " + importeIVA.toFixed(2) +
    "\nPrecio con IVA: " + total.toFixed(2)
);