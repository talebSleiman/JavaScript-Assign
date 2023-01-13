
let index = 10;
let jump = 2;
let end = 0;

let i = index;
for (; ;) {
  if (i < jump + jump) break;
  console.log(i);
  i -= jump;
}

// Output
// 10
// 8
// 6
// 4