/*
Objetivo: Arquivo responsavel pelo CALCULO
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const calcularIMC = function(peso, altura){

    resultado == peso / (altura * altura)

    if (resultado < 18.6){
        System.out.print("Status: Abaixo do peso");

    } else if (resultado >= 18.6 && resultadoIMC < 25.0) {
        System.out.print("Status: Peso ideal (Parabens)")

    } else if (resultado >= 25.0 && resultadoIMC < 30.0) {
        System.out.print("Status: Levemente acima do peso")

    } else if (resultado >= 30.0 && resultadoIMC < 35.0) {
        System.out.print("Status: Obesidade grau 1");

    } else if (resultado >= 35.0 && resultadoIMC < 40.0) {
        System.out.print("Status: Obesidade grau 2 (Severa)")

    } else {
        System.out.print("Status: Obesidade grau 3 (Mórbida)")

    }
    
}