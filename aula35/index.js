// for in le os indices ou chaves dos objetos
const frutas = ['pera', 'maça', 'uva'];

for(let indice in frutas){
    console.log(frutas[indice]);
};

const pessoa = {
    nome: 'andre',
    sobrenoma: 'andrade',
    idade: 22
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

