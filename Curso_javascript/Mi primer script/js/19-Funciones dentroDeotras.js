'use strict';

//--------------Funciones--------------
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(num1, num2){
    console.log("Suma :",num1+num2);
    console.log("Resta :",num1-num2);
    console.log("Multiplicacion :",num1*num2);
    console.log("Division :",num1/num2);
    console.log("*******************");
}

function porPantalla(num1, num2){
    document.write("Suma :" +(num1+num2)+"<br/>");
    document.write("Resta :" +(num1-num2)+"<br/>");
    document.write("Multiplicacion :" +(num1*num2)+"<br/>");
    document.write("Divicion :" +(num1/num2)+"<br/>");
    document.write("*******************")+"<br/>";
}


function calculadora(num1, num2, mostrar = false) {
    //conjunto de instrucciones a ejecutar
    if(mostrar == false){
        porConsola(num1, num2);
    }else {
        porPantalla(num1, num2);
    }
   return true;
//return "Hola soy el return de la funcion";
}

//invocar o llamar la funcion
calculadora(1,6);
calculadora(1,4,true);

//------------Parametros-----------------
/*
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,13);
    console.log("----------------");
}
*/
