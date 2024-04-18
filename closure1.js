// //example 1
// function fun() {

//     var a = 4; // 'a' is the local variable, created by the fun()  

//     function innerfun() // the innerfun() is the inner function, or a closure  
//     {
//         return a;
//     }
//     return innerfun;

// }
// var output = fun();
// console.log(output()); //4

//example 2
function fun(b) {
    function innerfun(c) {
        return c * b;
    }
    return innerfun;
}
var output = fun(5);
console.log(output(5)); //16

//example 3
// function fun() {
//     function closure(val) {
//         return function () {
//             return val;
//         }
//     }
//     var a = [];
//     var i;
//     for (i = 0; i < 5; i++) {
//         a[i] = closure(i);
//     }
//     return a;
// }
// var output = fun();
// console.log(output[0]()); //0
// console.log(output[1]()); //1
// console.log(output[2]()); //2
// console.log(output[3]()); //3
// console.log(output[4]()); //4