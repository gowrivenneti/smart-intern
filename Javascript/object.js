//Object -- It is a collection of properties and keys. It is a non-primitive data type. It is used to store multiple values in a single variable. 
// It is also used to store data in a structured way. It is also used to create complex data structures.

//Creating an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

//Accessing object properties
console.log(person.name);

for(let key in person){
    console.log(key + ": " + person[key]);
}

//Adding new properties to an object
person.country = "USA";
console.log(person);

//Deleting properties from an object
delete person.age;
console.log(person);

//Object methods
let person2 = {
    name: "Gowri",
    age: 20,
    city: "Bhimavaram",
    fullName: function(){
        return this.name + "Lakshmi";
    }
};

console.log(person2.fullName());

console.log(Object.keys(person2)); //Returns an array of keys

console.log(Object.values(person2)); //Returns an array of values

console.log(Object.entries(person2)); //Returns an array of key-value pairs

console.log(Object.hasOwn(person2, "name")); //Returns true if the object has the specified property

console.log(Object.freeze(person2)); //Freezes the object, preventing any changes to it

const person3=Object.create(person2); //Creates a new object with the specified prototype
console.log(person3.name);

//Object destructuring
const {name, age} = person2;
console.log(name);
console.log(age);

//array of objects
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
console.log(people[0].name);
