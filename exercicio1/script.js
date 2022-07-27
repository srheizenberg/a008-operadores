/* Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número */

const numeropar = prompt('Por favor digite um numero par: ')
let a = Number(numeropar)
let divisao = a%2; 

console.log(divisao) //quando eu colo um numero ímpar ele me devolver o numero 1
console.log(typeof divisao)