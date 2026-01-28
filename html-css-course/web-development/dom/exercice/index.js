const square = document.querySelector(".square")
const input = document.querySelector(".square-input")


input.addEventListener("keyup", function(){
    square.style.backgroundColor = input.value
})

document
  .querySelector(".button-container")
  .addEventListener("click", function (teste) {
  alert(`You clicked on button ${teste.target.innerText}`);
});