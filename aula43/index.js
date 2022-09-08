function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function mostraHoraIntervalo(){
//     console.log(mostraHora());
// }
// setInterval(mostraHoraIntervalo, 5000);

const timer = setInterval(function(){
    console.log(mostraHora());
}, 2000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);

setTimeout(function(){
    console.log('ola mundo');
}, 5000);