'use strict';

//transformacion de textos

var numero=444;
var texto1="Bienvenido al curso de javascript";
var texto2="es buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase(); //toUpperCase() para convertir el texto a todo mayusculas
    dato = texto1.toLowerCase(); //toLowerCase() para convertir el texto a todo minusculas
console.log(dato);


//calcular longitud
console.log("********************");
var nombre = "maycoll";
var lista=["hola","mundo","soy"];   
console.log(lista.length);//length para calular la longitud del texto

//concatenar -unir textos
var textoTotal = texto1+", "+texto2;
console.log(textoTotal);

console.log("*******************");
var textoTotal = texto1.concat(", "+texto2);
console.log(textoTotal);