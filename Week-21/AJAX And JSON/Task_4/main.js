let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();


req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.responseText);
        let divParent = document.createElement("div");
        divParent.id = "data";
        for (let i = 0; i < mainData.length; i++) {
            let divChild = document.createElement("div");
            let h2 = document.createElement("h2");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            h2.appendChild(document.createTextNode(mainData[i]["title"]));
            p1.appendChild(document.createTextNode(mainData[i]["body"]));
            p2.appendChild(document.createTextNode(`Author: ${mainData[i]["author"]}`));
            p3.appendChild(document.createTextNode(`Category: ${mainData[i]["category"]}`));

            divChild.appendChild(h2);
            divChild.appendChild(p1);
            divChild.appendChild(p2);
            divChild.appendChild(p3);

            divParent.appendChild(divChild);
        }
        document.body.prepend(divParent);
    }
};