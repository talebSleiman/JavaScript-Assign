
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ls = mix.map((elet) => {
    return typeof elet === 'string' ? elet : "";
}).reduce((elet, current) => {
    return `${elet}${current}`;
});

console.log(ls);
// Elzero