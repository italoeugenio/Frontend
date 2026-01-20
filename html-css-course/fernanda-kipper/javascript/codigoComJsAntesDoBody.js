document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("#button1");
    button.addEventListener("click", showMessage);
})

function showMessage(){
    console.log("Função chamada pelo onclick")
    alert("O botao foi clicado")
}