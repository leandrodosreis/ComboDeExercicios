/*
Objetivo: Arquivo responsavel pelo processameto do fatorial
Data: 04/03/26
Autor: Leandro
Versão: 1.0
*/

const calcularFatorial = function (numero){

    let fatorial = 1
    let numero1 = numero
    let x 
    // console.log(fatorial)

    for(x = 1; x <= numero1; x++){

        fatorial = fatorial * x

        console.log(fatorial)

    }

}

calcularFatorial(5)