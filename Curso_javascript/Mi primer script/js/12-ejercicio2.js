'use strict';
/*
utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/

var suma=0;
var contador=0;

do {
    var num =parseInt(prompt("introduce numeros hasta que metas uno negativo",0));
    if(isNaN(num)){
        numero=0;
    }else if(num >= 0){
        suma=suma+num;
        //suma +=num;
        contador++;
    }
    console.log(suma);
    console.log(contador);
} while (num >= 0)

alert("la suma de todos los numeros es: " + suma);
alert("la media de todos los numeros es: " + (suma / contador));