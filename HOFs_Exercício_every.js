const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7];
const pares = numerosPares.every(numero => numero % 2 == 0);
console.log(pares);
const impares = numerosImpares.every(numero => numero == 0);
console.log(impares);