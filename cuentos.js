console.log("inicio de programa");
var preguntas =3;
var preguntasFaltantes= "Quedan"+preguntas+"preguntas.";
alert("Este es el juego del cuenta cuenta cuentos. Sigue las instrucciones.");
var sustantivo = prompt("Ingresa un sustantivo: "+preguntasFaltantes);
preguntas=preguntas-1;
preguntasFaltantes="Quedan"+preguntas+"preguntas.";
var adjetivo = prompt("Ingresa adjetivo: "+preguntasFaltantes);
preguntas-=1;
preguntasFaltantes="Quedan"+preguntas+"preguntas.";
var verbo = prompt("Ingresa un verbo: "+preguntasFaltantes);

var cuentos=" El "+ adjetivo+ " "+sustantivo+" es "+verbo+"";
document.write("<h1>cuentos</h1><p>"+cuentos+"</p>");

/*document.write("<p>El "+ verbo+" "+adjetivo+" es "+sustantivo+"</p>");
document.write("<p>"+ sustantivo+" es el "+verbo+" "+adjetivo+" del Ecuador</p>");
document.write("<p>"+verbo +" "+adjetivo+" que "+ sustantivo+" no hay carajo</p>");
*/
/*
console.log ("la longitud de la clave es:" + clave.length);
console.log ("TA-DA!!!!Su clave es:" + clave.toUpperCase());
console.log ("El valor original de la clave es:" + clave);*/
console.log("Fin de programa");
