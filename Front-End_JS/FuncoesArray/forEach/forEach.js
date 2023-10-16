const pessoas = ['Jurubeba','Antonio','Firmindo','Antonio','Irineu']


/*sintaxe:

pessoas.forEach((nome,indice,array)=>
console.log(nome,indice,array))

*/


pessoas.forEach((nome,indice,array)=>
console.log(nome,indice,array))/*o parametro nome e responsavel por imprimir o nome ou seja os valores o segundo parametro imprime o indice e o terceiro parametro imprime o array completo cada parametro pode ser
Escrito de qualquer forma o no maximo são 3*/


pessoas.forEach((nome)=>
console.log(nome))


pessoas.forEach((nome,indice)=>
console.log( `${indice+1}) ${nome}` )
)





//Colocando o forEach dentro de uma variavel const
const exibirPessoas = p => console.log(p)
pessoas.forEach(exibirPessoas)


const exibirPessoas2 = (nome,indice) => console.log(nome,indice)
pessoas.forEach(exibirPessoas2)


