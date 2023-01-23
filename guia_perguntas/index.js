const express = require('express')


const app = express()


//ejs como engine de renderizacao de html
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/:nome/:lang', (req,res)=>{
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = true
    var produtos = [
        {nome:'doritos',preco: 3.14,},
        {nome: 'coca-cola', preco:5},
        {nome: 'leite', preco:1.45},
        {nome: 'RedBull', preco:6},
        {nome: 'nescau', preco: 10}
    ]
    res.render('index', {
        nome,
        lang,
        empresa: 'show de massagem',
        numeroAleatorio: 8080,
        msg: exibirMsg,
        produtos
    })
})

app.listen(8080, ()=>{console.log('app rodando na porta 8080')})