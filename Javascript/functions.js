//functions -- it is a block of code designed to perform a particular task. 
// It is reusuable and can be called multiple times in a program.

//function declaration
//normal function or named function
function greet(name) {
    console.log("Hello, " + name + "!");
}

//anonymous function --it is a function without a name and is often used as a callback or assigned to a variable.
let greet2 = function(name) {
    console.log("Hi, " + name + "!");
};

//arrow function -- it is a shorter syntax for writing functions and does not have its own 'this' context.
let greet3 = (name) => {
    console.log("Hey, " + name + "!");
};  

greet("gowri");
greet2("venkat");
greet3("sneha");