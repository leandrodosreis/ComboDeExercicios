
function calcularMedia(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4) / 4
}

function analisarAluno(n1, n2, n3, n4, notaExame = null){

    let media = calcularMedia(n1, n2, n3, n4)
    let status = ""
    let mediaFinalExame = null

    if(media >= 70){
        status = "Aprovado"
    } 
    else if(media < 50){
        status = "Reprovado"
    } 
    else {
        status = "Exame"

        if(notaExame !== null){
            mediaFinalExame = (media + notaExame) / 2

            if(mediaFinalExame >= 60){
                status = "Aprovado no Exame"
            } else {
                status = "Reprovado no Exame"
            }
        }
    }

    return {
        media,
        status,
        mediaFinalExame
    }
}

function printRelatorio(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, curso, disciplina, n1, n2, n3, n4, notaExame = null){

    let resultado = analisarAluno(n1, n2, n3, n4, notaExame)

    let palavraAluno = sexoAluno === "F" ? "A aluna" : "O aluno"
    let palavraProfessor = sexoProfessor === "F" ? "Professora" : "Professor"

    console.log("\n===== RELATÓRIO =====\n")
    console.log(`${palavraAluno} ${nomeAluno} foi ${resultado.status} na disciplina ${disciplina}.`)
    console.log(`Curso: ${curso}`)
    console.log(`${palavraProfessor}: ${nomeProfessor}`)
    console.log(`Notas: ${n1}, ${n2}, ${n3}, ${n4}${notaExame !== null ? ", " + notaExame : ""}`)
    console.log(`Média Final: ${resultado.media.toFixed(2)}`)

    if(resultado.mediaFinalExame !== null){
        console.log(`Média Final do Exame: ${resultado.mediaFinalExame.toFixed(2)}`)
    }
}

// printRelatorio(
//     "Leandro",
//     "M",
//     "Carla",
//     "F",
//     "Engenharia",
//     "Algoritmos",
//     80, 75, 90, 85
// )

printRelatorio(
    "Ana",
    "F",
    "Carlos",
    "M",
    "Direito",
    "Processo Civil",
    60, 55, 58, 62,
    80
)