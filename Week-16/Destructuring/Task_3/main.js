let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
arr3 = arr3.concat(arr1);
// ['Haytham', 'Shady', 'Mahmoud', 'Ahmed', 'Sameh', 'Sayed']

// Write Your Destructuring Assignment Here
let [, a, b, c] = arr3;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed