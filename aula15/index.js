let num1 = 9.4324;

let num2 = Math.floor(num1); // arredondar para baixo
console.log(num2);

num2 = Math.ceil(num1); // arredondar para cima
console.log(num2);

num2 = Math.round(num1); // arredonda para o numero mais proximo "baixo ou cima"
console.log(num2);

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10292373, 1382, 11111, 182)); // busca o maior numero da sequencia
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10292373, 1382, 11111, 182)); // busca o menor numero da sequencia
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio); // gera numeros aleatórios
console.log(Math.PI);  // valor de PI
console.log(Math.pow(2, 10)); // potencia
console.log(num1 ** (1/2)); // raiz
console.log(100/0); // divisão por 0 = infinity
console.log(Number.isNaN(num1));