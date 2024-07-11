'use strict';

//Plantillas de texto

var nombre= prompt("Mete tu nombre");
var apellidos= prompt("Mete tu apellido");

//var texto ="Minombre es :"+nombre+" <br/> Mi apellidos es : "+apellidos;

var texto= `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es : ${nombre}</h3>
    <h3>Mi apellidos es : ${apellidos}</h3>
`;



document.write(texto);