//FUNCTION HOISTING FOR STANDARD FUNCTION
console.log(math());

function math(a, b) {
    return 7 + 8;
}


//VARIAVLE HOISTING
console.log(a); //undefined
var a = 10
console.log(a); //10


//VARIABLE HOISTING FOR LET 
console.log(b); // ReferenceError: Cannot access 'a' before initialization
console.log(t); // ReferenceError: b is not defined

let b = "cat";

console.log(b); // "cat"


//VARIABLE HOISTING FOR CONST
console.log(c); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: b is not defined

const c = 10

console.log(c); // 10