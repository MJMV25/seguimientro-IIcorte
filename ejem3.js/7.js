function contarVocales(str) {

    str = str.toLowerCase()

let vocales = 0


for(let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
        vocales++
    }
}
return vocales

}

console.log(contarVocales("Carlos"))
