var radio = document.querySelector('.manual-btn')
var cont = 1

//Eu quero que o primeiro input esteja marcado
document.getElementById('radio1').checked = true


//passara para outra imagem após 5 segundos
setInterval(() =>{
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }//Se cont for maior que 3 volte para a primeira imagem que e 1
    
    //Como a não existe esse id radio eu quero que cada vez que va para outra imagem fique radio1 que no caso e radio +cont
    document.getElementById('radio'+cont).checked = true

}