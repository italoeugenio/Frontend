let nome = "Italo"
console.log("Olá " + nome + "!")

let idade = 23;
console.log("Você tem " + idade + " anos")

let endereco = null
console.log(endereco * 2)

let telefone
 
//NULL E UNDEFINED SÃO TRATADOS COMO FALSO
//VALOR 0 E STRING VAZIA SAO TRATADOS COMO FALSO
//STRING E NÚMEROS SAO TRADAOS COMO BOOLEANOS

console.log("Testando operacoes matematicas")
console.log("5" + 1)
console.log("5" - 1)
console.log("5" * 2 )
console.log("5" / 2)

let numero = 1
let numeroString = String(numero)

let stringNumero = "123"
let stringNumeroNumero = Number(stringNumero)

let segundoNumero = (10).toString()

console.log(typeof numero)
console.log(typeof numeroString)
console.log(typeof stringNumeroNumero)
console.log(typeof segundoNumero)

let stringInvalida = `123abc`
let stringInvalidaNumero = Number(stringInvalida)
console.log(stringInvalidaNumero)

//variaveis

//let declarar variavel que pode mudar de valor
//let tem escopo de bloco {}
let idadePessoa = 30
idadePessoa = 31

//const declarar variavel que nao pode mudar de valor
const pi = 3.14
const horasDia = 24 

//var declarar variavel que pode mudar de valor
//var tem escopo global ou de função



for(var i = 0; i < 5; i++){
    var nomeVar = "Italo"
    let nomeLet = "Fernanda" //vai existir apenas dentro do bloco
    console.log(i)
}

for(var i = 0; i < 5; i++){
    var nomeVar = "Joao"
    let nomeLet = "Fernanda" //vai existir apenas dentro do bloco
    console.log(i)
}

console.log("Nome declarado com var: " + nomeVar)
console.log("Valor de i após o loop: " + i)

let count1 = 0
let count2 = 5
count1++
count2--

console.log("É igual?: ", 1 == '1') //compara valor
console.log("É estritamente igual?: ", 1 === '1') //compara valor e tipo
console.log("É diferente?: ", 1 != '1')
console.log("É estritamente diferente?: ", 1 !== '1')

console.log("é igual:", 1 == "1" ? "igual" : "diferente")

let idadeDoItalo =  50
console.log(idadeDoItalo)


switch(idadeDoItalo){
    case 10:
        console.log("idade é 10")
        break
    case 20:
        console.log("idade é 20")
        break
    default:
        console.log("idade é outra")        
}