// We aim to use functional approaches when looping 
// like map, filter, reduce, find etc.

const failures = ["misclick", "falling down", "skateboard accident", "tiktok fail"];

failures.map((failure, index) => {
    console.log(index, failure);
});

// one-liner
/* 
    failures.map((index, failure) => console.log(index, failure));
 */
const newFailures = failures.map((failure) => {
    return {failure, hilarityLevel: 5};
});

/* One-liner - but we cannot construct new object
    const newFailures = failures.map((failure) => failure); 
*/

failures.find()

console.log(newFailures);

