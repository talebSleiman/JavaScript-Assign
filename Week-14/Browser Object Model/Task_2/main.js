document.body.style.cssText = "display: flex; align-items: center; justify-content: center; min-height: 100vh;";

let box = document.querySelector(".box");
box.style.cssText = "display: none; position: relative; padding: 20px; background-color: #999; text-align: center";

function Popup() {
    box.style.display = "block";
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Welcome"));
    box.appendChild(h2);
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Welcome To Elzero Web School"));
    box.appendChild(p);
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    btn.style.cssText = "background-color: red; color: white; position: absolute; top: -5px; right: -5px; border-radius: 50%; cursor: pointer;";
    box.appendChild(btn);
    btn.onclick = function () {
        box.remove();
    };
}

setTimeout(Popup, 3000);