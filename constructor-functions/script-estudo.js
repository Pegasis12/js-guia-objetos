// const carro = {
//   marca: "Marca",
//   preco: 0,
// }
// forma errada de escrever no objeto pois um sobrescreve o outro, carro acaba virando fiat q é o ultimo, e honda vira fiat e assim por diante ERRADO
// const honda = carro;
// honda.marca = "civic";
// honda.preco = 300;
// const fiat = carro;
// fiat.marca = "pulse";
// honda.preco = 400;

// forma correta
//Constructor Functions
//Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
function Carro() { //toda função construtora é recomendado começar com letra maiuscula, pascal case, por uma questão de boa pratica
  this.marca = 'Marca'; //this é o propio ojeto carro
  this.preco = 0;
}

const honda = new Carro(); //é responsável por criar um novo objeto baseado na função que passarmos a frente dela
honda.marca = "Civic"; //atribui a marca no novo carro
honda.preco = 3000; //atribui o preço no novo carro
honda.km = 50000; //tbm atribuis mais propriedades alem das definidas em carro
honda.andar = function(){ //atribuindo metodo
  console.log("andou");
};

const fiat = new Carro(); //é responsável por criar um novo objeto baseado na função que passarmos a frente dela
fiat.marca = "Pulse"; //atribui a marca no novo carro
fiat.preco = 1000; //atribui o preço no novo carro


// new Keyword
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
// const reanult = new Carro();
// // 1 Cria um novo objeto
// reanult = {};
// // 2 Define o protótipo
// reanult.prototype = Carro.prototype;
// // 3 Aponta a variável this para o objeto
// this = reanult;
// // 4 Executa a função, substituindo this pelo objeto
// reanult.marca = 'Marca';
// reanult.preco = 0;
// // 5 Retorna o novo objeto
// return reanult = {
//   marca: 'Marca',
//   preco: 0,
// }


// Parâmetros e Argumentos
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.
function Carro2(marca, preco) { //passamos os parametros
  this.marca = marca; //falamos q a propriedade recebe oq o parametro tem
  this.preco = preco;
}
const chevrolet = new Carro2('chevrolet', 4000); //setamos os argumentos do parametro pelo valor q queremos no novo objeto
const jeep = new Carro2('jeep', 3000);


// this Keyword
// O this faz referência ao próprio objeto construído com a Constructor Function.
function Carro3(marca, precoInicial){ //é como se fosse uma função normal, podendo fazer calculos entre outras coisas
  //const taxa = 1.2; //criei uma varivel taxa que recebe 1.2
  this.taxa = 1.2; //passei uma propiedade taxa agora
  const precoFinal = precoInicial * this.taxa; //criei uma variavel preco final que recebe o parametro precoInicial * a taxa com this antes para referenciar ela
  console.log(this); //o this faz referencia ao proprio objeto, até o momento desse console ele tinha somente a taxa
  this.marca = marca; //no this eu passo a propriedade marca que recebe o parametro marca
  console.log(this); //o this faz referencia ao proprio objeto, agora ele tem marca e a taxa
  this.preco = precoFinal; //nesse this eu passo uma propriedade chamada preco que recebe o preco final q é calculado acima
  console.log(this); //o this faz referencia ao proprio objeto, agora ele tem marca, precoFinal e a taxa
}
const citroen = new Carro3("Citroen", 5000); // aq eu falei que cintroen recebe o new de Carro3, ent ele chama a funcao e passa os argumentos pra ela, por isso ela dispara o console log tbm
// Variáveis dentro da Constructor estão "protegidas".


// Exemplo Real
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.