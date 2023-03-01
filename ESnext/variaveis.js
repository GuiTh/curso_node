//existem 3 tipos de variaveis em javascript
//const nao permite que o valor dela seja alterado futuramente
const constante = 'valor constante'

//a diferenca entre var e let é escopo



var nomeGlobalVar = 'vitor' //essa variavel esta em escopo global, pode ser utilizado em outras funções
function nome(){
    var nome = 'guilherme' // essa variavel esta em escopo local, nao pode ser usado fora da funcao nome
} 


//let tambem tem escopo global
let nomeGlobalLet = 'rodrigo'

//let tambem tem escopo local igual var
function nomeLet(){
let nomeLocalLet = 'matheus'
}

//a diferenca entre var e let é o escopo unico que let tem, o escopo de bloco
//se eu declaro um let em um if, for, e objetos, posso acessar esse let fora dos blocos


function func1(){
    console.log('oi' + nome)
}
function func2(){
    console.log()
}

