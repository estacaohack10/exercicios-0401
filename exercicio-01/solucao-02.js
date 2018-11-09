/*
Crie um programa que receba dois inputs numéricos do usuário. Esse programa deve:
- Retornar para o usuário o resultado da soma dos dois valores, somente quando este for maior que 100;
- Garantir que o usuário digite números nos dois inputs, repetindo a pergunta caso ele digite qualquer outra coisa que não números;
 */

let valor1 = prompt('Digite o primeiro número:');
let valor2 = prompt('Digite mais um número:');
let soma = Number(valor1) + Number(valor2);

// if (valor1 != undefined && valor1 != null && valor1 != ''){}
// if (valor1) {}

// if (valor1 == undefined || valor1 == null || valor1 == ''){}
// if (!valor1){}

while (!valor1 || !valor2 ||
   isNaN(Number(valor1)) || isNaN(Number(valor2))) {
  if (isNaN(Number(valor1))  || !valor1) {
    valor1 = Number(prompt('Digite novamente o primeiro número:'));
  }

  if (isNaN(Number(valor2)) || !valor2) {
    valor2 = Number(prompt('Digite novamente o segundo número:'));
  }
}

soma = Number(valor1) + Number(valor2);

if (soma >= 100) {
  alert(`O resultado da soma foi ${soma}`);
}