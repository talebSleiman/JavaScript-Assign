
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo[arrTwo.length - (arrTwo.length / arrTwo.length)], arrOne[arrOne.length - (arrOne.length / arrOne.length)],
    arrOne.reverse().slice(arrOne.length / arrOne.length), arrTwo.reverse().slice(arrTwo.length / arrTwo.length))
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]