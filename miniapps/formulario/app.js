function validaformulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    
    /*
    validação dos campos preenchidos
    */

    if(nome == "" || email == "" || senha == ""){
        alert("Por favor, preencha os campos")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            alert("Por favor, insira um e-mail válido!")
            return
    } 
    //validação da senha
    if(senha.length > 8){
        alert("Limite de carácteres excedido!")
        return
    }
     
}
