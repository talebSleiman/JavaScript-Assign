
let start = 0;
let swappedName = "elZerO";
let name = "";

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toUpperCase()) name += swappedName[i].toLowerCase();
    else name += swappedName[i].toUpperCase();
}
console.log(name);

// Output
"ELzERo"