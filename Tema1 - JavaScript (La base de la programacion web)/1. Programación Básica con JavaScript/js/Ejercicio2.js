//2. Almacena en un array los números 7,8,2,9,10. Calcular la suma de los números mayores de 8.

let array = [7,8,2,9,10];
let suma = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 8) {
        suma += array[i];
    }
}
alert("Suma de los números mayores que 8 en el array (" + array.toString() + "): " + suma);