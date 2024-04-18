//DURING HOISTING

//var a 
//let c
//var f

//function add(a,b)
//{let z}

//VARIABLE HOISTING
console.log(a);
var a
a = 10

//FUNCTION HOISTING
function add(a, b) {
    console.log(a + b);
    let z = "java"
}

//VARIABLE HOISTING INCASE OF LET
console.log(c);
let c

//FUNCTION HOISTING IN CASE OF FUNCTION EXPRESSION

//f(8,9)
//undefined(8,9)


//FUNCTION EXPRESSION 
var f = function add(a, b) {
    console.log(a + b);
}