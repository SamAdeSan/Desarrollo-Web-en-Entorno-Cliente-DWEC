document.getElementById("adivinar").addEventListener("click", function(){
    let numeroAleatorio = Math.floor(Math.random() * 11);

    let numeroUsuario = parseInt(document.getElementById("numero").value);

    if (numeroUsuario){
        if (numeroUsuario === numeroAleatorio){
            document.getElementById("resultado").innerHTML = "Has adivinado el número!"
        }
        else{
            document.getElementById("resultado").innerHTML = "No lo has adivinado!"
        }
    }
    else{
        document.getElementById("resultado").innerHTML = "No se puede!"
    }
});