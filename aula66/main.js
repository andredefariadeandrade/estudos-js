function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = (function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
});

Produto.prototype.aumenta = (function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
});

const p1 = new Produto('camisa', 100);
console.log(p1);
p1.aumenta(100);
console.log(p1);

const p2 = {
    nome: 'caneca',
    preco: 12
};

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
p2.aumenta(100);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.nome = 'celular';
p3.preco = 1000;
console.log(p3);
p3.desconto(10);
console.log(p3);