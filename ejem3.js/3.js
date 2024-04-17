let numero = 555;

function sumaDigitos(numero) {
    let suma = 0;

    let numeroString = numero.toString();

    for (let i = 0; i < numeroString.length; i++) {
        suma += parseInt(numeroString[i]);
    }

    return suma
}

console.log("La suma de los dígitos de", numero, "es:", sumaDigitos(numero));