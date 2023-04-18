# Objetos
Estrutura de dados composta de chaves valores.
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}
```
Chave = nome;

Valor = "Andre";

## Como acessar os valores de um objeto?
### Através da notação de ponto:
```
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
```
Ao chamar 'cliente.nome' você se refere ao objeto cliente, e sua chave nome, recebendo o valor desta chave.

### Através da notação de colchetes:
```
                         //0      //1
const chaves = ["nome", "idade", "cpf", "email"];

//notacao de chaves para acessar a chave do objeto
console.log(cliente[chaves[0]]);
```
Esta forma é útil quando não sabe exatamente a chave
, e precisa acessá-la através de uma variável ou um array. Sua vantagem é ser utilizada com arrays
```
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach(info=>console.log(cliente[info]));
```

#### E se eu pedir o valor de uma chave que não existe naquele objeto?
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

console.log(cliente["conta"]);

```
O resultado no console não será um erro,e sim *undefined*.

## SubString: como exibir parte de um valor do tipo string?
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

console.log(cliente.cpf.substring(0, 3)); //"123"
```

## Como adicionar valores em um objeto?
Repare neste objeto 
*cliente*:
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}
```
Nota que falta alguns conjuntos de chave-valor importantes, como o telefone.
Vamos adicionar utilizando notação de ponto e dando um valor a nova chave:
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

cliente.fone = "88876547";
console.log(cliente);
```
Objeto exibido no console:
```
{
  nome: 'Andre',
  idade: 36,
  cpf: '123456789',
  email: 'andre@email.com',
  fone: '88876547'
}
```
- E se eu quiser **substituir** o valor de telefone?
```
cliente.fone = "123";
console.log(cliente);
```
- Note que o processo é o *mesmo da criação de uma nova chave-valor no objeto*. O javaScript, ao receber estes comandos, verifica se a chave dada após a notação de ponto já existe.

Se **sim**, ele **altera o valor** dela para o valor passado.

Caso **não exista** essa chave informada, ele **criará a mesma dentro do objeto**.

## Deletando propriedades
Temos o seguinte objeto:
```
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}
```
Vamos remover a propriedade "aliado":
```
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

//usando notação de colchetes
delete objPersonagem["status"]
```
O objeto agora está assim:
```
{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}
```

## Array como valor de objeto:
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    //ex: uma pessoa com 2 telefones
    fones:["12345678", "09876543"]
}

//exibe no console os telefones:
cliente.fones.forEach(fone => console.log(fone));
```
## Outros objetos como valor de objeto:
```
const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["12345678", "09876543"]
}

cliente.dependente = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente);
```
Agora o objeto *cliente* possui 4 tipos diferentes de valor:
```
{
  nome: 'Andre',    //string
  idade: 36,    //number
  cpf: '123456789',
  email: 'andre@email.com',
  fones: [ '12345678', '09876543' ],    //array
  dependente: { nome: 'Sara', parentesco: 'filha', dataNasc: '20/03/2011' } //objeto
}
```
### E para modificar um objeto dentro de um objeto?
```
//ALTERANDO O VALOR DE UMA CHAVE DO OBJETO CLIENTE
cliente.dependentes.nome = "Sara Silva";
console.log(cliente);
```
## Array de objetos:
No exemplo anterior, havia uma dependente do cliente Andre, a Sara Silva. Mas e se ele tiver 2 ou mais dependentes?
Podemos criar um ARRAY de dependentes, que recebe vários objetos:
```
const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '123456789',
    email: 'andre@email.com',
    fones: ['12345678', '09876543'],
                //ARRAY
    dependentes: [{ //dependentes agora é um array
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}
```
### Adicionando objetos neste array:
Os valores podem ser objetos, mas sendo um array, podemos trabalhar com todos os métodos de array. O método .push(), que adiciona na última posição:
```
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc: "04/01/2014"
}) //SUBINDO UM OBJETO PARA O ARRAY DEPENDENTES
```
Nosso objeto *cliente* ficará assim:
```
{
  nome: 'Andre',
  idade: 36,
  cpf: '123456789',
  email: 'andre@email.com',
  fones: [ '12345678', '09876543' ],
  dependentes: [
    { 
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ]
}
```
- Utilizando métodos de array, podemos **filtrar** qual das dependentes é a mais nova, assim:
```
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014");

console.log(filhaMaisNova[0].nome) //Samia Maria
```
## Funções dentro de objetos
Serve para dar **comportamentos** para o objeto. 
- Neste exemplo criamos uma função que é um conjunto de chave: valor, e que utiliza outra propriedade, a saldo, para calcular dentro da função.
```
const cliente = {
    nome: 'Andre',
    idade: 36,

    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}
```
## Object.keys(objeto)
Retorna uma lista com as chaves do objeto passado no parâmetro.
```
const chavesClientes = Object.keys(cliente);
```
## Object.values(objeto)
Retorna uma lista com os valores do objeto passado no parâmetro.
```
const valoresClientes = Object.values(cliente);
```
## Operador de Espalhamento (Spread Operator)
Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. No exemplo abaixo, queremos separar os dependentes dos clientes para analisar esses dados:
```
const clientes = [
    {
        nome: 'Andre',
        idade: 36,
        cpf: '123456789',
        dependentes: [{ //dependentes agora é um array
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        }],
    },
    {
        nome: 'Juliana',
        idade: 40,
        cpf: '9090909090',
        dependentes: [{ //dependentes agora é um array
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '20/03/2006'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)
```
- Resultado no console:
```
[
  { nome: 'Sara Silva', parentesco: 'filha', dataNasc: '20/03/2011' },  
  { nome: 'Sophia', parentesco: 'filha', dataNasc: '20/03/2006' }       
]
```
As reticências são a sintaxe de espalhamento. Bascimanete, você ***espalha*** os dados que foram separados em um array a parte.
- ***Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.***

# Prototype
No Javascript o protótipo representa um objeto “modelo” com seus métodos, utilizado como base para a criação de outros objetos. É
Mecanismo interno do javaScript que atua como objeto (*Object()*), e todos os construtores da linguagem herdam dele suas propriedades e métodos. Por essa definição se diz que tudo (ou quase) é um objeto em JavaScript, pois herdam deste objeto principal (por debaixo dos panos), seus métodos e propriedades.

- Dessa forma começamos a visualizar a herança de um para outro.
Se eu crio um objeto Cliente, como nome e idade, estou herdando de Object() métodos e funções de objeto. Se crio uma instância de cliente, por exemplo Cailane, ela herda do objeto Cliente, que herda de Object()

# Orientação a Objetos
É um modelo (paradigma) de se programar orientado a objetos.

## Classes
São modelos usados para a criação de objetos.

A classe define os **atributos (características)** e os **métodos (comportamentos)** de um objeto. Usa a palavra reservada *"class"* e *"constructor"*
```
class Cliente {
    constructor(nome,email, cpf,saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(`Seu saldo: ${this.saldo}`)
    }
}
```
## Herança
É um mecanismo da Orientação a Objetos que permite que uma classe herde características de outra classe. Utiliza a palavra reservada *"extends"*
```

class ClientePoupanca extends Cliente{
    constructor(nome, email,cpf,saldo, saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}
```
## Criando um objeto literal
Dessa forma economizamos muitas linhas, pois declarando a o objeto pessoa 1 só vez, você pode chamá-lo quantas vezes quiser, instanciando em uma const! Utiliza a palavra reservada *"new"*
```
const andre = new ClientePoupanca("Andre", "andre@email", "112233445", 100, 200)

console.log(andre) //resultado abaixo
ClientePoupanca {
  nome: 'Andre',
  email: 'andre@email',
  cpf: '112233445',
  saldo: 100,
  saldoPoupanca: 200
}
```