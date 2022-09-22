/*
 * PRIMERA PARTE DEL LABORATORIO
 */


// Objetivo 1 (descomentar estas lineas para ver la primera parte del ejercicio)

// var hotel = {
//     nombre: prompt("Introduce el nombre del hotel"),
//     ubicacion: prompt("Introduce la ubicación del hotel"),
//     img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
// }

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.nombre;
// document.getElementById("location-hotel").innerHTML = hotel.ubicacion;
// document.getElementById("img-hotel").src = hotel.img;

// Fin objetivo 1

// //Solicitamos puntuación al usuario
// var rating = prompt("Introduce una puntuación del 1 al 5");
// document.getElementById("rating").innerHTML = rating + " estrellas";

// //Preguntamos si la reseña debe ser anónima
// var anonimo = confirm("¿Desea que su contraseña sea anónima?");
// document.getElementById("anonymous").checked = anonimo;



/*
 * SEGUNDA PARTE DEL LABORATORIO (comentar todas las lienas de código debajo de esta para poder ver la primera parte)
 */



var hoteles = {
  Mencey: {
    nombre: "Mencey",
    ubicacion: "Tenerife",
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    nombre: "Lani's Suites Deluxe",
    ubicacion: "Lanzarote",
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};

var estrellas = {
  una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var selectedHotel = prompt(
  "¿A cual hotel desea dejar reseña? Introduzca Mencey o Lani"
);

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].nombre;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].ubicacion;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

//Solicitamos puntuación al usuario
var rating = prompt("Introduce una puntuación: una, dos, tres, cuatro, cinco");
document.getElementById("rating").innerHTML = estrellas[rating];

//Preguntamos si la reseña debe ser anónima
var anonimo = confirm("¿Desea que su contraseña sea anónima?");
document.getElementById("anonymous").checked = anonimo;
