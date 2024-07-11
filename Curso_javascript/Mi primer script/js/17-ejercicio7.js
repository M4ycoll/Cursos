'use strict';

/*
tabla de multiplicar de un numero introducido por pantalla 
*/
var num1= parseInt(prompt('¿De que numero quieres la tabla?',1));

document.write("<h1>Tabla del "+num1+"</h1>");
for(var i=1; i<=10; i++){
    document.write(i+"x"+num1+" = "+(i*num1)+"<br/>");
}

//Todas las tablas de multiplicar

for(var c=1; c<=10; c++){
    document.write(i+"x"+num1+" = "+c+"<br/>");
    for(var i=1; i<=10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}