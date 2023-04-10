# Arrays

## Métodos de Array:

### .push()
Insere um elemento na última posição do array.
```
const notas = [6, 10, 8];

notas.push(7);

console.log(notas); //[6, 10, 8, 7]
```
- Caso o .push() seja chamado, mas nenhum dado informado nos (), será inserido o valor undefined no array.

### .unshift()
Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.

Altera o array original com o novo valor.

### .pop()
Deleta um elemento na última posição do array.
```
const notas = [6, 10, 8];

notas.pop(); //não aceita parâmetro, deleta o último elemento

console.log(notas); //[6, 10]
```

### .shift()
Retira o primeiro elemento do array.

Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

### .find()
Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

### .forEach()
Executa uma função em cada elemento do array de forma individual.

Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

### .slice()
Serve para dividir o array em outros arrays.

```
const nomes = ["João", "Ana", "Paulo", "Cailane"];

const sala1 = nomes.slice(0, nomes.length/2);
```
Os parâmetros deste slice são o ponto inicial de captura de elementos (neste caso, índice 0), e o segundo parâmetro é o ponto final de captura.
```
const nomes = ["João", "Ana", "Paulo", "Cailane"];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`); //Alunos da sala 1: João, Ana
console.log(`Alunos da sala 2: ${sala2}`); //Alunos da sala 2: Paulo, Cailane
```
- Observe que ao passar somente 1 parâmetro, ele captura os elementos do ponto inicial fornecido pelo primeiro parâmetro, até o final do array.

- Importante: NÃO altera o array original!


### .splice()
Atualiza os elementos do array, modifica posições, exclui e inclui elementos.

- Para remover e adicionar elementos:
```
const listaDeChamada = ["João", "Ana", "Paulo", "Cailane"];

listaDeChamada.splice(1, 2, "Rodrigo");
//remove 2 elementos do array a partir da posição 1 e adiciona Rodrigo no lugar;

console.log(listaDeChamada); //[João, Rodrigo, Cailane]
```
- Caso queira adicionar um elemento em qualquer posição, sem excluir outro:

```
listaDeChamada.splice(2, 0, "Rodrigo");
//2 é a posição onde quer adicionar
//0 para não excluir

console.log(listaDeChamada); //[João, Rodrigo, Ana, Paulo, Cailane]
```
- Importante: Altera o array original!

### .concat()
Faz a concatenação de 2 listas;
```
const lista1 = [0, 0, 0];
const lista2 = [1, 1, 1];

const listasUnificadas = lista1.concat(lista2);

console.log(listasUnificadas); //[ 0, 0, 0, 1, 1, 1 ]
```
- Importante: NÃO altera o array original!

## Lista de 2 dimensões:

Dessa forma, é possível criar um array de arrays,  podendo ter um único array ou vários dentro do principal, trabalhando com listas de forma simultânea, o que facilita quando você precisa correlacionar dados diferentes.

No exemplo abaixo, vamos trabalhar com uma lista de nomes e notas, onde ao final exibimos o nome a nota;

```
const nomes = ["Ana", "João"];
const notas = [10, 9];

let alunosENotas = [nomes, notas];
console.log(alunosENotas); //[ [ 'Ana', 'João' ], [ 10, 9 ] ]

            //array nomes, posicao 1            //array notas, posicao 0
console.log(`${alunosENotas[0][0]} , sua nota é ${alunosENotas[1][0]}`); //João , sua nota é 10
```

### .includes
Verifica se um dado está incluso dentro de um array (retorna um booleano).

### .indexOf
Retorna o index do elemento solicitado

```
const listaNomes = ["Ana", "Pedro"]
let nomeUsuario = "Pedro";
let indice = listaNomes.indexOf(nomeUsuario) //indice = 1;
```
## For:
### Simplificando a atribuição

Dentro de um for, às vezes precisamos atribuir valor a uma variável a cada laço de repetição, sem perder o valor anterior, assim:

```
let resultado = 0;
for() {
    resultado = resultado + valor[i];
}
```
Podemos simplificar esta atribuição, sem ter que declarar a var 'resultado' 2 vezes, assim:

```
let resultado = 0;
for() {
    resultado =+ valor[i];
}
```
## Funções Callback: 
Função que tem como parâmetro outras funções. Ex: forEach().

### .forEach()
Sem a necessidade informarmos e incrementarmos o índice, forEach passa por cada elemento do array e executa o que está dentro do bloco da função.

```
const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//callback (exemplo arrow function)
// notas.forEach(nota => {
//   somaDasNotas += nota
// })

//exemplo function padrão
notas.forEach(function(nota){
  somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)
```
### .map(function callback)
Diferente do forEach, .map() sempre retorna um valor, o que facilita, por exemplo, alteração de valores do nosso array (ex: incrementar 5 em cada valor de um array de numeros).

```
const notas = [10, 9, 8, 7, 6];
                                //verifica se a nota é maior que 10
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas); //retorna [10, 10, 9, 8, 7]
```
Outro exemplo com o método .map(), mas para strings:
```
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados); //retorna [ 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA' ]
```
### .filter((param) function callback)
Retorna um booleano, se for true, retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.

Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

No exemplo abaixo, temos 2 listas, uma com os nomes e outra com as notas dos alunos. A partir delas, queremos filtrar quem foi reprovado.
```
              //0     1        2
const nomes = ['Ana','Marcos','Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

//    []                        
const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)

```
- Observe o parâmetro da arrow function:
```
const reprovados = nomes.filter((_, indice) => notas[indice] < 5)
```
O '_' passado como parâmetro se trata de um parametro que não está sendo utilizado, mas que precisa estar na função, como o dado que você recebe (nome do aluno reprovado) na função.

- Lembrando que 1 parâmetro é obrigatório, mas outros podem ser adicionados, depende da necessidade da execução.

### .reduce((param1, param2) function callback)
Reduz todos os valores de um array em um único valor numérico.

```
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    return notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
}

console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala Java ${mediaSala(salaJava)}`)
console.log(`Média da sala Python ${mediaSala(salaPython)}`)

// outro exemplo de media:
const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length

console.log(media)
```
- Este método reduce recebe 2 parâmetros obrigatórios, 1 para acumular os valores, que SEMPRE deve ser o PRIMEIRO parâmetro,e outro para receber o valor atual capturado no loop da função (nesse caso, a arrow function), que SEMPRE deve ser o SEGUNDO parâmetro.

## Matriz:
Se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.

Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

```
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0
```
Com a matriz criada. vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

```
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
```
Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

Então ficamos com o seguinte código:

```
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)
```
No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10?

O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.

```
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)
```
Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.


