fetch("./articles.json").then(
    (result) => {
        let data = result.json();
        return data;
    }
).then(
    (result) => {
        result.length = 5;
        for (let i = 0; i < result.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            h3.appendChild(document.createTextNode(result[i]["title"]));
            p.appendChild(document.createTextNode(result[i]["description"]));

            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }
).catch(
    (err) => console.log("No Data Found")
);

// Using Async and Await Method

// async function fetchData() {
//     try {
//         let data = await fetch("./articles.json");
//         data = await data.json()
//         data.length = 5;
//         for (let i = 0; i < data.length; i++) {
//             let div = document.createElement("div");
//             let h3 = document.createElement("h3");
//             let p = document.createElement("p");

//             h3.appendChild(document.createTextNode(data[i]["title"]));
//             p.appendChild(document.createTextNode(data[i]["description"]));

//             div.appendChild(h3);
//             div.appendChild(p);
//             document.body.appendChild(div);
//         }
//     } catch (err) {
//         console.log("No Data Found");
//     }
// }

// fetchData();