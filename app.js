const { init } = require('./modules/fizz')

const rta = init([123, 3, 4, 6, 5, 15, 356]);

console.log(rta);


// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const numeros = [];
// rl.question(`Desea fizzbuzzear (s/n) `, (name) => {
//     if (name !== 's') {
//         console.log(`Adios!`);

//         rl.close();
//         return;
//     }
//     console.log("Ingrese un numero y presione enter.");

// })
// // console.clear();
// // console.log("Ingrese un numero y presione enter.");
// rl.on('line', (input) => {
//     // console.clear();
//     // console.log("Ingrese un numero y presione enter.");

//     // // const n = parseInt(input, 10);
//     // if (isNaN(+input)) {
//     //     console.log("No es un numero");
//     // } else {
//     //     numeros.push(input)
        
//     // }

//     // console.log(`Numeros: [${numeros}]`);
//     rl.cursor(5)
    
// });

// rl.on('resume', () => {
//     console.log('Readline resumed.');
// });

// rl.on('SIGINT', () => {
//     // `prompt` will automatically resume the stream
//     console.log('Chau amigou')
//     // rl.prompt();
//     rl.close();



// });