
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let ls = numsAndStrings.filter((elet) => typeof elet === 'number' ? elet : "").map((val) => -val);

console.log(ls);
// [-1, -10, 10, 20, -5, -3]