
let myString = "EElllzzzzzzzeroo";

let ls = myString.split("").filter((elet, index) => {
    return elet !== myString[index + 1] ? elet : "";
}).join("");

console.log(ls);
// Elzero