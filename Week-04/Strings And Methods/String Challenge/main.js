/*
String Challenge 
All Solutions Must be in One Chain 
You can use Concatenate
*/

let a = "Elzero Web School";

// Include This methods in your solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ")[0]); // [Elzero]

// Use only "substr" method + template literals in your solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// Solution must be dynamic and string may change
console.log(`${a.charAt(0).toLowerCase()}${a.substring(1, a.length - 1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOOl