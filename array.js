// let nome = "Felipe"
// array [] colchete
//let frutas = ['maça', 'banana', 'uva']
//console.log(fruta[0])

let feiraMercado = [
  "farofa",
  "tomate",
  "pimenta",
  "batata",
  "cuzcuz",
  "bolacha",
  "picanha",
  "couve",
  "laranja",
];

//acessar array
console.log(feiraMercado[2]);

console.clear();

let nomeDosAlunos = ["Anna", "Carlos", "Geovane", "Silvia"];

//incluir mais itens no final do array:

nomeDosAlunos.push("Gabrielle");

console.log(nomeDosAlunos);
console.clear();
//inclui mais itens no inicio do array:

nomeDosAlunos.unshift("Julia");
console.log(nomeDosAlunos);

// retira item do inicio do array

nomeDosAlunos.shift();
nomeDosAlunos.pop();
console.log(nomeDosAlunos);

console.clear();
let frutas = ["uva", "abacaxi", "goiaba"];
//splice() - remove, substitui, adiciona.
//splice(indice, item deletado/0, elemento a ser adicionado)

frutas.splice(1, 2);
console.log(frutas);
