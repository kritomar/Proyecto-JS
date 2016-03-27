
console.log("inicio de programa");
/*
var dado = Math.floor(Math.random()*6)+1;
alert("Dado dice:" + dado);
*/

/*
Pidamos al usuario que ingrese un numero.
Luego devolvamos un numero aleatorio que este entre 1 y el numero provisto por el usuario.


var num= prompt("Ingrese un numero");
alert("Numero ingresado por el usuario:" + num);
var alea = Math.floor(Math.random()*10);
if (num>0 && alea>0) 
	{
alert("Numero aleatorio es:" + alea);
};

*/


/*CONDICION MULTIPLE*/

/*Adivinar el numero aleatorio. entre 1 y 10. uso de condiciones para comparar si el numero ingresado es mayor o menor al aleatorio*/
var min = 1;
    var max = 10;
    var aleatorio = Math.floor(Math.random() * max - min + 1) + min;
    var numero;

        numero = parseInt(prompt('Ingresa un numero entre el '+min+' y el '+max));

        if(numero >= min && numero <= max){
            if(numero < aleatorio){
                alert("El numero "+numero+" es menor a "+aleatorio);
            } else if(numero > aleatorio){
                alert("El numero "+numero+" es mayor a "+aleatorio);
            } else if(numero == aleatorio){
                alert("Adivinaste el numero"+numero);
            }
        } else {
            alert("Debe ingresar un numero entre "+min+" y "+max);
        }
              

console.log("Fin de programa");