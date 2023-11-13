var valorEmDolar;
var cotacaoDoDolar = 4.91;


document.getElementById("btnSend").onclick = function(){

    valorEmDolar = document.getElementById("valorRealTexto").value;
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal.toFixed(2);
    document.getElementById("valorDolar").innerHTML = "R$ " + valorEmReal;
}