'use strict';
let nombre = 'tanjiro';
let anime = 'demon slayer';
let edad = 16;

let personaje = {
    nombre: 'tanjiro',
    anime: 'demon slayer',
    edad: 20,
};

console.log(personaje);
console.log(personaje.nombre); //opcion 1
console.log(personaje['anime']);//opcion 2
console.log('---------------------');

//modificar propiedad
personaje.edad = 13;
console.log(personaje);
console.log('---------------------');


let llave = 'edad';
personaje[llave] = 15;
console.log(personaje);
console.log('---------------------');

//borrar
delete personaje.anime;
console.log(personaje);
