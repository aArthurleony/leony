let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    //adiciona o evento (click) e o comportamento
    btn.addEventListener('click', function(){
        const style = event.currentTarget.classList
        if(style.contains('decrease')){
            count--
        }
        else if(style.contains('reset')){
            count = 0
        }
        else if(style.contains('increase')){
            count++
        }
        value.textContent = count

        // mudar a cor do número quando positivo, negativo e 0
        if(count >= 1){
            document.getElementById('value').style.color = 'hsl(125, 67%, 44%)'
        }
        if(count == 0){
            document.getElementById('value').style.color = 'hsl(205, 86%, 17%)'
        }
        if(count < 0){
            document.getElementById('value').style.color = 'hsl(360, 67%, 44%)'
        }
        if(count >= 30){
            value.className = 'gradiente'
        }else{
            value.className = ' '
        }

    })
})
function darkMode (){
    const pagina = document.body
    pagina.classList.toggle("dark-mode")
}
