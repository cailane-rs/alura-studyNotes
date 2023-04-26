# JavaScript: programação Orientada a Objetos

### Paradigma de programação:
De forma muito simples, é uma forma de se lidar e organizar os programas. Foi criada a partir de cálculos matemáticos e computacionais, pensada para solucionar problemas específicos da programação. OO é muito utilizado, mas existem outros paradgimas de programação, como os relacionais, muito utilizados em bancos de dados.

### Paradigmas imperativos 
Usam afirmações para alterar o estado de um programa. Se preocupam em **como** uma tarefa será feita, seu passo a passo e sua sequência. Exemplos de paradigmas imperativos:
- Estrutural
- Proceduural
- Orientado a Objetos

Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:
```
function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(vetor[i] * 2);
}
return resultados;
}
```
- Podemos notar que passamos as instruções de como percorrer o vetor, qual operação fazer e o que devemos adicionar ao resultado.

### Paradigma declarativo
Busca expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, é associado ao “o quê” uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar nessa categoria é o paradigma funcional.

Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:
```
function dobra(vetor){
return vetor.map((item) => item * 2);
}
```
- Podemos observar que não foi necessário explicitar como iterar sobre o laço de repetição ou atribuir os novos valores.

### Objeto literal:
Objeto único que tem seus próprios valores/dados definidos.

### Instância
Quando saímos do objeto literal para a criação de um objeto modelo, e a partir dele criamos vários objetos, cada novo objeto criado é uma **instância** do objeto modelo/classe.

## Princípios da OO:
Uma forma de se começar a abstrair coisas da vida real, antes de escrever código, é estruturas com UML (Linguagem Unificada de Modelagem), forma de desenvolver diagramas.
- Você pode criar seu UML através desse link: (https://www.lucidchart.com/pages/pt/exemplos/uml-online)

### A importância do this
Traduzindo para "isso", facilita ao se trabalhar com os valores do objeto fora do mesmo, e quando se tem vários objetos com o mesmo nome de chave! Ao passar o this e informar o objeto, facilita a leitura e usabilidade ;)

### Método de this: Bind
Veja este objeto literal:
```
const user = {
    nome: "Cailane",
    email: "c@c.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
} 
```
Imagine que você queira utilizar esse objeto para exibir somente o nome do *user*, sem alterar o objeto literal, algo como essa função:
```
const exibir = function() {
    console.log(this.nome) //undefined
}
```
Mesmo utilizando o *this.nome*, o resultado é *undefined*, porque nessa função não é passado ao JS de onde ele tem que tirar esse nome, ou seja, está **sem contexto**. Para isso utilizamos o método **.bind(contexto)**
```
const exibirNome = exibir.bind(user)
```
- Ele vai *prender* a função exibir no contexto do objeto *user*. Note que:
```
exibirNome() //Cailane
exibir() //undefined
```
Mesmo declarando a função *exibir* após utilizar o *bind*, ele ainda é undefined, porque o *bind* foi utilizado na *const exibirNome*. Quando uma função é passada como valor de uma variável, ela não faz referência a original, e sim **cria uma cópia**.

### Método de this: Call
O método *call()* executa a função passando valores e parâmetros específicos para serem usados como contexto do *this*. Ou seja, é possível atribuir um *this* diferente do contexto atual ao executar a função.

Um exemplo de uso de *call()* para especificar o contexto de this:
```
function exibeInfos() {
 console.log(this.nome, this.email)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}

exibeInfos.call(user)
```
Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:
```
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos = function(){
   console.log(this.nome, this.email)
 }
}

const newUser = new User('mariana', 'm@m.com')
```
Também é possível passar parâmetros para call(), como no exemplo a seguir.

Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.
```
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
```
Nesse caso, a função que será executada também está sendo passada como parâmetro de *executaFuncao* e usamos *call()* para “chamar” a função com um contexto (this) específico e também argumentos específicos.

### Método de this: apply
O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:
```
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.apply(user, [this.nome, this.email])
 }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
 ```
### Hoisting
Algo como "içar". Hoisting são as partes do seu código que são lidas primeiro antes de executar, mesmo que não estejam nas primeiras linhas do código. Todas as variáveis declaradas do seu projeto são "içadas" e lidas primeiro, assim como as funções declaradas.

Já as expressões de função, que são anônimas, não passam pelo processo de hoisting e têm seu conteúdo interpretado apenas no momento da execução.

### Protótipo
É a forma que o JavaScript usa para que objetos utilizem recursos uns dos outros. Protótipo é o objeto modelo, que servirá de herança para os outros.
### Classe:
### Encapsulamento
Por questões de segurança e tratamento de dados sensíveis, seria desejável que certas partes do código não pudessem ser acessadas/modificadas. Pensando nisso, foram criados os campos privados, feitos para evitar que outras partes do código acessem certa código que foi privado, só podendo ser acessado dentro de sua classe.

Isso protege e funciona muito bem, mas vamos entender o que isso causa. Um dado sensível que não pode ser alterado por outros, é o nome de um usuário. Entretanto, mesmo que não seja desejável que uma parte de código altere esse dado, ainda será desejável acessar esse dado de nome, para *exibir*, num modo leitura mesmo. Para isso utilizamos a **função acessora** GET.
```
nome() {
  return this.#nome //ERROR (não ép possível acessar #nome pois é privada)
}

get nome() {
  return this.#nome //"Ana"
}
```
### Funções acessoras
#### GET 
É uma função acessora para **leitura** do dado privado. Sobre ela:
- É criada na forma de função;
```
get nome() {
  return this.#nome //"Ana"
}
```
- **Nunca** recebe parâmetro, apenas retorna o que está dentro dela;

- Apesar de escrevermos como função, ela é **chamada como propriedade**, sem os ()
```
const novoAdmin = new Admin('Rodrigo', 'r@r.com')
console.log(novoAdmin.nome)
```
#### SET
Função acessora que permite fazer alterações na propriedade privada, de forma mais segura do que sem o uso dela.

- Diferente do GET, aceita parâmetros, *porém APENAS 1*.
```
set nome(novoNome) {
  this.#nome = novoNome
}
```
### Polimorfismo:
Basicamente, o polimorfismo é a superclasse estar definida de forma que as subclasses podem utilizar sua propriedades e métodos de forma idêntica, apenas alterando atributos para que fique de acordo com os dados desta subclasse.