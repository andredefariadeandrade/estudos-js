// capturar o evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // const imc chama a função getImc que recebe as consts peso e altura (faz a conta) e armazena na variavel imc
    const imc = getImc(peso, altura);
    // const nivelImc chama a função getNivelImc que recebe a variavel imc passada acima e armazena seu retorna na variavel nivelImc
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é: ${imc} e seu estado é: ${nivelImc}. `
    setResultado(msg, true)
});

function getNivelImc(imc){
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obedsidade grau 2', 'obesidade grau 3'];
    
    if(imc >= 39.9){
        return nivel[5]
    }
    if(imc >= 34.9){
        return nivel[4]
    }
    if(imc >= 29.9){
        return nivel[3]
    }
    if(imc >= 24.9){
        return nivel[2]
    }
    if(imc >= 18.5){
        return nivel[1]
    }
    if(imc <18.5){
        return nivel[0]
    }
}

function getImc(peso, altura){
    const imc = peso / (altura * altura) 
    return imc.toFixed(2);
}

function criaParagrafo(className) {
    const p = document.createElement('p');
    return p;
}

// função que vai pegar o valor do id resultado e vai passar uma mensagem como parametro
function setResultado(msg, isValid) {
    // passando o valor atual da DIV para a variavel resultado
    const resultado = document.querySelector('#resultado');
    // inserindo o valor da variavel msg dentro do campo resultado
    resultado.innerHTML += ` `;
    
    const p = criaParagrafo();

    if(isValid) {
        p.classList.add('paragrafo-resultado')
}   else {
        p.classList.add('bad')
}

    p.innerHTML = msg;
    resultado.appendChild(p);
}