
console.log("inicio de programa");
/*programa que nos permite almacenar valores enteros*/
/*
function tiraDados()
{
	var dado = Math.floor (Math.random()*6)+1;
 return dado;
}
alert("Tiramos 3 dados:");
alert("El dado dice:"+tiraDados());
var multiplo= 2 * tiraDados();
alert("el multiplo de bonus es:"+ multiplo);
*/

//NUMERO AL AZAR
/*
function numeroAlAzarHastaLimite (limite)
{
	var num= Math.floor(Math.random()*limite)+1;
	return num;
}
var numAzar= numeroAlAzarHastaLimite(100);
alert(numAzar);
console.log("Fin de programa");
*/
//FUNCION LLAMADA MAX QUE RETORNE VALOR MAXIMO DE DOS NUMEROS

/*function max(num1, num2)
{
	if(num1>num2)
	{
		return num1;
	}
	else
	{
		return num2;
	}
}*/

//funcion saludo
/*
function saludo()
{
	var mensaje="Hola a todos";
	alert(mensaje);
}
var mensaje= "Chao";
saludo();
alert(mensaje);
saludo();

*/
/*var num =9;
if(isNa(num)N)
{

	throw new Error("No es un numero valido");
}else {
	num=num*0.5;
	//alert(num);
}
console.log("fin de programa");
*/

//DESAFIO

/*
function numeroAlAzarEntreLimites (limiteInferior, limiteSuperior)
{

	if(isNaN(limiteInferior) || isNaN(limiteSuperior))
		{
			throw new Error("No es un numero valido");
		}

		var num= Math.round(Math.random()*(limiteSuperior-limiteInferior))+limiteInferior;
		return num;
}

var limiteSuperior=prompt("Ingrese limite superior");
var limiteInferior=prompt("Ingrese limite inferior");

alert ("Su numero al azar es:"+ numeroAlAzarEntreLimites(parseInt(limiteInferior), parseInt(limiteSuperior)));

// WHILE LOOP
//el contador nos va a mostrar 10 numeros aleatorios

var contador =0;
while(contador<10)
{

	var randomico = numeroAlAzarEntreLimites(parseInt(limiteInferior), parseInt(limiteSuperior));
	document.write(randomico + "");
	contador++;
}
*/



function alea(limite){
	var numero = Math.floor(Math.random()*limite)+1;
		return numero;
}

var numAzar=alea(100);
alert("El numero aleatorio es"+ numAzar);
	
var contador=0;

while(true)
	{
		contador++;
		var randomico=alea(100);
	
		if(randomico === numAzar)
			{
				
				alert("su numero adivinado es: "+parseInt(randomico));
				break;
			}
			
	}
	

alert("total de intentos: "+contador);