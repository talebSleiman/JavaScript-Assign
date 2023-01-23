console.log(new Date("Oct 19 2000"));
console.log(new Date(Date.parse("Oct 19 2000")));
let date = new Date();
date.setFullYear(2000, 9, 19);
date.setHours(0, 0, 0);
console.log(date);