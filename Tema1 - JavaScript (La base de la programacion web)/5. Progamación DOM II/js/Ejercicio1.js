window.onload = () => {
    document.getElementById("formulario").onsubmit = (event) => {
        let dni = document.getElementById("dni").value;
        if (dni === "") {
            alert("El campo DNI no puede estar vacío.");
            event.preventDefault(); // Evita que el formulario se envíe si el campo está vacío.
        }
    }
}