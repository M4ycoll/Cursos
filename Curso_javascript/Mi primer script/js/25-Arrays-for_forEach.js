'use strict'
let nombre = 'Maycoll Moreno'
let nombres = ['Maycoll Moreno' , 'Roberto Carlos', 'Carlos Miranda', 'Samuel Ordoñes', 55, true]

let lenguajes = new Array('PHP', 'JS', 'Go', 'Java', 'C#', 'C++', 'Pascal')

console.log(nombres)
console.log(lenguajes)

console.log(nombres[0])
console.log(lenguajes[2])

/*
let elemento = parseInt(prompt('Que elemento del array quieres?', 0))
if (elemento >= nombres.length) {
  alert('introduce un numero correcto menor que: ' + nombres.length);
}else {
  alert(nombres[elemento]);
}
*/
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

//Recorridos de arreglos 
//for normal
/*
for(var i=0; i<lenguajes.length;i++){
  document.write("<li>"+lenguajes[i]+"</li>");
}
*/

/*
//forEach
lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");  
});
*/

//forin
for(let lenguaje in lenguajes){
  document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

//busquedas
//Funcion find
var busqueda = lenguajes.find(lenguaje => lenguaje =="PHP");
console.log(busqueda);
//Funcion findIndex
var busqueda = lenguajes.findIndex(lenguaje => lenguaje =="Go");
console.log(busqueda);
//Funcion some devuelve true o false segun la condicion
var precios = [10, 20, 50, 80, 30];
var busqueda = precios.some(precio => precio >=100);
console.log(busqueda);


