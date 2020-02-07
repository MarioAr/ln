const { 
    divisibleTres,
    divisibleCinco,
    contieneTres,
    contieneCinco
 } = require('./math');

const init = data => {
    
    return calcular(data).join('-');
}

function calcular(data) {
    return data
        .map(n => {
            let por3, por5, cont3, cont5;

            por3 = divisibleTres(n);
            por5 = divisibleCinco(n);
            cont3 = contieneTres(n);
            cont5 = contieneCinco(n);

            if (por3 && por5) {
                return 'FizzBuzz';
            } else if (por5 || cont5) {
                return "Buzz";
            } else if (por3 || cont3) {
                return 'Fizz';
            } else {
                return false;
            }
        })
        .filter(item => item);
}

module.exports = init;