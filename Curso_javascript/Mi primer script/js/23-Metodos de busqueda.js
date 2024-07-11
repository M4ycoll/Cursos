'use strict'

// transformacion de textos
jkjkh
var numero = 444
var texto1 = 'Bienvenido al curso de javascript, curso muy bueno'
var texto3 = ' Bienvenido al curso de javascript, curso muy bueno '

var texto2 = 'es buen curso'

// indexOf para ver a partir de que caracter se encuentra la palabra curso
var busqueda = texto1.indexOf('curso')
console.log(busqueda)

// lastIndexOf para ver a partir de que caracter se encuentra la palabra ultima palabra repetida
console.log('***************************')
var busqueda = texto1.lastIndexOf('curso')
curso
console.log(busqueda)

// search para buscar en que punto aparece esa palabra
console.log('***************************')
var busqueda = texto1.search('curso')
console.log(busqueda)

// match para buscar en que punto aparece esa palabra donde aparece; busca coincidencias
console.log('***************************')
var busqueda = texto1.match('curso')
console.log(busqueda)

// match /curso/g ente barras / /y g para busqueda global para buscar multiples coincidencias
console.log('***************************')
var busqueda = texto1.match(/curso/g)
console.log(busqueda)

// substr para busqueda desde el caracter 14 que saque 5 letras en adelante
console.log('***************************')
var busqueda = texto1.substr(14, 5)
console.log(busqueda)

// charAt para sacar una letra desde el caracter 14
console.log('***************************')
var busqueda = texto1.charAt(14)
console.log(busqueda)

// startsWith para obtener true o false si la palabra comienza con Bien
console.log('***************************')
var busqueda = texto1.startsWith('Bien')
console.log(busqueda)

// endsWith para obtener true o false si la palabra finaliza con javascript, curso
console.log('***************************')
var busqueda = texto1.endsWith('javascript, curso')
console.log(busqueda)

// includes para obtener true o false si la palabra se encuentra en el string
console.log('***************************')
var busqueda = texto1.includes('javascript, curso')
console.log(busqueda)

// replace para reemplazar una palabra por el segundo parametro "php"
console.log('***************************')
var busqueda = texto1.replace('javascript', 'php')
console.log(busqueda)

// slice para recortar desde el caracter deseado 14 al 22
console.log('***************************')
var busqueda = texto1.slice(14, 22)
console.log(busqueda)

// split para cortar y separar todo el string palabra por palabra ; los corta por elementos de un array
console.log('***************************')
var busqueda = texto1.split(' ')
console.log(busqueda)

// trim para quitar los espacios por delante y por detras y asi guardar los campos ingresados por el usuario
console.log('***************************')
var busqueda = texto3.trim()
espacios
console.log(busqueda)
