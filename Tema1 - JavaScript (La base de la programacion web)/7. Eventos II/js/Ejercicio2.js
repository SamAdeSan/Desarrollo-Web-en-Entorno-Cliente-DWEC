document.getElementById("formulario").onsubmit = (event) => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    if (nombre === "" && apellido === "" && email === "") {
        alert("Los campos están vacíos");
    } else if (nombre === "") {
        alert("El campo \"Nombre\" está vacío");
    } else if (apellido === "") {
        alert("El campo \"Apellido\" está vacío");
    } else if (email === "") {
        alert("El campo \"Email\" está vacío");
    }
    event.preventDefault();
}