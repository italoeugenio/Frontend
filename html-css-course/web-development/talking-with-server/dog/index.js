const DOG_URL = "https://dog.ceo/api/breeds/image/random"

const doggos = document.getElementById("dog-target")
const button = document.getElementById("dog-btn")

function addNewDoggo(){
    const promise = fetch(DOG_URL)
    promise
    .then(function(response){
        const processingPromise = response.json()
        return processingPromise
    })
    .then(function(processedResponse){
        const dogObject = processedResponse
        const img = document.createElement("img")
        img.src = dogObject.message
        img.alt = "Cute doggo"
        doggos.appendChild(img)
    })
    .catch(function(error){
        alert("Something is wrong")
    })
}

async function addNewDoggo2(){
    const promisse = await fetch(DOG_URL)
    const processedResponse = await promisse.json()
    const img = document.createElement("img")
    img.src = processedResponse.message
    img.alt = "Cute Doggo"
    doggos.appendChild(img)
}

button.addEventListener("click", addNewDoggo2)