const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db/database')
const app = express()
const questionModel = require('./db/Question')
const answerModel = require('./db/Answer')


//CONEXAO COM O BANCO DE DADOS
connection.authenticate().then(() =>{
    console.log('conexao feita com o banco de dados!')
}).catch((error) => {
    console.log(error)
})



//ejs como engine de renderizacao de html
app.set('view engine', 'ejs')
app.use(express.static('public'))

//BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', (req,res)=>{
    questionModel.findAll({raw:true, order:[
        ['id', 'DESC'] //desse modo eu ordeno a tabela perguntas para se organizar em ordem decrescente, posso escolher qual coluna da tabela vai ser usada pra organizar
    ]}).then(perguntas =>{
        res.render('index',{
            perguntas: perguntas
        })
    })
})

app.get('/question', (req,res) =>{
    res.render('perguntar')
})

app.post('/saveQuestion', (req,res) =>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    questionModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) =>{ 
    var id = req.params.id;

    questionModel.findOne({
        where: {id: id},
        
    }).then(pergunta =>{
        if(pergunta != undefined){

            answerModel.findAll({
                where:{perguntaId: pergunta.id},
                order:[['id', 'DESC']]
            }).then(respostas =>{
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas,
                })

            })
        }else{
            res.redirect('/')
        }
    })
})

app.post('/responder', (req,res) =>{
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    answerModel.create({
        corpo,
        perguntaId
    }).then(() =>{
        res.redirect('/pergunta/'+perguntaId)
    })
})

app.listen(8080, ()=>{console.log('app rodando na porta 8080')})