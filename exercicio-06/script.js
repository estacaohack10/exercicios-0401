/*
DESAFIO

Crie um programa que escreva o seguinte output na tela:

*******
1******
12*****
123****
1234***
12345**
123456*
1234567

*/

let output = '*******';

for (let i = 0; i <= 7; i++) {
  if (i > 0) {
    output = output.replace('*', i);
  }

  console.log(output);
}