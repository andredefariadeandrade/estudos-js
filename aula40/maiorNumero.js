// escreva uma função que recebe 2 numeros e retorne o maior deles

/* function maiorNumero(x, y){
    if(x > y){
        return `${x}`
    } else {
        return `${y}`
    }
} */

function maiorNumero(x, y){
    // se x maior que y ?então? retorna x :senão retorna y
    return x > y ? x : y;
}
console.log(maiorNumero(22, 213));

const max = (x, y) => {
    return x > y ? x : y;
}
console.log(max(34, 43));