const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5];
const unicos = numbers.filter(number => number != number);
console.log(unicos);