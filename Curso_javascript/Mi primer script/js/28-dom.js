'use strict'

//dom document object model
function cambiacolor(color){
    caja.style.background=color;
}

function cambiaPD(pd,color){
    caja.style.padding=pd;
    caja.style.color=color;
}
//conseguir elemento con un id
//querySelector
//var caja = document.getElementById("micaja");

// # para seleccionar con un id 
var caja = document.querySelector("#micaja");

// . para seleccionar con una clase 
//var caja = document.querySelector(".micaja");

caja.innerHTML="soy una caja desde js";
caja.style.background="red";
caja.style.padding="10px";
caja.style.color="yellow";
//-----------------------------------------------------------------------------------------
// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML=("otro texto para el segundo elemento");
console.log(contenidoEnTexto);
//-----------------------------------------------------------------------------------------
//query selector all para obtener todos los elementos
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}