// define property

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // mostra o valor
        // writable: false, // permite sobrescrever o valor
        configurable: false, // permite configuras as chaves
        get: (() => {
            return estoque;
        }), 
        set: ((valor) => {
            console.log(valor)
        })
    });
};

const p1 = new Produto('camisa', 20, 3);
console.log(p1);
p1.estoque = 'oi';
console.log(p1.estoque);