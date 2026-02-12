//Array -- it is a data structure that can hold multiple values in a single variable

//creating an array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

//accessing array elements
console.log(fruits[0]); //output: apple

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let fruit of fruits) {
    console.log(fruit);
}

//array methods
fruits.push("grape"); //adds an element to the end of the array
console.log(fruits);

fruits.pop(); //removes the last element from the array
console.log(fruits);

fruits.unshift("mango"); //adds an element to the beginning of the array
console.log(fruits);

fruits.shift(); //removes the first element from the array
console.log(fruits);

fruits.splice(1, 1); //removes an element from a specific index
console.log(fruits);

fruits.slice(0, 2); //returns a new array with a portion of the original array
console.log(fruits);

fruits.indexOf("banana"); //returns the index of the first occurrence of an element
console.log(fruits);

fruits.includes("orange"); //returns true if the array contains a specific element
console.log(fruits);

fruits.length; //returns the number of elements in the array
console.log(fruits);

fruits.sort(); //sorts the elements of the array in alphabetical order
console.log(fruits);

fruits.reverse(); //reverses the order of the elements in the array
console.log(fruits);

let a=[1,2,3];
let b=[4,5,6];
let c=a.concat(b); //concatenates two arrays and returns a new array
console.log(c);

a.map(x => x * 2); //returns a new array with the results of calling a provided function on every element in the array
console.log(a);

a.filter(x => x > 2); //returns a new array with all elements that pass the test implemented by the provided function
console.log(a);

a.reduce((acc, x) => acc + x, 0); //executes a reducer function on each element of the array, resulting in a single output value
console.log(a);
