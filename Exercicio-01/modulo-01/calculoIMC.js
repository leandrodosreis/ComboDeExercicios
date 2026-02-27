/*
Objetivo: Arquivo responsavel pelo CALCULO IMC
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const calcularIMC = function(peso, altura){

    let resultado = peso / (altura * altura)

    if (resultado < 18.5){
        console.log("Status: Abaixo do peso");

    } else if (resultado >= 18.5 && resultado < 24.9) {
        console.log("Status: Peso Normmal")

    } else if (resultado >= 25.0 && resultado < 29.9) {
        console.log("Status: Acima do peso(sobrepeso)")

    } else if (resultado >= 30.0 && resultado < 34.9) {
        console.log("Status: Obesidade 1");

    } else if (resultado >= 35.0 && resultado < 39.9) {
        console.log("Status: Obesidade 2")

    } else {
        console.log("Status: Obesidade 3")

    }
    
}

calcularIMC(70, 1.80)