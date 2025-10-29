document.getElementById("formulario").onsubmit = (event) => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || apellido === "" || email === "") {
        alert("Alguno de los campos está vacío.");
        event.preventDefault(); // Evita que el formulario se envíe si el campo está vacío.
    }
    // Alternativa I

    // if (nombre === "" || apellido === "" || email === "") {
    //     alert("Alguno de los campos está vacío.")
    //     return true
    // }
    // else {
    //     return false
    // }

    // Alternativa II

    // if (nombre === "") {
    //     alert("El campo \"Nombre\" está vacío");
    // } else if (apellido === "") {
    //     alert("El campo \"Apellido\" está vacío");
    // } else if (email === "") {
    //     alert("El campo \"Email\" está vacío");
    // }
    // event.preventDefault();
}