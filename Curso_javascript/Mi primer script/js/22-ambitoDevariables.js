'use strict';
//una variable dentro de una funcion no se puede utilizar desde el abito global

function holaMundo(texto){
var hola_mundo = "texto dentro de funcion";
console.log(texto);
console.log(numero.toString()); //toString() para convertir una variable a string
console.log(hola_mundo);
}

var numero =12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
//console.log(hola_mundo); //una variable dentro de una funcion no se puede utilizar desde el ambito global