pessoa = {
    nome: 'deko',
    sobrenome: 'faria',
    idade: 22,
    endereco: {
        rua: 'alegria',
        numero: 25
    }
};
console.log(pessoa);

// desestruturar objeto
// retirar as propriedades nome, sobrenome e idade do objeto pessoa
// podemos setar manualmente o valor caso nao exista
const { sobrenome, idade } = pessoa;
console.log(sobrenome, idade);

const { endereco: {rua, numero}, endereco } = pessoa;
console.log(rua); 
console.log(numero); 
console.log(endereco); 

const {nome, ...resto} = pessoa;
console.log(resto)