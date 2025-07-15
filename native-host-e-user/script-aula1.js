// Liste 5 objetos nativos
// bject, String, Array, Function, Math, Number, Date, Boolean, RegExp, Error, JSON, Map, Set, WeakMap e WeakSet, entre outros. 

// Liste 5 objetos do browser
// pra facilitar posso colocar windows q é o obejto do browser prinicpal no console que vai me mortar varios exclusivos do mesmo
// Document, Element, Node, Attr, Text

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== "undefined"){
  console.log("Existe!"); //existe no chrome
}else{
  console.log("Não Existe!"); //não existe no fireffox
}
if(typeof document.webkitVisibilityState !== "undefined"){
  console.log("Existe!"); //existe no chrome
}else{
  console.log("Não Existe!"); //não existe no fireffox
}
//posso digitar window no console do firefox e chrome para comparar as propriedades e metodos para localizar um q n tem