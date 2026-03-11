const readline = require('readline')
const validacoes = require('../validacoes-gerais') 
const calculos = require('./modulo-02/mediasEscolares')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entrada.question("Nome do aluno: ", function(nomeAluno){

    entrada.question("Sexo do aluno (M/F): ", function(sexoAluno){
        sexoAluno = sexoAluno.trim().toUpperCase()

        entrada.question("Nome do professor: ", function(nomeProfessor){

            entrada.question("Sexo do professor (M/F): ", function(sexoProfessor){
                sexoProfessor = sexoProfessor.trim().toUpperCase()
                
                entrada.question("Curso: ", function(curso){

                    entrada.question("Disciplina: ", function(disciplina){

                        entrada.question("Nota 1: ", function(n1){
                            n1 = Number(n1)

                            entrada.question("Nota 2: ", function(n2){
                                n2 = Number(n2)

                                entrada.question("Nota 3: ", function(n3){
                                    n3 = Number(n3)

                                    entrada.question("Nota 4: ", function(n4){
                                        n4 = Number(n4)
                                        
                                        if(validacoes.validacaoEspecificaMedias(
                                        nomeAluno,
                                        nomeProfessor,
                                        sexoAluno,
                                        sexoProfessor,
                                        curso,
                                        disciplina,
                                        n1,n2,n3,n4
                                        )){

                                        let media = calculos.calcularMedia(n1,n2,n3,n4)

                                        let status = calculos.verificarStatus(media)

                                            if(status == "exame"){

                                                entrada.question("Nota do exame: ", function(exame){

                                                    exame = Number(exame)

                                                    let statusExame = calculos.calcularMediaExame(media, exame)

                                                    console.log("\nRelatório do aluno")

                                                    let aluno = sexoAluno == "F" ? "A aluna" : "O aluno"
                                                    let professor = sexoProfessor == "F" ? "Professora" : "Professor"

                                                    console.log(`${aluno} ${nomeAluno} foi ${statusExame} na disciplina ${disciplina}`)
                                                    console.log("Curso:", curso)
                                                    console.log(`${professor}:`, nomeProfessor)
                                                    console.log("Notas:", n1,n2,n3,n4,"Exame:",exame)
                                                    console.log("Média inicial:", media)

                                                entrada.close()
                                                })
                                            }else{

                                                let aluno = sexoAluno == "F" ? "A aluna" : "O aluno"
                                                let professor = sexoProfessor == "F" ? "Professora" : "Professor"

                                                console.log("\nRelatório do aluno")
                                                console.log(`${aluno} ${nomeAluno} foi ${status} na disciplina ${disciplina}`)
                                                console.log("Curso:", curso)
                                                console.log(`${professor}:`, nomeProfessor)
                                                console.log("Notas:", n1,n2,n3,n4)
                                                console.log("Média Final:", media)

                                                entrada.close()
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})