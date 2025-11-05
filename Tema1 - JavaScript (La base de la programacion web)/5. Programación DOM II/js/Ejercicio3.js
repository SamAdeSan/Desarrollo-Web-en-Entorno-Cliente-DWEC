let resultado = document.getElementById('res')
document.getElementById('mosNL').onclick = function() {
    let enlaces = document.getElementsByTagName('a');
    resultado.innerHTML = 'Número total de enlaces: ' + enlaces.length;
}
document.getElementById('mosRL').onclick = function() {
    let enlaces = document.getElementsByTagName('a');
    let referencias = 'Referencias de los enlaces:<br>';
    for (let i = 0; i < enlaces.length; i++) {
        referencias += enlaces[i].href + '<br>';
    }
    resultado.innerHTML = referencias;
}
document.getElementById('mosRP').onclick = function() {
    let parrafos = document.getElementsByTagName('p');
    let resultadoTexto = '';
    for (let i = 0; i < parrafos.length; i++) {
        const enlaces = parrafos[i].getElementsByTagName('a');
        resultadoTexto += 'Párrafo ' + (i + 1) + ':<br>';
        for (let j = 0; j < enlaces.length; j++) {
            resultadoTexto += enlaces[j].href + '<br>';
        }
        resultadoTexto += '<br>';
    }
    resultado.innerHTML = resultadoTexto;
}