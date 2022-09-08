// funções

// criando função de SAUDAÇÃO e passanod um parametro a ela
function saudacao(nome){
    return `bom dia ${nome}`; // definindo a mensagem de retorno da função
}

const valor = saudacao('andre'); // chamando a função pra ser executada e adicionando seu valor a uma variavel
console.log(valor); // imprimindo o valor salvo na variavel


// criando função soma passando dois parametros
function soma(x, y){
    const resultado = x + y // armazendo o result na variavel resultado
    return resultado; // retornando o valor salvo na variavel resultado
}

const resultado = soma(2, 2); // chamando a função
// step1 a função vai ler os parametros (2 e 2)
// step2 a função vai armazenar o resultado na varivael resultado
// step 3 a função vai retornar o valor armazendo na função resultado
console.log(resultado); // vai exibir o valor armazenado na variavel resultado

// função anonima que retorna a raiz quadrada
const raizQuadrada = function (x){
    return x ** 0.5
};

console.log(raizQuadrada(9));                   
console.log(raizQuadrada(144));
console.log(raizQuadrada(81));

// função calcular raiz anonima ARROW FUNCTION

const raiz = x => {
    return x ** 0.5
}

console.log(raizQuadrada(16));                   
console.log(raizQuadrada(25));
console.log(raizQuadrada(36));