const numero = Number(prompt('digite um numero: '));

numeroTitulo.innerHTML = numero;

texto.innerHTML = ' ';
texto.innerHTML += `<p>A raiz quadrade do seu numero é: ${numero ** 0.5} </p>`
texto.innerHTML += `<p>Seu numero é inteiro? ${Number.isInteger(numero)}  </p>`// true ou false
texto.innerHTML += `<p>Seu numero é NAN?  ${Number.isNaN(numero)} </p>`// true ou false
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)} </p>`

// numeroTitulo.innerHTML = numero;

// const numeroTitulo = window.document.getElementById('numero-titulo');
// const raiz = window.document.getElementById('raiz');
// const inteiro = window.document.getElementById('inteiro');
// const nan = window.document.getElementById('nan');
// const baixo = window.document.getElementById('baixo');
// const cima = window.document.getElementById('cima');
// const decimais = window.document.getElementById('decimais');
