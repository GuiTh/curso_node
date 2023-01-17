const express = require('express') //referencia o express no arquivo
const app = express() //inicia o express

app.get('/', (req, res) =>{
    res.send('<h1> olha funcionou</h1>')
})

app.get('/blog/:artigo?', (req, res) =>{
    var artigo = req.params.artigo

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }else{
        res.send('bem vindo ao blog: ')
    }
})

app.get('/canal/youtube', (req, res) =>{
    var canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else{
        res.send('nenhum canal fornecido')
    }
})

app.get('/ola/:nome/:empresa', (req,res) =>{
    //REQ dados enviados pelo usuario
    //RES resposta que vai ser enviada para o usuario
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Oi " + nome + " do(a) " + empresa + "</h1>")
})

app.listen(4000,function(err){
    if(err){
        console.log('ocorreu um erro')
    }
    else{
        console.log('servidor iniciado com sucesso na porta 4000')
    }
})