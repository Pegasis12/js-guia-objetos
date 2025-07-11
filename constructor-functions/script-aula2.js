// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }
function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(nome + ' andou');
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor){
  const elementList = document.querySelectorAll(seletor); //criei uma variavel global dentro da funcao construtora que recebe o parametro seletor
  this.elements = elementList; //criei uma propriedade chamada elements que recebe oq o elementList tem

  this.addClass = function(classe){ //fiz um metodo add class
    this.elements.forEach(item => { //percorro a nodelist de elemets com foreach e atribuo a classe do parametro do metodo em cada item da lista
      item.classList.add(classe);
    });
  }

  this.removeClass = function(classe){
    this.elements.forEach(item => { //percorro a nodelist de elemets com foreach e removo a classe do parametro do metodo em cada item da lista
      item.classList.remove(classe);
    });
  }
}
const li = new Dom("li");
const ul = new Dom("ul");
