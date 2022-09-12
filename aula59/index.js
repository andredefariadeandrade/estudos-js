const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter((valor) => {
    if(valor % 2 === 0){
        return valor;
    }
})
.map((valor) => {
    return valor * 2
})
.reduce((acum, valor) => {
    console.log(acum);
    return acum + valor;
});

// filter => [ 50, 80, 2, 8, 22 ] 
// map => [ 100, 160, 4, 16, 44 ]
// reduce => 324
console.log(numerosPares);