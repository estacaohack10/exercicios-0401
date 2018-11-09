/*
DESAFIO

Crie um programa que reordene vetores. Esse programa deve:
- Receber 10 valores de mesmo tipo (numéricos) e coloque-os em um vetor;
- Ordene o vetor em ordem crescente e mostre o resultado ao usuário;
*/

let valores = [];
let valoresOrdenados = [];
// let i = 0;
// while (i < 10) {
//   valores.push(prompt('Digite um número:'));
//   i++;
// }

for (let i = 0; i < 10; i++) {
  valores.push(Number(prompt('Digite um número:')));
}

for (let i = 0; i < valores.length; i++) {
  let valorAtual = valores[i];
  let indiceAnterior = i - 1;
  let indice = i;

  console.log(`Valor atual é: ${valorAtual} no índice ${indice}`);

  while (indiceAnterior >= 0) {
    let valorAnterior = valoresOrdenados[indiceAnterior];

    if (valorAtual < valorAnterior) {
      console.log(`Valor anterior é: ${valorAnterior} no índice ${indiceAnterior}. Indice atual foi atualizado.`);
      indice = indiceAnterior;
    }

    indiceAnterior--;
  }

  console.log(`Valor atual é: ${valorAtual} e será adicionado no índice ${indice}`);
  valoresOrdenados.splice(indice, 0, valorAtual);
  console.log(`-----------`);
}

console.log(valores);
console.log(valoresOrdenados);