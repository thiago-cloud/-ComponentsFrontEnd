//Simulando meu proprio forEach
Array.prototype.forEach2 = function(callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i],i,this)
    }
}//Acabamos de criar um forEach na raiz do prototype no js

const animais = ['Macaco','Zebra','Cobra','Passaro','Galinha']


animais.forEach2((nome,indice)=>
    console.log(`${indice+1}) ${nome}`)
)




