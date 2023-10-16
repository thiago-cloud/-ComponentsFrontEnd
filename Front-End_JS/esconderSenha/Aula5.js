function alternar(){
    var inputSenha = document.getElementById('senha')
    var btnSenha = document.getElementById('btn-senha')

    if(inputSenha.type === 'password'){
        inputSenha.setAttribute('type','text')
        btnSenha.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputSenha.setAttribute('type','password')
        btnSenha.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}