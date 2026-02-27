const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

let nota1 = 3
let nota2 = 3
let nota3 = 3
let nota4 = 3

let calculo = require('./modulo-02/mediasEscolares')

let media = calculo.calcularMedia(nota1, nota2, nota3, nota4)

if(media){
    console.log(`O aluno [ xxxxxx ] foi [aprovado] na disciplina [ xxxxxxxx ]. Curso: xxxxxxxx Professor: xxxxxxxx Notas do aluno: ${nota1}, Nota2, Nota3, Nota4, Nota do Exame Média Final: xxxxxx Média final do Exame: xxxx`)}
            
