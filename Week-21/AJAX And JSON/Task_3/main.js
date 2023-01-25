let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();


req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.responseText);
        console.log(mainData);
        setTimeout(() => {
            for (let i = 0; i < mainData.length; i++) {
                mainData[i]["category"] = "All"
            }
            console.log(mainData);
        }, 2000);
        setTimeout(() => {
            let updatedData = JSON.stringify(mainData);
            console.log(updatedData);
        }, 3000);
    }
};

