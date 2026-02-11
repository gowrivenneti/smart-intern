//conditions -- it allows programs to make decisions

//if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

//if-else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

//if-else if statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//loops  -- it helps to execute block of code repeatedly

//for loop  -- when the number of iterations is known
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//while loop  -- when the number of iterations is not known  -- this loop will continue until the condition false
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

//do-while loop  -- it executes the code atleast once
let num1 = 0;
do {
    console.log("Number: " + num1);
    num1++;
} while (num1 < 5);

//for-of loop  -- used to iterate over iterable arrays and strings -- used to loop through values
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color: " + color);
}

//for-in loop  -- used to iterate through keys of an object
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
for (let key in car) {
    console.log(key + ": " + car[key]);
}