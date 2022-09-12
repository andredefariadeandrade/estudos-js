// declaração de função (hoisting)

function falaOi() {
    console.log('oi');
};
falaOi();

const souUmDado = function() {
    console.log('sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(falaOi);

const arrow = () => {
    console.log('arrow');
};
arrow();

const obj = {
    falar: function() {
        console.log('falar');
    }
};

obj.falar();