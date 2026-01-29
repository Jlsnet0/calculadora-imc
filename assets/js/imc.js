function calculoIMC(){
    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const inputPeso = event.target.querySelector("#peso");
        const inputAltura = event.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso){
            setResultado("Peso inválido", false);
            return;
        }

        if(!altura){
            setResultado("Altura inválida", false);
            return;
        }

        const imc= getImc(peso, altura);
        const faixa = faixaImc(imc);
        const mensagemResultado = `Seu IMC é ${imc} (${faixa})`;
        setResultado(mensagemResultado, true)
    });

    function faixaImc(imc){
        const faixa = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obsidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return faixa[5];
        if (imc >= 34.9) return faixa[4];    
        if (imc >= 29.9) return faixa[3];       
        if (imc >= 24.9) return faixa[2];        
        if (imc >= 18.5) return faixa[1];      
        if (imc < 18.5) return faixa[0];        
    }

    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function inserirParagrafo(){
        const paragrafo = document.createElement('p');
        return paragrafo;
    }


    function setResultado(mensagem, isValid){
        const resultado = document.querySelector(".resultado");
        resultado.innerHTML = '';
        const p = inserirParagrafo();

        if (isValid){
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('resultado-invalido')
        }
        p.innerHTML = mensagem;
        resultado.appendChild(p)
    }
}

calculoIMC();