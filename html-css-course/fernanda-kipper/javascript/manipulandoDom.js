let divContainer = document.querySelector("#div1")

let newH3Element = document.createElement("h3")
newH3Element.innerHTML = "Este é um título h3 criado via JavaScript"
// divContainer.appendChild(newH3Element)

divContainer.style.backgroundColor = "yellow"

document.body.style.backgroundColor = "lightblue";

let h1Element = document.getElementsByTagName("h1")[0]
console.log(h1Element)



let button = document.querySelector("#button1")

button.addEventListener("click",showMessage)


function showMessage(){
    console.log("Função chamada pelo onclick")
    alert("O botao foi clicado")
}

function buttonClick(){
    alert("Botão Clicado")
}  
