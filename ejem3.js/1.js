function calcularFactorial(num) {
    if (num < 0) {
        return "El número debe ser positivo"


    } else if (num === 0) {
        return 1

    } else {
        let factorial = 1
        for (let i = 1; i <= num; i++) {
            factorial *= i
        }
        return factorial
    }
}

console.log(calcularFactorial(5))