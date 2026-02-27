// Async/Await -- it is a modern way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

//async -- if we write async before a function , it always returns a promise.
async function fetchDataAsync() {
    return {name: "Gowri", age: 20};
}  
fetchDataAsync()
    .then((data) => {
        console.log("Data fetched: ", data);   
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
//await -- it is used to wait for a promise to resolve or reject before moving on to the next line of code. It can only be used inside an async function.
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Gowri", age: 20};
            resolve(data);
        }, 2000);
    });
}