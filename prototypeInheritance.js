console.log("--------------------START----------------------");
//prototype object

let car = {
    model: 'BMW',
    YOP: '2024',
    owner: 'ankur',
    colour: 'black',
    details: function () {
        console.log(`Car details are as follows:  ${this.model},${this.owner},${this.colour},${this.details}`);
    }
}

//child object
let newcar = Object.create(car)
console.log(newcar); //empty array {}
newcar.model = 'audi'
console.log("new car model  :" + car.model);
newcar.newprp = 'something'
console.log("new car details  :" + newcar);

console.log(Object.getPrototypeOf(newcar));
console.log(newcar.details())


// Array.prototype.sum = function () {
//     console.log("new method");
// }
// let arr = [1, 2, 3]
// sum1 = arr.sum();
// console.log(sum1);
console.log("----------------------END--------------------");