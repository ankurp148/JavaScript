//object constructor

const person = new Object();

person.firstName = "Ankur";
person.food = "Biryani";
person.age = 26;
person.eyeColor = "brown";

console.log(person.firstName);
console.log(person.food);
console.log(person.age);
console.log(person.eyeColor);
console.log(person);


console.log(person.hasOwnProperty('name'));
console.log(person.propertyIsEnumeration('name'));


for (const key in person) {
    console.log(person[key]);
}
console.log();