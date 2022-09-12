function retornaFuncao(){
    const nome = 'andre';
    return function(){
        return nome;
    }
};

const funcao = retornaFuncao();
console.log(funcao);