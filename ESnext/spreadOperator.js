var nome = 'victor lima'
var idade = 20


var empresa = {
    nome: 'show de massagem',
    cidade: 'sao paulo',
    site: 'showdemassagem.com.br',
    email: 'showdemassagem@showdemassagem.com.br'
}

//encurtadores json: antigamente em javascript eu precisaria passar o atributo e o valor separadamente
//nome:nome, porem com o esnext eu posso simplesmente passar nome que o interpretador
//ja entende que o atributo nome tem o valor de uma variavel ou outro objeto com o mesmo nome
var user1 = {
    nome,
    idade,
}




var user2 = {
    nome,
    idade,
    //operadores de spread, usando os 3 pontos antes do atributo, determinamos que ele é um operador spread
    //isso faz com que o javascript procure no codigo um objeto chamado empresa e espalhe todos os atributos de empresa
    //dentro do objeto user
    empresa:{...empresa}
}


//desestruturação
//conseguimos salvar varios dados em varias variaveis em uma unica linha 
var user3 ={
    nome: "victor lima",
    prof:"Programador",
    empresa:"Guia do Programador",
    curso:"Formação Node.Js"
}
var {nome, prof, empresa, curso} = user3

