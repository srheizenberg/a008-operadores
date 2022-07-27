/*# Exercício 3

Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de vinte é maior que cinquenta

d) negação de (vinte é maior que cinquenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/

const cinco = 5
const vinte = 20
const dois = 2
const cinquenta = 50

let resultado = cinco < vinte && vinte > dois;
let resultado2 = cinco == cinco || cinco == "cinco";

let resultado3 = vinte < cinquenta;

console.log(resultado, resultado2, !resultado3);