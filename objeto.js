var persona={
	nombre: "Carol", 
	pais: "Ecuador",
	edad:"24",
	laborando: true,
	habilidades: ["Java ", " C# ", " C++ ", " Python ", " JavaScript ", " R "]
	};

function printHTML (mensaje)
{
	var outputDiv=document.getElementById("output");
	outputDiv.innerHTML=mensaje;

}

var saludo="<p> Hola"+persona.nombre+" Bienvenido </p>";
saludo += "<p>Como estan las cosas en " + persona.pais +"?</p>";
persona.nombre= "Thays";
saludo += "<p>Tu nombre de usuario es: " + persona.nombre +"?</p>";
saludo += "<p>Tu edad pronto sera " + persona.edad +"?</p>";
saludo += "<p>Tienes al momento " + persona.habilidades.length +" habilidades</p>";
saludo += "<p>las habilidades son " + persona.habilidades.join(",") +"?</p>";
printHTML(saludo);