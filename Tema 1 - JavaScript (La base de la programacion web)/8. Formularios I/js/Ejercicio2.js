document.querySelector('select[name="colores"]').addEventListener('change', function() {
    document.getElementById('cambiarColorAp').style.color = this.value;
});