for(let i = 0; i < 5; i++){
    console.log(`Iteracao ${i}`)
}

let num = 5

while(num > 0){
    console.log("Dentro do while")
    num--
}

let idades = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function isMaiorDeIdade(idade){
    return idade >= 18
}

for(let i = 0; i < idades.length; i++){
    if(isMaiorDeIdade(idades[i])){
        console.log(`A idade ${idades[i]} é maior de idade`)
    } else {
        console.log(`A idade ${idades[i]} é menor de idade`)
    }
}
