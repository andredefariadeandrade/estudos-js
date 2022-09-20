class DisposittivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`)
            return;
        };

        this.ligado = true;
    };

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        };

        this.ligado = false;
    };
};

const disposittivoEletronico = new DisposittivoEletronico('samsung');
console.log(disposittivoEletronico);

console.log();

class Celular extends DisposittivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

            this.cor = cor;
            this.modelo = modelo;
    };
};

const iphone = new Celular('iphone', 'vermelho', '14 pro max');
console.log(iphone);