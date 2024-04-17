function esPalindromo(num) {
    if(!Number.isInteger(num)) {
        return "El valor debe ser un numero entero"
    }

const numString = Math.abs(num).toString()

let numInvertido = ""


for (let i = numString.length - 1; i >= 0; i--) {
    numInvertido += numString[i]
}

return numString == numInvertido

}

console.log(esPalindromo(456))