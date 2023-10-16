function newButton(text,callback){
    
const corpo = document.querySelector('body')
const btn = document.createElement('button')

btn.textContent = text

callback(btn)

corpo.insertAdjacentElement('beforeend',btn)

return btn

}



newButton('Enviar',()=>{
    console.log("Ok clicado")
})


function newButton1(text,callback){

    const btn = document.createElement('button')
    btn.textContent = text
    const corpo = document.querySelector('body')
    corpo.insertAdjacentElement("beforeend",btn)

callback(btn)


return btn

}

newButton1("Entrar",(valor)=>{
    valor.style.cssText = `background-color:red;
    color:azure;
    width:150px;
    height:50px;
    border:none;
    border-radius:15px;
    font-size:20px;
    cursor:pointer;
    `
    
})
    
