//selecionando cada um dos icones
const menuItem = document.querySelectorAll('.item-menu')


function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
        )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)




//Acionaondo o botão menu e abrindo
const btnMenu = document.getElementById('btn-menu')
const menuLateral = document.getElementById('menu-lateral')


btnMenu.addEventListener("click", function(){
    menuLateral.classList.toggle('alternar')
})
