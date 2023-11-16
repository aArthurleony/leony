let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

// console.log(value)
// console.log(btns)

btns.forEach(function(btn){
    
    btn.addEventListener('click', function(){
        const style = event.currentTarget.classList
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('reset')){
            count = 0;
        }else if(style.contains('increase')){
            count++;
        }
            
        value.textContent = count

    })

})