const palavras = ["olá", "mundo", "!"];
const numeros = [1, 2, 3];
const palavra1 = palavras.every(palavra => typeof palavra === "string");
console.log(palavra1); 
const palavra2 = numeros.every(numero => typeof numero === "string");
console.log(palavra2);