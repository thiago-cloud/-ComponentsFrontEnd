const numero = [1,2,3,4,5,6]



const total = numero.reduce((acumulado,n)=> acumulado + n)
console.log(total)



/*O array reduce soma todos os valores number de uma array do tipo number
 e retorna um unico valor total ou seja ele pega o valor acumulado anterior 
 e soma com o proximo valor e no final retorna o valor total da soma*/

 produtos = [
    {id: 1, nome: 'detergente',valor: 5.00, categoria: 'Limpeza'},
    {id: 2, nome: 'Salgadinho',valor: 3.00, categoria: 'Alimento'},
    {id: 3, nome: 'chocolate',valor: 2.00, categoria: 'Alimento'},
    {id: 4, nome: 'Sabão',valor: 1.00, categoria: 'Limpeza'},
    {id: 5, nome: 'Bucha',valor: 3.00, categoria: 'Limpeza'},
]

const totalProdutos = produtos.reduce((acumulado,p)=> acumulado + p.valor,0)//Somara todos os valores de valor para não dar erro colocaremos sempre nesse caso o valor inicia 0
console.log(totalProdutos)
