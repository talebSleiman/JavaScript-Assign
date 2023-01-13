
let count = document.querySelector(".counter");
function counterDown() {
    count.innerHTML -= 1;
    if (count.innerHTML === "0") {
        clearInterval(counter);
    }
}
let counter = setInterval(counterDown, 1000);