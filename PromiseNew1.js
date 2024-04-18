function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value % 2 == 0) {
                resolve(value)
            } else {
                reject(new error("new error"))
            }
        }, delay);
    });
}
getEvenNumber(4, 1000).then(result => {
    console.log(result);
    return getEvenNumber(3, 2000);
}).then(result => {
    console.log(reject);
}).catch(error=>{
    console.log(console.log(error));
})



