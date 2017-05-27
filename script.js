var contenedor = document.getElementById("contenedor");
var calcular = document.createElement("input");
var valoruno = document.createElement("text");
var valordos = document.createElement("input");



calcular.type = "button";
calcular.value= "KILOBYTES";
calcular.onclick= function calcular(){
	var a = 1073741729.88;(valoruno.value);
	var b = parseInt(valordos.value);
	var mult =a*b;
	var resultado= document.createElement("input");
	contenedor.appendChild(resultado);
	resultado.value=mult;
};

calcular.id="bt_calc";
valoruno.name="valor1";
valoruno.type="text";
valordos.type="text";
valordos.id="valor2";
contenedor.appendChild(valoruno);
contenedor.appendChild(valordos);
contenedor.appendChild(calcular);