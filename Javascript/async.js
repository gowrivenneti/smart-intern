//Asynchronous programming in JavaScript
//It allows to run code without blocking the rest of the program.
//It is used to handle tasks that take time to complete, such as fetching data from an API or reading a file.

//setTimeout() -- it allows to execute a function after a specified delay.
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

//setInterval() -- it allows to execute a function repeatedly at a specified interval.
let count = 0;
let intervalId = setInterval(() => {
    console.log("This message is displayed every 1 second.");
    count++;
    if(count === 5) {
        clearInterval(intervalId); //stops the interval after 5 iterations
    }
}, 1000);

//callbacks -- it is a function that is passed as an argument to another function and is executed after the completion of that function.
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function done() {
    console.log("Done greeting ");
}
greet("gowri",done);

//example
function fetchData(callback) {
    setTimeout(() => {
        const data = {name: "Gowri", age: 20};
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Data fetched: ", data);
});

//promises - it is an object that represents the future result of an asynchronous operation. 
// It can be in one of three states: pending, fulfilled, or rejected.
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Gowri", age: 20};
            resolve(data);
        }, 2000);
    });
}
//Using promises
//chaining methods  -- try catch or then catch
fetchDataPromise()
    .then((data) => {
        console.log("Data fetched: ", data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });

//chaining promises
function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Gowri", age: 20};
            resolve(data);
        }, 2000);
    });
}
//promise methods
//Promise.all() -- it allows to run multiple promises in parallel and returns a new promise that resolves when all the promises have resolved.
function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Venkat", age: 25};
            resolve(data);
        }, 3000);
    });
}

Promise.all([fetchData1(), fetchData2()])
    .then((results) => {
        console.log("Data fetched: ", results);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });

//promise.race() -- it allows to run multiple promises in parallel and returns a new promise that resolves or rejects as soon as one of the promises resolves or rejects.
Promise.race([fetchData1(), fetchData2()])
    .then((result) => {
        console.log("First data fetched: ", result);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });

//promise.allSettled() -- it allows to run multiple promises in parallel and returns a new promise that resolves when all the promises have settled, regardless of whether they were fulfilled or rejected.
Promise.allSettled([fetchData1(), fetchData2()])
    .then((results) => {
        console.log("All promises settled: ", results);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });

//promise.any() -- it allows to run multiple promises in parallel and returns a new promise that resolves as soon as any of the promises resolves, or rejects if all of the promises reject.
Promise.any([fetchData1(), fetchData2()])
    .then((result) => {
        console.log("First promise resolved: ", result);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });