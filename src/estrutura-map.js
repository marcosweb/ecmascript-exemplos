
// estrutura indexada chave/valor que não aceita repetição nos índices (ou chaves)

const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })
tecnologias.set('ember', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(`${chave} = ${valor}`)
})

/*
    saida do console:

    function () { } = função
    [object Object] = objeto
    123 = número
 */

 console.log(chavesVariadas.has(123)) // true
 console.log(chavesVariadas.delete(123))
 console.log(chavesVariadas.has(123)) // false

 console.log(chavesVariadas.size) // 2
 