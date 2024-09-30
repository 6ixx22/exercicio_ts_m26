// index.ts
import { multiplicar } from './multiplicacao';
import { saudar } from './saudacao';

// Usando a função de multiplicação
const resultadoMultiplicacao = multiplicar(5, 3);
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);

// Usando a função de saudação
const saudacao = saudar('João');
console.log(saudacao);
