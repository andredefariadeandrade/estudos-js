// função construtora
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
};

Pessoa.prototype.nomeCompleto = (() => {
    return this.nome + ' ' + this.sobrenome; 
});

// instanciando
const pessoa1 = new Pessoa('luiz', 'O');
const pessoa2 = new Pessoa('André', 'F');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);