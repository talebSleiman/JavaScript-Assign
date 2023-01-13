// Challenge 1

let a = 10;
let b = "20";
let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]

[++a]
    Value: 11
    Explain: pre increment
[+]
    Explain: arithmetic operation
[+b++]
    Value: 20
    Explain: post increment & unary plus
[+]
    Explain: arithmetic operation
[+c++]
    Value: 80
    Explain: post increment & unary plus
[-]
    Explain: arithmetic operation
[+a++]
    Value: 11
    Explain: post increment & unary plus
*/

// a = 12 & b = "21" & c = 81

/*
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

[++a]
    Value: 13
    Explain: pre increment
[+]
    Explain: arithmetic operation
[-b]
    Value: -21
    Explain: unary negation
[+]
    Explain: arithmetic operation
[+c++]
    Value: 81
    Explain: post increment & unary plus
[-]
    Explain: arithmetic operation
[-a++]
    Value: -13
    Explain: unary negation & post increment
[+]
    Explain: arithmetic operation
[+a]
    Value: 14
    Explain: unary plus
*/

// a = 14 & b = "21" & c = 82
/*
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
[--c]
    Value: 81
    Explain: pre decrement
[+]
    Explain: arithmetic operation
[+b]
    Value: 21
    Explain: unary plus
[+]
    Explain: arithmetic operation
[--a]
    Value: 13
    Explain: pre decrement
[*]
    Explain: arithmetic operation
[+b++]
    Value: 21
    Explain: unary plus & post increment
[-]
    Explain: arithmetic operation
[+b]
    Value: 22
    Explain: unary plus
[*]
    Explain: arithmetic operation
[a]
    Value: 13
    Explain: none
[+]
    Explain: arithmetic operation
[--a]
    Value: 12
    Explain: pre decrement 
[-]
    Explain: arithmetic operation
[+true]
    Value: 1
    Explain: unary plus
*/
// a = 12 & b = "22" & c = 81

// Challenge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); //2000
console.log(-d + f + f + f - +e + +true + +true + +true); //173