function textoVacio(){
    let textoVacio = document.getElementById("dni").value;

    if (textoVacio == null || textoVacio.length === 0) {
        alert("El DNI está vacío.\n\nPor favor reintroduzca su DNI.")
        return false;
    }
    else return true;
}