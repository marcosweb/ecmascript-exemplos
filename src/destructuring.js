
// string
const [letra1, letra2, ...demaisLetras] = "bola"

console.log(letra1) // b
console.log(letra2) // o
console.log(demaisLetras) // ['l', 'a']

// array
const [x, , y] = [1, 2, 3]

console.log(x) // 1
console.log(y) // 3

// objeto
const aluno = {
    nome: "marcos sousa",
    profissao: "programador",
    sexo: "masculino",
    altura: 1.73,
    contatos: {
        email: "devmarcosweb@gmail.com",
        telefone: "11 98299 8513"
    }
}

const { nome, altura: alt, contatos: { telefone } } = aluno

console.log(nome) // marcos sousa
console.log(alt) // 1.73
console.log(telefone) // 11 98299 8513
