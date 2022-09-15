// 480.651.488-83
// pegar os 9 primeiros digitos para descobrir os dois ultimos

// 4    8   0   6   5   1   4   8   8   
// 10   9   8   7   6   5   4   3   2   
// =====================================
// 40  72   0   42  30  5  16  24  16  === 245

// o 10 digito é: total de digitos do cpf(11) menos (total da soma dividido por modulo 11) => 11 - (245 % 11) == 8
// depois fazer a mesma conta incluindo o digito encontrado e começando do 11

// 4    8    0   6   5   1   4   8   8   8
// 11   10   9   8   7   6   5   4   3   2
// ==========================================
// 44   80   0  48  35   6   20  32  24  16 === 305
// console.log(11 - (245 % 11)); // 8
// console.log(11 - (305 % 11)); // 3

// se o cpf que sair === entrou === verdadeiro

let cpf = '480.651.488-83';
let cpfFormater = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfFormater);
console.log(cpfArray.reduce((ac, valor) => ac + Number(valor), 0 ));
