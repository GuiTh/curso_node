const  Sequelize = require('sequelize')

const conection = new Sequelize('guia_press', 'root','123456',{
    host:'localhost',
    dialect:'mysql',
    tomezine: '-03:00'
})

module.exports = conection