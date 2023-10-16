const pessoa = { 
    nome: "irineu",
    saudacoes: "Bom dia amigo",
    falar(){
            console.log(this.saudacoes)
    }

}
// Aki ira funcionar porque declaramos o proprio objeto pessoa
pessoa.falar()

//Não funcionara mostrara undefined porque o qualquer teria que estar vinculado ao objeto pessoa e para isso existe a função bind para vincular ou seja apontar ao que a variavel se referencia
const qualquer = pessoa.falar
qualquer()

// funcionara o bind se referencia ao this ou seja ao objeto pessoa
const teste = pessoa.falar.bind(pessoa)
teste()

//A função bind tem a função de fazer referencia a um determinado objeto ou variavel

