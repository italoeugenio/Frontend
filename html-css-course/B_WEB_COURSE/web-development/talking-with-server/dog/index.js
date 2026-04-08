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
    const h1 = document.createElement("h1")
    img.src = processedResponse.message
    img.alt = "Cute Doggo"
    const content = await buscarCEP("72225273") 
    h1.textContent = JSON.stringify(content, null, 2)
    doggos.appendChild(h1)
}

 async function buscarCEP(num){
     try{
        const url = "https://viacep.com.br/ws/" + num  + "/json/" 
        const request = await fetch(url)
        const response = await request.json()
        return response
     } catch (error){
         console.log("Erro ao buscar cep: ", error)
     }
    
 }
    


button.addEventListener("click", addNewDoggo2)
