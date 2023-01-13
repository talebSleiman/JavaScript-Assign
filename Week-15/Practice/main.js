let lis = document.querySelectorAll("li");
let exp = document.querySelector(".experiment");

let color = window.localStorage.getItem("color");
if (color) {
    exp.style.backgroundColor = color;
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color=${color}]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        window.localStorage.setItem("color", e.target.dataset.color);
        exp.style.backgroundColor = e.target.dataset.color;
    });
});