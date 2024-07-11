'use strict';

//condicional if
//si A es  igual a B entonces haz algo

var edad1=30;
var edad2=12;

var edad=70;
var nombre ="m4ycoll";

if (edad1>edad2){
    console.log("edad1 es mayor a edad2");
}

if(edad>=18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    //anidando if dentro de otro if
    if(edad<=33){
        console.log(nombre+" todavia eres millenial");
    }else if(edad>=70){
        console.log(nombre+" eres un anciano");
    }else{
        console.log(nombre+" ya no eres millenial");
    }

}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/*
------Operadores logicos---------
AND(Y):&&  combinacion alt+38
OR(O):||   combinacion alt+124
Negacion:! combinacion alt+33
*/

// Negación
var year = 2008;
if(year!=2016){
    console.log("el año no es 2016 es: " + year);
}

//AND
if(year>=2000 && year <=2020 && year!=2018){
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("el año acaba en 8");
}else{
    console.log("año no registrado");
}