// Prototype, é como se fosse o nucleo do js
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}
const joao = new Pessoa("João", 27);
console.log(joao.prototype); //ERRADO o prototype nunca esta no objeto criado
console.log(Pessoa.prototype); //retora o prototype CORRETAMENTE, pois ele sempre esta na funcao

// É possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.nascimento = "00/00/0000"; //add uma propriedade nascimento no prototype de Pessoa q é o objeto pessoa
Pessoa.prototype.andar = function(){ //add um metodo andar em Pessoa pelo objeto prototye que está sempre localizado na funcao, no caso essa na funcao construtora Pessoa
  return  `${this.nome} Andou`; //obviamente consigo acessar as propriedades do proprio metodo atravez do this
};
// consigo ter acesso aos prototypes pelo "." mesmo n tendo no objeto ele fica armazenado em prototype
console.log(joao.andar());

//ordem primeiro verifica se existe dentro do objeto, depois vai no prototype

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Herança de Protótipo
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = "Brasil";
// se eu retornar a constante ela me retorna apenas Brasil
// mas se eu retornar pais. me da varias metodos e propriedades que vem do construtor String(), igual joao q vem do construtor Pessoa que criamos
const cidade = new String("Rio");
pais.charAt(0); // B
cidade.charAt(0); // R

// É possível acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
const listaAnimais = ["Cachorro", "Gato", "Cavalo"]; //possui prototipo de Array q é sua função construtora
const lista = document.querySelectorAll('li'); //p construor dessa é a nodelist não o array, só olhar em prototype pelo console q identificamos seu construtor, por isso abaixo tranformamos
// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista); //agora a lista passa a ser um array, com metodos e propriedades do array e n de nodelist que é outro construtor

// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
const listaArray12= Array.from(lista); //diferente da forma acima, esta lincado diretamente ao array, o de cima esta lincado ao prototype, uma array normal é linkada diretamente ao construtor array, mas ela n tem acesso ao metodo direto do array
// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype); //diferente do só array
//dado.constructor.name, retorna o nome do construtor;
Object.getOwnPropertyNames(joao); //tem nome e idade, n tem oq foi criado no prototipo
Object.getOwnPropertyNames(Pessoa.prototype); //aq ja mostra tudo, inclusive o andar


// Entenda o Que está Sendo Retornado
// Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
const carro = {
  marca: "ford",
  preco: 2000,
  andar(){
    return true;
  }
}
typeof carro; //retorna que é um objeto, então carrega metodos e propriedades do objeto, tudo isso vem de Objet.prototype que é o construtor de objetos
carro.marca; //ja não é mais um objeto pois retorna uma string, comeã a ter acesso a metodos e propriedades de String
carro.marca.toUpperCase; //um metodo de string
carro.preco; //acontece a mesma coisa porem agora vira um Number, tendo acesso a todos os metodos e propriedades do prototype de Number que é sua função construtora
carro.andar();//executa uma funcao que retorna um booleano, então herda metodos e propriedades do prototype do Contrutor boolean
carro.andar; //não executa a funcao, então herda metodos e propriedades de prototype do construtor funtion
carro.andar.constructor.name;// para saber oq esta sendo retornado podemos usar o .constructor.name por exemplo q mostra o tipo
carro.constructor.name; //object
carro.preco.constructor.name; //number
carro.marca.constructor.name; //string
