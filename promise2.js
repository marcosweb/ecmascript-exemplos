const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, ret => {
            let result = ''

            ret.on('data', data => {
                result += data
            })

            ret.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

// solução 1 (não recomendada)

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => a.nome))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => a.nome))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => a.nome))
            console.log(nomes)
        })
    })
})

// solução 2 (melhor)

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')/*, getTurma('D')*/])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log('erro: ' + e.message))

// Veja uma forma ainda 'melhor' de resolver em ./async-await.js
// Veja uma forma NÃO recomendada em ./callbacks-aninhados.js
