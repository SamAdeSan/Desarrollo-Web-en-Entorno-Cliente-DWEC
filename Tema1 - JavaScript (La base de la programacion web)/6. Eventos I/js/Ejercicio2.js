let div = document.querySelector("div");
div.style.fontSize = "12px";

div.onmouseover = function() {
    this.style.fontSize = "16px";
};

div.onmouseout = function() {
    this.style.fontSize = "12px";
};
