produtos = [
    {id: 1, nome: 'detergente',valor: 5.00, categoria: 'Limpeza'},
    {id: 2, nome: 'Salgadinho',valor: 3.00, categoria: 'Alimento'},
    {id: 3, nome: 'chocolate',valor: 2.00, categoria: 'Alimento'},
    {id: 4, nome: 'Sabão',valor: 1.00, categoria: 'Limpeza'},
    {id: 5, nome: 'Bucha',valor: 3.00, categoria: 'Limpeza'},
]

const p1 = produtos.map(p => p.categoria)
console.log(p1)

console.log(produtos.map(p => p.nome))


const numeros = [1,2,3,4,5,6]


const duplicado = numeros.map(n => n * 2)

console.log(duplicado)

const p2 = produtos
    .filter(p => p.categoria === 'Alimento')
    .map(a => a.nome)

console.log(p2)

/*sintaxe:


const variavel = array.map(parametro => parametro.propriedadeDoArray)
console.log(variavel)2


*/