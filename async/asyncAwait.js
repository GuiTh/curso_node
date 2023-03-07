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


function pegarUsuarios(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                {name: 'guilherme', lang:'js'},
                {name: 'messias', lang:'python'},
                {name: 'gustavo', lang:'go'}
            ])
        },2000)
    })
}

async function principal(){
    var usuarios = await pegarUsuarios()
    console.log(usuarios)
    console.log('ola')
}
principal()
    