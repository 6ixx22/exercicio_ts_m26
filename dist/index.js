"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const multiplicacao_1 = require("./multiplicacao");
const saudacao_1 = require("./saudacao");
// Usando a função de multiplicação
const resultadoMultiplicacao = (0, multiplicacao_1.multiplicar)(5, 3);
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);
// Usando a função de saudação
const saudacao = (0, saudacao_1.saudar)('João');
console.log(saudacao);
