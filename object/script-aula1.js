// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado){
  return Object.prototype.toString.call(dado);
}
const li = document.querySelectorAll("li");
console.log(verificarDado(li)); //'[object NodeList]'



// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lado: {
    value: 4,
    // por padrão todos os valores são false,ela se torna imutavel, vou apenas colocar enumarable para mostrar os dados
    enumerable: true,
  }
});
console.log(quadrado);




// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
configuracao.width = 200; //não funciona pois freeze impede
console.log(configuracao); //{width: 800, height: 600, background: '#333'}




// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
