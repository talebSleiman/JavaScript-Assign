// Function Arrow Challenge 

// [1] one statement in Function
// [2] convert to Arrow Function
// [3] Print the Output [Arguments May Change]


// let names = function (...name) {
//     return `String [${name.join("], [")}] => Done !`;
// };

// In Arrow Function 
let names = (...name) => `String [${name.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamad", "Ali", "Ibrahim"));
// String [Osama], [Mohamad], [Ali], [Ibrahim] => Done !

// ==============================================================

// [1] Replace ??? In return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside Arguments To Get The Output

let muNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// Regular Function 

function calc(one, two, ...nums) {
    return one + two + nums[0]
}

console.log(calc(10, 20, 50)); // 80