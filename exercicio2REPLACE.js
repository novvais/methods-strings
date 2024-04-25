function replaceAll(original, text, newtext) {
    while (original !== original.replace(text, newtext)) {
        original = original.replace(text, newtext)
    }
    return original
}

let numero = "1,350,000"

console.log(replaceAll(numero, ",", "."))