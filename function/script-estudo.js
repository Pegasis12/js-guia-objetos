// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.
function areaQuadrado(lado) {
  return lado * lado;
}
//mesma coisa que
const perimetroQuadrado = new Function('lado', 'return lado * 4');




// Propriedades
// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.
function somar(n1, n2) {
  return n1 + n2;
}
// lembrando que n posso passar a função com parenteses () pois assim ela esta sendo executada e gerando um resultado, e o .lenght iria operar no resultado e n não funcao em si
console.log(somar.length); //retona a quantidade de argumentos da função
console.log(somar.name); //retona o nome da função




// function.call()
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
function darOi(nome, idade){
  console.log("Oi pra vc! " + nome + idade);
}
// executando a funcao com call
darOi.call(null, "Pablo", 23); //primeiro argumento faz referencia ao proprio this, nesse caso passamos null ent n faz anda




//This
// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
const carro = {
  marca: "Ford",
  ano: 2018
}
function descricaoCarro(velocidade){
  console.log(this); //faz referencia ao objeto construtor maior, window
  console.log(this.marca, this.ano); //não faz referencia a nada, pois esse valores n existen nessa funcao
}
//descricaoCarro.call({marca: "Honda", ano: 2025}, 100); //o primeiro argumento é o novo dado, o segundo o que vai no argumento da funcao
descricaoCarro.call(carro); //falei pra funcao receber o objeto carro, agora ela é executada e o this da funcao faz referenca nela
const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ["Banana", "Maçã", "Pera"];
carros.forEach.call(carros, (item) => { //primeiro argumento é oq vai rodar o foreach
  console.log(item);
});
//se eu trocar o inicio de carros por frutas vai da mesma, pq agora o foreach com call faz referencia ao this carros, por isso imprimi oq carros tem, e n frutas
frutas.forEach.call(carros, (item) => { //primeiro argumento é oq vai rodar o foreach
  console.log(item);
});





// Exemplo Real
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()
// function Dom(seletor){
//   this.element = document.querySelector(seletor);
// }
// Dom.prototype.ativar = function(classe){
//   console.log(this);
//   this.element.classList.add(classe);
// }
// const ul = new Dom("ul");
// //ul.ativar("teste"); //execucao padrão
// //ul.ativar.call(null, "ativo"); //errado pois passando null para o call o this n vai ser mais o proprio objeto da funcao contrutora e sim o window, devemos passar no primeiro argumento algo semelhante ao this original, no caso oq estava retornando na execução padrão sem o call era um objeto, ent precisamos passar um objeto
// const li = {
//   element: document.querySelector("li"),
// }
// ul.ativar.call(li, "ativo"); //agora esta correto pois o parametro passado é um objeto como o anterior, os dados precisam ser parecidos para funcionar corretamente





// O Objeto deve ser parecido
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.
// forma correta de fazer sem usar o new
function Dom(seletor){
  this.element = document.querySelector(seletor);
}
Dom.prototype.ativar = function(classe){
  console.log(this);
  this.element.classList.add(classe);
}
const li = {
  element: document.querySelector("li"),
}
Dom.prototype.ativar.call(li, "ativao");





// Array's e Call
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).
const frutas2 = ['Uva', 'Maçã', 'Banana'];
// posso adicionar qualquer coisa no prototype das funcoes construtoras, inclusive as nativas do JS, como Array, Object, Function, todas
Array.prototype.mostrarThis = function(){ //criei um metodo na funcao construtora array
  console.log(this)
}
//Array.prototype.pop.call(frutas2); //não faz sentido fazer assim, funciona, porem n recomendado
frutas2.pop(); //mesma coisa que a de cima, mas sem usar o call no prototype
frutas2.mostrarThis(); //funciona, pois a funcao que constroi a array frutas Array carrega um novo metodo chamado mostrarThis.






// Array-like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.
// const lis = document.querySelectorAll("li");
// console.log(lis); //NodeList(3) [li.ativao, li, li], se parece com array
// const filtro = Array.prototype.filter.call(lis, (item) => { //depois do argumento de call passamos os argumentos de filter q é um callback
//   return item.classList.contains("ativo"); //vai retornar somente os elementos ue contem a classe de ativo, contains retorna true e false
// }); 
// console.log(filtro); //[li.ativo, li.ativo]






// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
const numeros = [3,4,6,1,34,44,32];
console.log(Math.max(numeros)); //NAN pois o max recebe como argumento os valores ceparados exemplo Math.max(3, 4, 6, 1, 34, 44, 32) retorna 44 q é o maior pra verificar com numeros teria q tranformar em um argumento ceparado, depois verificar
console.log(Math.max.apply(null, numeros)); //separa cada item do array como argumento, por isso da certo, com call daria nan




// Apply vs Call
// A única diferença é a array como segundo argumento.
// const li = document.querySelectorAll('li');
// function itemPossuiAtivo(item) {
//   return item.classList.contains('ativo');
// }
// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);










// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.
const lis = document.querySelectorAll("li");
const filtro = Array.prototype.filter.bind(lis, (item) => {
  return item.classList.contains("ativo");
}); 
//console.log(filtro); //por ser bind retorna a funcao filter "filter() { [native code] }"
console.log(filtro()); //forma certa de executar o bild








// Argumentos e Bind
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.







// Argumentos Comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função.