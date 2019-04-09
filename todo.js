const todo_control = document.querySelector(".js-todo");
const todo_input_control = todo_control.querySelector("input");
const todo_ul_control = todo_control.querySelector("ul");

let tmp_list=[];

function deleteToDo(event){

    const btn =event.target;
    const li = btn.parentNode;
    todo_ul_control.removeChild(li);

    tmp_list= tmp_list.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });


    localStorage.setItem("toDoList", JSON.stringify(tmp_list) );

}

function print_todo(text){
    const li_component = document.createElement("li");
    const span_component = document.createElement("span");
    const btn_component = document.createElement("button");
    btn_component.innerText = "X";
    btn_component.addEventListener("click", deleteToDo);
    span_component.innerText = text;
    li_component.id = tmp_list.length+1;
    //li_component.classList.add("col");
    
    li_component.appendChild(btn_component);
    li_component.appendChild(span_component);

    const toDoObj = {
        id : tmp_list.length+1,
        text : text 
    };
    tmp_list.push(toDoObj); // new append again when refresh
    localStorage.setItem("toDoList", JSON.stringify(tmp_list) );
    todo_ul_control.appendChild(li_component);
}   

function addToDOList(work){
    work.preventDefault();
    if(todo_input_control.value !== ""){
        print_todo(todo_input_control.value);
    }
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