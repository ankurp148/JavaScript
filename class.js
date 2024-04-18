//ES6 CLASS

class student {
    a = 10          //non static variable
    static b = 15   //static variable

    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    static details() //static method 
    {
        //  let s = new student()
        console.log("----STATIC METHOD----");
        console.log(`Static variable : ${student.b} non-static variable : ${s1.a}`);
    }

    fdetailes()  //non-static method
    {
        console.log("----NON-STATIC METHOD----");
        let s = new student()
        console.log(`Non - static variable : ${s1.a} static : ${student.b} constructor : ${this.surname}`);
    }
}
// console.log("----OBJECT CREATION----");
let s1 = new student('java', 'script')
// s1.fdetailes()
// student.details()
// console.log(s1.name);
// console.log(s1.surname);

class teacher extends student {
    constructor(name, surname, age) {
        super(name, surname)
        this.age = age
    }

    fdetailes()  //non-static method
    {
        super.fdetailes()
        console.log("----CHILD CLASS----");
        console.log("new implementation");
    }

}
console.log("----NEW OBJECT CREATION----");
let t = new teacher('abc', 'roy', 20)
t.fdetailes()

export default new student
