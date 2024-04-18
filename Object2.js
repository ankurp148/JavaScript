//constructor function
function empDetails(id, name, salary, details) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.details = details;
}

let empp = new empDetails(103, 'ankur', 30000, function details() {
    console.log("The details are :" + " " + this.name + " " + this.id + " " + this.salary);
    console.log(empp);
})
console.log(empp);
console.log(empp.name);
empp.details()

//class

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

let per = new person("ankur", 25)
console.log(per);


//