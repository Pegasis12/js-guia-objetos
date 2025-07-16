// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if(item.descricao.slice(0, 4) === "Taxa")
    taxaTotal += numeroLimpo;
  else //poderia ser um else if com slice de Recebimento
    recebimentoTotal += numeroLimpo;
});
console.log("Total taxas é: " + taxaTotal);
console.log("Total de recebimento é: " + recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes);
const lista = transportes.split(";")
console.log(lista);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const newHtml = html.split("span").join("a");
console.log(newHtml);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));
console.log(frase.charAt(frase.length - 1));


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let taxas = 0;
transacoes2.forEach(item => {
  item = item.toLowerCase().trim().slice(0, 4);
  if(item === "taxa")
    taxas++;
});
console.log(taxas);

