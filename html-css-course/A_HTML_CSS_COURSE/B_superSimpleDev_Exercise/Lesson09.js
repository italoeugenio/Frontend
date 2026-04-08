const square = document.querySelector(".square")
const input = document.querySelector(".input")

input.addEventListener("keyup", (e) => {
    square.style.backgroundColor = input.value
})

const buttonYes = document.querySelector(".button-yes")
const buttonNo = document.querySelector(".button-no")

buttonYes.addEventListener("click", ()=>{
    alert("Obrigado por está satisfeito")
})

buttonNo.addEventListener("click", ()=>{
    alert("Sério ? Desculpa então")
})
