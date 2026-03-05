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

module.exports = {validacoes}