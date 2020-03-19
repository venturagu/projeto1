function mudarTexto() {
    var texto = document.querySelector('label');
    texto.innerHTML == "Ligar LED" ? texto.innerHTML = "Desligar LED" : texto.innerHTML = "Ligar LED";
}
$('#btn').click(function () {
    var btn = document.getElementById("btn");
    if (btn.checked) {
        $.post("http://localhost:3001/light/on");
    }
    else {
        $.post("http://localhost:3001/light/off");
    }
});
