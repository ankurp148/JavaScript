//call back function

function add(a,b) {
    console.log('The sum is ${a+b}');
}

function sub(a,b) {
    console.log('The diff is ${a-b}');
}


function perform(data1, data2, callback1, callback2) {
    console.log();
    callback1(data1,data2)
    setTimeout(() => {
        callback2(data1,data2)
    }, 3000);
}
perform(10,5,add,sub)

