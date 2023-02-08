const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/articlesController')

const Article = require('./articles/articles')
const Category = require('./categories/category')

//View engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Database
connection.authenticate()
    .then(() =>{
        console.log('conexao feita com sucesso!')
    }).catch((error) =>{
        console.log(error)
    })



app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(8080, ()=>{
    console.log('o servidor esta rodando')
})