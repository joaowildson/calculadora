let Tela = document.getElementById('area-calculo')
let btns = document.querySelectorAll('.btn')
let expressao = ""

btns.forEach((elements)=>{
    elements.addEventListener('click', teclas)
})


function teclas(e){
    let num = e.target.innerText
    if(num >= '0' && num <= '9') {
        Tela.innerHTML += num
        expressao += num
    }

    if(num == '+' || num == "-" || num == "*" || num == '/') {
        Tela.innerHTML += ` ${num} `
        expressao += num
    }

    if(num == 'AC') {
        Tela.innerHTML = ""
        expressao = ""
    }

    if (num == "=") {
        try {
            let resultado = eval(expressao);
            Tela.innerHTML = resultado;
            expressao = resultado.toString();
        } catch (err) {
            Tela.innerHTML = "Erro";
            expressao = "";
        }
    }
}