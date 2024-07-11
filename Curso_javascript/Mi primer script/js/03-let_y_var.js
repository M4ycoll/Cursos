'use strict';

//let y var

//prueba con var
var numero = 40;
console.log("numero: ",numero);//valor 40

if(true){
    var numero =50;
    console.log("numero: ",numero);//valor 50
}
console.log("numero: ",numero);//valor 50


//prueba con let
var num= 20;
console.log("num: ",num);//valor 20

if(true){
    let num =30;
    console.log("num: ",num);//valor 30
}
console.log("num: ",num);//valor 20


