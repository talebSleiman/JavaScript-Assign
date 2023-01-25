let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();

req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        console.log("JSON Object Content Here");
        console.log("Data Loaded");
    }
};