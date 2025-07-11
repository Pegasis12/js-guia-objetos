const Dom = {
  seletor: "li",
  element(){
    return document.querySelector(this.seletor); //selecionei o elemento com o que a propriedade seletor tem, q é "li" lembrando do this pra fazer referencia ao proprio conteud do objeto
  },
  ativar(){
    //const elementoSelecionado = this.element(); //fiz uma const que recebe o metodo element, ela guarda oq ele retornou no codigo dele, q é a li
    //elementoSelecionado.classList.add("ativado");
    this.element().classList.add("ativado"); //forma resumida, pega o resultado de elements q é li e atribui a classe ativar nele
  },
};
//Dom.ativar(); //ativa o metodo do Objeto dom q atribui a classe ativo a li

// agora imagina que queremos trocar o seletor pra ul
Dom.seletor = "ul";
//Dom.ativar(); //agora ele atribui a classe ativado pra ul tbm
//foi uma demonstração de que dessa form é tabalhoso pois se queremos reaproveitar n vai funcionr, pois o ul escreveu mais uma vez por cima do objeto Dom

//forma certa
// Constructor Function Real
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
function Dom2(seletor){
  this.element = function(){ //criei um metodo
    return document.querySelector(seletor);
  };
  this.ativar = function(){ //criei um metodo pra atribuir classe ativado ao resultado de element
    this.element().classList.add("ativado");
  };
}

const li = new Dom2("li");
const ul = new Dom2("ul");
