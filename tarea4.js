function Sumar()
{
	var total =0;
	var num1 = parseInt(document.getElementById("txtnum1").value);
	var num2 = parseInt(document.getElementById("txtnum2").value);
	total = num1 + num2;
	document.getElementById("txtresultado").value=total;

}


function Restar()
{
	var total =0;
	var num1 = parseInt(document.getElementById("txtnum1").value);
	var num2 = parseInt(document.getElementById("txtnum2").value);
	total = num1 - num2;
	document.getElementById("txtresultado").value=total;

}


function Dividir()
{
	var total =0;
	var num1 = parseInt(document.getElementById("txtnum1").value);
	var num2 = parseInt(document.getElementById("txtnum2").value);
	total = num1 / num2;
	document.getElementById("txtresultado").value=total;

}


function Multplicar()
{
	var total =0;
	var num1 = parseInt(document.getElementById("txtnum1").value);
	var num2 = parseInt(document.getElementById("txtnum2").value);
	total = num1 * num2;
	document.getElementById("txtresultado").value=total;

}

function validarnum(e)
{
	key=e.keyCode || e.wich;
	teclado=String.fromCharCode(key);

}

function Limpiar() {
    document.getElementById("txtnum1").value = "";
    document.getElementById("txtnum2").value = "";
    document.getElementById("txtresultado").value = "";


}
