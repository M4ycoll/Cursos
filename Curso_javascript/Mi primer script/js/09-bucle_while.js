'use strict';

//bucle while

var year = 2023;

    while(year !=1995){
        console.log("estamos en el año: "+year);

        //break salir o parar el bucle
        if(year==2000){
            break;
        }
        year--; //hay que ir incrementado para salir del bucle 
    }


//bucle Do while
var years=30;
    do{
        alert("solo cuando sea diferente a 20");
        years--;
    }while(years >25)