let theNumber = 100020003000;

let result = parseInt([...new Set(theNumber.toString().split("0"))].join(""));
console.log(result);

// Needed Output
// 123