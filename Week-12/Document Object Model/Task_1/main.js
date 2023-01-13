
// Method 1
console.log(document.querySelector("div").innerHTML);
// Method 2
console.log(document.querySelector("#elzero").innerHTML);
// Method 3
console.log(document.querySelector(".element").innerHTML);
// Method 4
console.log(document.querySelector('[name="js"]').innerHTML);
// Method 5
console.log(document.querySelectorAll("div")[0].innerHTML);
// Method 6
console.log(document.querySelectorAll("#elzero")[0].innerHTML);
// Method 7
console.log(document.querySelectorAll(".element")[0].innerHTML);
// Method 8
console.log(document.querySelectorAll('[name="js"]')[0].innerHTML);
// Method 9
console.log(document.getElementById("elzero").innerHTML);
// Method 10
console.log(document.getElementsByTagName("div")[0].innerHTML);
// Method 11
console.log(document.getElementsByClassName("element")[0].innerHTML);
// Method 12
console.log(document.getElementsByName("js")[0].innerHTML);
// Method 13
console.log(document.body.firstElementChild.innerHTML);
// Method 13
console.log(document.body.children[0].innerHTML);
// Method 14
console.log(document.body.childNodes[0].innerHTML);
// Method 15
console.log(document.body.firstChild.innerHTML);