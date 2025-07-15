// Native
// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.
// Construtores de objetos nativos
Object
String
Array
Function

// Host
// Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
// Objetos do browser
NodeList
HTMLCollection
Element

// node se tentarmos por exemplo usar queryselector n vai rolar pq ele é do browser, e se querermos utilziar algo do node que n tem no broser tbm bai da errado, ja objetos nativos do js tem em ambos

// User
// Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
const Pessoa = {
  nome: 'André',
}

// Diferentes Versões
// Browsers diferentes
// Apesar de tentarem ao máximo manter um padrão, browsers diferentes possuem objetos com propriedades e métodos diferentes.
// Versões de browsers
// Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados.
// Host e Native Objects
// Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.

// Versões de JavaScript
// ECMA
// Organização responsável por definir padrões para tecnologias. ECMAScript é o padrão de JavaScript.
// ECMAScript 2015 ou ES6
// ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, existe uma tendência anual de atualizações. ECMAScript 2015, 2016, 2017, 2018 e Next.
// Engine
// Existem diversas engines que implementam o ECMAScript como V8, SpiderMonkey, Chakra, JavaScriptCore e mais.

// Bibliotecas
// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.
//$('a').addClass('ativo');
//$('a').hide();
//$('a').show();
// Verificar se Existe
// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
//if (typeof Array.from !== "undefined"){ //maneira de verificar pra redundancia de browser mais antigos, caso n exista faca isso e aquilo enfim
//console.log("Existe")
//}else{
  //console.log("Não existe");
  // aq escreveria um codigo polifil, polifil seria um codigo que consegue fazer tudo aquilo q a outra n conseguiu fazer por n ter a funcao no browser
//}
//if (typeof NodeList !== "undefined");{ //maneira de verificar pra redundancia de browser mais antigos, caso n exista faca isso e aquilo enfim
//console.log("Existe")
//}else{
  //console.log("Não existe");
  // aq escreveria um codigo polifil, polifil seria um codigo que consegue fazer tudo aquilo q a outra n conseguiu fazer por n ter a funcao no browser
//}
console.log(typeof Array); //existe
console.log(typeof Array.from); //existe
console.log(typeof Array.frdfAWdwdawom); //undefined não existe no browser, se colocasse por exemplo o Array.from num browser bem antigo ele ia me da undefined, pq provavelmente ele n tem essa funcao

// API
// Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.
// Por exemplo: quando estamos programando no navegador e usamos comandos como console.log(), estamos na verdade utilizando a API do navegador. O console.log() é um método que o navegador disponibiliza para que possamos enviar mensagens ao Console. Nós não criamos esse comando, ele já foi criado pelos desenvolvedores do navegador como parte dessa interface que nos permite interagir com ele.
// Pensa no Facebook: ele possui APIs que você pode usar para, por exemplo, mostrar os comentários mais recentes de uma postagem dentro do seu site. Você faz uma requisição para a API do Facebook, e ela devolve as informações prontas para você exibir.
// Assim como o navegador criou console.log() para facilitar sua vida, o Facebook cria APIs para facilitar integrar seus serviços com outros sistemas.