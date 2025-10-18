// 1️ Creating a simple Promise
let simplePromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

// 2️ Using .then() to handle resolved Promise
simplePromise
    .then((message) => {
        console.log("Then: " + message);
    })
    .catch((error) => {
        console.log("Catch: " + error);
    });

// 3️ Chaining Promises
let chainPromise = new Promise((resolve, reject) => {
    resolve(5);
});

chainPromise
    .then((value) => {
        console.log("First then: " + value);
        return value * 2; // pass value to next then
    })
    .then((value) => {
        console.log("Second then: " + value);
        return value + 10;
    })
    .then((value) => {
        console.log("Third then: " + value);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

// 4️ Promise.all example
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then((values) => {
        console.log("Promise.all resolved values: ", values);
    })
    .catch((error) => {
        console.log("Promise.all error: ", error);
    });
