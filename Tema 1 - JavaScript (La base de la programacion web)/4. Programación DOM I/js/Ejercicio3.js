window.onload = () => {
    document.getElementById("btnAzul").onclick = () => {
        document.getElementById("color").style.backgroundColor = "dodgerblue";
    }

    document.getElementById("btnVerde").onclick = () => {
        document.getElementById("color").style.backgroundColor = "green";
    }

    document.getElementById("btnRojo").onclick = () => {
        document.getElementById("color").style.backgroundColor = "red";
    }

    document.getElementById("btnOrigin").onclick = () => {
        document.getElementById("color").style.backgroundColor = "#333333";
    }
}