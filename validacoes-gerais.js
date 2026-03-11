/*
Objetivo: Arquivo responsavel SOMENTE pelas VALIDAÇÕES
    OBS: Não comentarei oque cada validação faz pois esta nos console log dos Erros
Data: 11/03/26
Autor: Leandro
Versão: 1.0
*/

//Essa validação serve para evitar repetições no codigo
function validacoes(...valores){

    for(let valor of valores){

        if(valor == ""){
            console.log("*ERRO: Campo vazio*")
            return false
        }
        
        if(isNaN(valor)){
            console.log("*ERRO: Valor inválido, não é um número*")
            return false
        }

    }

    return true
}

//Validações do IMC
function validacaoEspecificaImc(...valores){

    //O imc era o unico exercicio que não havia validação nos requisitos 
    // porem essa função existe pois a virgula é um elemento critico
    for(let valor of valores){

        if(valor == ""){
            console.log("*ERRO: Algum campo vazio*")
            return false
        }

        valor = valor.toString().replace(",", ".")

        if(isNaN(valor)){
            console.log("*ERR0: Valor inválido, não é um número*")
            return false
        }

    }

    return true
}

//Validações da Media
function validacaoEspecificaMedias(
    nomeAluno,
    nomeProfessor,
    sexoAluno,
    sexoProfessor,
    curso,
    disciplina,
    n1,
    n2,
    n3,
    n4
){

    // Aqui estou validando oque a função anterior faz pois estava dando conflito em isNaN
    if(nomeAluno == "" || nomeProfessor == "" || sexoAluno == "" ||
       sexoProfessor == "" || curso == "" || disciplina == ""){
        console.log("*ERRO: Nenhum campo pode ficar vazio*")
        return false
    }

    if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
        console.log("*ERRO: As notas precisam ser números*")
        return false
    }

    if(n1 < 0 || n1 > 100 ||
       n2 < 0 || n2 > 100 ||
       n3 < 0 || n3 > 100 ||
       n4 < 0 || n4 > 100){
        console.log("*ERRO: As notas devem estar entre 0 e 100*")
        return false
    }

    return true
}

//Validações da Tabuada
function validacaoEspecificaTabuada(tabInicial, tabFinal, contInicial, contFinal){
    if(tabInicial < 2 || tabInicial > 100){
        console.log("*ERRO: Tabuada inicial deve estar entre 2 e 100*")
        return false
    }

    if(tabFinal < 2 || tabFinal > 100){
        console.log("*ERRO: Tabuada final deve estar entre 2 e 100*")
        return false
    }

    if(tabInicial >= tabFinal){
        console.log("*ERRO: Tabuada inicial deve ser menor que a final*")
        return false
    }

    if(contInicial < 1 || contInicial > 50){
        console.log("*ERRO: Contador inicial deve estar entre 1 e 50*")
        return false
    }
    
    if(contFinal < 1 || contFinal > 50){
        console.log("*ERRO: Contador final deve estar entre 1 e 50*")
        return false
    }
    
    if(contInicial >= contFinal){
        console.log("*ERRO: Contador inicial deve ser menor que o final*")
        return false
    }

    return true
}

//Validações do Fatorial
function validacaoEspecificaFatorial(fatorial){

    if(fatorial <= 0){
        console.log('*ERRO: O fatorial deve ser maior que 1*')
        return false
    }
    return true
}

//Validações do impar ou par
function validacaoEspecificaImpaPar(inicial, final){

    inicial = Number(inicial)
    final = Number(final)

    if(inicial < 0 || inicial > 500){
        console.log("*ERRO: Numero inicial deve estar entre 0 e 500*")
        return false
    }
    if(final < 100 || final > 1000){
        console.log("*ERRO: Numero final deve estar entre 100 e 1000*")
        return false
    }
    if(inicial > final){
        console.log('*ERRO: Numero inicial deve ser menor que o numero final*')
        return false
    }
    if(inicial === final){
        console.log('*ERRO: Numero inicial e final não podem ser iguais*')
        return false
    }
    return true

}

module.exports = {validacoes,
    validacaoEspecificaImc,
    validacaoEspecificaMedias,
    validacaoEspecificaTabuada,
    validacaoEspecificaFatorial,
    validacaoEspecificaImpaPar
}