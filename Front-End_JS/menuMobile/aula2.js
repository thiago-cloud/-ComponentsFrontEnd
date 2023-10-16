
const menuMobile = document.getElementById('menu-mobile')
const btn = document.getElementById('btn-menu')
const clickFora = document.getElementById('menu-mobile')

function animar(){
    btn.classList.toggle('ativar');
    
}

clickFora.addEventListener("click", function(){
    menuMobile.classList.add('esconder')
})
if(clickFora == true){
    btn == false
}else{
    btn == true
}


btn.addEventListener('click',function(){
    menuMobile.classList.toggle('abrir')
})
