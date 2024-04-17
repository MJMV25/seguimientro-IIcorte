function sumaDivisores(num) {
    if(!Number.isInteger(num)) {
        return "El valor deber ser un numero entero"
    }

num = Math.abs(num)

let suma = 0


for(let i = 1; i < num; i++) {

    if(num % i == 0) {
        suma += i
    }
}

return suma
}

console.log(sumaDivisores(12))