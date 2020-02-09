const { 
    divisibleTres,
    divisibleCinco,
    divisibleTresYCinco,
    contieneTres,
    contieneCinco
 } = require('./math');

const init = data => {
    
    if (!validateArray(data)) {
        throw Error("El valor tiene que ser array.");
        return;
    }
    
    return calcular(data).join('-');
}

function calcular(data) {

    return data
        .map(n => {
            let     divisiblePorTres,
                    divisiblePorCinco,
                    divisiblePorTresYCinco,
                    contieneUnTres,
                    contieneUnCinco;

            divisiblePorTres = divisibleTres(n);
            divisiblePorCinco = divisibleCinco(n);
            divisiblePorTresYCinco = divisibleTresYCinco(n);
            contieneUnTres = contieneTres(n);
            contieneUnCinco = contieneCinco(n);

            if (divisiblePorTresYCinco) {
                return 'FizzBuzz';
            } else if (divisiblePorCinco || contieneUnCinco) {
                return "Buzz";
            } else if (divisiblePorTres || contieneUnTres) {
                return 'Fizz';
            } else {
                return false;
            }
        })
        .filter(item => item);
}

function validateArray(data) {

    return Array.isArray(data);
}
module.exports = init;