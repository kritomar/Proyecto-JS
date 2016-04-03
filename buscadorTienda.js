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
var busqueda;
var productos = [];
productos.push("azucar");
productos.push("agua");
productos.push("dulces");
productos.push("caramelos");
productos.push("colas");
productos.push("jugos");


while(true)
{
	busqueda= prompt("Ingrese el producto a buscar:");
	if(busqueda === "q")
	{
		break;
	}
	else if(busqueda ==="l")
	{
		printList(productos);
	}
	else 
	{
		var enlista = productos.indexOf(busqueda);
		if (enlista >= 0)
		{
			alert("Si tenemos el producto en la tienda");
		}

		else
		{
			alert("No tenemos el producto  en la tienda");
		}
	}
}


