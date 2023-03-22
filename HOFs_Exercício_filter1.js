const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 30 }
];
const adultos = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(adultos);
