document.getElementById("formulario").addEventListener("submit", function () {
    document.getElementById("telefono").addEventListener("input", (event) => {
        if ((/^\d{9}/.test(event.value))) {
            event.preventDefault();
        }
    })
})