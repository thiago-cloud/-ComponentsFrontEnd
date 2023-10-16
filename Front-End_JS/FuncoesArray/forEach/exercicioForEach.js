Array.prototype.forEach3 = function(callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i],i,this)
    }
}

const pessoas = ['Irineu', 'Jurubeba','Xijinping']

pessoas.forEach3((nome,i,arrayCompleta)=> 
console.log(nome,i,arrayCompleta))