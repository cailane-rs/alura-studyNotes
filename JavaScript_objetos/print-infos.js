const cliente = {
    nome:"Andre",   
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

//acessando valor
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

//metodo que acessa parte de uma string, onde:
// 0 ponto de inicio; 3 é até onde vai minha subString;
console.log(cliente.cpf.substring(0, 3));