
let p = document.querySelector("p");
p.remove();

let elet = document.querySelector(".our-element");

let divOne = document.createElement("div");

divOne.classList.add("start");
divOne.setAttribute("title", "Start Element");
divOne.setAttribute("data-value", "Start");

let text = document.createTextNode("Start");
divOne.appendChild(text);

elet.before(divOne);

let divTwo = document.createElement("div");

divTwo.classList.add("end");
divTwo.setAttribute("title", "End Element");
divTwo.setAttribute("data-value", "End");

text = document.createTextNode("End");
divTwo.appendChild(text);

elet.after(divTwo);
