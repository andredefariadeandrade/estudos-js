function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
};
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Agencia ${this.agencia} Conta: ${this.conta} Saldo: R$:${this.saldo.toFixed(2)}`);
};
// const conta = new Conta(12, 204331, 100);
// console.log(conta);

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();
console.log('================================');
console.log();

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(110);
cp.sacar(110);
cp.sacar(1);
