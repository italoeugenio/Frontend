//Arrays

let listaDeNomes = ["Ana", "Bia", "Carlos", "Allany"];
let listaVazia = [];

listaVazia[0] = "Primeiro elemento";
listaVazia[20] = 10
console.log(listaVazia)

listaVazia.push("Daniel"); 

function filtarNomeQueComecaCom(nome, letra) {
    return nome.startsWith(letra);
}

teste = listaDeNomes.filter(name => filtarNomeQueComecaCom(name.toLocaleUpperCase(), "A"))
let nomesMaiusculos = listaDeNomes.map(name => name.toLocaleUpperCase())
console.log(nomesMaiusculos)
listaDeNomes.forEach(name => console.log(name))