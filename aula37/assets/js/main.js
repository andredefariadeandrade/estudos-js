const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')
// paragrafos.innerHTML = 'VC CONSEGUIU';

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
};