let div = document.getElementById('texto');
div.style.fontSize = "12px";

div.addEventListener("mouseover", () => {
    div.style.fontSize = "16px";
})

div.addEventListener("mouseout", () => {
    div.style.fontSize = "12px";
})