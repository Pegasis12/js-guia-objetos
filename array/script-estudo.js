// Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
//consigo acessar todos os dados via brackets [n]
console.log(dados[2]("Eu mesmo")); //acessando o dado 2 da array q é uma funcao
console.log(dados[1]); //acessando o segundo elemento do array q carrega um array e um objeto dentro
console.log(dados[1][2]); //acessa o segundo elemento do array acessado no brackets 1, q é um objeto
console.log(dados[1][2].preco); //acessa a propriedade preco do objeto do array acima



// Construção de Arrays
// Toda array herda os métodos e propriedades do protótipo do construtor Array.
const carros = new Array("Ford", "Fiat", "Honda"); //construindo uma array direto da funcao construtora Array com new
carros[2] = "Ferrari"; //troca o Honda por Ferrari
carros[3] = "Kia"; //como n existe a posição 3 no array ele cria essa posição e atribui, no caso kia
carros[20] = "mustang"; //cria posiçõe vazias no array até o mustang que está na 20
console.log(carros);
console.log(carros.length); //array tbm tem (.lenght) resultado = 21 pois lenght é base 1, diferente de array q é base 0
//Os valores das array's não são estáticos



// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.
const li = document.querySelectorAll("li"); //retorna uma NodeList, que se parece uma array mas não é, caso queira ter todos os metodos e propriedades de array precisa tranformala
arrayLi = Array.from(li);
console.log(li); 
console.log(arrayLi); 
//Objetos que se parecem arrays são objetos mesmo, exemplo a nodeList q é construido como se fosse esse exemplo, e todo funcao construtora retorna esse obejto como se fosse "Array" mas não é
const obj = {
  0: "Teste1",
  1: "teste2",
  2: "teste3",
  length: 3, //para tranformar esse objeto em array, é obrigatorio ter o lenght com tamanho do objeto como propriedade dentro dele
}
const arrayObj = Array.from(obj);
console.log(obj); //obejto
console.log(arrayObj); //array


// Array.isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano.
console.log(Array.isArray(li)); //false, pois não é uma array e sim um objeto
console.log(Array.isArray(arrayLi)); //true, é uma array



// Array.of(), Array() e new Array()
// A palavra chave new não é necessária para utilizar o construtor Array.
Array.of(10); // [10] cria uma array com somente o numero 10 dentro
Array.of(1,2,3,4); // [1,2,3,4] cria uma array com todos os argumentos
new Array(5); // [,,,,] //interpreta o argumento 5 como se fosse para criar uma array com 5 posicoes vazias
Array(5); // [,,,,] não é necessario a palavra new
Array(1,2,3,4); // [1,2,3,4] com mais de um argumento ele cria uma array com os mesmos



// Propriedades e Métodos do Prototype
// [].length retorna o tamanho da array.
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length); //retorna o tamanho da array, base 1, por isso resultado 3
console.log(frutas[0].length); //retorna banana ent 6 pois o numero total de caracteres de banana é 6
console.log(frutas[2].length); //retorna dois pois é outra array dentro da array que carrega dois dados
console.log(frutas[2][0].length); //retorna 8 pois acessa o primeiro dado da segunda array dentro da array principal que é Uva Roxa que contem 8 caracteres



// Métodos Modificadores [].sort()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort(); //organiza a array por ordem alfabetica
console.log(instrumentos2);
const idades = [32,21,33,43,1,12,8];
idades.sort(); //compara os caracteres e coloca em ordem da seguinte forma, o 3 de 32 é maior que 2 de 21, depois de rodar e passar nos primeiros caracteres fazendo essa comparação ele vai pros segundos e compara
console.log(idades);



// [].unshift() e [].push()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.
const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift("kia", "ferrari"); //add no inicio da array, a operação retorna um valor 5, valor do total da nova array
carros2.push("Parati", "Gol"); //push add ao final da array, lembrando q essa operação retorna o total da nova array como o unshift tbm
console.log(carros2); //imprimi os elementos



// [].shift() e [].pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.
console.log(carros2.pop()); //retorna o ultimo elemento da array que é Gol e retira ele da array
console.log(carros2.shift()); //retorna o primeiro elemento da array e remove ele
console.log(carros2);



// [].reverse()
// [].reverse() inverte os itens da array e retorna a nova array.
carros2.reverse(); //retorna o array invertido
console.log(carros2); 


// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros3);
carros3.splice(1, 0, "pablo", "lucas"); //A partir do index 1 ele add pablo e lucas, o 0 quer dizer q ele n vai remover nenhum elemento, se fosse 2 por exemplo, ele iria remover o VW, por esta no index do mesmo. Por padrão ela retorna os itens que foram removidos, como nenhum foi nesse, me retorna um array vazio
console.log(carros3);



// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array. Retorna a array modificada
console.log(['Item1', 'Item2', 'Item3', 'Item4', "item5"].copyWithin(2, 0, 2)); //o primeiro argumento é o alvo, o segundo é de onde quer que começa a copia, e o terceiro até onde vai essa copia. No grosso modo seria, o alvo é onde vai começar, e o 0 e o 2 é a copia que vai ser posterior ao alvo q vai se repetir.
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1); //copia o primeiro
// ['Item1', 'Item2', 'Item3', 'Item1']



// [].fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.





// Métodos de Acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.



// [].includes(), [].indexOf() e [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.



// [].join()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.



// [].slice()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.