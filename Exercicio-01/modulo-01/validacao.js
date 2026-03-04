function validacoes(peso, altura){

    if(peso == "" || altura == ""){
        return false
    }
    return true
}

module.exports = {validacoes}