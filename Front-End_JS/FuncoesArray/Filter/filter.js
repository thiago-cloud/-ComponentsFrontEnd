let carro = [
    {modelo: 'Corolla', ano: 2020},
    {modelo: 'Celta', ano: 2015},
    {modelo: 'Fox', ano: 2019},
    {modelo: 'HB20', ano: 2012}
]




const veiculos = carro.filter((car,indice)=>{
    console.log(car,indice)
})

const veiculos2 = carro.filter((car,indice)=>{
    console.log(car.modelo)
})

const veiculos3 = carro.filter((car,indice)=>{
    console.log(car.ano,indice)
})

const veiculos4 = carro.filter((car,indice)=>{
    return car.modelo.includes('H')//retornara o objeto que contém H
})

console.log(veiculos4)

const veiculos5 = carro.filter((c)=>{
    return c.modelo === 'Celta'
})

console.log(veiculos5)

/*
const variavel = array.filter(parametro => parametro.propriedadeDoArray)
console.log(variavel)
*/