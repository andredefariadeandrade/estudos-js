const nome = ' André ';
const sobrenome = ' Faria ';
const idade = 22;
const peso = 86;
const altura = 1.75;

let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(parseInt(imc));
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, nasceu em ${anoNascimento} e pesa ${peso} kg.
Sua altura é de ${altura} e seu IMC é de ${parseInt(imc)}`);