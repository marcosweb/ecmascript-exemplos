// no NodeJS 'this' aponta para 'global, no broser p/ 'window'

// funcao normal
function soma(a, b) {
    console.log(this === exports) // false
    console.log(this === global) // true
    return a + b
}

// funcao arrow
const soma2 = (a, b) => a + b

const dobro = (n) => {
    console.log(this === exports) // true
    console.log(this === global) // false
    return n * 2
}

console.log('fora', this === exports) // true
console.log('fora', this === global) // false

soma(5, 2)
dobro(5)
