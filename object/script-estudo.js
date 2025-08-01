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
moto2.rodas = 7; //consigo manipular caso writable esteja true
console.log(moto2);








// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.






// Object.keys(obj), Object.values(obj) Object.entries(obj)
// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.






// Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).







// Copiar
// Object.getPrototypeOf() e Object.is()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.







// Object.freeze(), Object.seal(), Object.preventExtensions()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.







// Propriedades e Métodos do Protótipo
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.





// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.






// {}.isPrototypeOf(valor)
// Verifica se é o protótipo do valor passado.






// {}.toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).