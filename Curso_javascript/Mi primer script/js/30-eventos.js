'use string'

//eventos del raton
//onclick, ondblclick

//evento load para cargar todo antes y cargar los scripts en el head
window.addEventListener('load',()=>{
    var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bg =boton.style.background;
        if(bg=="green"){
            boton.style.background="red";
        }else{
            boton.style.background="green";
        }
        boton.style.padding="10px";
        boton.style.border="2px solid #ccc";
        return true;
    }

    //this para modificar algo del objeto que se esta trabajando
    //Click
    boton.addEventListener('click',function(){
        cambiarColor();
        this.style.border="10px solid black";
    });

    //Mouse over
    boton.addEventListener('mouseover',function(){
        boton.style.background="yellow"
    });

    //Mouse out
    boton.addEventListener('mouseout',function(){
        boton.style.background="blue"
    });

    //--------------------------Input-------------------------------
    //Focus
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus',function(){
        console.log("estas dentro del input");
    });

    //Blur
    input.addEventListener('blur',function(){
        console.log("estas fuera del input");
    });

    //Keydown
    input.addEventListener('keydown',function(event){
        console.log("[keydown]pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    //Keypress
    input.addEventListener('keypress',function(event){
        console.log("[keypress]tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener('keyup',function(event){
        console.log("[keyup]tecla soltada", String.fromCharCode(event.keyCode));
    });
});//end load
