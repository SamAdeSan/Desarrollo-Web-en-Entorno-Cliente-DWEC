// Color
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('cambiarColorAp').style.color = this.value;
    });
});

// Negrita
document.getElementById('negrita').addEventListener('change', function() {
    document.getElementById('cambiarColorAp').style.fontWeight = this.checked ? 'bold' : 'normal';
});

// Cursiva
document.getElementById('cursiva').addEventListener('change', function() {
    document.getElementById('cambiarColorAp').style.fontStyle = this.checked ? 'italic' : 'normal';
});