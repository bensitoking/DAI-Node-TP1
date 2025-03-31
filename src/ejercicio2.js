import {PI, sumar, dividir, multiplicar, restar} from '/src/modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
console.log(`sumar(${numero1}, ${numero2}) = ${sumar(numero1, numero2)}`);
console.log(`restar(${numero1}, ${numero2}) = ${restar(numero1, numero2)}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplicar(numero1, numero2)}`);
console.log(`dividir(${numero1}, ${numero2}) = ${dividir(numero1, numero2)}`);
