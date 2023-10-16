const carro = [
    {modelo: 'Celta',cor: 'Prata', fabricante:'Chevrolet',ano: 2020 },
    {modelo: 'Ranger',cor: 'Preto', fabricante:'Ford',ano: 2015},
    {modelo: 'Fox',cor: 'Verde Musgo', fabricante:'Vowkswagem',ano: 2021 },
    {modelo: 'Argo',cor: 'Branco', fabricante:'Fiat',ano: 2023 },
    
]


const car = carro.filter(c =>
    console.log(c.modelo)
)


const car1 = carro.map(c =>
    console.log(c.cor)
)


const car2 = carro.reduce((acc,a) =>
    acc+a.ano,0
)

console.log(car2)









