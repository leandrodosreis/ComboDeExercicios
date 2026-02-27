/*
Objetivo:   Arquivo responsavel pelo CALCULO de medias esolares e 
            ANALISE DO STATUS do aluno
Data: 27/02/26
Autor: Leandro
Versão: 1.0
*/

// function calcularMedia(valor1, valor2, valor3, valor4){


//     let nota1 = Number(valor1)
//     let nota2 = Number(valor2)
//     let nota3 = Number(valor3)
//     let nota4 = Number(valor4)

//     let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

//     //return media
//     console.log(media)
//     // return nota1 , nota2 , nota3, nota4, media

// }

function analiseStatusAluno(mediaAluno) {
    
    Number(mediaAluno)
    
    let statusAluno

    if (mediaAluno > 69.99) {
        statusAluno = "Aprovado"
        
    } else if (mediaAluno < 50) {
        statusAluno = "Reprovado"

    } else if (mediaAluno <= 69.99 && mediaAluno > 50) {
        statusAluno = "Exame"

    } else {
        return false
    }
    return statusAluno


}

function printRelatorio(statusAluno1){

    let nota1 = 3
    let nota2 = 3
    let nota3 = 3
    let nota4 = 3

    let calculo = require('./modulo-02/mediasEscolares')
    let media = calculo.calcularMedia(nota1, nota2, nota3, nota4)

    
    if(statusAluno1 == "Exame"){
        console.log(`O aluno [ xxxxxx ] foi [aprovado] na disciplina [ xxxxxxxx ]. Curso: xxxxxxxx Professor: xxxxxxxx Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame Média Final: ${media} Média final do Exame: xxxx`)}

}

//  calcularMedia(10,10,10,9)
azul = analiseStatusAluno(100)
console.log(azul)
// printRelatorio("Exame")

// module.exports = {analiseStatusAluno, calcularMedia, printRelatorio}