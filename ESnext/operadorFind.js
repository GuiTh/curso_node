var guilherme = {
    nome: "guilherme",
    curso: 'node'
}

var gustavo = {
    nome: 'gustavo',
    curso: 'html'
}

var karol = {
    nome: 'karol',
    curso: 'fotografia'
}

var users =  [guilherme, gustavo, karol]

var usuarios = users.find(user => user.nome === "guilherme")

console.log(usuarios)