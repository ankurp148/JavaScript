//for loop
console.log("----------------FOR LOOP----------------");
let arr = [20, 15, 11, 10, 21, "hello", null]
for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 10) {
        console.log("The value 10 is found at index:", index);
        break; // Optional: If you only want to find the first occurrence of 10
    }
    console.log(arr[index]);
}

//EXAMPLE:2
console.log("-----------------EXAMPLE:2-----------------------");
let arr1 = ["hello", "hii", 20, 15, 99]
let valueAtIndex3 = arr1[2];
for (let index = 0; index < arr1.length; index++) {
    console.log("VALUE AT INDEX :" + valueAtIndex3);
    console.log(arr1[index]);
}
//EXAMPLE:3
console.log("-----------------EXAMPLE:3-----------------------");
let arr2 = ["hello", "hii", 20, 15, 99];
let d; // Initialize the variable

for (let index = 0; index < arr2.length; index++) {
    d = arr2[index]; // Update d with the value of each element in the array
    if (d === arr2[2]) { // Check if the current element is equal to the third element of the array
        console.log("Value of index:", d);
    }
}

console.log("-----------------FOR EACH LOOP--------------------");
//for each loop
const array = [1, 2, 3, 4, 5]
array.forEach(element => {
    console.log("RESULT:" + element * 2);
});




console.log("-----------------WHILE LOOP---------------------");
// //while loop
// var a = 10
// while (a == 20) {
//     console.log(a);
// }




console.log("-----------------DO WHILE LOOP----------------------");
// //do while loop
// var b = 25
// do {
//     console.log(b);

// } while (b == 25);

