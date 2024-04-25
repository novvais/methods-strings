function imprimir(dia, mes, ano) {

    const diaFormatado = String(dia).padStart(2, "0") //Transforma Number para String
    const mesFormatado = `${mes}`.padStart(2, "0")   //Transforma Nummber para String

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`)
}

imprimir(8, 12, 1999)