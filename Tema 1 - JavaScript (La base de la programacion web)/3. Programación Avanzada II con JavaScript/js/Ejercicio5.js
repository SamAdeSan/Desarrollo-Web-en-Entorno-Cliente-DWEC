// tiempo = 20;
// let intervalo = setInterval(() => {
//     tiempo--;
//     console.log(tiempo);
//
//     if (tiempo === 0){
//         clearInterval(intervalo)
//         document.getElementById("documento").innerHTML = "<p>Hola que tal!</p>"
//     }
//
// }, 1000);

setTimeout(document.getElementById("documento").innerHTML = "Hola que tal!", 20000);