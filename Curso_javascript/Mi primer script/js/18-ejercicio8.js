'use strict';
/*
Calculadora 
- pida dos numeros por pantalla
- Si metemos mal uno que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras
*/

var num1 = parseInt(prompt("introduce el primer numero",0));
var num2 = parseInt(prompt("introduce el segundo numero",0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("introduce el primer numero",0));
    num2 = parseInt(prompt("introduce el segundo numero",0));
}

var resultado ="La Suma es: "+(num1+num2)+"<br/>"+
               "La Resta es: "+(num1-num2)+"<br/>"+
               "La Multiplicacion es: "+(num1*num2)+"<br/>"+
               "La Division es: "+(num1/num2)+"<br/>";

var resultado2 ="La Suma es: "+(num1+num2)+"\n"+
               "La Resta es: "+(num1-num2)+"\n"+
               "La Multiplicacion es: "+(num1*num2)+"\n"+
               "La Division es: "+(num1/num2)+"\n";
document.write(resultado);
alert(resultado2);
console.log(resultado2);

