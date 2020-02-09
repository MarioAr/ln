module.exports = {
    divisibleTres,
    divisibleCinco,
    divisibleTresYCinco,
    contieneTres,
    contieneCinco,
    // para test
    divisible,
    contiene
}

/**
 * 
 * @param {*} n 
 * @param {*} div 
 */
 function divisible(n, div) {
     if (!validateInteger(n) || !validateInteger(div)) throw new TypeError('Argumentos deben ser numeros.')
    return n % div ? false : true;
}

function divisibleTres(n) {
    return divisible(n, 3);
}

function divisibleCinco(n) {
    return divisible(n, 5);
}

function divisibleTresYCinco(n) {
    return divisible(n, 15);
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

function validateInteger(n) {
    return !isNaN(parseInt(n, 10));
}