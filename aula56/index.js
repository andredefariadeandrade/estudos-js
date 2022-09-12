// filter

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => {
    console.log(valor);
    return valor > 10;
});

console.log(numerosFiltrados);

const pessoasNomes = [
    {nome: 'andre', idade: 22},
    {nome: 'rafa', idade: 42},
    {nome: 'deko', idade: 32},
    {nome: 'amora', idade: 55},
    {nome: 'papai', idade: 44},
    {nome: 'mamae', idade: 64},
];

const pessoasNomesGrandes = pessoasNomes.filter((valor) => {
    console.log(valor);
    if(valor.nome.length > 4){
        return valor;
    }
});

console.log(pessoasNomesGrandes);

const pessoasIdade = pessoasNomes.filter((valor) => {
    console.log(valor);
    if(valor.idade > 42){
        return valor;
    }
});

console.log(pessoasIdade);

const nomesTerminadosEmA =  pessoasNomes.filter((valor) => {
    if(valor.nome.toLowerCase().endsWith('a')){
        return valor;
    }
});

console.log(nomesTerminadosEmA);

const numerosTotais = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalNumeros = numeros.filter((valor) => {
    if(valor % 2 === 0){
        return valor
    }

});

console.log(totalNumeros);