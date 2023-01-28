let getData = (link) => {
    return new Promise((resolve, rejecte) => {
        let req = new XMLHttpRequest();
        req.onload = function () {
            if (this.status === 200 && this.readyState === 4) {
                resolve(JSON.parse(this.responseText));
            } else {
                rejecte(Error("No Data Found"));
            }
        };
        req.open("GET", link);
        req.send();
    });
};
getData("./articles.json").then(
    (result) => {
        result.length = 5;
        return result;
    }
).then(
    (res) => {
        for (let i = 0; i < res.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            h3.appendChild(document.createTextNode(res[i]["title"]));
            p.appendChild(document.createTextNode(res[i]["description"]));

            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }
).catch(
    (err) => console.log(err)
);