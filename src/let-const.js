// o uso do 'var' faz com que a variavel 'a' seja visivel globalmente
// as variáveis 'b' e 'c' só serão visíveis dentro do bloco
{
    var a = 1
    let b = 2
    const c = 3
    console.log(b) // 2
}

console.log(a) // 1
console.log(b) // b is not defined
console.log(c) // c is not defined
