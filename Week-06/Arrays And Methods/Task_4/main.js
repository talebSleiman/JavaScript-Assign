
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.reverse()[0][0].slice(words.length - (words.length / words.length)).toUpperCase()); // ZERO