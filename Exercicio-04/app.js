/*
Objetivo: Arquivo responsavel SOMENTE pelas entradas e saidas de dados
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

const readline = require('readline')
const validacoes = require('../validacoes-gerais') 
const calcularFatorial = require('./modulo-04/fatorial')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})



entradaDeDados.question("Digite o fatorial: ", function(fatorial){
    
    let verificacaoValidacao = validacoes.validacoes(fatorial)
    if(verificacaoValidacao){

        let validacaoFatorial = validacoes.validacaoEspecificaFatorial(fatorial)
        if(validacaoFatorial){
            
        let calcular = calcularFatorial.calcularFatorial(fatorial)
        console.log(calcular)}
        
            
    }entradaDeDados.close()

})
