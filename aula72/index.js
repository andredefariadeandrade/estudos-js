const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    };

    set valocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 120 && valor <= 0) return;
        this[_velocidade] = valor;
    };

    get velocidade() { 
        return this[_velocidade];
    };

    acelerar(){
        if(this.velocidade >= 120) return;
        this[_velocidade]++;
    };

    frear(){    
        if(this[_velocidade] <= 0) return
        this[_velocidade]--;
    };
};

const car = new Carro('fusca');
for(let i = 0; i <=  200; i++) {
    car.acelerar();
    console.log(car);
};

console.log(car.velocidade);