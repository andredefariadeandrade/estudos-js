// criando objetos literal
const pessoas = {
    // atributos:
    nome:'andre',
    sobrenome: 'faria',
    idade: 23
};
// imprimindo o valor dos atributos dentro dos objetos
console.log(pessoas.nome);
console.log(pessoas.sobrenome);
console.log(pessoas.idade);

// criando FUNÇÕES que criar OBJETOS

function criaPessoa (nome, sobrenome, idade){
    return {
// placeholder : valor do atributo
        name: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
// argumento = valor passado para o objeto
const pessoa1 = criaPessoa('andre', 'faria', 22);
const pessoa2 = criaPessoa('rafo', 'faria', 26);
const pessoa3 = criaPessoa('bia', 'faria', 29);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

const person = {
    nome: 'dekinho',
    sobrenome: 'deko',
    idade: 22,

    // criando metodos dentro dos objetos
    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

person.fala();
person.incrementaIdade();

person.fala();
person.incrementaIdade();

person.fala();
person.incrementaIdade();

person.fala();
person.incrementaIdade();