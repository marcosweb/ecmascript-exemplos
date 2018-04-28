function real(partes, ...valores) {

    console.log(partes)  // [ '1x de ', ' ou 3x de ', '.' ]
    console.log(valores) // [ '30.6', '10.2' ]

    const resultado = []

    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('')
}

const preco = 30.6
const valorParcela = 10.2

console.log(real`1x de ${preco} ou 3x de ${valorParcela}.`)
