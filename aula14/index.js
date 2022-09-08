let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);
console.log(num1.toString() + num2); // CONCATENAR 
console.log(typeof num1); // DESCOBRIR O TIPO
num1 = num1.toString(); // TRANSFORMAR PARA STRING
console.log(typeof num1);
num1 = 10.8972;
console.log(num1.toFixed(2)) // ARRENDONDAR E FIXAR NUMERO DE CASAS DECIMAIS
console.log(Number.isInteger(num1)); // RETORNA TRUE OU FALSE SE O NUMERO FOR INTEIRO
let temp = num1 * 'ola'
console.log(temp);
console.log(Number.isNaN(temp)); // VERIFICA SE A VARIAVEL É NOT-A-NUMBER E RETORNA TRUE OU FALSE
