let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


chars = chars.sort();
let count = 0;

chars.forEach((e) => {
    if (typeof e === 'number') count++;
});

console.log(chars.copyWithin(0, count, count + count));