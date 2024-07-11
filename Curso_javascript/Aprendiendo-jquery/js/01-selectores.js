'use strict'

$(document).ready(function () {
  //selector de id
  var rojo = $("#rojo").css("background", "red")
    .css("color", "blue");

  var amarillo = $("#amarillo").css("background", "yellow")
    .css("color", "red");

  var verde = $("#verde").css("background", "green")
    .css("color", "orange");


  //selectores de clases
  var mi_clase = $('.zebra');
  mi_clase.css("border", "3px dashed black");

  $('.sin_borde').click(function () {
    $(this).css("border", "3px dashed black");
    //addClass para agregarle otra clase
    $(this).addClass("zebra");
  });

  //selectores de etiqueta
  var parrafos = $("p").css("cursor", "pointer");

  parrafos.click(function () {
    //crear una variable para $(this) y asi no sobre cargar el DOM
    var este = $(this);
    if (!este.hasClass("grande")) {
      este.css("border", "2px dashed black");
      este.addClass("grande");
    } else {
      este.removeClass("grande");
      este.css("border", "none");
    }

    //eliminar por su id
    if (este.attr("id") === "rojo") {
      este.removeAttr("id");
      este.attr("id", "azul");
    }
    var azul = $("#azul").css("background", "blue")
      .css("color", "red");
  });

  //selectores de atributo
  $('[title="Google"]').css("background", "#ccc");
  $('[title="Facebook"]').css("background", "blue");

  //Find y parent
  //parent para salir un nivel atras de la etiqueta en la que me encuentro
  $('p, a').addClass('margen-superior');

  var busqueda = $("#elemento2").parent().parent().find('.resaltado');
  console.log(busqueda);
});
