// Number
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.
const ano = 2018;
const preco = new Number(99);

// Number.isNaN() e Number.isInteger();
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.
console.log(Number.isNaN(NaN)); //"true" pois retorna um NaN
console.log(Number.isNaN(5)); //"false" pois 5 não é um nan
console.log(Number.isNaN("pablo" / 50)); //tenta dividir uma string por um numero, retorna nan "true"
//isInteger()
console.log(Number.isInteger(25)); //true pois retorna um numero inteiro
console.log(Number.isInteger(25.6));  //false pois retorna um numero decimal

// Number.parseFloat() e Number.parseInt()
// parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.
console.log(Number.parseFloat("55.60")); //transforma a string em um number, ignora o 0 por não ter valor
console.log(Number.parseInt("55.60")); //transforma a string em integral, não pega a casa depois do . se for decimal
console.log(Number.parseInt("23.60")); //Alem da string posso passar um number cm virgula que ele aceita e retorna sem o decimal
// Float possui decimal, Integer não.

// n.toFixed(decimais)
// Arredonda o número com base no total de casas decimais do argumento. arrendonda tanto pra cima quanto pra baixo, retorna uma STRING
const preco2 = 2.99;
console.log(preco2.toFixed()); //3
const carro = 10000.455;
console.log(carro.toFixed(2)); //o argumento do tofixed é quantas casas decimais eu quero depois da virgula, no caso dois do exemplo imprimi 10000.45
const preco3 = 1499.49;
console.log(preco3.toFixed()); //1499 arredondado pra baixo

// n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.
const preco4 = 2.99;
console.log(preco4.toString()); //dropa uma string agora

// n.toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.
let valor = 59.99;
valor = valor.toLocaleString("pt-BR", {currency: "BRL", style: "currency"}); //transformando na moeda brasileira, o primeiro argumento o idioma, o segundo um objeto que recebe dois parametros, o primeiro currency que é a moeda, e o segundo style que é currency
console.log(valor);
let valor2 = 59.99;
valor2 = valor2.toLocaleString("en-US", {currency: "USD", style: "currency"}); //dolar
console.log(valor2);

// Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns. Não é uma função construtora como o Number, é um objeto nativo.
// algumas propriedades do Math
Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.
console.log(Math.abs(-5)); //abs tranforma o valor em positivo
console.log(Math.ceil(44.1)); //arredonda sempre pra cima, mesmo o número sendo menor "45"
console.log(Math.floor(44.95)); //arredonda sempre pra baixo, não impora se for maior "44"
console.log(Math.round(4.5)); //arredonda igual a matematica, no exemplo se for 4.4 vira 4 se for 4.5 vira 5

// Math.max(), Math.min() e Math.random();
// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.
console.log(Math.max(5,2,4,98,45)); //me retorna o maior numero dos argumentos que eu passar, no caso 98
console.log(Math.min(5,2,4,98,45)); //me retorna o menor numero dos argumentos que eu passar, no caso 2
console.log(Math.random()); //gera um numero aleatorio em cada execução de 0 a 1, o numero é bem quebrado
console.log(Math.random() * 100);// consigo manipular o random usando a matematica, se eu quiser um numero de 0 a 100 por exemplo é só usar *100
console.log(Math.random() * 500);// consigo manipular o random usando a matematica, se eu quiser um numero de 0 a 500 por exemplo é só usar *500 ele pega o valor quebrado e multiplica por 500
// se eu não quiser o valor quebrado é só usar o floor
let aleatorio = Math.floor(Math.random() * 10); //de 0 a 10, lembrando que o floor arredonda, por isso multiplicamos por 10 pra ir de 0 a 10, pq sem um multplicador ele sempre vai arredondar pra 0
console.log(aleatorio);
//Formula pra aleatorio entre um numero e outro nesse caso entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;