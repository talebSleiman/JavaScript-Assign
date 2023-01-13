
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");


add.onclick = function () {
    if (input.value !== "") {
        addTask();
        deleteTask();
    }
};

function addTask() {
    let div = document.createElement("div");
    div.classList.add("task");
    let span = document.createElement("span");
    span.append(document.createTextNode(input.value));
    let btn = document.createElement("button");
    btn.append(document.createTextNode("Delete"));
    div.appendChild(span);
    div.appendChild(btn);
    tasks.appendChild(div);
    window.localStorage.setItem(`${input.value}`, input.value);
    input.value = "";
}

function getTask(val) {
    let div = document.createElement("div");
    div.classList.add("task");
    let span = document.createElement("span");
    span.append(document.createTextNode(val));
    let btn = document.createElement("button");
    btn.append(document.createTextNode("Delete"));
    div.appendChild(span);
    div.appendChild(btn);
    tasks.appendChild(div);
}

window.onload = () => {
    for (let i = 0; i < window.localStorage.length; i++) {
        getTask(window.localStorage.getItem(window.localStorage.key(i)));
    }
    deleteTask();
};

function deleteTask() {
    let lsDelete = document.querySelectorAll("button");
    lsDelete.forEach((elet) => {
        elet.onclick = () => {
            let span = elet.previousElementSibling.innerHTML;
            elet.parentElement.remove();
            window.localStorage.removeItem(span);
        };
    });
}