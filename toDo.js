const TODO_FORM = document.querySelector(".js-toDo"),
    TODO_INPUT = TODO_FORM.querySelector("input"),
    TODO_LIST = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";

let index = 0;
let objArray = [];

function init(){
    TODO_FORM.addEventListener("submit", submitHandle)
    loadStorage();
}
init();

function submitHandle(e){
    e.preventDefault();
    const submitValue = TODO_INPUT.value;
    printToDo(submitValue);
    TODO_INPUT.value = "";
}

function btnClickHandle(e){
    const deleteTarget = e.target.parentNode
    TODO_LIST.removeChild(deleteTarget);
    
    objArray = objArray.filter(function(element){
        return element.id !== parseInt(deleteTarget.id,10);
    })
    saveStorage();
}

function loadStorage(){
    let currentToDoList = localStorage.getItem(TODO_LS)
    if(currentToDoList !== null){
        currentToDoList = JSON.parse(currentToDoList);
        currentToDoList.forEach(function(element){
            printToDo(element.text);
        })
    }
}

function saveStorage(){
    localStorage.setItem(TODO_LS, JSON.stringify(objArray));    
}

function printToDo(text){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "😁"
    btn.addEventListener("click", btnClickHandle);
    li.innerText = text;
    li.id = index;
    li.appendChild(btn);
    TODO_LIST.appendChild(li);

    const obj ={
        text : text,
        id : index
    }
    objArray.push(obj);
    saveStorage();
    index++;
}