const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 30 }
];
const formatados = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`);
console.log(formatados);