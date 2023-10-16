var msgCookies = document.getElementById('cookies-msg')
var btn = document.getElementById('btn-aceito')

/*function aceito(){
    localStorage.lgpd = "sim"//localStorage e local onde sera armazenada o click da mensagem lgpd é nome da memoria "sim" é o nome do valor mais o valor pode ser qualquer nome
    msgCookies.classList.add('excluir')//mostrar o nome da classe a ser removida

}*/

btn.addEventListener("click", function(){
    localStorage.lgpd = "sim"
    msgCookies.classList.add('excluir')
})


if(localStorage.lgpd == 'sim'){
    msgCookies.classList.add('excluir')
}else{
    msgCookies.classList.remove('excluir')
}