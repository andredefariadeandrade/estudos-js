const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){

    if(numero === 2){
        console.log('pulei o num 2');
        continue;
    }

    console.log(numero);

    if(numero ===7){
        console.log('encontramos o 7');
        break;
    }
};