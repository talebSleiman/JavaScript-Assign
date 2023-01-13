let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

let myEmployess = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

let nbrAdmin = 0;
let counter = 1;
let i, j;

document.write(`<div>We Have X Admins</div>`);

for (i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break;
    nbrAdmin++;
}

document.write(`<div>We have ${nbrAdmin} Admins</div>`);

for (i = 0; i < nbrAdmin; i++) {
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}</div>`);
    document.write(`<div>Team Members:</div>`);
    for (j = 0; j < myEmployess.length; j++) {
        if (myEmployess[j][0] === myAdmins[i][0]) {
            document.write(`<div>-${counter++} ${myEmployess[j]}</div>`);
        }
    }
    counter = 1;
}