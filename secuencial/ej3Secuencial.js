const leer = require("prompt-sync")();

//Ej 3 secuencial: reciba un número y muestre el doble por consola

let numIngresado = 0;
let numDuplicado = "def duplicado";

console.log("Ingresa un numero a duplicar");
numIngresado = Number(leer());//casteo
/* console.log( numIngresado * 2 ); */
numDuplicado = numIngresado * 2;
console.log("Resultado:", numDuplicado);