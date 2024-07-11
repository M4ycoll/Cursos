'use strict'
/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom=""){
    document.write("<h1>contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//1
var num=[];
for(var i =0; i<=5;i++){
num.push(parseInt(prompt("introduce un numero",0)));
}
//2
//mostrar en pantalla
mostrarArray(num);
//mostrar en consola
console.log(num);

//3
//function(a,b){return a-b} ascendente
//function(a,b){return b-a} descendente
num.sort(function(a,b){return a-b});
console.log(num);
mostrarArray(num, "ordenado");

//4
num.reverse();
mostrarArray(num, "revertido");

//5
var tamano =num.length;
document.write("<h1>"+"el arreglo tiene "+tamano+" elementos"+"</h1>");
console.log(tamano);

//6
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = num.findIndex(num => num ==busqueda);

if(posicion && posicion != -1 ){
    document.write("<h1>Econtrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No econtrado</h1>");
}
