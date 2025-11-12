/*
    6. Introducir una cadena. Decir la longitud de la cadena. Pasarla a mayúsculas y
    a minúsculas. Mostrar cada palabra de la cadena por separado primero
    normal y después al revés
*/

let cadena = prompt("Introduzca una cadena de texto:");

document.write("<!DOCTYPE html>" +
    `<html lang="en">
         <head>
            <meta charset="UTF-8">
            <title>Ejercicio6</title>
         </head>
         <body>
             <h2>Resultados de tu cadena</h2>
             <h3>Datos de la cadena</h3>
             
             <ul>
                 <li>Tu cadena es de ${cadena.length} caracteres</li>
                 <li>Tu cadena en mayúsculas es ${cadena.toUpperCase()}</li>
                 <li>Tu cadena en minúsculas es ${cadena.toLowerCase()}</li>
             </ul>
             <h3>Cadena normal en vertical</h3>
                <ol>${cadena.split(" ").join("<br>")}</ol>
             <h3>Cadena al revés en vertical</h3>
                <ol>${cadena.split(" ").reverse().join("<br>")}</ol>
         </body>
     </html>
`)