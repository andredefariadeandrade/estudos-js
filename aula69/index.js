function CriaPessoa(nome, sobrenome){
    
    const pessoaPrototype = {

    falar(){
        console.log(`${this.nome} ${this.sobrenome} está falando.`);
    },
    comer(){
        console.log(`${this.nome} ${this.sobrenome} está comendo.`);
    },
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
    }
};

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = CriaPessoa('andre', 'faria');
console.log(p1);
console.log(p1.falar());
console.log(p1.comer());
console.log(p1.beber());

const p2 = CriaPessoa('deko', 'faria');
console.log(p2);
console.log(p2.falar());
console.log(p2.comer());
console.log(p2.beber());