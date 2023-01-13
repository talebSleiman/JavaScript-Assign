
let nums = [2, 12, 11, 5, 10, 1, 99];

let ls = nums.reduce((elet, val) => {
    return val % 2 === 0 ? elet * val : elet + val;
}, 1);

console.log(ls);
// 500