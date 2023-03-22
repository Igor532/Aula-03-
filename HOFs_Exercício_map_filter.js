const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero ** 2);
const final = quadrados.filter(quadrado => quadrado % 2 == 0);
console.log(final);