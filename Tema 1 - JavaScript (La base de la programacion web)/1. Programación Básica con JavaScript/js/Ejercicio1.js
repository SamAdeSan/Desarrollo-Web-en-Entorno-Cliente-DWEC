// 1. Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son mayores de 100.
let suma = 0;
let mayores100 = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("Introduce el número " + i + ":"));
    suma += numero;
    if (numero > 100) {
        mayores100++;
    }
}
alert("La suma de los números es: " + suma);
alert("Cantidad de números mayores de 100: " + mayores100);