const leer = require("prompt-sync")();


// imprima 3 veces un mismo mensaje agregando el número de su iteración
const MAX_ITERACION = 3;

for (let i = 0; i < MAX_ITERACION; i++) {
    console.log("Hello world! N°", i+1);
}