import { compareAsc, isSameDay } from 'date-fns';
import { getTodoData } from './data';

const body = document.querySelector("body");

export function setLayout(projectList){
    body.classList.add("wrapper");
    let head = header();
    let asid = aside(projectList);
    let main = document.createElement("div");
    main.classList.add("main","flex");
    body.append(head,asid,main);
}

function header() {
    let header = document.createElement("div");
    header.classList.add("header","flex");
    let title = document.createElement("h1");
    title.innerText = "To Do App - The Odin Project";
    header.appendChild(title);
    return header;
}

function aside(projectList) {
    let asid = document.createElement("div");
    asid.classList.add("aside","flex");
    const list = projectList;

    let allPro = document.createElement("div");
    allPro.classList.add("projects","selected");
    allPro.setAttribute("data-project","all")
    allPro.innerText = "All";
    asid.appendChild(allPro);
    
    let dayPro = document.createElement("div");
    dayPro.classList.add("projects");
    dayPro.setAttribute("data-project","day")
    dayPro.innerText = "Today";
    asid.appendChild(dayPro);

    let weekPro = document.createElement("div");
    weekPro.classList.add("projects");
    weekPro.setAttribute("data-project","week")
    weekPro.innerText = "This Week";
    asid.appendChild(weekPro);

    for (const item of list) {
        let div = document.createElement("div");
        div.classList.add("projects");
        div.setAttribute("data-project",`${item.getId()}`)
        div.innerText = item.getName();
        asid.appendChild(div);
    }

    let addForm = document.createElement("div");
    addForm.classList.add("addProject","flex");
    let input = document.createElement("input");
    input.setAttribute("id","addProjectTitle");
    input.setAttribute("type","text");
    input.setAttribute("value","New Project");
    let btn = document.createElement("button");
    btn.classList.add("green");
    btn.setAttribute("id","addProjectBtn");
    btn.innerText = "Add";
    addForm.append(input,btn);
    asid.appendChild(addForm);
    return asid;
}

export function todosView(id,title,todoList,filter) {
    if (document.querySelector(".selected")) {
        document.querySelector(".selected").classList.remove("selected");
    }
    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.append(
        todoViewHead(id,title,filter),
        todoViewBody(id,title,todoList)
    );
    document.querySelector(`.projects[data-project="${id}"]`).classList.add("selected");
}

function todoViewHead(id,title,filter){
    let div = document.createElement("div");
    div.classList.add("head","flex");
    div.setAttribute("data-project",`${id}`)
    let h2 = document.createElement("h2");
    h2.innerText = title;
    div.appendChild(h2);
    if (id !== title) {
        let btn = document.createElement("button");
        btn.classList.add("red");
        btn.setAttribute("id","delPro");
        btn.innerText = "Delete";
        div.appendChild(btn);
    }
    let select = document.createElement("select");
    select.setAttribute("id","filter");

    let option0 = document.createElement("option");
    option0.setAttribute("value","all");
    if(filter === "all") option0.setAttribute("selected","selected")
    option0.innerText = "All";
    select.appendChild(option0);

    let option1 = document.createElement("option");
    option1.setAttribute("value","done");
    if(filter === "done") option1.setAttribute("selected","selected")
    option1.innerText = "Done";
    select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value","not");
    if(filter === "not") option2.setAttribute("selected","selected")
    option2.innerText = "Not Done";
    select.appendChild(option2);

    let option3 = document.createElement("option");
    option3.setAttribute("value","out");
    if(filter === "out") option3.setAttribute("selected","selected")
    option3.innerText = "Out Dated";
    select.appendChild(option3);
    
    div.appendChild(select);
    return div;
}

function todoViewBody(id,title,todoList){
    let list = todoList;
    let div = document.createElement("div");
    div.classList.add("content","flex");

    if (id !== title) {
        let btn = document.createElement("button");
        btn.classList.add("green");
        btn.setAttribute("id","newTodo");
        btn.innerText = "New";
        div.appendChild(btn);
    }

    for (const item of list) {
        div.appendChild( todoDiv(item) );
    }
    return div;
}

function todoDiv(item) {
    let id = item.getId();
    let name = item.getName();

    let date = item.getDate();
    let dd = `${date.getDate()}`.padStart(2, '0');
    let mm = `${date.getMonth() + 1}`.padStart(2, '0');
    let yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;

    let priority = item.getPriority();
    let status = item.getStatus();

    let div = document.createElement("div");
    div.classList.add("todo","flex",priority);
    div.setAttribute("data-todo",`${id}`);

    let leftdiv = document.createElement("div");
    leftdiv.classList.add("left","flex");

    let checkBox = document.createElement("div");
    checkBox.classList.add("checkbox");
    if (status) {
        checkBox.classList.add("done");
    }else {
        let today = new Date()
        let dd = `${today.getDate()}`.padStart(2, '0');
        let mm = `${today.getMonth() + 1}`.padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        if( !isSameDay( new Date(today), new Date(date)) ){
            if ( compareAsc( new Date(today), new Date(date) ) > 0 ) {
                checkBox.classList.add("outdated");
            }
        }
    }

    let title = document.createElement("h3");
    title.classList.add("editTodo");
    title.innerText = name;

    leftdiv.append(checkBox,title);


    let rightdiv = document.createElement("div");
    rightdiv.classList.add("right","flex");

    let dateSpan = document.createElement("span");
    dateSpan.innerText = date;

    let prioritySpan = document.createElement("span");
    prioritySpan.innerText = priority;

    let btn = document.createElement("button");
    btn.classList.add("delTodo","red");
    btn.innerText = "X";

    rightdiv.append(dateSpan,prioritySpan,btn);

    div.append(leftdiv,rightdiv);
    return div;
}

export function addProjectView(project){
    let aside = document.querySelector(".aside");
    let div = document.createElement("div");
    let id = project.getId();
    div.classList.add("projects");
    div.setAttribute("data-project",`${id}`);
    div.innerText = project.getName();
    aside.insertBefore( div,aside.querySelector(".addProject") );
}

export function delProjectView(projectList){
    let body = document.querySelector(".wrapper");
    let main = document.querySelector(".main");
    body.removeChild(document.querySelector(".aside"))
    body.insertBefore( aside(projectList) , main );
}

export function todoForm(todoId,projectID){
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoForm","flex");
    let h2 = document.createElement("h2");
    h2.innerText = "Add New Todo";
    todoDiv.appendChild(h2);

    let form = document.createElement("form");
    form.classList.add("flex");
    let priorityList = ["high","mid","low"];

    let name,desc,date,priority;
    if (todoId === "none") {
        name = "New Todo Name"; 
        desc = "New Todo Description"; 

        date = new Date();
        let dd = `${date.getDate()}`.padStart(2, '0');
        let mm = `${date.getMonth() + 1}`.padStart(2, '0');
        let yyyy = date.getFullYear();
        date = `${yyyy}-${mm}-${dd}`;

        priority = "high";
    }else{
        let todo = getTodoData(todoId);
        name = todo.getName();
        desc = todo.getDesc();

        date = todo.getDate();
        let dd = `${date.getDate()}`.padStart(2, '0');
        let mm = `${date.getMonth() + 1}`.padStart(2, '0');
        let yyyy = date.getFullYear();
        date = `${yyyy}-${mm}-${dd}`;

        priority = todo.getPriority();
    }

    let inputName = document.createElement("input");
    inputName.setAttribute("type","text");
    inputName.setAttribute("id","todoName");
    inputName.setAttribute("required","required");
    inputName.setAttribute("value",name);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("id","todoDesc");
    textArea.setAttribute("value",desc);
    textArea.setAttribute("cols","50");
    textArea.setAttribute("rows","10");
    textArea.innerText = desc;

    let inputDiv = document.createElement("div");
    let inputDate = document.createElement("input");
    inputDate.setAttribute("type","date");
    inputDate.setAttribute("id","todoDate");
    inputDate.setAttribute("value",date);

    let select = document.createElement("select");
    select.setAttribute("id","todoPriority");
    for (const option of priorityList) {
        let opt = document.createElement("option");
        opt.setAttribute("value",option);
        opt.innerText = option;
        if(option === priority) opt.setAttribute("selected","selected")
        select.appendChild(opt);
    }
    inputDiv.append(inputDate,select);

    let btnDiv = document.createElement("div");
    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("id","saveTodo");
    saveBtn.setAttribute("data-todo",todoId);
    saveBtn.setAttribute("data-project",projectID);
    saveBtn.classList.add("green");
    saveBtn.innerText = "Save";
    let cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id","cancel")
    cancelBtn.classList.add("red");
    cancelBtn.innerText = "Cancel";
    btnDiv.append(saveBtn,cancelBtn);

    form.append(inputName,textArea,inputDiv,btnDiv);
    todoDiv.appendChild(form);
    let wrapper = document.querySelector(".wrapper");
    wrapper.insertBefore( todoDiv , wrapper.firstChild );
}