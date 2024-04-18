//global variable
var a = 10
let b = 20
const c = 30

function f1() {

    //local varibles
    var a1 = 40
    let b1 = 50
    const c1 = 60

    //  console.log(a); //10
    //  console.log(b); //20
    //  console.log(b1); //50

}
//method calling
f1()
// console.log(a1); //NOT DEFINED
// console.log(b); //20

{
    var a2 = 70
    let b2 = 80
    const c2 = 90

    // console.log(a); //10
    // console.log(a2); //70
}

function f2() {
    var a3 = 100
    let b3 = 110
    const c3 = 120

    // console.log(a); //10
    // console.log(a3); //100
    // console.log(b2); //NOT DEFINED

    {
        var a4 = 130
        let b4 = 140
        const c4 = 150

        // console.log(a4); //130
        // console.log(a3); //100
        // console.log(b3); //110
    }

    // console.log(a4); //130
    // console.log(b3); //110
    // console.log(b4); //NOT DEFINED
}
f2()

{
    var a5 = 160
    let b5 = 170
    const c5 = 180

    //   console.log(b5); //170

    function f3(params) {
        var a6 = 190
        let b6 = 200
        const c6 = 210

        // console.log(c6); //210
        // console.log(a5); //160
    }

    //   console.log(a5); //170
    //   console.log(b5); //160
    // console.log(c6); //NOT DEFINED
}
f3()
