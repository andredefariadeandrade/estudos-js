// const nomes = ['andre', 'lutty', 'rt']; 
const nomes = new Array('andre', 'lutty', 'rt');
console.log(nomes);

nomes[2] = 'joao';
console.log(nomes);

delete nomes[2];
console.log(nomes);

const novo = nomes;
novo.pop();
console.log(novo);

const novo1 = [...nomes]
novo1.pop();

console.log(nomes);
console.log(novo);
console.log(novo1);

console.log(nomes.length);
nomes.shift();
console.log(nomes);

nomes.push('deko');
console.log(nomes);

nomes.unshift('pedrinho', 'gabriel');
console.log(nomes);

const fatiar = nomes.slice(0, 2);
console.log(fatiar, nomes);

const meuNome = 'andre de faria';
const nomeMeu = meuNome.split(' ');
console.log(nomeMeu);

fullnome = nomeMeu.join(` `);
console.log(fullnome);