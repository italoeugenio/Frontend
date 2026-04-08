let square = document.querySelector(".red-square");

square.style.backgroundColor = "blue"

const button = document.querySelector(".click")

button.addEventListener("click", function(){
    alert("Você ganhou 1 milhão de reais")
})

const input = document.querySelector(".value")
const h1 = document.querySelector("h1")
input.addEventListener("keyup", function(){
    h1.innerText = input.value
})