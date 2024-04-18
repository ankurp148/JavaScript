//"use strict mode"
console.log(this); //this is pointing to window object

function a() {
    console.log(this); //under strict mode undefined, under non-strict mode window object
}
a()
console.log("------------------------------");
let b = () => {
    console.log(this); //this is pointing to window object
}
b()
console.log("------------------------------");
let obj = {
    pname: 'ankur',
    greet: function () {
        console.log(this); //this is pointing to object itself
        console.log(this.pname);//ankur
    },
    b: () => {
        console.log(this); //this is pointing to window object
        console.log(this.pname);//this is undefined
    }
}
obj.greet()
obj.b()
