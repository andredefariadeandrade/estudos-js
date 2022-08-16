// // const tresHoras = 60 * 60 * 3 * 100;
// // const data = new Date(0 + tresHoras); // timestamp unix 01/01/1970
// // const data = new Date(2019, 3, 20, 15, 14, 26, 500); // mes começa no indice 0
// // console.log(data.toISOString());

// const data = new Date('2022-08-13 12:45:32');

// console.log('dia', data.getDate());
// console.log('mês', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('minuto', data.getMinutes());
// console.log('segundos', data.getSeconds());
// console.log('milesegundos', data.getMilliseconds());
// console.log('dia da semana', data.getDay()); // dom[0], seg[1], ter[2], qua[3], qui[4], sex[5], sab[6]
// console.log(data.toString());
// console.log(Date.now());

function zeroEsquerda(num){
    // se numero for maior ou igual a 10, retorna só o numero, se não, adciona um 0 mais o numero
    // ex: 01, 02, 03, 04, 05, 06, 07, 08, 09 ... 10, 11, 12
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return `${dia} / ${mes} / ${ano} / ${hora} : ${minutos} : ${segundos} `;
}

const data = new Date();
const dataPortugal = formataData(data);
console.log(dataPortugal);


// function felizAniversarioWill(){
//     console.log('feliz aniversario my friend! te desejo tudo de bom e de melhor sempre! conte sempre comigo e com minha amizade! umforte abraço!!')
// }

// felizAniversarioWill()