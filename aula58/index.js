// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const totalNumeros = numeros.reduce((acum, valor, indice, array) => {
//     acum = acum + valor;
//     return acum;
// }, 0);

// console.log(totalNumeros);

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const totalNumeros = numeros.reduce((acum, valor, indice, array) => {
//     if(valor % 8 === 0){
//         acum.push(valor);
//     }
//     return acum;
// }, []);

// console.log(totalNumeros);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalNumeros = numeros.reduce((acum, valor, indice, array) => {
    acum.push(valor * 2);
    return acum;
}, []);

console.log(totalNumeros);

const pessoas = [
    {nome: 'deko', idade: 22},
    {nome: 'mamae', idade: 23},
    {nome: 'mariana', idade: 55},
    {nome: 'isabela', idade: 19},
    {nome: 'rafael', idade: 62},
    {nome: 'poiokito', idade: 47},
    {nome: 2, idade: 22}
]

const maisVelha = pessoas.reduce((acum, valor) => {
    if(acum.idade > valor.idade) {
    return acum;
    } else {
        return valor;
    }

});

console.log(maisVelha);