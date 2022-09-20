class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrerenome = sobrenome;
    };

    falar(){
        return `${this.nome} está falando.`;
    };

    comer(){
        return `${this.nome} está comendo.`;
    };

    beber(){
        return `${this.nome} está bebendo.`;
    };
};

const p1 = new Pessoa('deko', 'faris');
console.log(p1.falar());