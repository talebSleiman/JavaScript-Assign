
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr2[arr2.length - (arr2.length / arr2.length) - (arr2.length / arr2.length)].toLowerCase(),
    arr1[arr1.length - (arr1.length / arr1.length)].toLowerCase(),
    arr2[arr2.length - (arr2.length / arr2.length)].toLowerCase());
allArrs = allArrs.join("");
console.log(allArrs); // fxy