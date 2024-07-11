'use strict'

window.addEventListener('load', function(){
    //timers
    //setInterval se ejecuta constantemente en el intervalo
    //setTimeout se ejecuta solamente una ves cada tiempo
    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
    
            var encabezado=document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="20px";
            }else{
                encabezado.style.fontSize="50px";
            }
        },1500);
        return tiempo
    }
    var tiempo = intervalo();

    var stop=document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el evento interval en bucle");
        clearInterval(tiempo);
    });

    var start=document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("Has iniciado el evento interval en bucle");
        intervalo();
    });


});