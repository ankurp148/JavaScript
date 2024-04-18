let p = new randomPromise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error("value is too small"));
        }
    }, 2000);
})

p.then(result => {
    console.log("promise is fullfilled with the value", result);
})
    .catch(error => {
        console.error("promise is rejected", error);
    })

