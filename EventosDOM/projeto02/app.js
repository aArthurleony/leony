const inNome = document.getElementById('inNome')
const rbMasculino = document.getElementById('rbMasculino')
const rbFeminino = document.getElementById('rbFeminino')
const inAltura = document.getElementById('inAltura')
const outResposta = document.getElementById('outResposta')

const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', function(){
    let Nome = inNome.value
    let Masculino = rbMasculino.checked
    let Feminino = rbFeminino.checked
    let Altura = Number(inAltura.value)

if(Nome === '' || (Masculino === false && Feminino === false)){
    alert('por favor, informe seu nome')
    inNome.focus()
    return
}
if(Altura <=0 || isNaN(Altura)){
    alert('POR FAVOR, A SUA ALTURA')
    inAltura.focus()
    return
}
let peso
if(Masculino){
    peso = 22 * Math.pow(Altura, 2)
}else if(Feminino){
    peso = 21 * Math.pow(Altura, 2)
}
//atribuir texto de 3 maneiras
//innerHTML
//innerText
//TextContent
outResposta.textContent = ("seu peso ideal é "+(peso.toFixed(2))+"Kg")
})
btnLimpar.addEventListener('click', function(){
    location.reload()
})


