let addClass = document.querySelector(".classes-to-add");
let rmClass = document.querySelector(".classes-to-remove");
let current = document.querySelector("div[title='Current']");
let classLs = document.querySelector(".classes-list > div");

let ls = [...current.classList];

function showClasses() {
    classLs.innerHTML = "";
    if (ls.length === 0) {
        classLs.append("No Classes To Show");
        return;
    }
    ls.sort();
    for (let i = 0; i < ls.length; i++) {
        let span = document.createElement("span");
        let text = document.createTextNode(`${ls[i]}`);
        span.appendChild(text);
        classLs.append(span);
    }
}

showClasses();

addClass.onblur = function (e) {
    if (e.target.value !== "") {
        let val = e.target.value.toLowerCase().split(" ");
        val.forEach(function (el) {
            if (!ls.includes(el) && el !== "") {
                ls.push(el);
                current.classList.add(`${el}`);
            }
        });
        e.target.value = "";
        showClasses();
    }
};


rmClass.onblur = function (e) {
    if (e.target.value !== "") {
        let val = e.target.value.toLowerCase().split(" ");
        val.forEach(function (el) {
            let i = ls.indexOf(el);
            if (i !== -1) {
                ls.splice(i, 1);
                current.classList.remove(`${el}`);
            }
        });
        e.target.value = "";
        showClasses();
    }
};
