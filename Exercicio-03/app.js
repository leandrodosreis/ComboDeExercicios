const readline = require('readline')
const validacoes = require('../validacoes-gerais') 
const calcularTabuada = require('./modulo-03/tabuada')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Digite tabuada inicial: ", function(tabInicial){

    entradaDeDados.question("Digite tabuada final: ", function(tabFinal){

        entradaDeDados.question("Digite o contador inicial: ", function(contInicial){

            entradaDeDados.question("Digite o contador final: ", function(contFinal){

                let validacaoGeral = validacoes.validacoes(tabInicial, tabFinal, contInicial, contFinal)

                if(validacaoGeral){

                    let validacaoTabuada = validacoes.validacaoEspecificaTabuada(tabInicial, tabFinal, contInicial, contFinal)

                    if(validacaoTabuada){
                        let calcular = calcularTabuada.calcularTabuada(tabInicial, tabFinal, contInicial, contFinal)
                    }
                }entradaDeDados.close()
            })
        })
    })
})