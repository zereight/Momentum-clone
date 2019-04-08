const todo_control = document.querySelector(".js-todo");
const todo_input_control = todo_control.querySelector("input");
const todo_ul_control = todo_control.querySelector("ul");

const tmp_list=[];

function print_todo(text){
    const li_component = document.createElement("li");
    const span_component = document.createElement("span");
    span_component.innerText = text;
    li_component.id = tmp_list.length+1;
    li_component.appendChild(span_component);

    const toDoObj = {
        id : tmp_list.length+1,
        text : text 
    };
    tmp_list.push(toDoObj);
    localStorage.setItem("toDoList", JSON.stringify(tmp_list) );
    todo_ul_control.appendChild(li_component);
}   

function addToDOList(work){
    work.preventDefault();

    print_todo(todo_input_control.value);
    
    todo_input_control.value = "";
}

function todo_init(){

    if( localStorage.getItem("toDoList") !== null){
        const paint_list = JSON.parse( localStorage.getItem("toDoList") );
        paint_list.forEach(element => {
            print_todo(element.text);
        });
    } 

    todo_control.addEventListener("submit", addToDOList);

}

todo_init();