function fibonacci(numeros) {

    let fib = []

    fib[0] = 0
    fib[1] = 1

    for (let x = 2; x < numeros; x++) {
        fib[x] = fib[x - 1] + fib[x - 2];
    }

    return fib;
}

let y = 10; 
let fibArray = fibonacci(y);
console.log("Los", y, "primeros números de la serie de Fibonacci son:", fibArray);