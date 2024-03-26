const leer = require("prompt-sync")();


let nombreIngresado = "Nombre no ingresado >:(";//estoy declarando e inicializando la variable

console.log("Ingresa tu nombre:");

nombreIngresado = leer();

console.log("Hola", nombreIngresado);