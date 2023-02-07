const express = require('express')
const router = express.Router()
const Category = require('./category')
const slugify = require('slugify')

router.get('/admin/categories/new', (req,res) =>{
    res.render("admin/categories/new")
})

router.post('/categories/save', (req,res) =>{
    var title = req.body.title
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() =>{
            res.redirect('/admin/categories')
        })
    }else{
        res.redirect('/')
    }
})

router.get('/admin/categories', (req, res) =>{
    Category.findAll().then(categories =>{
        res.render('admin/categories/', {categories})
    })
    res.render('admin/categories/')
})

module.exports = router;