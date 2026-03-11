/*
Objetivo: Arquivo responsavel pelo CALCULO MEDIA
Data: 25/02/26
Autor: Leandro
Versão: 1.0
*/

function calcularMedia(n1, n2, n3, n4){

    let media = (n1 + n2 + n3 + n4) / 4
    return media
}

function verificarStatus(media){

    if(media >= 70){
        return "aprovado"
    }

    if(media < 50){
        return "reprovado"
    }

    return "exame"
}

function calcularMediaExame(media, exame){

    let mediaFinal = (media + exame) / 2

    if(mediaFinal >= 60){
        return "aprovado no exame"
    }else{
        return "reprovado no exame"
    }

}

module.exports = {
    calcularMedia,
    verificarStatus,
    calcularMediaExame
}