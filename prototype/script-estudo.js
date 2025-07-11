// Prototype, é como se fosse o nucleo do js
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}
const joao = new Pessoa("João", 27);
console.log(joao.prototype); //ERRADO o prototype nunca esta no objeto criado
console.log(Pessoa.prototype); //retora o prototype CORRETAMENTE, pois ele sempre esta na funcao