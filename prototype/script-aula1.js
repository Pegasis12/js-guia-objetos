// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
  this.nome = nome; //propriedade que recebe os parametros
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}
const joao = new Pessoa("Pablo", "Queiroz", 23); //criando uma pessoa pablo com o construtor Pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype); //getOwnPropertyNames // Retorna uma lista com os métodos / propriedades do seu contrutor
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //li.constructor.name; 'HTMLLIElement'
li.click; //li.click.constructor.name; 'Function'
li.innerText; //li.innerText.constructor.name; 'String'
li.value; //li.value.constructor.name; 'Number'
li.hidden; //li.hidden.constructor.name; 'Boolean'
li.offsetLeft; //li.offsetLeft.constructor.name; 'Number'
li.click(); //não existe constructor de undefined e null

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String pois o resultado é uma string, e oq importa é oq retorna, oq construiu foi o Boolean, mas o resultado é string

// RESUMO: METODOS E PROPRIEDADES SÃO HERDADOS DAS SUAS FUNCÇÕES CONSTRUTORAS,O RESULTADO DE TODA OPERAÇÃO VIA "." FAZ COM QUE SE HERDE OQ FOI O RESULTADO DA QUELA OPERAÇÃO, li.hidden.constructor.name RETORNA "Boolean" que é uma String, ent ela vai herdar metodos e propriedades de String, essa é a logica. Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.