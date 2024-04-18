const str = 'Hello World';

console.log("charAt():", str.charAt(0)); // Output: "H"

console.log("charCodeAt():", str.charCodeAt(0)); // Output: 72

console.log("concat():", str.concat(' ', 'Universe')); // Output: "Hello World Universe"

console.log("indexOf():", str.indexOf('o')); // Output: 4

console.log("lastIndexOf():", str.lastIndexOf('o')); // Output: 7

console.log("search():", str.search('World')); // Output: 6

console.log("match():", str.match(/o/g)); // Output: ["o", "o"]

console.log("replace():", str.replace('World', 'Universe')); // Output: "Hello Universe"

console.log("substr():", str.substr(6, 5)); // Output: "World"

console.log("substring():", str.substring(6, 11)); // Output: "World"

console.log("slice():", str.slice(2, 7)); // Output: "llo W"

console.log("toLowerCase():", str.toLowerCase()); // Output: "   hello world   "

console.log("toLocaleLowerCase():", str.toLocaleLowerCase()); // Output: "   hello world   " (same as toLowerCase())

console.log("toUpperCase():", str.toUpperCase()); // Output: "   HELLO WORLD   "

console.log("toLocaleUpperCase():", str.toLocaleUpperCase()); // Output: "   HELLO WORLD   " (same as toUpperCase())

console.log("toString():", str.toString()); // Output: "   Hello World   " (same as the original string)

console.log("valueOf():", str.valueOf()); // Output: "   Hello World   " (same as toString())

console.log("split():", str.trim().split(' ')); // Output: ["Hello", "World"] (after trimming and splitting by space)

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

const sentence = "hello world";
const titleCaseSentence = toTitleCase(sentence);
console.log(titleCaseSentence); // Output: "Hello World"

var pattern = /me/;
console.log(pattern.test("How are you?")); //true


