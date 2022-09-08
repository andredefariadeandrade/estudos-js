function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser do tipo numérico.')
    }

    return x + y;
}

try{
    console.log(soma(2, 3));
    console.log(soma('2', 3));
} catch(error){
    console.log('alguma coisa amigavel');
}
