function validacoes(...valores){


    for(let valor of valores){

        if(valor == ""){
            console.log("Algum campo vazio")
            return false
        }

        valor = valor.toString().replace(",", ".")

        if(isNaN(valor)){
            console.log("Valor inválido, não é um número")
            return false
        }

    }

    return true
}

module.exports = {validacoes}