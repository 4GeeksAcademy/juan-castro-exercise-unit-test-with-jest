// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = (valueInYen * 156.5) * 0.87;
    // Retornamos el valor en libras
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))




module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }