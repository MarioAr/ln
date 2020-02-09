var prompt = require('prompt-sync')();
const { init } = require('./modules/fizz')

const numbers = [];

let n1

console.log("Ingrese numeros al array. (para salir ingrese una letra)");

do {

    n1 = prompt(`[${numbers.join(', ')}]: `, 'q');

    n1 = parseInt(n1, 10);

    if (isNaN(n1)) break;

    numbers.push(n1);

    
} while (true);

if (numbers.length === 0) {
    console.log('No hay numeros en el array :(');
    return;
}


const rta = init(numbers);

console.clear();

console.log(numbers)

console.log(`\n\t${rta}`);