
// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

// Solution 1
// let checker = (zName) => {
//     return (status) => {
//         return (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
// };

// Solution 2
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble