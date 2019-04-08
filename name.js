
const name_control = document.querySelector(".js-name");
const name_input = name_control.querySelector("input");

function name_handler(event){
    event.preventDefault();
    localStorage.setItem("name", name_input.value);
    name_control.classList.add("hidden");
    name_control.innerText = (`Hello ${localStorage.getItem("name")}!`);
    name_control.parentNode.innerText = (`Hello ${localStorage.getItem("name")}!`);
}

function name_init(){
    if( localStorage.getItem("name") !== null ){
        name_control.classList.add("hidden");
        name_control.parentNode.innerText = (`Hello ${localStorage.getItem("name")}!`);
        console.log("no name");
    }else {
        name_control.classList.remove("hidden");
    }
    name_control.addEventListener("submit", name_handler);
}

name_init();