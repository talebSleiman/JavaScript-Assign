
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let start = 0;
let index = 0;
let j = 1;

for (start; start < friends.length; start++) {
    if (friends[start][0] == letter.toUpperCase()) continue;
    console.log(`${j++} => ${friends[start]}`);
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"