function irGoogle(){
    window.open("https://www.google.com/");
}
function mostrarDatosPagina(){
    document.getElementById("resultado").innerHTML = (`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 8</title>
    </head>
    <body>
        <h2>Resultados de los datos</h2>
        <ul>
            <li>Url de la web <pre>${location.href}</pre></li>
            <li>Pathname de la página: <pre>${location.pathname}</pre></li>
            <li>Protocolo de la web: <pre>${location.protocol}</pre></li>
            <li><button onclick="irGoogle()">Ir a Google</button></li>
        </ul>
    </body>
</html>
`);
}