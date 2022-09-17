const pessoas = {
    id: 3, nome: 'pessoa 3',
    id: 2, nome: 'pessoa 2',
    id: 1, nome: 'pessoa 1',
};

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoas});
};

console.log(novasPessoas);