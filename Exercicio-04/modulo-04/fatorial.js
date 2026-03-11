/*
Objetivo: Arquivo responsavel pelo processameto do fatorial
Data: 04/03/26
Autor: Leandro
Versão: 1.0
*/

const calcularFatorial = function (numero){

    let fatorial = 1
    let numero1 = Number(numero)
    let x 

    for(x = 1; x <= numero1; x++){

        fatorial = fatorial * x

    }
    return fatorial

}

// calcularFatorial(5)
module.exports = {calcularFatorial}