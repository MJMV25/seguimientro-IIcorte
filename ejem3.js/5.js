function invertirCadenaTexto(cadena) {
    let cadenaInvertida = ''
    
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena.charAt(i);
    }
    return cadenaInvertida
}

console.log(invertirCadenaTexto("Carlos Arturo Baron Estrada"))