document.getElementById("plataforma").innerHTML = "Estás utilizando: " + navigator.platform;

if (confirm("¿Quieres continuar?")) {
    document.getElementById("resultado").innerHTML = "Continuamos...";
}else {
    document.getElementById("resultado").innerHTML = "No se ha podido continuar!";
}