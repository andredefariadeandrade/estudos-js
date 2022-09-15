const pessoa = new Object();

pessoa.nome = 'andre';
pessoa.sobrenome = 'andrade';
pessoa.idade = 22;

pessoa.getDataNascimento = (function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
});

console.log(pessoa.getDataNascimento());

for(let chave in pessoa){
    console.log(pessoa[chave]);
};