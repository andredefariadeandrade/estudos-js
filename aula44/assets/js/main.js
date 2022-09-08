const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startClock(){
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getSeconds(segundos);
    }, 1000);
};

function getSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};

iniciar.addEventListener('click', () => {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startClock();
});  

pausar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.classList.add('pausado');
}); 

zerar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}); 