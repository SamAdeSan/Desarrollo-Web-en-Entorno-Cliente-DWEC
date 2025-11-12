if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
    window.resizeBy(500, 500)
}else {
    document.write("¡No disponible redimensionar a 500x500 en este navegador!")
}