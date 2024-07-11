'use strict';

//Funciones anonimas y callbacks
//Es una funcion que no tiene nombre

function sumame(num1,num2,sumaYmuestra,sumaPordos){
 var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPordos(sumar);

    return sumar;
}

sumame(5,7, dato =>{
    console.log("La suma es: ",dato);
},
dato =>{
    console.log("La suma por dos es: ",(dato*2));
});

