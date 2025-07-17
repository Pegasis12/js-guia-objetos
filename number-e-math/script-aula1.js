// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const lista = numeros.split(", ");
let maior = 0;
lista.forEach(item => {
  item = Number.parseInt(item);
  maior = Math.max(item);
});
console.log(maior);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let total = 0;
listaPrecos.forEach(item => {
  item = item.toUpperCase().trim().replace("R$ ", "").trim().replace(",", ".");
  let novos = Number.parseFloat(item);
  novos = Math.round(novos);
  total += novos;
});
console.log(total);