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

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    // retorna um objeto AsyncFunction, que permite chamar um then()
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

/*
    Recurso do ES8
    Tem como objetivo simplificar o uso de promises.

    await so funciona com funcoes marcadsa com async
*/