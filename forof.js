for (let letra of 'uva') {
    console.log(letra)
}
/*
u
v
a
*/



const frutas = ['uva', 'banana', 'laranja']

for (let fruta of frutas) {
    console.log(fruta)
}
/*
uva
banana
laranja
*/



// usndo forIn para obter o mesmo resultado

for (let indice in frutas) {
    console.log(frutas[indice])
}



const animais = new Map([
    ['gato', { terrestre: true }],
    ['peixe', { terrestre: false }],
    ['vaca', { terrestre: true }]
])

for (let animal of animais) {
    console.log(animal)
}
/*
[ 'gato', { terrestre: true } ]
[ 'peixe', { terrestre: false } ]
[ 'vaca', { terrestre: true } ]
*/



for (let animal of animais.keys()) {
    console.log(animal)
}
/*
gato
peixe
vaca
*/

for (let animal of animais.values()) {
    console.log(animal.terrestre)
}
/*
true
false
true
*/


// usando destructuring
for (let [chave, valor] of animais) {
    console.log(chave, valor)
}