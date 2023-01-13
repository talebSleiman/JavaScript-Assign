let btn = document.forms[0];

btn.onsubmit = function (e) {
    let eletNbr = document.getElementsByClassName("input")[0].value;
    let eletText = document.getElementsByClassName("input")[1].value;
    let eletType = document.getElementsByClassName("input")[2].value.toLowerCase();
    let result = document.querySelector(".results");
    if (eletNbr !== "" && eletNbr > 0 && eletText !== "") {
        result.innerHTML = "";
        for (let i = 0; i < eletNbr; i++) {
            let element = document.createElement(`${eletType}`);

            let text = document.createTextNode(`${eletText}`);
            element.appendChild(text);

            element.className = "box";
            element.title = "Element";
            element.id = `id-${i + 1}`;

            result.appendChild(element);
        }
    }
    e.preventDefault();
}