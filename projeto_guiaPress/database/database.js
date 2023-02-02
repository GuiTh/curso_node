const  Sequelize = require('sequelize')

const conection = new Sequelize('guia_press', 'root','123456',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = conection