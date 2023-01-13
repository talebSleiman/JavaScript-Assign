let fonts = document.querySelector("[name='fonts']");
let colors = document.querySelector("[name='colors']");
let sizes = document.querySelector("[name='sizes']");

let fontArray = ["Open Sans", "Cairo", "Roboto"];
let colorArray = ["black", "red", "green", "blue", "yellow", "pink"];

fontArray.forEach((elet) => {
    let option = document.createElement("option");
    option.setAttribute("value", elet);
    option.innerHTML = elet;
    fonts.append(option);
});

colorArray.forEach((elet) => {
    let option = document.createElement("option");
    option.setAttribute("value", elet);
    option.innerHTML = elet;
    colors.append(option);
});

for (let i = 16; i <= 30; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerHTML = i;
    sizes.append(option);
}

let fontVal = window.localStorage.getItem("font");
let colorVal = window.localStorage.getItem("color");
let sizeVal = window.localStorage.getItem("size");

if (fontVal) {
    document.body.style.fontFamily = fontVal;
    document.querySelector(`select option[value="${fontVal}"]`).setAttribute("selected", "true");
}
if (colorVal) {
    document.body.style.backgroundColor = colorVal;
    document.querySelector(`select option[value="${colorVal}"]`).setAttribute("selected", "true");
}
if (sizeVal) {
    document.body.style.fontSize = `${sizeVal}px`;
    document.querySelector(`select option[value="${sizeVal}"]`).setAttribute("selected", "true");
}

fonts.onchange = function (e) {
    window.localStorage.setItem("font", e.target.value);
    document.body.style.fontFamily = e.target.value;
};

colors.onchange = function (e) {
    window.localStorage.setItem("color", e.target.value);
    document.body.style.backgroundColor = e.target.value;
};

sizes.onchange = function (e) {
    window.localStorage.setItem("size", e.target.value);
    document.body.style.fontSize = `${e.target.value}px`;
};