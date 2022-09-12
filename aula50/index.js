function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.cointains('btn-num')) this.addNumDisplay(el);
            if(el.classList.cointains('btn-num')) this.clear(el);
            if(el.classList.cointains('btn-num')) this.del(el);
            if(el.classList.cointains('btn-num')) this.realizaConta(el);

        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = conta;

        } catch(e) {
            alert('conta invalida');
            return;
        }
    }


    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    }

    this.clear = () => {
        this.display.value = '';
    }

    this.inicia = () => {
        this.capturaCliques();
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    }
};

const calculadora = new Calculadora();
calculadora.inicia();