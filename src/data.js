const projectList = []; getSavedProjects();

function getSavedProjects(){
    let projectsSaved = JSON.parse(localStorage.getItem("projectList") || "[]");
    for (const project of projectsSaved) {
        let id = project[0];
        let name = project[1];
        addProjectData(name,id,false);
    }
}

export function saveProjects(){
    let list = [];
    for (const project of projectList) {
        let save = [];
        save.push(
            project.getId(),
            project.getName()
        )
        list.push(save);
    }
    localStorage.setItem("projectList", JSON.stringify(list) );
}

export function getProjectsList() {
    let list = projectList;
    return list;
}

const todoList = []; getSavedTodos();

function getSavedTodos(){
    let todosSaved = JSON.parse( localStorage.getItem("todoList") || "[]" )
    for (const todo of todosSaved) {
        let id = todo[0];
        let name = todo[1];
        let projectId = todo[2];
        let description = todo[3];
        let date = todo[4];
        let priority = todo[5];
        let status = todo[6];
        addTodoData(name,id,projectId,description,date,priority,status,false)
    }
}

export function saveTodos(){
    let list = [];
    for (const todo of todoList) {
        let save = [];
        save.push(
            todo.getId(),
            todo.getName(),
            todo.getProjectId(),
            todo.getDesc(),
            todo.getDate(),
            todo.getPriority(),
            todo.getStatus()
        )
        list.push(save);
    }
    localStorage.setItem("todoList", JSON.stringify(list) );
}

export function getTodoList() {
    let list = todoList;
    return list;
}

function Project(nameInput,idInput){

    let name = nameInput;
    let id = 0;
    if(idInput === "new"){
        if ( projectList.length ){
            let last = projectList.length - 1;
            id = projectList[last].getId() + 1;
        }
    }else id = idInput

    function getId(){
        return id;
    }

    function setName(name){
        name = name;
    }

    function getName(){
        return name;
    }

    return{getId,setName,getName};
}

function Todo(nameInput,idInput,projectIdInput,descriptionInput,dateInput,priorityInput,status){
    let name = nameInput;
    let id = 0;
    if(idInput === "new"){
        if (todoList.length){
            let last = todoList.length - 1;
            id = todoList[last].getId() + 1;
        }
    }else id = idInput

    let projectId = projectIdInput;
    let description = descriptionInput;
    let date = new Date(`${dateInput}`);
    let priority = priorityInput;
    let isDone = status;
    
    function setName(newName){
        name = newName;
    }

    function getName(){
        return name;
    }

    function getId(){
        return id;
    }

    function getProjectId(){
        return projectId;
    }
    
    function setDesc(description){
        description = description;
    }

    function getDesc(){
        return description;
    }
    
    function setDate(newDate){
        date = new Date(`${newDate}`);
    }

    function getDate(){
        return date;
    }

    function setPriority(newPriority){
        priority = newPriority;
    }

    function getPriority(){
        return priority;
    }

    function setStatus(){
        isDone = !isDone;
    }

    function getStatus(){
        return isDone;
    }

    return{
        setName,getName,getId,getProjectId,setDesc,getDesc,
        setDate,getDate,setPriority,getPriority,setStatus,getStatus}
}

export function addProjectData(name,id,output) {
    for (const item of projectList) {
        if (item.getName() === name) {
            return "error";
        }
    }
    let newProject = Project(name,id);
    projectList.push( newProject );
    if(output) return newProject;
}

export function getProjectData(projectID) {
    for (const project of projectList) {
        if ( project.getId() === parseInt(projectID) ) return project
    }
}

export function delProjectData(projectId) {
    projectList.splice(projectId,1);
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].getProjectId() === parseInt(projectId)) {
            todoList[i] = "delete";
        }
    }
    while(todoList.includes("delete")){
        for (let i = 0; i < todoList.length; i++) {
            if( todoList[i] === "delete" ) {
                todoList.splice(i,1);
                i = todoList.length;
            }
        }
    }
}

export function addTodoData(name,id,projectId,description,date,priority,status,output) {
    for (const item of todoList) {
        if (item.getName() === name
            && item.getProjectId() === projectId) {
            return "error";
        }
    }
    let newTodo = Todo(name,id,projectId,description,date,priority,status);
    todoList.push( newTodo );
    if(output) return "done";
}

export function getTodoData(todoID) {
    for (const todo of todoList) {
        if ( todo.getId() === parseInt(todoID) ) return todo
    }
}

export function delTodoData(todoId) {
    todoList.splice(todoId,1);
}

export function editTodoData(name,todoId,description,date,priority){
    let projectID = todoList[todoId].getProjectId();
    for(const item of todoList) {
        if(item.getName() === name && 
            item.getProjectId() === projectID ) {
            if( item.getId().toString() !== todoId ) {
                return "error";
            }
        }
    }
    todoList[todoId].setName(name);
    todoList[todoId].setDesc(description);
    todoList[todoId].setDate(date);
    todoList[todoId].setPriority(priority);
    return "done";
}

export function changeStatusData( todoId ){
    let id = parseInt(todoId)
    todoList[id].setStatus();
}