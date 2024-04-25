//Tranforme "eduardo de paula novais"
//Em "Eduardo De Paula Novais"

const nome = "eduardo de paula novais"
const array = nome.split(" ")

let nomeFormatado = ""

for (let item of array) {
    let primeiraLetra = item.slice(0, 1)
    let restoDoNome = item.slice(1)

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " "
}

console.log(nomeFormatado.trim())