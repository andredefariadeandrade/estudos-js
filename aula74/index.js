class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };

    aumentarVolume() {
        this.volume += 2;
    };

    diminuirVolume() {
        this.volume -= 2;
    };

    static trocaPilha(){
        console.log("hora de trocar a Pilha");
    };
};

const controle1 = new ControleRemoto('lg');
controle1.aumentarVolume();
console.log(controle1);
console.log();
ControleRemoto.trocaPilha();
