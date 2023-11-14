function modificaEstilo(CordeFundo, largura, altura){
    console.log(CordeFundo, largura, altura)
    document.querySelector('#quadrado').style.backgroundColor = CordeFundo
    document.querySelector('#quadrado').style.width = largura
    document.querySelector('#quadrado').style.heigth = altura
}