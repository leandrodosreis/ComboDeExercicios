function validacoes(...valores){

    for(let valor of valores){

        if(valor == ""){
            console.log("Campo vazio")
            return false
        }

        if(isNaN(valor)){
            console.log("Valor inválido, não é um número")
            return false
        }

    }

    return true
}

function validacaoEspecificaTabuada(tabInicial, tabFinal, contInicial, contFinal){
    if(tabInicial < 2){
        console.log("Tabuada Inicial menor que 2")
        return false

    }else if(tabFinal > 100){
        console.log("Tabuada final maior que 100")
        return false

    }else if(contInicial < 1){
        console.log("Contador inicial menor que 1")
        return false

    }else if(contFinal > 50){
        console.log("Contador final maior que 50")
        return false

    }
    return true
}

validacaoEspecificaTabuada(1,1000)
module.exports = {validacoes}