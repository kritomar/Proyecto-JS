var preguntas = []
preguntas.push(["cuantos goles le metio barcelona a ligay?",5]);
preguntas.push(["por que perdio Ecuador en Barranquilla?","Achilier"]);
preguntas.push(["cuantas areas protegfidas tiene el Ecuador",50]);
preguntas.push(["cuantos a&ntilde;os lleva correa en poder?",9]);
preguntas.push(["quien esceribiio la carta de jamaica","Bolivar"]);

function imprimirRespuestas(tipoRespuestas)
{
	var arregloRespuestas; 
	var stringRespuestas = '';
	if(tipoRespuestas.toLowerCase()=="correctas" || tipoRespuestas.toLowerCase()=="incorrectas")
	{
		if(tipoRespuestas=="correctas")
		{
			arregloRespuestas = correctas;
		}else{
			arregloRespuestas = incorrectas;
		}


		if(arregloRespuestas.length<1)
		{
			stringRespuestas = "No hubo respuestas " + tipoRespuestas;
		}
		for (var i =0; i<arregloRespuestas.length; i++)
		{
			stringRespuestas += "<p><b>" + arregloRespuestas[i][0] + "</b><br>" + arregloRespuestas[i][1] + "</p>";
			

			if(tipoRespuestas=="incorrectas")
			{
				stringRespuestas+= "<i>La respuesta correcta era: " + arregloRespuestas[i][2] + "</i>";
			}
		}
	}else{
		alert("error, vea consola!");
		throw new Error("Tipo de Respuesta no aceptado");
	}
	return stringRespuestas;
}


function imprimirCuestionario()
{
html += "<h3> respuestas correctas </h3>";
html += imprimirRespuestas("correctas");
html += '<h3 style = "color:red;"> respuestas incorrectas</h3>';
html += imprimirRespuestas("incorrectas");
return html;
}

function printHTML(mensaje)
{
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

var respuestas = [];
var correctas = [];
var incorrectas = [];

for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i][0]);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		respuestas.push(respuestaSimple.toLowerCase());
	}else{
		respuestas.push(parseInt(respuestaSimple));
	}

	if(respuestas[i]==preguntas[i][1])
	{
		correctas.push(preguntas[i]);
	}else{
		incorrectas.push([preguntas[i][0],respuestas[i],preguntas[i][1]]);
	}
}

var html="<h1>Pregunta Pregunton</h1>";
html += "<h2>Aqui el resultado de sus respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);
