let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Method 1
console.log([...numsOne, ...numsTwo]);
// Method 2
console.log(numsOne.concat(numsTwo));
// Method 3
console.log(numsOne.concat(...numsTwo));

// Needed Output
// [1, 2, 3, 4, 5, 6]