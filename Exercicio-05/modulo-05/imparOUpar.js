/*
Objetivo: Arquivo responsavel pelo processameto de impares ou pares
Data: 04/03/26
Autor: Leandro
Versão: 1.0
*/

function listarPares(inicial, final){

    let qtdPares = 0

    console.log("Lista de números Pares")

    for(let numero = inicial; numero <= final; numero++){

        if(numero % 2 == 0){
            console.log(numero)
            qtdPares++
        }

    }

    console.log("Qtde de números encontrados:", qtdPares)

}

function listarImpares(inicial, final){

    let qtdImpares = 0

    console.log("Lista de números Impares")

    for(let numero = inicial; numero <= final; numero++){

        if(numero % 2 != 0){
            console.log(numero)
            qtdImpares++
        }

    }

    console.log("Qtde de números encontrados:", qtdImpares)

}

function calcularParesImpares(inicial, final){

    inicial = Number(inicial)
    final = Number(final)

    listarPares(inicial, final)

    console.log("----------------")

    listarImpares(inicial, final)

}

module.exports = {
    calcularParesImpares
}