/*# Exercício 2

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
```*/

let numero1 = prompt('digite o primeiro numero: ');
let numero2 = prompt('digite o segundo numero: ');

let resultado1 = numero1 > numero2
let resultadoigual = numero1 === numero2
let resultadodivisao = numero1/numero2
let resultadodivisao2 = numero2/numero1

console.log(resultado1, resultadoigual, resultadodivisao, resultadodivisao2);