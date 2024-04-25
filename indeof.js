// Saber se um email é válido

const email = "eduardodepaulanovais10@gmail.com"

let indexArroba = email.indexOf("@")
let indexPonto = email.indexOf(".", indexArroba)

if(indexPonto > indexArroba) {
    console.log("Email verificado!")
} else {
    console.log("Email invalido")
}