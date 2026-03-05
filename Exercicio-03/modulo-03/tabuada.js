/*
Objetivo: Arquivo responsavel pelo processameto das tabuadas
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const calcularTabuada = function(tabInicial, tabFinal, contInicial, contFinal){
    tabInicial = Number(tabInicial)
    tabFinal = Number(tabFinal)
    contInicial = Number(contInicial)
    contFinal = Number(contFinal)

    for (let tab = tabInicial; tab <= tabFinal; tab++) {

    console.log(`Tabuada do [${tab}]`)

        
        for (let cont = contInicial; cont <= contFinal; cont++) {
            console.log(`${tab} x ${cont} = ${tab * cont}`)
        }

        console.log("------------------")
    }
}

// calcularTabuada(2, 3, 0, 2)
module.exports = {calcularTabuada}