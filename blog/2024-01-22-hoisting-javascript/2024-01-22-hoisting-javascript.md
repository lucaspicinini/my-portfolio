---
slug: hoisting-javascript
title: Entendo o Hoisting no JavaScript
authors: lucas
tags: [javascript, hoisting]
---

# Entendo o Hoisting no JavaScript

## *hoist é literalmente guindaste em inglês*

> **Considerações Breves:** Essa é uma mistura bem maneira de dois artigos realizada através de uma tradução livre, com o objetivo de tornar conceitos de programação mais acessíveis à nossa maneira nativa de falar as coisas, buscando assuntos que carecem de fontes em português e fugindo um pouco dos termos "quadrados" que os tradutores nos oferecem. Todos sabemos que essas ferramentas evoluíram demais nos últimos anos e dão conta do serviço, mas também é bem legal aprender algo com uma linguagem nativa mais próxima do que a gente usa no dia a dia não é mesmo?! Então sem mais delongas ou formalidades, aqui estão as fontes de pesquisa - [DigitalOcean](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript#introduction) - [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-hoisting/) ; e vamos para o assunto. Assunto();

## Introdução

Neste artigo vamos investigar o famoso mecanismo de hoisting do JavaScript. Como mencionado lá no início, hoist é literalmente guindaste em inglês e hoisting pode ser traduzido como elevação ou suspensão. Tenham isso em mente porque o cara que inventou o nome pra isso fez uma boa analogia e ajuda a entender melhor o conceito. Check it out.

## Apresentação

O Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo do seu escopo antes da execução do código, não importa se o escopo seja global ou local. Se você já se perguntou o porque é capaz de chamar funções antes mesmo das linhas em que elas estão escritas, aqui está o motivo.

- *Nota¹ -> o JavaScript faz apenas o hoisting de declarações, NÃO de inicializações.*
- *Nota² -> o JavaScript aloca memória para todas as variáveis e funções definidas no programa antes da execução.*

## Entendendo escopo Global e Local

### Declarações, atribuição/inicialização e uso/chamadas

Antes de partirmos para os escopos, precisamos deixar claro para todos o que é cada tipo de linha no código e lembre-se, o hoisting acontece apenas para declarações e não para inicializações ou atribuições.

- **Declarações** -> Ocorrem quando declaramos uma variável ou constante. É quando estamos criando ela no código.

- **Atribuições/inicialização** -> Pode ser entendido como o momento que jogamos um valor pra dentro de uma variável, justamente atribuindo algo a ela ou iniciando a parada que foi declarada, mesmo que depois ela assuma outro valor.

- **Uso/chamada** -> É quando usamos essa variável e seu valor para algum output ou qualquer outra coisa durante o programa.

- **Exemplo:**

 ```javascript
let a;          // Declaração
a = 100;        // Atribuição
console.log(a); // Uso
 ```

### Escopos

Conceito que circunda toda linguagem de programação e é extremamente importante, diz respeito ao local onde uma variável é acessível dentro do código. Antes do ECMAScript6, o JavaScript só possuía escopo global e local. Com a introdução do ES6, o JavaScript passou a ter escopo Global, Local e de Bloco. No JavaScript, quando declaramos uma variável dentro de uma função ou bloco, ela só é acessível lá dentro, não podendo ser acessada pelo lado de fora, mas podemos utilizar um return ou outras técnicas para fazer a função cuspir o valor pra fora. Exemplos:

- **Escopo de Bloco** -> variáveis declaradas dentro de um {} bloco não podem ser acessadas por fora.

```javascript
{
  let x = 2;
}
// não podemos acessar x aqui
```

- **Variáveis declaradas com var NÃO podem ter escopo de bloco {}.**

```javascript
{
  var x = 2;
}
// x PODE ser acessado aqui
```

- **Escopo local** -> Variáveis declaradas dentro de **funções** possuem escopo local. Neste caso, não importa se utilizarmos var, let ou const na declaração, as 3 formas criam escopo local.

```javascript
function myFunction() {
  var carName = "Tesla";   
} // carName não pode ser acessado aqui
```

- **Escopo global** -> Variáveis com escopo global podem ser acessadas em qualquer local do programa.

```javascript
let carName = "Tesla";
// podemos acessar aqui

function myFunction() {
// e usar a variável aqui também
}
```

- **Variáveis não declaradas** -> sem o uso das palavras var, let ou const.

```javascript
    function codeHoist(){
        a = 10;
        let b = 50;
    }
    codeHoist();
 
    console.log(a); // 10
    console.log(b); // ReferenceError : b is not defined
```

O código deu erro com o *b* porque essa variável possui escopo local, ao mesmo tempo, conseguimos acessar o *a* fora da função porque todas as variáveis declaradas sem as palavras reservadas var, let ou const, passam a ter **escopo global automaticamente**. Tenha atenção com isso. Vamos entender melhor os erros que envolvem o hoisting a seguir.

## undefined vs ReferenceError

É importante entender os tipos de erro que o console apresenta, isso permite debugar o código de maneira consistente e encontrar os bugs mais rapidamente. Há uma pequena diferença entre undefined e ReferenceError. O undefined ocorre quando temos uma variável que não está definida ou que está explicitamente definida como undefined (existem algumas aplicações para isso). O ReferenceError acontece quando tentamos acessar uma variável que nem foi declarada. Entender isso será importante para compreender os conceitos a seguir.

## O tal do Hoisting

Quando pensamos nas especificações ECMAScript5, o tipo de variável que vem a mente é o var. O Hoisting acontece de maneira um pouco diferente com esse tipo de declaração quando comparamos com let ou const, isso ocorre por causa de algumas mudanças que ocorreram com a inserção do let/const na linguagem com o lançamento do ECMAScript6. Primeiramente vamos utilizar o var como exemplo e finalmente enteder como esse impotante conceito, o Hoisting (ou elevação), se comporta.

### Hoisting com declarações var

- **Como escrevemos o código:**

```javascript
    console.log(name);
    var name = 'Fulaninho da Massa';
```

*Output no console:*

```javascript
undefined
```

- **Como o interpretador vê o código:**

```javascript
    var name;
    console.log(name); // undefined
    name = 'Fulaninho da Massa';
```

Aqui podemos ver **o Hoisting em ação pela primeira vez**, pois como explicado lá no início do artigo, o Hoisting é o comportamento padrão do JavaScript de mover as **declarações** para o topo do seu escopo antes da execução do código. Como o Hoisting suspende/eleva apenas as declarações, mas não as inicializações do código, o console cospe undefined, porque entende que é uma variável apenas declarada, que ainda não foi definida (como vimos na seção de erros).

### Hoisting com declarações let/const(ES6)

Se utilizarmos o exemplo anterior, mas declarando nossa variável com a palavra let, vamos notar um comportamento diferente, isso é explicado por conta de algumas mudanças com a adoção do padrão ES6.

- **Como escrevemos o código:**

```javascript
    console.log(name);
    let name = 'Fulaninho da Massa';
```

*Output no console:*

```javascript
ReferenceError: name is not defined
```

- **Como o interpretador vê o código:**

```javascript
    console.log(name); // ReferenceError: name is not defined
    let name = 'Fulaninho da Massa';
```

Neste caso, por conta da introdução do ES6 e suas mudanças técnicas que não aceitam bem o uso de variáveis não declaradas, o Hoisting se comporta de forma diferente. É como se ele não conseguisse desgrudar a declaração da atribuição para elevá-la ao topo do escopo em seguida, como aconteceu no exemplo com o var. Sendo assim, como o Hoisting só funciona para declarações e não para atribuições, ele não acontece neste caso, já que não consegue descolar a declaração da atribuição com as palavras let ou const. É simplesmente uma definição do ES6.

Por esse motivo o console cospe o erro ReferenceError, pois para a máquina essa variável ainda nem foi declarada, já que a execução do código acontece linha por linha e neste caso o Hoisting não aconteceu. Doidera né não?! Mas como achamos isso legal, vamos entender o Hoisting em funções e porque não conseguimos chamar alguns tipos de função antes de declará-las.

> É importante lembrar que o Hoisting ocorre para as declarações de var, let e const no JavaScript. Apenas nos casos que envolvem inicialização/atribuição que o comportamento se difere.

## Hoisting em Funções

A grosso modo, as funções no JavaScript podem ser dividas em: Declarações de Funções e Expressões de Funções. Agora nós vamos investigar como o Hoisting afeta esses tipos de funções.

### Declarações de Funções

Maneira mais conhecida e tradicional de declarar funções. É declarada através da palavra *function*, seguida do nome da função e dos parênteses, que podem conter parâmetros ou não, finalizando com as chaves de abertura e fechamento do bloco de execução.

Esse tipo de função **é completamente afetada pelo Hoisting** e imediatamente elevada para o topo do seu escopo pelo interpretador antes da execução do código. Isso é o que permite a chamada de funções antes de sua aparição na escrita do código. Veja como funciona no exemplo a seguir:

- **Como escrevemos o código:**

```javascript
    meEleve(); // Output: Essa função foi elevada.
    function meEleve() {
      console.log("Essa função foi elevada.")
    };
```

*Output no console:*

```javascript
Essa função foi elevada.
```

- **Como o interpretador vê o código:**

```javascript
    function meEleve() {
      console.log("Essa função foi elevada.")
    };
    meEleve();
```
### Expressões de Funções

Expressões de funções **NÃO** sofrem o efeito do Hoisting. Podemos usar a mesma abstração utilizada no exemplo onde let/const são declaradas já sendo inicializadas para entender o que ocorre aqui, pois é basicamente o mesmo efeito.

É como se o Hoisting não conseguisse descolar a declação da função que está sendo inicializada na variável, dessa forma, como o Hoisting não funciona para atribuições, ele também não acontece neste caso. Exemplo:

- **Como escrevemos o código:**

```javascript
    vaiDaErrado(); // Output: TypeError: expression is not a fuction
    var vaiDaErrado = function () {
      console.log("Vai funcionar?")
    }
```

*Output no console:*

```javascript
TypeError: expression is not a fuction
```

## Conclusão

Hoje vamos ficar por aqui, mas eu espero que esse pequeno artigo tenha sido uma boa introdução ao Hoisting para você. Com o tempo você vai se aprofundar nesses conceitos e entender quando usar cada tipo de declaração ao seu favor, mas principalmente, entendenter possíveis erros emitidos pelo console, facilitando a correção dos bugs. Isso pode ajudar ainda mais naqueles casos onde a manutenção está sendo feita em um código que não foi escrito por você.

Aprender de maneira informal é bom para limpar a mente e relembrar como gostamos de um assunto. Não precisamos complicar ainda mais o que já é complexo.

E por último mas não menos importante: **qualquer colaboração é bem-vinda!** Esse artigo foi apenas uma tradução livre das fontes citadas lá no início e não significa que sei tudo sobre o assunto, ou seja, caso alguém tenha alguma coisa para acrescentar aqui, será muito bem vindo. Minha intenção é apenas viabilizar mais e mais conteúdo em nossa língua nativa, sobrecarregando menos nossa cabeça e deixando o material bruto pra quando não tiver jeito rs. Bons estudos!