function calcularMCD (a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Ambos numeros deber ser enteros"
    }
    
    a = Math.abs(a)
    b = Math.abs(b)
    
    
    while (b !== 0) {
        const temp = b; b = a % b; a = temp
    }
    return a
    
    }
    
    console.log(calcularMCD(10, 5))