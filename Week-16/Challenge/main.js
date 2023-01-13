
let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"], },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"], },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"], },
];

switch (chosen) {
    case 1:
        show(myFriends[chosen - 1]);
        break;
    case 2:
        show(myFriends[chosen - 1]);
        break;
    case 3:
        show(myFriends[chosen - 1]);
        break;

    default:
        console.log(`Incorrect Chosen`);
}

function show({ title: t, age: a, available: f, skills: [, two] }) {
    console.log(`${t}`);
    console.log(`${a}`);
    console.log(`${f ? "Available" : "Not Available"}`);
    console.log(`${two}`);
}