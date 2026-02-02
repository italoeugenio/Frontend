import { Task } from "../models/Task.js"
import { Status } from "../enum/status.js"

//------------Variáveis------------------------
const taskList = []
const input = document.querySelector('#task-input')
const addButton = document.getElementById("add-button")
const taskListElement = document.querySelector('#task-list')
const statusText = document.getElementById("stats-text")
const deleteButton = document.getElementsByClassName("delete-btn")

// ---------------Manipulando dom ----------------
addButton.addEventListener("click", function() {
    const text = input.value.trim()  
    
    if (text) {  
        const newTask = new Task(text, Status.DOING)
        addInListWithButton(newTask, taskList)
        renderTask(newTask)
        input.value = ''
        statusText.innerHTML = `${taskList.length} tarefas pendentes`
    }
})


deleteButton.addEventListener("click", function(e){
    
})

function addInListWithButton(task, taskList){
    taskList.push(task)  
}




input.addEventListener("key")

function renderTask(task) {
    const li = document.createElement('li')
    li.className = 'task-item'
    li.innerHTML = `
        <input type="checkbox">
        <span class="task-text">${task.nameTask}</span>
        <button class="delete-btn">Deletar</button>
    `
    
    taskListElement.appendChild(li)
}

function showListLength(taskList){
    return taskList.length  
}