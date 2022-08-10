/*
    Primitivos = string, number, boolean, undefined, null => valores copiados
    
    Referencias = array - object -  function => passados por referencias 
*/

// ex primitivos (mesmo alterando o valor de a, b continua imutavel pois é uma copia e não apontam para o mesmo lugar na memoria)
let a = 'andré'
let b = a;
console.log(a, b);
a = 'deko';
console.log(a, b);

// ex referencia (alterando o valor de a, b também e alterado pois apontam para o mesmo lugar na memoria)
let array1 = [1, 2, 3];
let array2 = array1;
console.log(array1, array2);

array1.push(2)
console.log(array1, array2);

// os dois arrays foram alterados porque apontam para a mesma variavel na memoria.

// para copiar um ARRAY literalmente:
let copia1 = [123, 456, 789];
let copia2 = [...copia1];
console.log(copia1, copia2);

copia2.push(000);
// o valor do push() sera adicionado somente na variavel copia 2 pois nao apontam para a mesma variavel na memoria.
console.log(copia1, copia2)

// para copiar um OBJETO literalmente:
let obj1 = {
    nome: 'deko',
    sobrenome: 'faria'
};
let obj2 = obj1;
console.log(obj1, obj2);

obj2 = {...obj1}
obj2.nome = 'poio';
// o valor nome sera alterado somente na variavel obj2 pois nao apontam para a mesma variavel na memoria.
console.log(obj1, obj2);