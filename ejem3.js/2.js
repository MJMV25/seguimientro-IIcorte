function numeroPrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let numero2 = 2; numero2 < numero; numero2++) {
        if (numero % numero2 === 0) {
            return false
        }
    }

    return true
}

console.log("El numero es primo?:", numeroPrimo(13));