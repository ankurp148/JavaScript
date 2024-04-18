async function execute() {
    console.log('login to application');

    let p = new Promise((resolve, reject) => {
        //write asynchronus code
        setTimeout(() => {
            resolve('navigate to home page')
            reject('error')
        }, 2000);
    })

    await p.then((msg) => { console.log(msg); }).catch((msg) => { console.log(msg); })

    let p1 = new Promise((resolve, reject) => {
        //write asynchronus code
        setTimeout(() => {
            resolve('home page title')
            reject('error')
        }, 2000);
    })

    await p1.then((msg) => { console.log(msg); }).catch((msg) => { console.log(msg); })
    console.log('logout');
}
execute()