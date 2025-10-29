/*
4. Introducir un número y decir si es par o impar
*/
let num = parseInt(prompt("Introduzca un número: "));

if (num % 2 === 0) {
    alert(num + " es par");
} else {
    alert(num + " es impar.");
}