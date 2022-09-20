function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('msg must be a string'));
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    }); 
};

esperaAi('oi, eu sou', aleatorio(1000, 9000))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(' andre de faria  ', aleatorio(1000, 9000));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, aleatorio(1000, 9000));
    })
    .then(() => {
        console.log( '    de andrade');
    })    
    .catch(e => {
        console.log('erro valor numerico não permitido... ' + e);
    });