// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
// forma tranformando em array
// const paragrafos = document.querySelectorAll("p");
// const listaParagrafos = Array.from(paragrafos);
// const soma = listaParagrafos.reduce((acumulador, item) => {
//   item = item.innerText.length;
//   return acumulador + item;
// }, 0);
// forma com call sem precisar transformar
const paragrafos = document.querySelectorAll("p");
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
},0);
console.log(totalCaracteres);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newElement(tag, classe, conteudo){
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : ""; //pra n dar undefined caso n exista, se classe existe coloca classe, se n n faz nada "", poderia ser null tbm ao invez dos ""
  element ? element.innerHTML = conteudo : "";
  console.log(element);
}
newElement("div", "ativo", "Pablo é lindo");



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newFunction = newElement.bind(null, "h1", "titulo"); //atribui somente h1 etitulo nos parametros, o conteudo vai ser atribuido na chamada
newFunction("Teste"); //executando a variavel que agora é um funcao