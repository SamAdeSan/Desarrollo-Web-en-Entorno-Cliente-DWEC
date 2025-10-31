document.getElementById('btnImg').onclick = function () {
    let totalImg = document.querySelectorAll('img').length;
    alert('La página contiene ' + totalImg + ' imágenes.');
}

document.getElementById('btnEnl').onclick = function () {
    alert('La web contiene ' + document.querySelectorAll("a").length + ' enlaces')
}