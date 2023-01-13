/*
Higher Order Function Challenge

You Can Use:
    - ,
    - _
    - space
    - True => 1 => One Time Only In The Code

You Cannot Use:
    - Numbers
    - Letters

You Must Use [Filter - Map - Reduce - Your Knowledge]
Order Is Not Important
All In One Chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter((val) => {
    return isNaN(parseInt(val)) ? val : "";
}).map((elet) => {
    return elet === '_' ? " " : elet;
}).reduce((elet, current) => {
    return `${elet}${current}`;
}).split("");

solution.pop();

console.log(solution.join("").slice(1)); // Elzero Web School