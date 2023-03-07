function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log(`
        Para: ${para}
        ------------------------
        ${corpo}
        ------------------------
        De: guilherme
        `)
        callback("ok", 5, "8s")
    }, 8000)
}
console.log('inicio do envio de email')
enviarEmail('oi, seja bem vindo ao meu guia', 'guilhermetcarlos@hotmail.com', (stats, amount, time)=>{
console.log(`
    Status: ${stats}
    -----------------
    Contatos: ${amount}
    ------------------
    tempo: ${time}
`)
console.log('e ele foi exeutado')
})
console.log('seu email foi enbiado e deve chegar em minutos')
console.log('tudo ok')