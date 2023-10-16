/*Função de callback e uma função que estar aguardando um evento ou função ser acionado para pode funcionar*/
function newbtn1(text,callback){

    const corpo = document.querySelector('body')
    const btn1 = document.createElement('button')//Criando um elemento button
    
    btn1.textContent = text//Inserindo um texto através do parametro text
    
    callback(btn1)
    
    corpo.insertAdjacentElement("beforeend", btn1)//Inserindo o novo elemento button dentro do body no final do elemento(beforeend)
    
    return btn1

}

//Dentro da funcão newbtn1 temos dois parametros text e callback ao chamar a função foi colocado dois valores para o parametro "irineu" e uma arrowfunction
newbtn1("irineu", ()=>{
    console.log("Funcionou")
})



newbtn1("Button2",()=>{
    console.log("funcionando 2")
})

newbtn1("button3",(valor)=>{
    valor.style.cssText = `
    font-size: 50px;
    color:#fff;
    background-color:red;
    cursor:pointer;
    border-radius:15px;
    border:0;`
})




