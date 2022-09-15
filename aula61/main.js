// factory functions
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome};`
        }
    };
};

const pessoa1 = criaPessoa('andre', 'andrade');
console.log(pessoa1.nomeCompleto);

console.log('===========================================')

// constructor functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const pessoa2 = new Pessoa(`DEKO`, `FARIA`);
console.log(pessoa2);