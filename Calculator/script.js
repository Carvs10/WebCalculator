

// Função do visor, mostrando os números e operações
function display(digito)
{
    document.getElementById('visor').innerHTML += digito; 

}

function solucao(){
    
    let a = document.getElementById('visor').innerHTML
    let b = eval(a);
    document.getElementById('visor').innerHTML = b;
}

// Função de limpar
function ac_Button(){

    document.getElementById('visor').innerHTML = '';

}
