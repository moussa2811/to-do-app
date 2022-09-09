import { pageLoad, showTodosFunc, 
        newProjectFunc, delProjectFunc, 
        todoFormShow, newTodoFunc, editTodoFunc, delTodoFunc, changeStatusFunc } from './functions';

pageLoad();
asideEvents();

function asideEvents() {
    document.querySelectorAll('.projects').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.getAttribute("data-project");
                    showTodos(id,"all");
                }
            )
        }
    )
    
    document.querySelector("#addProjectBtn").addEventListener("click",
        ()=>{
            let name = document.querySelector("#addProjectTitle").value;
            newProject(name);
        }
    )
}

showTodos("all","all");

function showTodos(projectId,filter) {
    showTodosFunc(projectId,filter);

    if (document.querySelector("#delPro")) {
        document.querySelector("#delPro").addEventListener("click",
            ()=>{
                delProject(projectId);
            }
        )
    }

    document.querySelector("#filter").addEventListener("change",
        (e)=>{
            let filter = e.target.value;
            showTodos(projectId,filter);
        }
    )

    if (document.querySelector("#newTodo")) {
        document.querySelector("#newTodo").addEventListener("click",
            ()=>{
                todoform("none",projectId);
            }
        )
    }

    document.querySelectorAll('.checkbox').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    changeStatus(id,projectId);
                }
            )
        }
    )

    document.querySelectorAll('.editTodo').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    todoform(id,projectId);
                }
            )
        }
    )

    document.querySelectorAll('.delTodo').forEach(
        (item)=>{
            item.addEventListener("click",
                ()=>{
                    let id = item.parentNode.parentNode.getAttribute("data-todo");
                    delTodo(id,projectId);
                }
            )
        }
    )
}

function newProject(name) {
    let id = newProjectFunc(name);
    if (id === "error") alert("Change name, this one is already used.")
    else{
        document.querySelector(`.projects[data-project="${id}"]`).addEventListener("click",
            ()=>{
                showTodos(id,"all");
            }
        );
        showTodos( id, "all" );
    }
}

function delProject(id) {
    delProjectFunc(id);
    asideEvents();
    showTodosFunc( "all", "all" );
}

function todoform(id,projectId) {
    todoFormShow(id,projectId);
    document.querySelector("#saveTodo").addEventListener("click",
        (e)=>{
            e.preventDefault();
            let name = document.querySelector("#todoName").value;
            let desc = document.querySelector("#todoDesc").value;
            let date = document.querySelector("#todoDate").value;
            let priority = document.querySelector("#todoPriority").value;
            if(id==="none"){
                newTodo(name,projectId,desc,date,priority);
            }else{
                editTodo(name,id,projectId,desc,date,priority);
            }
        }
    )

    document.querySelector("#cancel").addEventListener("click",
        (e)=>{
            e.preventDefault();
            document.querySelector(".wrapper").removeChild(
                document.querySelector(".todoForm")
            )
        }
    )
}

function newTodo(name,projectId,desc,date,priority){
    if( newTodoFunc(name,projectId,desc,date,priority) === "done" ){
        document.querySelector(".wrapper").removeChild(
            document.querySelector(".todoForm")
        )
        showTodos(projectId,filter="all");
    }else alert("Please change name");
}


function editTodo(name,todoId,projectId,desc,date,priority){
    if( editTodoFunc(name,todoId,desc,date,priority) === "done" ){
        document.querySelector(".wrapper").removeChild(
            document.querySelector(".todoForm")
        )
        showTodos(projectId,filter="all");
    }else alert("Please change name")
}

function changeStatus(id,projectId){
    changeStatusFunc(id);
    showTodos(projectId,"all");
}

function delTodo(id,projectId){
    delTodoFunc(id);
    showTodos(projectId,"all");
}