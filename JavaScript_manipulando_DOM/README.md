# JavaScript: manipulando o DOM

O DOM (Document Object Model) é a modelagem de todo o HTML da página, criado pelo navegador para o que o JavaScript possa manipular o nosso estático HTML.

Segundo o instrutor Pedro Marins, temos métodos para selecionar elementos no HTML, alguns deles:

```document.getElementByID(id)``` - Recupera um elemento pelo ID.

```document.getElementsByTagName(name)``` - Recupera um elemento pelo nome.

```document.getElementsByClassName(name)``` - Recupera um elemento pelo nome da classe.

- **Propriedades e métodos para alterar elementos no HTML**

```element.innerHTML``` - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.

```element.innerText``` - Esta propriedade permite inserir textos no HTML.

```element.attribute``` - Esta propriedade altera o valor de um elemento HTML.

```element.setAttribute(atributo, valor)``` - Este método altera o valor de um atributo de um elemento HTML.

```addEventListener(ação, função)``` - Com a ação passada no primeiro parâmetro, executa a função passada no segundo (*ex: ação: "click", função: dizHelloWorld*).

- **Adicionando e excluindo elementos**

```document.write()``` - Escreve no fluxo de saída do HTML.

```document.appendChild()``` - Adiciona um elemento HTML.

```document.removeChild()``` - Remove um elemento HTML.

```document.replaceChild()``` - Substitui um elemento HTML.

```document.createElement()``` - Cria um elemento HTML.