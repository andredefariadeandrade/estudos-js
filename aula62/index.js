// define property

function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor
        writable: false, // permite sobrescrever o valor
        configurable: false // permite configuras as chaves
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // mostra o valor
            writable: true, // permite sobrescrever o valor
            configurable: true // permite configuras as chaves
        },
        preco: {
            enumerable: false, // mostra a chave
            value: preco, // mostra o valor
            writable: true, // permite sobrescrever o valor
            configurable: true // permite configuras as chaves
        }
    });
};

const p1 = new Produto('camisa', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
};