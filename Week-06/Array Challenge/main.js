
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, counter + (counter / counter)).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + (counter / counter), counter)); // ["Elham", "Mazero"]

console.log(my[zero + (counter / counter)].substr(zero, counter - (counter / counter)) +
    my[counter - (counter / counter)].substr(counter - (counter / counter))); // "Elzero"

console.log(my[counter - (counter / counter)][counter + (counter / counter)] +
    my[counter - (counter / counter)].slice(-(counter / counter)).toUpperCase()); // "rO"