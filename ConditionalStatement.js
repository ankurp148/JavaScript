//if else
var a = 10
if (a == 10) {
    console.log(a);
}
else {
    console.log("this is not correct value of a");
}

//if
if (count = 100) {
    console.log(count);
}

//if else if
var age
if (age < 0) {
    console.log("not born");
}
else if (age > 0 && age < 16) {
    console.log("kid");
}
else {
    console.log("adult");
}

//switch case
var amount = 1000
switch (amount) {
    case 1000: console.log("min balance");
        break;
    case 2000: console.log("max balance");
        break;
    default: console.log("insufficient balance");
        break;
}