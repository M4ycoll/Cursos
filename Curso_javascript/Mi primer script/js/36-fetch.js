'use strict'
//Fetch (ajax) y peticiones y servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users.data);

    return getinfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;
    return getJanet();
  })
  .then(data => data.json())
  .then(user => {
    mostrarJanet(user.data);
  })
  .catch(error => {
    console.log(error);
  });

//------------------------------------------------
function getUsuarios() {
  return fetch('https://reqres.in/api/users');
}
//------------------------------------------------
function getJanet() {
  return fetch('https://reqres.in/api/users/2');
}
function getinfo() {
  var profesor = {
    nombre: 'Victor',
    apellidos: 'Roblas',
    url: 'https://victorrobleswe.es'
  };

  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function () {
      var profesor_string = JSON.stringify(profesor);

      if (typeof profesor_string != 'string' || profesor_string == '') return reject('error');

      return resolve(profesor_string);
    }, 3000);

  });
}
//------------------------------------------------
function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement('h2');
    nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
    div_usuarios.appendChild(nombre);
    document.querySelector(".loading").style.display = "none";
  });
}
//------------------------------------------------
function mostrarJanet(user) {
  let nombre = document.createElement('h4');
  let avatar = document.createElement('img');

  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = '100';
  avatar.height = '100';

  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = "none";
}
