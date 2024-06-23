const sumAll = function(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;

};

console.log(sumAll(1, 4));

/*
La función Math.min(a, b) devuelve el número más pequeño entre a y b
Math.max(a, b) devuelve el número más grande
*/

/*
El operador typeof en JavaScript devuelve una cadena que indica el tipo del valor de la expresión o variable sin evaluarla. Es útil para verificar el tipo de una variable en tu código.
typeof "John" devuelve "string".
typeof 3.14 devuelve "number".
typeof true devuelve "boolean".
*/

// Do not edit below this line
module.exports = sumAll;


