function aleatorio(min, max){
    min *= 1000; 
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('cai no error');
                return;
            };

        resolve(msg)
            return;
        }, tempo);
    }); 
};

// promise.all -- promise.race -- promise.resolve -- promise.reject
// const promises  = [
//     esperaAi('segundo valor', aleatorio(1, 9)),
//     esperaAi('terceiro valor', aleatorio(1, 9)),
//     esperaAi(111, aleatorio(1, 9)),
//     esperaAi('quarto valor', aleatorio(1, 9))
// ];

// Promise.all(promises)
// .then(function (valor) {
//     console.log(valor);
// })
// .catch(function (err) {
//     console.log(err);
// });

// Promise.race(promises)
// .then(function (valor) {
//     console.log(valor);
// })
// .catch(function (err) {
//     console.log(err);
// });

function baixaPagina(){
    const emCache = true;

    if(emCache) {
        // resolve cai no then -- reject cai no catch
        return Promise.resolve('pagina em cache');
    } else {
        return esperaAi('baixando', aleatorio(1, 9));
    };
};

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(err => console.log('erro  ' + err));