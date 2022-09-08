                // 0    //1         //1
const alunos = ['andre', 'rafael', 'lutty'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = 'edu'; // substitui o item da posição 
console.log(alunos);

alunos[3] = 'deko'; // adiciona um item em posição que não tinha antes
console.log(alunos);

alunos[5] = 'bianca'; // adiciona um item no indice que foi pedido
console.log(alunos);

console.log(alunos.length)

alunos[alunos.length] = 'indiano'; // adiciona um item no fim da lista 
console.log(alunos);

alunos.push('rafito'); // adiciona no fim da lista
console.log(alunos);

alunos.unshift('pedrinho'); // adiciona o item no começo da lista empurrando os outros itens
console.log(alunos);

alunos.pop(); // remove o ultimo item da lista
console.log(alunos);

// podemos adicionar a função pop() para uma variavel e assim exibir o item removido 
// exemplo: 
console.log(alunos); // imprimindo array completo para ver o item a ser removido
const removido = alunos.pop(); // atribuindo a função pop para uma variavel
// devera remover o indice com nome de indiano 
console.log(removido); // deve imprimir o nome do item removido
console.log(alunos); // deve imprimir o array sem o item que foi removido (indiano)


alunos.shift(); // remove o primeiro item da lista
console.log(alunos);

// podemos adicionar a função shift() para uma variavel e assim exibir o item removido 
// exemplo: 
console.log(alunos); // imprimindo array completo para ver o item a ser removido
const removidoPrimeiro = alunos.shift(); // atribuindo a função shift para uma variavel
// devera remover o indice com nome de edu 
console.log(removidoPrimeiro); // deve imprimir o nome do item removido
console.log(alunos); // deve imprimir o array sem o item que foi removido (edu)

// [ 'rafael', 'lutty', 'deko', <1 empty item>, 'bianca' ]
console.log(alunos.length);
delete alunos[2] // deletar indices que estejam no meio do array
// deve deletar o 'deko' que esta no indice 2;
console.log(alunos.length);
console.log(alunos);


// fatiar o array em indices
alunos.push('vitor'); // adicionando itens
alunos.push('rt'); // adicionando itens
console.log(alunos);

// [ 'rafael', 'lutty', <2 empty items>, 'bianca', 'vitor', 'rt' ]
console.log(alunos.slice(0,3)); // deve retornar os nomes somente do indice 0 ATÉ o indide 3 ou seja (0, 1 e 2 == rafael, lutty e 1 empty)

// descobrindo o tipo do array
console.log(typeof alunos);

// para confirmar a afirmação de typeof
console.log(alunos instanceof Array); // true or false