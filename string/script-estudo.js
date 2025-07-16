// String
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida = "Pizza"; //retorna uma string direta
const agua = new String("Agua"); //retorna um objeto, da mesma forma q na string direta é possivel passar propriedades e metodos de strng, exemplo agua.toLowerCase(); 

// str.length
// Propriedade com o total de caracteres da string.
console.log(comida.length); //retorna 5 por ser base 1 o lenght
console.log(agua.length); //retorna 4
// podemos acessar via index tbm
console.log(agua[0]); //A
console.log(comida[1]); //i
//retornar o ultimo
console.log(comida[comida.length - 1]); //a Retorna o tamanho de comida - 1, pois lenght é base 1, e index 0, se diminuir 1 pega o ultimoc caracter

// str.charAt(n)
// Retorna o caracter de acordo com o index de (n).
//da mesma forma que estavamos acessando acima com index o charAt faz isso, mas como um metodo, base 0
const linguagem = 'JavaScript';
linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

// str.concat(str2, str3, ...)
// Concatena as strings e retorna o resultado.
const frase = "A melhor linguagem é ";
const fraseFinal = frase + linguagem; //normal somando
console.log(fraseFinal);
const fraseCompleta = frase.concat(linguagem, "!!"); //pega frase e add metodo de concatenar concat que recebe o argumento linguagem q carrega js, podemos concatenar mais coisas, basta passar mais argumentos depois da ,
console.log(fraseCompleta);

// str.includes(search, position)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta)); //true se conter fruta dentro de listaFrutas
console.log(fruta.includes(listaFrutas)); //true se conter listaFrutas dentro de fruta
console.log(listaFrutas.includes(fruta, 14));
// no segundo parametro de includes podemos adicionar index, ele vai começar a procurar a partir dele, o 14 por exemplo retorna false, pois ja passou de banana

// str.endsWith(search) e str.startsWith(search)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
console.log(fruta.startsWith("Ba")); //fruta começa com BA? retorna true pois começa
console.log(fruta.endsWith("a")); //fruta termina em a? retorna true pois termina

// str.slice(start, end)
// Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';
console.log(transacao1.slice(0, 3)); //primeiro argumento de inicio e segundo final, retornando "Dep"
console.log(transacao2.slice(10)); //corta os primeiros 10 caracteres e retorna o resto "e fornecedor"
console.log(transacao3.slice(0 ,-2)); //corta os ultimos dois caracteres "Taxa de camis"
console.log(transacao1.slice(-5)); //retorna os ultimos 5 caracteres

// str.substring(start, end)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
const linguagem2 = 'JavaScript';
linguagem2.substring(3,5); // aS
linguagem2.substring(0,4); // Java
linguagem2.substring(4); // Script
linguagem2.substring(-3); // JavaScript

// str.indexOf(search) e str.lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
console.log(fruta.indexOf("B")); //retorna 0 pois o B esta no index 0 de "B"anana
console.log(fruta.indexOf("a")); //o primeiro q aparece ele ja retorna o index, banana tem 3 a ele retorna o index do primeiro
console.log(fruta.lastIndexOf("a")); //retorna o index do ultimo a 5
console.log(fruta.lastIndexOf("na")); //retorna 4 pois o ultimo na começa no index 4
console.log(fruta.indexOf("na")); //retorna 2 pois o primeiro na começa no 2

// str.padStart(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const preco = "R$99,00";
console.log(preco.padStart(20, ".")); //....................R$99,00, o primeiro argumento atribui 20 espacos na string, o segundo é oq vai ser colocado nesses espacos, nesse caso o . se fosse outra coisa seria a mesma
console.log(preco.padEnd(20, ".")); //R$99,00.................... mesma coisa porem ao final da string agora
// um exemplo real de uso pra alinhar bonitinho
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((item) => {
  console.log(item.padEnd(20, "-"));
});

// str.repeat(n)
// Repete a string (n) vezes.
const frase2 = 'Ta';
console.log(frase2.repeat(5)); // TaTaTaTaTa

// str.replace(regexp|substr, newstr|function)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
// quando uso const não posso modificar o valor, por isso se usa let
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //(/[ ]+/g é uma regular expression 
console.log(listaItens); //Camisas, Bonés, Calças, Bermudas, Vestidos, Saias
let listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens2 = listaItens2.replace("Camisas", "Pablo"); //primeiro argumento é aquele que vc quer trocar, o segundo é a substituição dele
console.log(listaItens2);
// Veremos mais sobre Regular Expression

// str.split(padrao)
// Divide a string de acordo com o padrão passado e retorna uma array.
let listaItens3 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayLista = listaItens3.split("s "); //elimina da string oq for passado dentro do slit, no caso o s mais espaco é o ultimo caracter de cada nome na lsita ent ele elimina
console.log(arrayLista);
//exemplo de uso real
const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split("div"); //elimina as palavra div que encontrar
const novoHtml = htmlArray.join("section"); //metodo join de array coloca section no que foi eliminado de htmlArray que é div, agora passa a ser section
console.log(htmlArray);
console.log(novoHtml);
//join é um método de Array

// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
//verificando se por exmeplo o usuario excreveu tudo em minusculo ou maiuculo
(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00' remove de ambos os lados
valor.trimStart(); // 'R$ 23.00   ' remove do inicio
valor.trimEnd(); // '  R$ 23.00' remove do final