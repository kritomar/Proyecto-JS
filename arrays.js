/*var deportes ["futbol","tennis", "volley"];
deportes.pop();
deportes.shift();*/


//     pop        remueve el ultimo elemento del arreglo y me lo retorna

//      shift      remueve y retorna el primer elemento del arreglo

//     unshift    permite agregar elementos al inicio del arreglo

//      push     permite agregar elementos al final del arreglo

//      indexOf    nos muestra el indice del elemento del arreglo seleccionado



/*
var ordenPedido =['item1' , 'item2', 'item3', 'item4'];
var envio= ordenPedido.shift();
var cancelado= ordenPedido.pop();

["item2", "item3"]   <--  respuesta en consola
*/


/*/////////////////////////// enlistar canciones


function printList(list)
{
	var listHTML= '<ol>';
	for (var i=0; i < list.length; i += 1)
	{
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}

var playList = [];
playList.push("strangers in the night");
playList.push("Mi conejito era tan bandidon");
playList.push("Borro cassette", "Ginza");
playList.push("The girl from ipanema");
playList.push("Soneros de Bailadores");

printList (playList);



*/
//enlistar cacniones y autores

function printListReproduccion(listaCanciones)
{
	var listHTML= '<ol>';
	for (var i=0; i < listaCanciones; i += 1)
	{
		listHTML += '<li> Tema: ' + listaCanciones [i][0] + ' . Por: '+ listaCanciones[i][1] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}

var playList = [];
playList.push(["strangers in the night","Frank Sinatra"]);
playList.push(["Mi conejito era tan bandidon","Los conquistadores"]);
playList.push(["Borro cassette", "Maluma"]);
playList.push(["The girl from ipanema","Austrud Gilberto"]);
playList.push(["Soneros de Bailadores","Cheo Feliciano"]);

printListReproduccion(playList);