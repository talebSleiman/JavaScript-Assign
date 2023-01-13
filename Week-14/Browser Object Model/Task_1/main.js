
let nbrs = prompt("Print Number From – To", "Example: 5-20");
nbrs = nbrs.split("-");

let start = nbrs[0];
let end = nbrs[1];

if (nbrs[0] > nbrs[1]) {
    start = nbrs[1];
    end = nbrs[0];
}

for (let i = start; i <= end; i++) {
    console.log(i);
}