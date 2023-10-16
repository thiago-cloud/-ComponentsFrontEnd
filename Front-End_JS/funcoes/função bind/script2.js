const carro = {
    modelo: "honda",
    cor: "preto",
    ano: "2020",

    falar(){
        console.log("O modelo do carro é "+this.modelo+" ano "+this.ano+" com cor "+this.cor)

    }
}

carro.falar()

const qualquer = carro.falar
qualquer()

const qualquer1 = carro.falar.bind(carro)
qualquer1()