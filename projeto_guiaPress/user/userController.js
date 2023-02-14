const express = require('express')
const router = express.Router()
const User = require('./User')

router.get('/admin/users', (req,res)=>{
    res.send('listagem de usuarios')
})

router.get('/admin/users/create', (req,res)=>{
    res.render('admin/users/create')
})

router.get('/admin/users', (req,res)=>{
    User.findAll().then((users) =>{
        res.render('admin/users/users',{users:users})
    })
})

router.post('/admin/users/new', (req,res)=>{
    var email = req.body.email
    var password = req.body.password
    User.create({
        email:email,
        password:password
    }).then(()=>{
        res.redirect('/admin/users')
    })
})

module.exports = router