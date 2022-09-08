const fizBuzz = (numero) => {
    if(typeof numero !== 'number')
    return numero;

    if(numero % 3 === 0 && numero % 5 === 0){
        return 'fizz buzz'
    } else if(numero % 3 === 0) {
        return 'fizz'
    } else if(numero % 5 === 0) {
        return 'buzz'
    } else {
        return numero;
    }
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizBuzz(i));
}