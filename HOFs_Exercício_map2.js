const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 17 },
    { nome: "Pedro", idade: 30 }
  ];
const nomes = pessoas.map(usuario => usuario.nome);
console.log(nomes);
const idades = pessoas.map(usuario => usuario.idade);
console.log(idades);