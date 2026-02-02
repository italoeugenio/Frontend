const square = document.querySelector(".square")
const input = document.querySelector(".square-input")


input.addEventListener("keydown", function(e){
  if(e.key == "Enter"){
    square.style.backgroundColor = input.value
    input.value = ""
  }
})

document
  .querySelector(".button-container")
  .addEventListener("click", function (teste) {
  alert(`You clicked on button ${teste.target.innerText}`);
});