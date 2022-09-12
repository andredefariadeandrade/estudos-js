const nomes = ['andre', 'lutty', 'rt', 'papai'];

//          (indice, delete, add1, add2, add3...)

const removidos = nomes.splice(1, 0, 'poio', 'kito');
console.log(nomes, removidos);