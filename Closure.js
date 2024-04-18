//CLOSURE

let varb = "global"

function outer(a) {
    let count = 0

    function inner() {
        console.log(++count + "  " + varb + "  " + a);
    }
    return inner
}

let ret = outer(100)
ret()