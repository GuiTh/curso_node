function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var deuErro = false
            if(!deuErro){
                resolve({time:6,to:'guilhermetcarlos@hotmail.com'})
            }else{
                reject('fila cheia')
            }
        }, 4000)
    })
}

function pegarId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('guilhermetcarlos@hotmail.com')
        }, 2000)
    })
}

pegarId().then((id)=>{
    buscarEmailNoBanco(id).then((email)=>{
        enviarEmail('ola como vai', email).then(()=>{
            console.log('email enviado para o usuario com id: ' + id)
        }).catch(err =>{
            console.log(err)
        })
    })
})