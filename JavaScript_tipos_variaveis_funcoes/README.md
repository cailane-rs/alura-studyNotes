# Anotações sobre JavaScript para Back-end (iniciante)

## typeof:
Exibe o tipo de dado da variável, se é njumber, string, boolean...

## Stacktrace:
Também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.

## console.log:
É apenas um registro no terminal do que passamos para o console.log() nestes parênteses.

## console.time() e console.timeEnd():
Para temporizar o período que uma operação de código leva para ser iniciada e concluída;

---
## Comparações:
```
== comparação do valor das variáveis

let numero = 2;
let numeroString = "2";

console.log(numero == numeroString); //retorna true;
```
Ao comparar somente o valor, o JavaScript faz uma conversão implícita do tipo da variável.
Portanto a variável númeroString passou do tipo number para o tipo string.

```
=== comparação do valor e tipo das variáveis

let numero = 2;
let numeroString = "2";

console.log(numero === numeroString); //retorna false;
```
Ao comparar o valor e tipo, o JavaScript identifica que uma é do tipo number, e outra do tipo string, ou seja, mesmo que o valor seja o mesmo, retorna false, pois são de tipos diferentes.

Boas práticas: utilize === e faça a conversão de modo explícito.

```
let numero = 2;
let numeroString = "2";

console.log(numero === Number(numeroString); //retorna true;
console.log(String(numero) === numeroString; //retorna true;

```
---

## Operador Ternário:
Comparações mais curtas, recomenda-se o ternário, caso tenha muitos if's dentro de outros, não é recomendado pois dificulta a legibilidade do código.
```
const idadeMinima = 18;
const idadeCliente = 16;

// exemplo com if

if(idadeCliente >= idadeMinima) {
  console.log("Você pode beber cerveja, se quiser");
} else {
  console.log("Você só pode beber suco");
}

// exemplo com ternário

            //condicao                    //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
```

---

## Template string:
Forma de trabalhar com várias strings. No exemplo abaixo, quero exibir, em uma variável, uma frase contendo algumas variáveis tipo String.

```
const meuNome = "Cailane";
const minhaIdade = 2022-2003;
const minhaCidadeNascimento = "São Borja";

const apresentacao = `Meu nome é ${meuNome}, minha idade é ${minhaIdade} e nasci na cidade de ${minhaCidadeNascimento}`;

console.log(apresentacao); //Meu nome é Cailane, minha idade é 19 e nasci na cidade de São Borja
```
Note que as aspas duplas (ou simples) foram substituídas pelo acento grave (crase) e você não precisa mais concatenar o texto com as variáveis através do "+", facilitando a leitura.

Segue outro exemplo, apresentando outros métodos:
```
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;

console.log(pedido);
//Leo diz: "por favor, quero beber cerveja"
```
---
# Math.()

## Math.round(): 
Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
- Math.round(4.3) retorna 4
- Math.round(3.85) retorna 4
- Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima

## Math.ceil(): 
Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

- Math.ceil(5.2) retorna 6

## Math.floor(): 
Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

- Math.floor(5.2) retorna 5

## Math.trunc() : 
Desconsidera os números decimais, o que é conhecido como truncamento.

- Math.trunc(4.3) retorna 4
- Math.trunc(4.8) retorna 4

## Math.sqrt() : 
Retorna a raiz quadrada de um número.

- Math.sqrt(64) retorna 8

## Math.min(): 
Retorna o menor valor entre os argumentos.

- Math.min(0, 150, 30, 20, -8, -200) retorna -200

## Math.max():
Retorna o maior valor entre os argumentos.

- Math.max(0, 150, 30, 20, -8, -200) retorna 150

---
# Função:

## Parâmetros x argumentos: 
Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

## Expressão de função
Declara a função em uma variável, encurtando o processo da função declarativa (padrão), porém com seus diferenciais:

```
var soma = function(num1, num2) {return num1 + num2}
```
- Importante: não é possível chamar a expressão sem inicializar a função antes (a não ser que a declare como var, e não como 'const' ou 'let'), como no exemplo abaixo:

```
// Forma errada:
console.log(soma(1, 1))
var soma = function(num1, num2) {return num1 + num2}

// Forma correta:
var soma = function(num1, num2) {return num1 + num2}
console.log(soma(1, 1))
```
## Arrow function
Também declarada em uma variável, vejamos seus diferenciais:

```
// 1 parâmetro e 1 linha de instrução
const apresentaPessoa = nome =>  `meu nome é ${nome}`;

// 2 parâmetros e mais de 1 linha de instrução
const somarNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}
```
- Importante: assim como a expressão de funçãom, não é possível chamar a arrow sem inicializar a função antes (a não ser que a declare como var, e não como 'const' ou 'let').
---
## Declarando Variáveis:
Algumas palavras em JavaScript são reservadas (não podem ser usadas como identificador), outras podem, porém dependem do contexto. A melhor prática é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes e outros blocos (pelo menos, na versão atual):
```
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
function
get
if
import
in
instanceof
let
of
new
null
return
static
super
switch
this
throw
true
try
typeof
var
void
while
with
yield
```
