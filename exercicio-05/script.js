/*
Crie um programa que calcule a média de notas de cada aluno. Esse programa deve:
- Avaliar cada aluno do vetor;
- Calcular a média das notas do aluno. Para isso, é necessário somar todas as notas e dividi-las por 4;
- Definir se o aluno teve uma nota acima da média ou não, e reagir de acordo:
    - Se a nota for maior que a média, avisar que determinado aluno foi aprovado;
    - Se a nota for menor que a média, avisar que determinado aluno foi reprovado;

BÔNUS
- Se o usuário tiver entre 5.5 e 6 de média, arredondar a nota para 6 para uma aprovação automática;
- Ao dizer que o aluno foi aprovado ou reprovado, também informar qual foi sua média;
*/

const alunos = [
    {
        nome: 'José',
        notas: [7, 6.5, 9, 4.5]
    },
    {
        nome: 'Eduardo',
        notas: [6.5, 6, 5, 7]
    },
    {
        nome: 'Bruna',
        notas: [7, 8, 9, 10]
    },
    {
        nome: 'Rachel',
        notas: [8, 5.5, 6, 7]
    },
    {
        nome: 'Anderson',
        notas: [9, 8, 10, 10]
    },
    {
        nome: 'Caio',
        notas: [5.5, 4.5, 6, 4]
    },
    {
        nome: 'Igor',
        notas: [4, 7, 5.5, 6.5]
    },
    {
        nome: 'Gustavo',
        notas: [3.5, 6, 5.5, 7.5]
    },
    {
        nome: 'Maria',
        notas: [5.5, 4, 6, 8]
    },
    {
        nome: 'Giovana',
        notas: [6, 4, 7, 3]
    },
];
const media = 6;

for (const aluno of alunos) {
    let mediaDoAluno = 0;

  for (const nota of aluno.notas) {
    mediaDoAluno += nota;
  }  

  mediaDoAluno = mediaDoAluno / aluno.notas.length;

  if (mediaDoAluno >= media) {
    console.log(`${aluno.nome} foi aprovado com média ${mediaDoAluno}. Parabéns!`);
  }
  else {
    console.log(`${aluno.nome} foi reprovado com média ${mediaDoAluno}.`);
  }
}