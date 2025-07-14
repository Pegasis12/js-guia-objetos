// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade){
  this.nome = nome; //propriedade que recebe os parametros
  this.sobrenome = sobrenome;
  this.idade = idade;
}
// Crie um método no protótipo que retorne
// o nome completo da pessoa
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
li.click(); //não existe

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //'Boolean'
