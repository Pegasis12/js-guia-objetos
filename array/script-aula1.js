const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const pizza = comidas.shift();
console.log(comidas);
// Remova o último valor de comidas e coloque em uma variável
const Macarrão = comidas.pop();
console.log(comidas);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
