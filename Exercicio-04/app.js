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
        let calcular = calcularFatorial.calcularFatorial(fatorial)
        console.log(calcular)
        entradaDeDados.close()
            
    }else{
        return false
    }

})
