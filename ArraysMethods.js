//push() method
console.log("---PUSH METHOD---");
let f = ['apple', 'banana', 'chiku']
console.log(f);
f.push('grapes')
console.log(f); //[ 'apple', 'banana', 'chiku', 'grapes' ]

//concat() method
console.log("---CONCAT METHOD---");
let g = [4, 3, 28]
let a = f.concat(g)
console.log(a); //[ 'apple', 'banana', 'chiku', 'grapes', 4, 3, 28 ]

//find() method
console.log("---FIND METHOD---");
let h = [44, 3, 248]
var found = h.find(element => element > 44)
console.log(found); //248

//findIndexOf() method
console.log("---FINDINDEX METHOD---");
var v = h.findIndex(element => element > 44)
console.log(v); //2

//forEach() method
console.log("---FOREACH METHOD---");
const numbers = [12, 28, 93];
numbers.forEach((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});
//Element at index 0 is: 12
//Element at index 1 is: 28
//Element at index 2 is: 93

//includes() method
console.log("---INCLUDE METHOD---");
let l = [7, 5, 9, 1, 7, 5, 2, 4]
console.log(l.includes(1)); //true

//indexOf() method
console.log("---INDEXOF METHOD---");
console.log(l.indexOf(5, 3)); //4

//lastIndexOf() method
console.log("---LAST INDEX OF METHOD---");
let l1 = [7, 9, 1, 7, 5, 2, 4]
console.log(l1.lastIndexOf(7)); //3

//isArray() method
console.log("---ISARRAY METHOD---");
var s = "hello"
let q = ['hello']
console.log(Array.isArray(s)); //false
console.log(Array.isArray(q)); //true

//join() method
console.log("---JOIN METHOD---");
let l2 = [91, 4, 0, 422, 5, 8, 6]
console.log(l2.join(""));

//pop() method
console.log("---POP METHOD---");
var v = [7, 5, 6]
console.log(v.pop()); //6

//push() method
console.log("---PUSH METHOD---");
var w = [7, 6, 9, 37]
console.log(w.push(88)); //5
console.log(w); //[ 7, 6, 9, 37, 88 ]

//reverse() method
console.log("---REVERSE METHOD---");
let z = [7, 87, 32, 1, 22]
z.reverse()
console.log(z); //[ 22, 1, 32, 87, 7 ]

//sort() method
console.log("---SORT METHOD---");
z.sort((a, b) => a - b)
console.log("accending:" + z); //1,7,22,32,87
z.sort((a, b) => b - a)
console.log("decending:" + z); //87,32,22,7,1

//splice() method
console.log("---SPILICE METHOD---");
let array = [1, 2, 3, 4, 5];
//adding splice
array.splice(4, 0, '77', '99')
console.log(array); // [1,2,3,4,'77','99',5]
array.splice(2, 2); // Remove 2 elements starting from index 2
console.log(array); // Output: [1, 2,'77','99',5]

//slice() method (substring)
console.log("---SLICE METHOD---");
var a1 = [9, 6, 4, 2, 3, 1, 4]
console.log(a1);
let lo = a1.slice(2, 4)
console.log(lo); //[  9, 6, 4, 2, 3, 1, 4]

//toLocalString() method
console.log("---TO_LOCAL_STRING METHOD---");
var b = [4, 6, 9]
console.log(b.toLocaleString()); //4,6,9

//toString() method
console.log("---TO_STRING METHOD---");
var b = [4, 6, 9]
console.log(b.toString()); //4,6,9

//filter() method
console.log("---FILTER METHOD---");
let z1 = [7, 87, 32, 1, 22]
console.log(z1.filter(ele => ele % 2 == 0)) //[ 32, 22 ]

//map() method
console.log("---MAP METHOD---");
let z2 = [1, 2, 3, 4, 5, 6]
let m1 = z2.map((ele) => {
    ele * 2
})
console.log(m1);

//reduce() method
console.log("---REDUCE METHOD---");
let num = [1, 2, 3, 4, 5, 6]
let sum = num.reduce((acc, n) => acc + n, 0);
console.log(sum); //21
//1st-->0+1=1
//2nd-->1+2=3
//3rd-->3+3=6
//4th-->6+4=10
//5th-->10+5=15
//6th-->15+6=21

let numm = num.reduce((max, n) => {
    if (max > n) {
        return max;
    } else {
        return n;
    }
}, num[0])
console.log(numm);//6

//shift() method
console.log("---SHIFT METHOD---");
let j = [7, 6, 2, 4]
console.log(j.shift()); //7
console.log(j); //[ 6, 2, 4 ]

//unshift() method
console.log("---UNSHIFT METHOD---");
let arr = [23, 76, 19, 94];
console.log(arr.unshift(28, 65));
console.log(arr); //[ 28, 65, 23, 76, 19, 94 ]

//every() method
console.log("---EVERY METHOD---");
let p = [4, 8, 3, 4, 7, 122, 4, 5]
let p1 = p.every((e) => e % 2 === 0)
console.log(p1); //false

let p2 = p.every((e) => e > 0)
console.log(p2); //true

//values() method
console.log("---VALUES METHOD---");
// Input array contain some elements.
let arra = ['a', 'gfg', 'c', 'n'];

// Here arra.values() method is called.
let iterator = arra.values();

for (let elements of iterator) {
    console.log(elements);
}


