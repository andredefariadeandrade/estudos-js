// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//             // rest ou spread
// const [um, , tres, , cinco, , sete, ...resto] = numeros;
// console.log(um, tres, cinco, sete);
// console.log(resto);

// array dentro de array
            //      0        1        2
            //    0 1 2    0 1 2    0 1 2
const numeros = [[1,2,3], [4,5,6], [7,8,9]]
const [lista1, lista2, lista3] = numeros;

console.log(lista1[0]);
console.log(lista2[1]);
console.log(lista3[2]);