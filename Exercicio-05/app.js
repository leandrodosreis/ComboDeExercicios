/*
Objetivo: Arquivo responsavel SOMENTE pelas entradas e saidas de dados
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const readline = require('readline')
const validacoes = require('../validacoes-gerais') 
const imparPar =require('./modulo-05/imparOUpar.js')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})


entradaDeDados.question("Digite o numero inicial: ", function(inicial){

    entradaDeDados.question("Digite o numero final: ", function(final){
    
        let verificacaoValidacao = validacoes.validacoes(inicial, final)
        let validacaoImpaPar = validacoes.validacaoEspecificaImpaPar(inicial, final)

        if(verificacaoValidacao){

            if(validacaoImpaPar){
            let calcular = imparPar.calcularParesImpares(inicial, final)
            }

        }entradaDeDados.close()

    })
})