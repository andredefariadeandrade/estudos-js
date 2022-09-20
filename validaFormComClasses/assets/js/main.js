class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    };

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubbmit(e);
        });
    };

    handleSubbmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
           alert( `formulario enviado com sucesso `);
           this.formulario.submit();
        };
    };

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repeteSenha = this.formulario.querySelector('.repete-senha');

        if(senha.value !== repeteSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
            this.criaErro(repeteSenha, 'Campos senha e repetir senha precisar ser iguais.');
    };

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, `campo senha precisa ser maior que 3 e menor que 12 caracteres`);
    };
       return valid;
    };

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        };

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;

            if(!campo.value) {
                this.criaErro(campo, `o campo ${ label } não pode ser null`);
                valid = false;
            };

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            };

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            };
        };

        return valid;
    };

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, `usuario precisa ser maior que 3 e menor que 12`); 
            valid = false;
        };
        
        if(!usuario.match(/^[a-zA-AZ0-9]+$/g)){
            this.criaErro(campo, `usuario precisa conter apenas letras ou numeros`);
        };

        return valid = true;
    };

    validaCpf(campo) {
        const cpf = new Validacpf(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, ` cpf é invalido`);
        };

        return true;
    };

    criaErro(campo, message) { 
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);
    };
};

const valida = new ValidaFormulario();
console.log('valida');