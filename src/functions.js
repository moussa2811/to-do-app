import { isSameWeek, isSameDay, compareAsc, compareDesc } from 'date-fns';
import {    saveProjects, getProjectsList, addProjectData, getProjectData, delProjectData,
            saveTodos, getTodoList, addTodoData, editTodoData, getTodoData, delTodoData, changeStatusData } from './data';
import { setLayout, todosView, addProjectView, todoForm, delProjectView } from "./view";

export function pageLoad(){

    let projectList = getProjectsList();
    projectList.sort(
        (a,b)=>{
            return a.getName().localeCompare(  b.getName() );
        }
    );
    setLayout(projectList);
}

export function showTodosFunc(id,filter){
    let idProject = id;
    let todoList = getTodoByID(idProject);

    if (filter !== "all") {
        todoList = filterTodo(todoList,filter);
    }

    todoList.sort( 
        (a,b)=> compareAsc( a.getDate(),b.getDate() )
    )
    let title = id;
    if (title !== "all" &&
        title !== "day" &&
        title !== "week"
        ) {
        title = getProjectData(id).getName();
    }
    todosView(id, title, todoList, filter);
}

function getTodoByID(idProject){
    let todoList = [];
    if(idProject === "all") {
        todoList = getTodoList();
    }else if( idProject === "day" ){
        todoList = getTodoList().filter(
            (item)=> isSameDay( new Date(), item.getDate() )
        )
    }else if( idProject === "week" ){
        todoList = getTodoList().filter(
            (item)=> isSameWeek( new Date(), item.getDate() )
        )
    }else{
        todoList = getTodoList().filter(
            (item)=> item.getProjectId() === parseInt(idProject)
        )
    }

    return todoList;
}

function filterTodo(todoList,filter) {
    let newlist = [];
    if (filter === "done") {
        newlist = todoList.filter(
            (item)=> item.getStatus()
        )
    }else if (filter === "not") {
        newlist = todoList.filter(
            (item)=> {
                let today = new Date();
                if( !isSameDay(today,item.getDate()) ){
                    return !item.getStatus() && ( ( compareAsc( today, item.getDate() ) <= 0 ) )
                }else{
                    return !item.getStatus()
                }
            }
        )
    }else if (filter === "out") {
        newlist = todoList.filter(
            (item)=> {
                let today = new Date();
                if( !isSameDay(today,item.getDate()) ){
                    return !item.getStatus() && ( compareAsc( today, item.getDate() ) > 0 )
                }
            }
        )
    }
    return newlist;
}

export function newProjectFunc(name) {
    let newProject = addProjectData(name,"new",true);
    if (newProject === "error") {
        return "error";
    }
    addProjectView(newProject);
    saveProjects();
    let id = newProject.getId();
    return id;
}

export function delProjectFunc(id) {
    delProjectData(id);
    delProjectView(getProjectsList());
    saveProjects();
    saveTodos();
}

export function todoFormShow(id,projectId){
    todoForm(id,projectId);
}

export function newTodoFunc(name,projectId,description,date,priority){
    let output = addTodoData(name,"new",projectId,description,date,priority,false,true);
    if (output==="done") saveTodos();
    return output;
}

export function editTodoFunc(name,todoId,description,date,priority){
    let output = editTodoData(name,todoId,description,date,priority); 
    if (output==="done") saveTodos();
    return output;
}

export function changeStatusFunc(id){
    changeStatusData(id);
    saveTodos();
}

export function delTodoFunc(id){
    delTodoData(id);
    saveTodos();
}