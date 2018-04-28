function falar(tempo, mensagem) {
    return new Promise((resolve, reject) => { // (2)
        setTimeout(() => {
            resolve(mensagem)
            // reject('Meu erro personalizado')
        }, tempo * 1000)
    })
}

falar(3, 'Bom dia')
    .then(retorno => {
        let concat = retorno.concat("!!!")
        console.log(concat) // Bom dia!!! 
        return concat
    })
    .then(retornoThenAnterior => { 
        console.log(retornoThenAnterior.toUpperCase()) // BOM DIA!!!
    })
    .catch(e => console.log('erro: ' + e))
    .finaly(() => {
        console.log('executa independente de sucesso ou falha')
    })

/*


(2) 
Promise receber um callback com até 2 parametros (resolve, reject).
'resolve()' quando a promessa retorna sucesso e 'reject()' para erro.
resolve e reject aceitam apenas um parametro. se desejar passar mais, passe um objeto.



*/