function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new Error('esperando instance of date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try{
    const data = new Date('08-10-1999 08:45:23');
    const hora = retornaHora();
    console.log(data);
} catch(e){
    console.log(e)
    console.log('deu ruim mermão');
} finally {
    console.log('tenha um bom dia');
}