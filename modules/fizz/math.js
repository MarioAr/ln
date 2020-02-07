module.exports = {
    divisibleTres,
    divisibleCinco,
    contieneTres,
    contieneCinco
}

/**
 * 
 * @param {*} n 
 * @param {*} div 
 */
 function divisible(n, div) {
    return n % div ? false : true;
}

function divisibleTres(n) {
    return divisible(n, 3);
}

function divisibleCinco(n) {
    return divisible(n, 5);
}

/**
 * 
 * @param {*} n 
 * @param {*} cont 
 */
function contiene(n, cont) {
    const aux = String(n);

    return aux.includes(cont);
}

function contieneTres(n) {
    return contiene(n, 3);
}

function contieneCinco(n) {
    return contiene(n, 5);
}

// let resultado = [123, 3, 4, 6, 5, 15, 356].map(n => {
//     let por3, por5, cont3, cont5;

//     por3 = divisibleTres(n);
//     por5 = divisibleCinco(n);
//     cont3 = contieneTres(n);
//     cont5 = contieneCinco(n);

//     if (por3 && por5) {
//         return 'FizzBuzz';
//     } else if (por5 || cont5) {
//         return "Buzz";
//     }else if  (por3 || cont3) {
//         return 'Fizz';
//     }  else {
//         return false;
//     }
// }).filter(item => item);

// console.log(resultado.join('-'));
// console.log(resultado);
