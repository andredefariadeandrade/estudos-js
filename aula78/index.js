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

// esperaAi('fase 1', aleatorio(1, 6))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('fase 2', aleatorio(2, 6));
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('fase 3', aleatorio(3, 6));
//     })
//     .then(parte => {
//         console.log(parte)
//         return parte;
//     })
//     .catch(e => {
//         console.log(e);
//     });

async function executa(){
    try {
                    // pendente -- resolvida -- rejeitada
        const fase1 = await esperaAi('fase 1', aleatorio(1, 6));
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', aleatorio(1, 6));
        console.log(fase2);

        const fase3 = await esperaAi(1, aleatorio(1, 6));
        console.log(fase3);

        console.log('fim');

    } catch(e) {
        console.log(e);
    };
};
executa();
