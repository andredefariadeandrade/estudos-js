function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está falando sobre: ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        
    };
};

const p1 = criaPessoa('andre', 'faria', 1.75, 90);
// console.log(p1.fala('javascript'));
console.log(p1.imc);
console.log(p1.nomeCompleto);