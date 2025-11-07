document.getElementById("formulario").addEventListener("submit", function () {
    document.getElementById("telefono").addEventListener("input", (event) => {
        let charCode = event.charCode || event.keyCode;
        // rango en ascii
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    })
})