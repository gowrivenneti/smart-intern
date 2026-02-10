// This is a simple JavaScript code snippet that demonstrates basic variable declarations,operators,datatypes and console output.

//Javascript is lightweight scripting language used to interact with web pages .

//Variables -- it is a container used to store values
var a=5;   //var -- function scoped , redeclarable and updatable
var b=10;
var sum=a+b;
console.log("The sum of a and b is: " + sum);

let x=10;  //let -- block scoped , not redeclarable but updatable
let y=5;
let difference=x-y;
console.log("The difference between x and y is: " + difference);

const pi=3.14;  //const -- block scoped , not redeclarable and not updatable
let radius=2;
let area=pi*radius*radius;
console.log("The area of the circle with radius " + radius + " is: " + area);

//Data types -- It defines the type of value to be stored in a variable

let name="Gowri";  //string data type
console.log("Hello, " + name + "! Welcome to JavaScript programming.");

let num=27;   //number data type
console.log("The square of " + num + " is: " + (num*num));

let dec=3.5;  //decimal number data type
console.log("The value of dec is: " + dec);

let isLogin=true;   //boolean data type
console.log("Is user logged in? " + isLogin);

let person={   //object data type -- collection of key-value pairs
    name: "Gowri",
    age: 25,
    city: "Chennai"
};
console.log("Person details: Name - " + person.name + ", Age - " + person.age + ", City - " + person.city);

let fruits=["apple", "banana", "orange"];  //array data type -- list of values stored in a single variable
console.log("Fruits in the list: " + fruits.join(", "));

//Operators -- it is a symbol used to perform operations on the values

//Arithmetic operators
console.log("Addition: " + (a+b));  
console.log("Subtraction: " + (x-y));
console.log("Multiplication: " + (a*b));
console.log("Division: " + (x/y));
console.log("Modulus: " + (a%b));

//Comparison operators
console.log(a>b);  //greater than
console.log(x<y);  //less than
console.log(a==b);  //equal to
console.log(x!=y);  //not equal to  
console.log(a===b);  //strict equal to -- checks both value and data type
console.log(x!==y);  //strict not equal to -- checks both value and data type

//assignment operators
a+=5;  //a = a + 5  
console.log("Value of a after addition: " + a);
x-=2;  //x = x - 2
console.log("Value of x after subtraction: " + x);
b*=2;  //b = b * 2
console.log("Value of b after multiplication: " + b);
y/=2;  //y = y / 2
console.log("Value of y after division: " + y);
a%=3;  //a = a % 3
console.log("Value of a after modulus: " + a);

//logical operators
console.log(a>b && x>y);  //and operator
console.log(a<b || x<y);    //or operator
console.log(!isLogin);  //not operator

