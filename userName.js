const HTML_USERNAME = document.querySelector(".js-userName"),
    NAME_INPUT = HTML_USERNAME.querySelector("input"),
    TITLE = document.querySelector("h2");

const USER_LS = "userName",
    CLASS_SHOW = "showing"

function init(){
    loadName()
    HTML_USERNAME.addEventListener("submit", submitHandle);
}

init();

function submitHandle(e){
    e.preventDefault();
    localStorage.setItem(USER_LS, NAME_INPUT.value);
    loadName();
}

function loadName(){
    const currentName = localStorage.getItem(USER_LS);
    if(currentName !== null){
        HTML_USERNAME.classList.add(CLASS_SHOW);
        TITLE.classList.remove(CLASS_SHOW);
        TITLE.innerText  = `안녕 ${currentName}쓰`;
    }
}

