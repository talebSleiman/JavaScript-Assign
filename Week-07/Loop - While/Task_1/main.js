
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let j = 1;
// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (counter < friends.length) {
    if (typeof friends[counter] === 'number' || friends[counter][index] == 'A') {
        counter++;
        continue;
    }
    console.log(`${j++} => ${friends[counter]}`);
    counter++;
}