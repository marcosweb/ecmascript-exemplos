// estrutura não indexada que não aceita repetiação nos índices

const times = new Set()

times.add('flamento')
times.add('Sao Paulo')
times.add("Vasco")
times.add("Gremio")
times.add("Gremio") // ignorado

console.log(times) // Set { 'flamento', 'Sao Paulo', 'Vasco', 'Gremio' }
console.log(times.size) // 4
console.log(times.has('flamento')) // true
console.log(times.has('Flamento')) // false (letra maiuscula)

const letras = new Set(['a', 'b', 'c'])
const maisLetras = new Set([...letras, 'c', 'd', 'e', 'f']) // ignora repeticoes (c)

console.log(letras)         // Set { 'a', 'b', 'c' }
console.log(maisLetras)     // Set { 'a', 'b', 'c', 'd', 'e', 'f' }