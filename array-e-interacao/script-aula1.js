// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetoArray = arrayCursos.map((item) => {
  //slecionei cada item do array q quero filtrar e peguei o texto deles
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector("p").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;
 
  // retonando uma array de objetos
  return {
    //forma antiga de retornar objeto, posso apenas retornar a variavel
    // titulo: titulo,
    // descricao: descricao,
    // aulas: aulas,
    // horas: horas
    titulo,
    descricao,
    aulas,
    horas
  }
});

console.log(objetoArray);






// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(item => item > 100);
console.log(maior100);




// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const verificar = instrumentos.some(item => item === "Baixo");
console.log(verificar);




// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const maior = compras.reduce((acumulador, item) => {
  item = +item.preco.replace("R$", "").replace(",", ".");
  return acumulador + item;
}, 0);

console.log(maior);