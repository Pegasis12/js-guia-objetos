// [].forEach()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
// const carros = ["Ford", "Ferrari", "Mustang"];
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array); //faz o toUpperCase() porem na array original n faz a alteração, o foreach n altera a array
// }); 
// O método sempre retorna undefined



// Arrow Function
// const li = document.querySelectorAll('li');
// li.forEach(i => i.classList.add('ativa'));  //caso va usar apenas um argumento e uma linha execução, n precisa dos () e nem das {}



// Modificar a Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
// É melhor utilizarmos o map para isso
// const carros2 = ['Ford', 'Fiat', 'Honda'];
// carros2.forEach((item, index, array) => {
//   array[index] = 'Carro ' + item; //array na posição do index recebe a palavra Carro + o proprio item da array
// });
// console.log(carros2);// ['Carro Ford', 'Carro Fiat', 'Carro Honda']



// [].map()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
// const carros3 = ['Fiat', 'toro', 'pagani'];
// const retornoForeach = carros3.forEach((item, index, array) => {
//   array[index] = 'Carro ' + item; 
// });
// console.log(retornoForeach); //quando coloco uma variavel para receber o retorno de foreach ele retorna undefined mesmo tendo return ou n, já o map retorna mesmo sem return
const carros3 = ['Fiat', 'toro', 'pagani'];
const retornoMap = carros3.map((item, index, array) => {
  ///console.log(item.toUpperCase(), index, array); //por padrão se eu n tenho um retorno no map ele me retorna uma array com undefined na posições, mas se eu retornar algo ele me retorna o array com esse algo dentro
  return item.toUpperCase();
});
console.log(retornoMap); //(3) ['FIAT', 'TORO', 'PAGANI']
console.log(carros3); //continua a mesma coisa, a retornoMap é uma nova array diferente dessa




// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
// usamos map quando de fato queremos modificar os valores de uma array
const numeros = [2, 4, 5, 6, 78];
// const novosNumeros = numeros.map((item) => {
//   return item * 2;
// });
const novosNumeros = numeros.map(n => n * 2);// forma resumida, como é uma unica linha é como se fosse return n * 2; se tivesse mais de uma linha e sem return ia ser undefined
console.log(numeros); //[2, 4, 5, 6, 78]
console.log(novosNumeros); //[4, 8, 10, 12, 156]



// Arrow Function e [].map()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
const numeros2 = [2, 4, 5, 6, 78];
const mulplicadosX3 = numeros2.map(n => n * 3);
console.log(mulplicadosX3); //[6, 12, 15, 18, 234]



// [].map() vs [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
// Explicao, se quero apenas entrar na array, atribuir classes sem modificar etc foeach, se quero modificar essa array ou criar outra array com base nessa map, e como map sai um resultado consigo encadear mais metodos e propriedades nele, diferente do foreach q sai undefined



// [].map() com Objetos
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
//const tempoAulas = aulas.map(aula => aula.min);
//console.log(tempoAulas); //[15, 10, 20, 25]
// lembrando que tbm posso ter o callback de map em uma função exeterna
// function nomeAula(aula){ //funcao de callback porem externa do map
//   return aula.nome;
// };
const nomeAula = aula => aula.nome; // forma resumida da funcao de cima
const tempoAulas = aulas.map(nomeAula);
console.log(tempoAulas);


// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
const number = [10, 25, 30];
const reduceNumber = number.reduce((acumulador, item) => { //acumulador é o resultado do return em cada loop
  return acumulador + item; //pega a execução do acumulador e soma mais o item em cada loop, logica: acumulador tem 0, soma mais 10 do atual, depois acumulador tem o resultado da operão q é 10, soma mais 25 do proximo atual, acumulador tem 35, e soma mais 30 do proximo atual, e da 65
}, 0); //no final o valor especial é o valor inicial do acumulador, da undefined depois da primeira interação de undefined, pois o acumulador é o retorno da operação, se n atribuir um valor para o acumulador nem q seja 10 ele manipula de outra forma, o valor inicial de acumuador é o valor do primeiro item, resumindo se n passar n faz a primeira itneração
console.log(reduceNumber);


// Reduce Passo a Passo 1
// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.
// const aulas = [10, 25, 30];
// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65




// Reduce Passo a Passo 2
// Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.
// const aulas = [10, 25, 30];
// // 1
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }) // retorna 35

// // 2
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }) // retorna 65




// Maior Valor com [].reduce()
const listanumeros = [10, 25, 60, 5, 35, 10];
const maiorNumero = listanumeros.reduce((anterior, atual) => { //lembrando q o primeiro parametro é o acumulador q nada mais é q o retorno da execução anterior
  // if(anterior > atual) //se o acumulador for maior q o atual retorna ele
  //   return anterior;
  // else
  //   return atual;
  //forma reduzida ternario
  return anterior > atual ? anterior : atual;
}, 0);
console.log(maiorNumero); //retorna 60 por ser o maior de toda execução


// Podemos retornar outros valores
const videos = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
const listaVideos = videos.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome; //a logica o atual carrega os itens do array, porem com .nome ele acessa o bojeto nome e retorna o nome do objeto, e atribui isso a posição do index de cada loop do acumulador q é um objeto vazio, e a cada loop ele vai pegar o nome do obejto e atribuir no objeto
  return acumulador;
}, {}); //passei no valor inicial do acumulador como um objeto vazio
console.log(listaVideos);



// Passo a passo Reduce
// Passo a passo do método reduce criando um Objeto.
// 1
// videos.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})
// // 2
// videos.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})
// // 3
// videos.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})
// // 4
// videos.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})





// [].reduceRight()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
// const frutas = ['Banana', 'Pêra', 'Uva'];
// const frutasRight = frutas.reduceRight((acumulador, atual) => {
//   return acumulador + ' ' + atual;
// });
// console.log(frutasRight);




// [].some()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((item, index, array) => { //recebe os mesmos parametros que o foreach e o map
  return item === "Uva"; //caso n tivesse um retorno iria retornar false por padrão
});
console.log(temUva); //some retorna true ou false, como o array tem uva ele retorna true




// [].every()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const every = frutas.every((item, index, array) => { 
  return item === "Uva"; //item vai passar em cada item do array e verificar se exsite uva, mas só um é uva true, o restante é false, ent o every vai retornar false, pois ele precisa que todos sejam true para retornar true
});
console.log(every);
const numbers = [2, 6, 8, 9, 88, 101];
const maiorQue3 = numbers.every((item) => item > 3);
console.log(maiorQue3); //false pois every precisa que todos sejam verdadeiros para retornar true, e o 2 do array não é maior q 3
// com some
const emaioR3 = numbers.some((item) => item > 3);
console.log(emaioR3); //retorna true, pois basta um ser verdadeiro para ele retornar true




// [].find() e [].findIndex()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array. O primeiro verdadeiro que encontrar ele para a funcao e retorna, caso tudo seja false ele retorna -1
const verificaValor = frutas.find(item => item === "Uva"); //retorna o valor Uva se encontralo na array
console.log(verificaValor); //Uva
const valores = [20, 2, 3, 7, 99];
const indexValores = valores.findIndex(item => item === 3);
console.log(indexValores); //2 pois está no index 2




// [].filter()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const valoresFrutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = valoresFrutas.filter(item => item); //vai retornar apenas valores verdadeiros e montar uma array, false n entra no array
console.log(arrayFrutas); //['Banana', 'Uva', 'Maçã']
const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros3.filter(x => x > 45); //todos que forem maior q 45 vai atribuir no array
console.log(buscaMaior45); // [88, 101]




// Filter em Objetos
const aulasVideos = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
const verificarAulasVideos = aulasVideos.filter(item => item.min > 15); //vai atribuir a nova array apenas as aulas q tem o min maior q 15
console.log(verificarAulasVideos); //[{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]