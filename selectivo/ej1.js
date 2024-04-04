const leer = require("prompt-sync")();

//ej1 reciba un numero y nos indique si es positivo o negativo

let numEvaluar = 0;

console.log("Ingresa un numero a evaluar");
numEvaluar = Number(leer());
/* console.log( typeof numEvaluar); */

if ( numEvaluar > 0) {
    console.log("Es positivo");
}else if( numEvaluar == 0){
    console.log("Ingresaste cero! >:(");
}else if(numEvaluar < 0){
    console.log("Es negativo");
}