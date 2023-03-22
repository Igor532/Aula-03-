const products = [
    { name: "apple", price: 0.99 },
    { name: "orange", price: 1.49 },
    { name: "banana", price: 0.49 },
    { name: "pear", price: 1.99 }
  ];
const maior = products.filter(product => product.price > 1.0);
console.log(maior);