const express = require('express')
const bodyParser = require('body-parser')

const app = express()


//ejs como engine de renderizacao de html
app.set('view engine', 'ejs')
app.use(express.static('public'))

//BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/question', (req,res) =>{
    res.render('perguntar')
})

app.post('/saveQuestion', (req,res) =>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send('formulario recebido! ' + "<br>" + "titulo: " + titulo + " descrição: " + descricao)
})

app.listen(8080, ()=>{console.log('app rodando na porta 8080')})