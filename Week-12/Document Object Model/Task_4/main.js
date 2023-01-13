
// Output
/* <div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div> */

let first = document.getElementsByClassName("one")[0];
let firstVal = document.getElementsByClassName("one")[0].textContent;

let second = document.getElementsByClassName("two")[0];
let secondVal = document.getElementsByClassName("two")[0].textContent;

first.setAttribute("title", secondVal);
first.textContent = `${secondVal}`;

second.setAttribute("title", firstVal);
second.textContent = `${firstVal} 2`;