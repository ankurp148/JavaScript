//1.function declation

function add(a, b) {
    return a + b;
}

let sum = add(4, 5)
console.log(sum);

//2.function expression or annonymus function
let mul = function (a, b) {
    return a * b;
}
let m = mul(4, 5);
console.log(m);

//3.arrow function
let l = (t1, t2) => (t1 - t2);
let sub = l(20, 15)
console.log(sub);

//4.IIFE
(function def() {
    console.log("hello moto");
})
    ();

//RECURSIVE FUNCTION
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let fact = factorial(5);
console.log(fact);

//higher order function
function addition(a, b) {
    return a + b;
}
function operate(add, a, b) {
    return add(a, b)
}
let p = operate(add, 5, 6)
console.log(p);