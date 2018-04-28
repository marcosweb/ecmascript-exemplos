const fruta = 'uva'
const suco = 'laranja'
const objeto1 = { fruta, suco } // equivale a { fruta: fruta, suco: suco }
const objeto2 = {
    fruta,
    mensagem() { // equivale a mensagem: function() {}
        return `Você gosta de ${fruta}?`
    }
}
console.log(objeto2.mensagem())
