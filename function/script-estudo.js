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
//descricaoCarro.call({marca: "Honda", ano: 2025}, 100); //o primeiro argumento é o novodado, o segundo o que vai no argumento da funcao
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









// O Objeto deve ser parecido
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.





// Array's e Call
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).





// Array-like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.





// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.





// Apply vs Call
// A única diferença é a array como segundo argumento.





// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.





// Argumentos e Bind
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.




// Argumentos Comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função.