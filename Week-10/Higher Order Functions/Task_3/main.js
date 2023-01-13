
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let ls = myArray.reduce((elet, current) => {
    return typeof current === 'string' ? `${elet}${current}` : `${elet}${current.reduce((el, cu) => `${el}${cu}`)}`;
});

console.log(ls);
// Elzero