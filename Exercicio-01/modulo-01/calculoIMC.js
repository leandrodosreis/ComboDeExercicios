/*
Objetivo: Arquivo responsavel pelo CALCULO IMC
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const calcularIMC = function(peso, altura){
    
    let peso1 = Number(peso.replace(",", "."))
    let altura2 = Number(altura.replace(",", "."))

    let resultado = peso1 / (altura2 * altura2)
    let statusUsuario 

    if (resultado < 18.5){
        statusUsuario = "Status: Abaixo do peso"

    } else if (resultado >= 18.5 && resultado < 24.9) {
        statusUsuario = "Status: Peso Normmal"

    } else if (resultado >= 25.0 && resultado < 29.9) {
        statusUsuario = "Status: Acima do peso(sobrepeso)"

    } else if (resultado >= 30.0 && resultado < 34.9) {
        statusUsuario = "Status: Obesidade 1"

    } else if (resultado >= 35.0 && resultado < 39.9) {
        statusUsuario = "Status: Obesidade 2"

    } else {
        statusUsuario = "Status: Obesidade 3"
    }
    return statusUsuario
    
}

// calcularIMC(70, 1.80)
module.exports = {calcularIMC}