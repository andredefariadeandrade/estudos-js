const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor) => {
    return valor * 2;
});

console.log(dobro);

const pessoas = [
    {nome: 'deko', idade: 22},
    {nome: 'mamae', idade: 23},
    {nome: 'mariana', idade: 55},
    {nome: 'isabela', idade: 19},
    {nome: 'rafael', idade: 32},
    {nome: 'poiokito', idade: 47},
    {nome: 2, idade: 22}
]

const nomeString = pessoas.map((valor) => {
    return valor.nome.toString();
});
console.log(nomeString);

const idades = pessoas.map((valor) => {
    delete valor.nome;
    return valor
})
console.log(idades);

const id = pessoas.map((valor, indice) => {
    valor.id = indice;
    return valor;
});
console.log(id);