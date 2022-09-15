function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumenta = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.material = material;

    Object.defineProperties(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('lapis', 2)
const camiseta = new Camiseta('regata', 10, 'preta');
const caneca = new Caneca('caneca', 25, 'preta', 'ceramica', 7);

console.log(produto);
console.log(camiseta);
console.log(caneca);
