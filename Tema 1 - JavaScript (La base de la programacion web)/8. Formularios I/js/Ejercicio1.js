window.onload = function () {
    // Foco en nombre
    document.getElementById("nombre").focus();

    // Límite de textarea
    document.getElementById("observaciones").setAttribute("maxlength", "150");

    // Evento aficiones
    document.getElementById("aficiones").addEventListener("change", function () {
        let lista = this;
        let indice = lista.selectedIndex;
        let valor = lista.options[indice].text;

        alert(
            "La longitud de la lista es " + lista.length +
            "\nEl índice seleccionado es " + indice +
            "\nEl valor del índice seleccionado es " + valor
        );
    });

    // Validación formulario
    document.getElementById("formulario").addEventListener("submit", function (event) {

        let dni = document.getElementById("dni").value;
        let telefono = document.getElementById("telefono").value;

        let dniRegex = /^[0-9]{8}[A-Za-z]$/;
        let telefonoRegex = /^[0-9]{9}$/;

        if (!dniRegex.test(dni)) {
            alert("El campo DNI es obligatorio y debe tener un formato válido (8 números + 1 letra).");
            event.preventDefault();
        }

        if (!telefonoRegex.test(telefono)) {
            alert("El campo Teléfono debe contener exactamente 9 dígitos sin espacios ni guiones.");
            event.preventDefault();
        }
    });
};