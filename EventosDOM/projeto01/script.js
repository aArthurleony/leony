function verificarmulta(){
    const velocidade = document.querySelector('#velocidade').value
    const resultado = document.getElementById('resultado')

    if(velocidade <= 60){
        resultado.innerHTML = "Você não foi multado"
        resultado.className = "verde"
    }else{
        resultado.innerHTML = "você foi multado"
        resultado.className = "vermelho"

    }
}