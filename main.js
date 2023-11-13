var valorEmReal;
var cotacaoDoDolar = 0.20;


document.getElementById("btnSend").onclick = function(){

    valorEmReal = document.getElementById("valorRealTexto").value;
    var valorEmDolar = valorEmReal * cotacaoDoDolar;
    valorEmDolar.toFixed(2);
    document.getElementById("valorDolar").innerHTML = "U$ " + valorEmDolar;
}