'use strict'

/// BOM - Browser Object Model
function getBom(){
    //innerWidth para ver la altura del navegador
    console.log(window.innerWidth);
    //innerHeight para ver la anchura del navegador
    console.log(window.innerHeight);
     //screen.width para ver la altura de la pantalla del usuario
     console.log(screen.width);
     //screen.height para ver la anchura de la pantalla del usuario
     console.log(screen.height);
     //Url
     console.log(window.location);
     console.log(window.location.href);
     console.log(window.location.hostname);
}
function redirect(url){
    window.location.href=url;
}

function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}
getBom();