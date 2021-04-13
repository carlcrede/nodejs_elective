
// Promises have two states:
// Pending
// fulfilled
    // resolved, rejected


/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ msg: "Resolved" });
    }, 4000);
}).then(message => {
    console.log(message)
}); */

function myPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Success");
            }, 5000);
        } catch {
            reject("Rejected");
        }
    });
}

/* myPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error)) */


// async / await
/* async function myAsynchFunc() {
    try {
        const message = await myPromise();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
myAsynchFunc(); */

// call the above immediately
(async function myAsynchFunc() {
    try {
        const message = await myPromise();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
})()