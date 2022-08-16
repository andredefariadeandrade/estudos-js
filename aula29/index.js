function getDiaSemanaTexto(diaDaSemana){

    let diaSemanaTexto;
    switch(diaDaSemana){
        case 0: 
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'terça';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'data inexistente';
        }        
}
const data = new Date('1999-10-14');
const diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);

console.log(diaDaSemana, diaSemanaTexto);

// if(diaDaSemana === 0){
//     console.log('domingo');
// } else if (diaDaSemana === 1){
//     console.log('segunda')
// } else if (diaDaSemana === 2){
//     console.log('terça')
// } else if (diaDaSemana === 3){
//     console.log('quarta')
// } else if (diaDaSemana === 4){
//     console.log('quinta')
// } else if (diaDaSemana === 5){
//     console.log('sexta')
// } else if (diaDaSemana === 6){
//     console.log('sabado')
// } else {
//     console.log('dia inexistente')
// }

// const data = new Date();
// console.log(data);