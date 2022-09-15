const produto = {nome: 'caneca', preco: 1.8};

const caneca = { 
    ...produto,
    material: 'porcelana',
    logo: 'customizado'
}

console.log(produto);
console.log(caneca);

caneca.nome = 'deko';
console.log(caneca);