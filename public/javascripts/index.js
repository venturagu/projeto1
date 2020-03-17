function mudarTexto() {
    var texto = document.querySelector('label');
    texto.innerHTML == "Ligar LED" ? texto.innerHTML = "Desligar LED" : texto.innerHTML = "Ligar LED";
}

/*$(document).ready(function(){
    $("label").click(function(){
        $.post('/light/on',function(returnedData,statusRequest){
            alert("Data: " + returnedData + "\nStatus: " + statusRequest);
        });
    });

});*/