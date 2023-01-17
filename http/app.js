const http = require('http')

http.createServer(function(req,res){
    res.end('<h1>oi</h1>')
}).listen(8181)
console.log('meu servidor esta rodando')