// Number Challenge 

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest number in all variable and Return Integer 
console.log(parseInt(Math.min(a, b, c, d)));

// Use variables a + d one time to get the Needed Output
console.log(Math.pow(a, Math.trunc(d)));//10000

// Get Integer "2" From d variable with 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.ceil(d) - 1);
console.log(Math.round(d));

// Use Variables b + d to get this Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(b) / Math.ceil(d)); // 67 => Number