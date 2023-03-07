function enviarEmail(corpo, para, callback){
    setTimeout(()=>{

        var deuErro = false

        if(deuErro){
            callback('envio do email falhou')
        }else{
            callback()
        }
    }, 8000)
}
console.log('inicio do envio de email')
enviarEmail('oi, seja bem vindo ao meu guia', 'guilhermetcarlos@hotmail.com', (err)=>{

    if(err == undefined){
        console.log('tudo ok')
    }else{
        console.log('ocorreu um erro')
    }

})
console.log('seu email foi enbiado e deve chegar em minutos')
console.log('tudo ok')