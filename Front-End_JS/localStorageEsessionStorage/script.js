
//1- Inserir dados
localStorage.setItem("name","Irineu")//name é a chave irineu é o valor

//2- restar sem perder dados

//3- Resgatar dados sem perder dados

const teste = localStorage.getItem("name")
console.log(teste)

//4- Resgatar dados que não existe

const teste2 = localStorage.getItem("lastName")
console.log(teste2)

if(!teste2){
    console.log("Sem sobrenome")
}

//5- Remove Item

localStorage.removeItem("name")

//6- Limpar todos os items

localStorage.setItem("a", 1)
localStorage.setItem("b",2)

//console.log(typeof localStorage.getItem("a"))

localStorage.clear()//Apaga todos os dados do localStorage

//7- Salvar objeto no localStorage

const pessoa = {
    nome: "Irineu",
    sobrenome: "Silva",
    idade: 50,

}


localStorage.setItem("p1",JSON.stringify(pessoa))//Formato correto de salvar objeto no localStorage convertendo o objeto para o formato json

const testeP1 = localStorage.getItem("p1")

const objetoPessoa = JSON.parse(testeP1)//Tirando do formato json para imprimir no console

console.log(objetoPessoa)
console.log(typeof objetoPessoa)


//-------------------------------------------------------------------------------------------//-----------------------------------------------------
//SessionStorage
//A diferença do localStorage para o sessionStorage e que ao fechar o navegado o dado que estar em sessionStorage e apagado ja no localStorage não

sessionStorage.setItem("number",123)

//2- Reiniciar e perder dados

const n = sessionStorage.getItem("number")
console.log(n)

//3- Remove o item number
//sessionStorage.removeItem("number")

//4- Remove todos os items
//sessionStorage.clear()