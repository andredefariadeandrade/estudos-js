/**
 * FOR CLASSICO: (somente com interaveis, como array ou strings)
 * FOR IN: retorna o indice ou chave (string, arrau ou objetos)
 * FOR OF: retorna o valor em si (interaveis, arrays ou strings)
 */



const nomes = ['andre','de', 'faria'];

// PEGANDO O INDICE E O TAMANHO DA VARIAVEL
for(i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
console.log('==========');

// PEGANDO SOMENTE O INDICE
for(let i in nomes){
    console.log(nomes[i]);
}
console.log('==========');

// PEGANDO SOMENTE O VALOR
for(let valor of nomes){
    console.log(valor);
}
console.log('==========');

// PEGANDO UM DE CADA VEZ *separadamente*
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});



// FOR PARA OBJETOS
const pessoa = {
    nome: 'andre',
    sobrenome: 'andrade'
};

// pegando o indice da chave
for(let chave in pessoa){
    // imprimindo o indice (nome da chave) e o valor de pessoa no indice da chave
    console.log(chave, pessoa[chave]);
};
