let theName = "Elzero";

// Method 1 
console.log([...theName]);
// Method 2 
console.log(theName.split(""));
// Method 3 
console.log(Array.from(theName));
// Method 4 
let ls = [];
for (let i = 0; i < theName.length; i++) {
    ls.push(theName[i]);
}
console.log(ls);
// Method 5 
// let obj = Object.assign([...theName])
let obj = Object.assign([],theName)
console.log(obj);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']