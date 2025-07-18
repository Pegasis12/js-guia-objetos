// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const lista = numeros.split(", ");
console.log(Math.max(...lista)); //... spred operato, operador novo, na logica é como se ele pegasse o numero da lista e passace ele um de cada vez como argumento, 4 depois 5, depois 20 etc. Fazendo dessa forma o max captura isso e dropa o maior numero dos argumentos passados por ele

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
//const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     //'R$ 230  ', 'r$  200'];
//forma que eu fiz                     
// let total = 0;
// listaPrecos.forEach(item => {
//   item = item.toUpperCase().trim().replace("R$ ", "").trim().replace(",", ".");
//   let novos = Number.parseFloat(item);
//   novos = Math.round(novos);
//   total += novos;
// });
// console.log(total);

//forma do andre
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
function limparTexto(preco){ //funcao para limpar que recebe o argumento preco
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", "."); 
  preco = +preco.toFixed(2);
  return preco; //retornando o preco limpo
}
let somaTotal = 0; //somatotal
listaPrecos.forEach(item => { //entrando na lista com loop
  somaTotal += limparTexto(item); //executando a funcao e passando como argumento o item para ser limpado nela
});
console.log(somaTotal.toLocaleString("pt-BR", {currency: "BRL", style: "currency"}));

