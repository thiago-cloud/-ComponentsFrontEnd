var btn = document.getElementById('btn-aceitar')
var cookiesMsg = document.getElementById('cookies-msg')

btn.addEventListener("click",function(){
    localStorage.lgpd = "sim"
    cookiesMsg.classList.add('esconder')
})


if(localStorage.lgpd == "sim"){
    cookiesMsg.classList.add('esconder')
}else{
    cookiesMsg.classList.remove('esconder')
}