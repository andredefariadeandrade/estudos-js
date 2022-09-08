// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaDaSemana) {

//     let diaSemanaTexto;
//     switch (diaDaSemana) {
//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sabado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'data inexistente';
//     }
// }

// function getNomeMes(numeroMes) {

//     let nomeMes;
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'dezembro';
//             return nomeMes;
//     }
// }

// function zeroEsquerda(num){
//     // se numero for maior ou igual a 10, retorna só o numero, se não, adciona um 0 mais o numero
//     // ex: 01, 02, 03, 04, 05, 06, 07, 08, 09 ... 10, 11, 12
//     return num >= 10 ? num : `0${num}`
// }

// function criaData(data){
//     const diaSemana = data.getDay();
//     // retorna um numero que sera jogado na variavel dia de semana que sera passado como parametro para função e entrará no switch devolvendo o valor correspondente
//     const numeroMes = data.getMonth();
//     // retorna um numero que sera jogado na variavel dia de semana que sera passado como parametro para função e entrará no switch devolvendo o valor correspondente

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     // variavel nomeDia recebe o valor retornado do switch
//     const nomeMes = getNomeMes(numeroMes);
//     // variavel nomeMes recebe o valor retornado do switch

//    return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//     `de ${data.getFullYear()} ` + 
//     `${zeroEsquerda(data.getHours())} : ${zeroEsquerda(data.getMinutes())}`
//    );

// }

// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
const locale = 'pt-br';
const option = {
    year: 'numeric',
    month: ('long'),
    weekday: ('long'),
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
}

h1.innerHTML = data.toLocaleDateString(locale, option);

