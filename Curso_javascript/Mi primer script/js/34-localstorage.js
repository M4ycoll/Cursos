'use strict'
//Local Storage

//comprobacion de disponibilidad del local storage en el navegador
if(typeof(localStorage)!=='undefined'){
    console.log('localStorage esta disponibe')
}else{
    console.log('localStorage no esta disponible')
}

//guardar datos
localStorage.setItem("Titulo","Curso de js Local storage");

//recuperar elemento del local storage
document.querySelector("#peliculas").innerHTML=localStorage.getItem("Titulo");

//guardar objetos
var usuario={
    nombre:"Juan",
    apellido:"Perez",
    edad:30,
    email:"juanperez@gmail.com",
    web:"m4dev"
};
localStorage.setItem("usuario",JSON.stringify(usuario));
var userjs=JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

//eliminar memoria de local storage
localStorage.removeItem("usuario");
//eliminar todo el local storage
localStorage.clear();