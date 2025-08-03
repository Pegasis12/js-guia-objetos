// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const pessoa = new Object({
  nome: "Pablo",
});
console.log(pessoa);



// Métodos de Object
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const carro = { 
  rodas: 4,
  init(valor){
    this.marca = valor;
    return this; //retornando o this pq ele faz referencia ao objeto inteiro
  },
  acelerar(){
    return this.marca + " acelerou";
  },
  businar(){
    return this.marca + " businou";
  }
}
const honda = Object.create(carro); //criando um novo obejto com create de Object, agora honda tem os mesmos metodos e propriedades de carro, vai tudo para o prototype, poderia colocor o honda.init("honda"); loco a frente depois do . pra ja iniciar o metodo sem precisar criar uma linha abaixo
honda.init("honda"); //se eu acessar agora os metodos como acelarar entre outros a marca vai ser honda, pois com esse metodo init a marca recebe oq for passado como argumento nele
console.log(honda.acelerar()); //honda acelerou
const ferrari = Object.create(carro).init("ferrari");
console.log(ferrari.acelerar()); //ferrari acelerou





// Object.assign()
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}
const moto = {
  rodas: 2,
  capacete: true,
}
Object.assign(moto, funcaoAutomovel, carro); //primeiro argumento vai receber oq os proximos tem, no caso moto recebe as mesmas funcoes e propriedades de funcaoAutomovel e carro, lembrando ques os dados vão direto dentro de moto, alterando ela, e n para o prototype
console.log(moto); //{rodas: 4, capacete: true, acelerar: ƒ, buzinar: ƒ, init: ƒ, …}acelerar: ƒ acelerar()businar: ƒ businar()buzinar: ƒ buzinar()capacete: trueinit: ƒ init(valor)rodas: 4[[Prototype]]: Object
//retorna rodas 4 pq carro escreve por cima de moto se tem o mesmo dado porem com valor diferente, esse valor é atribuido por cima






// Object.defineProperties()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
// Existe também o Object.defineProperty, para uma propriedade única.
// o sentido da logica é: 
// const moto2 = {
//   rodas: 2, //quero que moto sempre tenhaduas rodas
// }
// //porem a pessoa consegue alterar se fizer da seguinte forma, para isso n acontecer usamos o Object.defineProperties()
// moto2.rodas = 4;
// console.log(moto2);
//usando a solução
// const moto2 = {
//   capacete: true,
// }
// Object.defineProperties(moto2, {
//   rodas: { //passo a propriedade e a configuro atravez do objeto q ela recebe
//     value: 2, //valor
//     configurable: false, //false n consigo deletar, true consigo
//     writable: true, //true consigo escrever outro value, false n
//     enumerable: false,
//     // por padrao todos os valores vem false caso eu n sete eles
//     get(){

//     },
//     set(){

//     }
//   }
// });
// delete moto2.rodas; //nao deleta pois configurable de rodas esta cmo false, o capacete é deletado pois n foi setado com defineProperties
// moto2.rodas = 7; //consigo manipular caso writable esteja true
// console.log(moto2);

// get e set
// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
const moto2 = {
  capacete: true,
}
Object.defineProperties(moto2, {
  rodas: { 
    enumerable: false,
    // quando tenho get e set n posso ter value
    // //atravez desses metodos consigo manipular o retorno padrão
    get(){ //quando do moto.capacete por exemplo quem pega o valor é esse metodo get
      return this._rodas; //criei uma variavel _rodas, o traço é so para n dar conflito com nome da propriedade rodas q ja tem
    },
    set(valor){ //quando escrevo por exemplo moto.capacete = false; o metodo responsavel é o set
      this._rodas = valor * 4; //agora no momento ue atribuo o valor de rodas quando mostrar o resultado ele vai fazer esse calculo abaixo
    }
  }
});
//moto2.rodas = 7; //consigo manipular caso writable esteja true
console.log(moto2);








// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações. Retorna um objeto, consiguimos colocar em uma variavel
Object.getOwnPropertyDescriptors(Array); // Lista com métodos e propriedades e Array
Object.getOwnPropertyDescriptors(Array.prototype);// Lista com métodos e propriedades do protótipo de Array clicando neles consigo ver as configs de configurable, enumerable, value etc
Object.getOwnPropertyDescriptor(moto2); //puxa as config do nosso moto2
Object.getOwnPropertyDescriptor(window, 'innerHeight');// Puxa de uma única propriedade






// Object.keys(obj), Object.values(obj) Object.entries(obj)
// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
Object.keys(moto2);// ['capacete', 'rodas'] aparece todos pois enumerable é true, caso fosse false rodas n iria aparecer pois dentro dela foi configurada como false o enumerable, capacete esta setado padrão por isso aparece
Object.values(moto2); //true pois capacete esta setado como true, pega oq tem dentro de cada propriedade
Object.entries(moto2); //mostra tanto keys que é a chave como values q é o valor como uma array







// Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo) somente se colocar .prototype. Ele puxa os não enumarables tbm
Object.getOwnPropertyNames(Array); // ['length', 'name', 'prototype', 'isArray', 'from', 'fromAsync', 'of']
Object.getOwnPropertyNames(Array.prototype); //(40) ['length', 'constructor', 'at', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 'findLast', 'findLastIndex',...]
Object.getOwnPropertyNames(moto2); //mesmo com enumarable false aq aparece todos, pois getOwnPropertyNames pega tudo






// Object.getPrototypeOf() e Object.is()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
const frutas = ["Banana"];
console.log(Object.getPrototypeOf(frutas));//[at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] mostra os metodos e propriedades do prototype do objeto construtor de frutas que é Array
const frutas2 = ["Banana"];
console.log(Object.is(frutas, frutas2)); //da false pois mesmo tendo o mesmo cotneudo as duas são diferentes
// agora se for assim
const novaFruta = frutas;
console.log(Object.is(frutas, novaFruta)); //por novaFruta fazer referencia a frutas ele retorna true, pois ambos são os mesmos




// Object.freeze(), Object.seal(), Object.preventExtensions()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
const carros = {
  marca: 'Ford',
  ano: 2018,
}
Object.seal(carros); //impede que crie novas propriedades, a linha abaixo n vai funcionar
carros.portas = 4;
delete carros.marca; //n consigo deletear pois o seal tbm impede ja com Object.preventExtensions() consigo deletar mas n consigo atribuir novas propriedades, a diferenca de seal e preventExtensions() é so o delete
Object.freeze(carros); //congelei o objeto, na proxima linha em que atribuo honda ele n vai atribuir, impede qualquer mudança nas propriedades
carros.marca = "Honda";
console.log(carros);
//conseguimos fazer verificacoes tbm exemplo
console.log(Object.isFrozen(carros)); // true pois congelei carros
console.log(Object.isSealed(carros)); // true pois setei seal tbm
console.log(Object.isExtensible(carros)); // false pois n setei o preventExtensions()




// Propriedades e Métodos do Protótipo
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.





// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.






// {}.isPrototypeOf(valor)
// Verifica se é o protótipo do valor passado.






// {}.toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).