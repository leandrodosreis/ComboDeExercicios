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

            let verificacaoValidacao = validacoes.validacoes(tabInicial, tabFinal, contInicial, contFinal)

            if(verificacaoValidacao){
                let calcular = calcularTabuada.calcularTabuada(tabInicial, tabFinal, contInicial, contFinal)
                console.log(calcular)
                entradaDeDados.close()
            
            }else{
                return false
            }

            })
        })
    })
})