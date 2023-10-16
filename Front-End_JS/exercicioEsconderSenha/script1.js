var inputSenha = document.getElementById('senha')
var btnIcon = document.getElementById('btn-olho')


function alternar(){

    if(inputSenha.type === 'password'){
        inputSenha.setAttribute('type','text')
        btnIcon.classList.replace('bi-eye-fill','bi-eye-slash')
    }else{
        inputSenha.setAttribute('type','password')
        btnIcon.classList.replace('bi-eye-slash','bi-eye-fill')
    }
}