//STANDARD FUNCTION

function add(a, b) {
    console.log(a + b);
}
add(2, 3)//invoking the function



//FUNCTION EXPRESSION
let mul = function (a, b) {
    return a * b
}
    (8, 6)//function calling
console.log(mul);


//IMMEDIATELY INVOKABLE FUNCTION ()() IIF
(function iif(a, b) {
    console.log(a * b);
})
    (5, 6)

//ARROW FUNCTION ()=>{}
let arrow = (a, b) => a - b;
console.log(arrow(10, 3));
(10, 3)