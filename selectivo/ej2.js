const leer = require("prompt-sync")();

//ej2 reciba una palabra y verifique si adivino la que está en el programa

const PALABRA_SECRETA = "h";

let palabraIngresada = "def palabra ingresada";

console.log("Intenta adivinar la palabra secreta del programa:");
palabraIngresada = leer();
if ( PALABRA_SECRETA == palabraIngresada ) {
    console.log("Ganaste 10 pesos");
}else{
    console.log("Perdiste!");
}