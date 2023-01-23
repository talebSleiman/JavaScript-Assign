let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let re = /([0-9a-f]{3,4}:?){8}/ig;
// let re = /(\w{3,4}:?){8}/ig;
console.log(ip.match(re));