const TodoInput = document.querySelector("#todoInput");
const TodoButton = document.querySelector("#todoAddButton");
const TodoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getTodos);
TodoButton.addEventListener("click", addTodo);

function addTodo(event) {
    //preventing from default
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("div");
    //add a 1st child to todoDiv parent
    const todoLi = document.createElement("li");
    todoLi.innerText = TodoInput.value;
    todoLi.classList.add("liB");
    todoDiv.appendChild(todoLi);
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(TodoInput.value);
    //add a 2nd child to todoDiv parent
    const todoB1 = document.createElement("button");
    todoB1.classList.add("completeB");
    todoB1.innerHTML = '<i class="fa fa-check"></i>';
    todoB1.addEventListener("click", function myFunc2() {
        alert("You are going to complete the following todo.");
        localStorage.clear();
        todoDiv.style.display = "none";
    });
    todoDiv.appendChild(todoB1);
    //add a 3rd child to todoDiv parent
    const todoB2 = document.createElement("button");
    todoB2.classList.add("trashB");
    todoB2.innerHTML = '<i class="fa fa-trash"></i>';
    todoB2.addEventListener("click", function myFunc() {
        localStorage.clear();
        todoDiv.style.display = "none";
    });
    todoDiv.appendChild(todoB2);
    // Now the todoDiv is the child for todoList
    TodoList.appendChild(todoDiv); 
    TodoInput.value = "";
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("div");
        //add a 1st child to todoDiv parent
        const todoLi = document.createElement("li");
        todoLi.innerText = todo;
        todoLi.classList.add("liB");
        todoDiv.appendChild(todoLi);
        //add a 2nd child to todoDiv parent
        const todoB1 = document.createElement("button");
        todoB1.classList.add("completeB");
        todoB1.innerHTML = '<i class="fa fa-check"></i>';
        todoB1.addEventListener("click", function myFunc2() {
            alert("You are going to complete the following todo.");
            localStorage.clear();
            todoDiv.style.display = "none";
        });
        todoDiv.appendChild(todoB1);
        //add a 3rd child to todoDiv parent
        const todoB2 = document.createElement("button");
        todoB2.classList.add("trashB");
        todoB2.innerHTML = '<i class="fa fa-trash"></i>';
        todoB2.addEventListener("click", function myFunc() {
            localStorage.clear();
            todoDiv.style.display = "none";
        });
        todoDiv.appendChild(todoB2);
        // Now the todoDiv is the child for todoList
        TodoList.appendChild(todoDiv);
    });
}