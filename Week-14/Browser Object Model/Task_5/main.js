
let count = document.querySelector(".counter");
function counterDown() {
    count.innerHTML -= 1;
    if (count.innerHTML === "0") {
        clearInterval(counter);
    }
    if (count.innerHTML === "5") {
        window.open("https://elzero.org/", "", "width=600, height=600, left=400, top=400");
    }
}
let counter = setInterval(counterDown, 1000);