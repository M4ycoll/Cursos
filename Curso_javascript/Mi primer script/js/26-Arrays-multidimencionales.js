'use strict'
//arreglos dentro de otro arreglo
var categorias=['Accion', 'Terror', 'Comedia', 'Documentales'];
var peliculas=['Cara Cortada', 'El aro', 'Que paso ayer'];

var cine=[categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][1]);



//operaciones con arrays
var elemento="";
//funcion push para añadir un elemento a un arreglo
do{
    elemento=prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "FIN");
//funcion pop para eliminar el ultimo elemento a un arreglo
peliculas.pop();


/*
//borrando el ultimo elemento 
var indice = peliculas.indexOf('Que paso ayer');
if(indice> -1){
    peliculas.splice(indice,1);
}
*/

//funcion join convierte a string los elementos del array y los separa con (,)
var peliculas_string=peliculas.join();
console.log(peliculas_string);

//convertir un string a un array
var cadena ="Texto1, Texto2, Texto3, Texto4";
var cadena_array=cadena.split(", ");
console.log(cadena_array);

//ordenamiento de arrays
//funcion sort para ordenar alfabeticamente
categorias.sort();
console.log(categorias);

//funcion reverse ordena del ultimo al primer elemento del arreglo
categorias.reverse();
console.log(categorias);


