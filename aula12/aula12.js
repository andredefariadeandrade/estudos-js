let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a

// CRIANDO VARIAVEL AUXILIAR
variavelAuxiliar = varA;
varA = varB
varB = varC;
varC = variavelAuxiliar;
console.log(varA, varB, varC);

// ANOTHER WAY TO DO -> REPLACE
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
