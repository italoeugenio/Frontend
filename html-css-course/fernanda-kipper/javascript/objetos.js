const pessoa = {
    nome: 'italo',
    idade: 25,
    profissao: 'developer',
    possuiFaculdade: true,
    tias: [
        {
            nome: 'Fernanda',
            idade: 50
        },
        {
            nome: 'Sonia',
            idade: 52
        }
    ]
}

console.log(pessoa['nome'])
console.log(pessoa.nome)
console.log(pessoa)

let frutas = ["Banana", "Maçã", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let fruta of frutas) {
    console.log(fruta);
}

console.log()
console.log("Printando atributos do objeto pessoa:")
for(const atributo of Object.keys(pessoa)) {
    console.log(pessoa[atributo]);
}

console.log()
console.log("###Usando entries###")
for(const [key, value] of Object.entries(pessoa)) {
    console.log(key, value);
}