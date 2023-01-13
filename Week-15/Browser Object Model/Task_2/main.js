let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let select = document.querySelector("select");

text1.onkeyup = function (e) {
    window.sessionStorage.setItem("text1", e.target.value);
};
text2.onkeyup = function (e) {
    window.sessionStorage.setItem("text2", e.target.value);
};
text3.onkeyup = function (e) {
    window.sessionStorage.setItem("text3", e.target.value);
};
select.onchange = function (e) {
    window.sessionStorage.setItem("select", e.target.value)
}


// text1.onblur = (e) => {
//     window.sessionStorage.setItem("text1", e.target.value);
// };
// text2.onblur = (e) => {
//     window.sessionStorage.setItem("text2", e.target.value);
// };
// text3.onblur = (e) => {
//     window.sessionStorage.setItem("text3", e.target.value);
// };

window.onload = function () {
    if (window.sessionStorage.getItem("text1")) {
        text1.value = window.sessionStorage.getItem("text1");
    }
    if (window.sessionStorage.getItem("text2")) {
        text2.value = window.sessionStorage.getItem("text2");
    }
    if (window.sessionStorage.getItem("text3")) {
        text3.value = window.sessionStorage.getItem("text3");
    }
    if (window.sessionStorage.getItem("select")) {
        document.querySelector(`select option[value="${window.sessionStorage.getItem("select")}"]`).setAttribute("selected", "true");
    }
};