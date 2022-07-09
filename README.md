# Repositório: HTML_JavaScript_DOM

O que é o DOM (Document Object Model) e como fazer sua manipulação usando o JavaScript

## O que é o DOM (Document Object Model)

O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a estrutura dos elementos que compõe uma página WEB, seus atributos e informações e serve de interface para que possamos alterar a sua estrutura, seu o estilo e conteúdo através de linguagens de programação com o JavaScript, por exemplo.

_"O Document Object Model (DOM) do W3C é uma plataforma e uma interface de linguagem neutra que permite que programas e scripts acessem e atualizem dinamicamente o conteúdo, a estrutura e o estilo de um documento."_ (ref. W3Schools)

![1_mMmuOhNytgqP7lrU9HPTpw](https://user-images.githubusercontent.com/84469453/177178632-1436fe60-eacf-4d16-9620-8fb21ae66a95.jpeg)
Essa imagem apresenta todos os 'nós' e objetos existentes em uma página HTML e dentre esses 'nós' e objetos podemos ver os elementos HTML (as tag's que estão na cor verde) que normalmente usamos nas manipulações que fazemos via código.
Todos as informações do documento HTML são 'nós', mas nem todo 'nó' é um elemento HTML, é importante essa compreenção na hora de manipular os elementos HTML da página com os nossos códigos, ok! 😉

### Entendendo um pouco mais sobre a árvore de 'nós' do DOM

**Document** -> Quando um documento HTML é carregado no navegador (browser) da Web, torna-se um objeto de documento. O objeto de documento é o nó _raiz_ do documento HTML e o **dono** de todos os outros nós.

**Elemento HTML** -> O objeto de elemento representa todas as tags que estão em arquivos HTML ou XML. Os objetos de elementos pode ter nós filhos de nós de texto, além de atributos.

**Texto** -> Texto que vai entre os elementos, o conteúdo das tags, por exemplo, no paragrafo `<p>paragrafo</p>`, o texto é o valor _paragrafo_.

**Atributo** -> O objeto atributo representa um atributo que pertence sempre a um elemento HTML, o atributo src de imagem é um bom exemplo `<img src='imagens/flor.png' />`.

Com base na estrutura criada é possível, adicionar, alterar e remover elementos e atributos da árvore DOM utilizando JavaScript. 🤔

## Acessando o DOM

O DOM permite acesso a seus elementos de várias formas diferentes, vamos ver algumas dessas formas abaixo:

### Selecionar um elemento pelo seu ID - document.getElementById()

O [_getElementById_](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById), seleciona um elemento do DOM através do seu atributo ID e retorna **um unico elemento HTML** como resultado final, se nenhum elemento da página tiver o ID especificado a função vai retornar um `null`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementById</title>
  </head>
  <body>
    <p id="p1">Cor aplicada!!</p>
    <button id="btnAzul">Azul</button>
    <button id="btnVerde">Verde</button>

    <script>
      function mudarCor(novaCor) {
        let elemento = document.getElementById('p1');
        elemento.style.color = novaCor;
      }

      const btnAzul = document.getElementById('btnAzul');
      btnAzul.addEventListener('click', () => mudarCor('blue'));

      const btnVerde = document.getElementById('btnVerde');
      btnVerde.addEventListener('click', () => mudarCor('green'));
    </script>
  </body>
```

Nesse exemplo estamos usando o _getElementById_ para selecionar o paragrafo e os botões, pelo atributo ID contido em cada um deles, e fazer a alteração da cor do texto no paragrafo quando o usuário clicar em um dos botões.

### Selecionar um elemento pelo sua TAG HTML - document.getElementsByTagName()

O [_getElementsByTagName_](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName), seleciona os elementos do DOM através da sua TAG HTML e retorna [**uma HTMLCollection**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) com todos os elementos HTML existentes na página com a TAG pesquisada, se a página não tiver nenhum elemento com a TAG especificada a função vai retornar uma _HTMLCollection_ vazia.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementsByTagName</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p id="p1">Cor aplicada!!</p>
    <button id="btnAzul">Azul</button>
    <button id="btnVerde">Verde</button>

    <script>
      const botoes = document.getElementsByTagName('button');

      for (botao of botoes) {
        classeBotao(botao);
      }

      function classeBotao(botao) {
        botao.className = 'estiloBotao';
      }
    </script>
  </body>
</html>
```

Nesse exemplo estamos usando o _getElementsByTagName_ para selecionar todos os botoes da página e depois aplicar a classe css `estiloBotoes` a cada um deles através do `for` e o uso da função `classeBotao`.

### Selecionar um elemento pelo sua classe CSS - document.getElementsByClassName()

O [_getElementsByClassName_](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName), seleciona os elementos do DOM através de uma classe CSS aplicada a eles e retorna [**uma HTMLCollection**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) com todos os elementos HTML existentes na página que possuam a classe CSS especificada na função, se a página não tiver nenhum elemento com a classe CSS especificada o retorno será uma _HTMLCollection_ vazia.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementsByClassName</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p id="p1">Cor aplicada!!</p>
    <button class="btn" id="btnAzul">Azul</button>
    <button class="btn" id="btnVerde">Verde</button>

    <script>
      const botoes = document.getElementsByClassName('btn');

      for (botao of botoes) {
        classeBotao(botao);
      }

      function classeBotao(botao) {
        botao.className = 'btn estiloBotao';
      }
    </script>
  </body>
</html>
```

Nesse exemplo estamos usando o _getElementsByClassName_ para selecionar todos os botoes da página pela classe CSS `btn` e depois aplicar a classe css `estiloBotoes` a cada um deles através do `for` e o uso da função `classeBotao`.

### Selecionar um elemento pela sua classe CSS, pelo seu ID ou pela sua TAG HTML - document.querySelector() 🎩

O [_querySelector_](https://www.w3schools.com/jsref/met_document_queryselector.asp), proporciona uma gama maior de possibilidades para fazer a seleção dos elementos do DOM, permitindo a seleção de 3 formas diferentes, através do ID do elemento, através de uma classe CSS aplicada a ele e também pela TAG HTML, o resultado dessa seleção é sempre **um único elemento HTML**, se a página não tiver nenhum elemento que atenda a seleção feita por essa função o resultado será um `null`.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo querySelector</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>Muda as cores do texto</p>
    <p id="p1">Cor aplicada!!</p>
    <button class="btn" id="btnAzul">Azul</button>
    <button class="btn" id="btnVerde">Verde</button>

    <script>
      const botaoAzul = document.querySelector('#btnAzul');
      const botaoVerde = document.querySelector('.btn');
      const paragrafo = document.querySelector('p');

      console.log(botaoAzul);
      console.log(botaoVerde);
      console.log(paragrafo);
    </script>
  </body>
</html>
```

Esse exemplo mostra as 3 formas diferentes de se usar o _querySelector_ para selecionar um elemento HTML da página, `const botaoAzul = document.querySelector('#btnAzul');` usa o ID do elemento para a seleção e nesse caso o `#` precisa estar antes do id e entre as aspas no parametro da função, `const botaoVerde = document.querySelector('.btn');` usa a classe CSS aplicada nos elementos para fazer a seleção e nesse caso o `.` precisa estar antes do nome da classe e entre as aspas no parametro da função e por fim o `const paragrafo = document.querySelector('p');` usa a própria TAG do HTML, no caso a TAG P, para fazer a seleção e aqui é só colocar a TAG entre as aspas no parametro da função.
Obs.: O _querySelector_, quando houver mais de um elemento que atende a seleção, como é o caso dos paragrafos no nosso exemplo, vai retornar o primeiro elemento que atender ao parametro da seleção, nesse exemplo ele retorna só o paragrafo `<p>Muda as cores do texto</p>`.

### Selecionar um conjunto de elementos pela sua classe CSS, pelo seu ID ou pela sua TAG HTML - document.querySelectorAll()

O [_querySelectorAll_](https://www.w3schools.com/jsref/met_document_queryselectorall.asp), usa a mesma estrura do _querySelector_ e permite fazer a seleção dos elementos do DOM de 3 formas diferentes, pelo ID, por uma classe CSS ou pela TAG HTML, a diferença é que o resultado dessa seleção em [**uma NodeList**](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList), se a página não tiver nenhum elemento que atenda a seleção feita por essa função o resultado será uma _nodeList_ vazia.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo querySelectorAll</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>Muda as cores do texto</p>
    <p id="p1">Cor aplicada!!</p>
    <button class="btn" id="btnAzul">Azul</button>
    <button class="btn" id="btnVerde">Verde</button>

    <script>
      const botoes = document.querySelectorAll('.btn');
      const paragrafos = document.querySelectorAll('p');

      console.log(botoes);
      console.log(paragrafos);
    </script>
  </body>
</html>
```

Nesse exemplo estamos usando o _querySelectorAll_ para selecionar os dois botoes da página pela classe `btn` (`const botoes = document.querySelectorAll('.btn');`) e os dois paragrafos pela TAG P (`const paragrafos = document.querySelectorAll('p');`).

## Como podemos navegar ⛵️ pela arvore 🌳 do DOM

![image](https://user-images.githubusercontent.com/84469453/177212008-bf4bf9df-78b4-464b-badf-b6f3f26a4bd1.png)

[ref. Dev Furia](http://devfuria.com.br/javascript/dom/dom-02.png)

Nós já vimos alguns métodos para encontrar elementos DOM na estrutura da página HTML, dessa forma conseguimos chegar até um elemento diretamente, mas muitas vezes precisamos literalmente 'navegar' entre os elementos para encontrar outros elementos que estejam interligados estruturalmente, por exemplo, algumas vezes precisamos achar o **pai (parent)**, outras vezes seus **irmãos (siblings)** e muitas vezes seus **filhos (childrens)**, para essas navegações o DOM também nos fornece alguns métodos bem intuitivos e de grande ajuda!

![image](https://user-images.githubusercontent.com/84469453/177225052-199ef470-5d3a-407f-8c97-a2f4c553e8ab.png)

[(ref. W3Schools)](https://w3schools.sinsixx.com/dom/navigate.gif)

### localizar o *pai* de um elemento

Todo *nó* de elemento possui um pai, com excessão do nó do documento (*document*), por consequencia cada nó de elemento possui uma propriedade chamada *parentNode* que é uma referência para o pai do elemento selecionado.

```elementoSelecionado.parentNode```

Da mesma forma, todo *Elemento HTML* também possui um pai, com excessão do elemento HTML que é o *topo* da arvore de elementos HTML da página, para acessar o pai de um elemento HTML  podemos utilizar a propriedade *parentElement* que é uma referência para o pai do elemento HTML selecionado.

```elementoSelecionado.parentElement```

### localizar os *filhos* de um elemento

Cada *nó* de elemento só pode ter um pai (*parent*), mas por outro lado, o mesmo nó de elemento pode ter um ou mais filhos (childrens). Para visualizar todos os filhos de um nó de elemento podemos usar a propriedade *childNodes* que nos retorna uma lista de nós (NodeList) que contém todos os filhos do elemento na sua ordem de origem.

```elementoSelecionado.childNodes``` -> Retorna uma NodeList

Como o NodeList tem uma estrutura muito parecida com um Array podemos caminhar pelos seus elementos utilizando seu indice, por exemplo:

```JavaScript
document.getElementById('formEndereco').childNodes; // Lista completa de filhos
document.getElementById('formEndereco').childNodes[0]; // Acessando os filhos individualmente
#text
document.getElementById('formEndereco').childNodes[1];
<div class='linha'>...</div>
```

Existem outros métodos que nos ajudam muito nessa navegação para localizar elementos filhos, para localizar o primeiro filho, por exemplo:

```document.getElementById('formEndereco').firstChild;```

Para localizar o último filho podemos usar:

```document.getElementById('formEndereco').lastChild;```

Seguindo a mesma regra para os *elementos HTML* podemos usar a propriedade *children* que nos retorna uma lista de elementos HTML (HTMLCollection) que contém todos os filhos do elemento HTML na sua ordem de origem.

```elementoSelecionado.children``` -> Retorna uma HTMLCollection

```JavaScript
document.getElementById('formEndereco').children; // Lista completa de elementos HTML filhos
document.getElementById('formEndereco').children[0]; // Acessando os elementos HTML filhos individualmente
<div class='linha'>...</div>
document.getElementById('formEndereco').children[1];
<div class='linha'>...</div>
```

Para localizar o primeiro elemento HTML filho:

```document.getElementById('formEndereco').firstElementChild;```

Para localizar o último elemento HTML filho:

```document.getElementById('formEndereco').lastElementChild;```

### Localizar os *irmãos* de um elemento

Seguindo a lógica que podemos navegar para cima (pai) e para baixo (filhos) na árvore DOM, também é possivel navegar de um lado para o outro, obtendo o próximo *nó* ou o anterior que sejam irmãos (*siblings*), ou seja, estejam no mesmo nivel da arvore do DOM. As propriedades que utilizamos para isso são *nextSibling* e *previousSibling*.

```
document.getElementById('formEndereco').childNodes[4].nextSibling;
document.getElementById('formEndereco').childNodes[4].previousSibling;
```
Para elementos HTML usamos *nextElementSibling* e *previousElementSibling*.

```
document.getElementById('formEndereco').childNodes[4].nextElementSibling;
document.getElementById('formEndereco').childNodes[4].previousElementSibling;
```

### Exemplo completo

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navegando pelo DOM</title>
</head>
<body>
    <h1>Navegando pelo DOM, pais e filhos</h1>
    <section id="pai">
        <p>Primeiro filho</p>
        <span>Segundo filho</span>
        <div>Terceiro filho</div>
    </section>
    <script src="paiEFilhos.js"></script>
</body>
</html>
```
paiEFilhos.html

```JavaScript
const pai = document.getElementById('pai');
const filho = pai.childNodes[3];

console.log('Elemento pai:', pai);
console.log('Lista dos nós filhos:', pai.childNodes);
console.log('Lista dos elementos HTML filhos', pai.children);
console.log('Primeiro nó filho:', pai.firstChild);
console.log('Ultimo nó filho:', pai.lastChild);
console.log('Primeiro elemento HTML filho:', pai.firstElementChild);
console.log('Ultimo elemento HTML filho:', pai.lastElementChild);
console.log('Nó irmão anterior', filho.previousSibling);
console.log('Próximo nós irmão', filho.nextSibling);
console.log('Elemento HTML irmão anterior', filho.previousElementSibling);
console.log('Próximo Elemento HTML irmão', filho.nextElementSibling);
```
paiEFilhos.js

![image](https://user-images.githubusercontent.com/84469453/178113687-8493a2ef-a09b-4644-9b4b-50f53c8850b2.png)


Mais informações sobre DOM e como fazer sua manipulação com JavaScript você pode consultar o [W3Schools](https://www.w3schools.com/js/js_htmldom.asp) ou o [MDN Web Docs community](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction), [W3Schools](https://www.w3schools.com/js/js_htmldom_document.asp)
