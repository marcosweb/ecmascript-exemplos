// rest (juntar)
function media(...numeros) {
    const soma = numeros.reduce((acumulador, atual) => acumulador + atual)
    return soma / numeros.length
}

// spread (espalhar)
const funcionario = { nome: 'Marcos', salario: 1000.00 }
const diretor = { cargo: 'diretor', ...funcionario }

console.log(media(10, 10, 8, 8)) // 9
