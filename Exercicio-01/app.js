/*
Objetivo: Arquivo responsavel SOMENTE pelas entradas e saidas de dados
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const readline = require('readline')
const validacoes = require('./modulo-01/validacao.js') 
const calcularIMC  = require('./modulo-01/calculoIMC.js')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Digite o seu peso: ", function(peso){

    entradaDeDados.question("Digite o sua altura: ", function(altura){
    
        let verificacaoValidacao = validacoes.validacoes(peso, altura)

        if(verificacaoValidacao){
            let calcular = calcularIMC.calcularIMC(peso, altura)
            console.log(calcular)
            entradaDeDados.close()
            
        }else{
            return false
        }

    })
})