document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('cambiarColorAp').style.color = this.value;
    });
});