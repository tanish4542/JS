// Objects in JavaScript
const tinderUser = new Object();
console.log(tinderUser); // Displaying the empty object
//basic object creation
tinderUser.name = "Tanish"; // Adding a property to the object
tinderUser.age = 20;    
tinderUser.isLoggedIn = false; // Adding another property
console.log(tinderUser); // Displaying the object after adding properties
//object under object
const user={
    email:"user@example.com",
    fullname:{
        firstName: "Tanish",
        lastName: "Arora"
    }
}
console.log(user); // Displaying the user object with nested object
console.log(user.fullname.firstName); // Accessing nested object property

const obj1 = {
    key1: "value1"
}
const obj2 = {
    key2: "value2"
}
//this is not merging, this is nesting
const obj3 = {obj1, obj2}; // Merging obj1 and obj2 into obj3
console.log(obj3); // Displaying the merged object

// Merging objects using Object.assign
const obj4 = Object.assign({},obj1, obj2); // Merging obj1 and obj2 into a new object
console.log(obj4); // Displaying the merged object using Object.assign

// Merging objects using spread operator
const obj5 = {...obj1, ...obj2}; // Merging obj1 and obj2 into a new object using spread operator
console.log(obj5); // Displaying the merged object using spread operator

//Array of objects
const users = [
    {userId: 1, name: "Tanish", age: 20},
    {userId: 2, name: "John", age: 25},
    {userId: 3, name: "Jane", age: 22}
]; // Creating an array of user objects
console.log(users); // Displaying the array of user objects

// Object methods
console.log(Object.keys(tinderUser)); // Displaying the keys of the tinderUser object
console.log(Object.values(tinderUser)); // Displaying the values of the tinderUser object
console.log(Object.entries(tinderUser)); // Displaying the key-value pairs of the tinderUser object
console.log(tinderUser.hasOwnProperty("name")); // Checking if the tinderUser object has a property named "name"


//Destructuring objects
const course={
    name: "JavaScript Basics",
    price: 100,
    instructor: "John Doe",
    duration: "4 weeks"
}

// to print the course name and everything we have to type it again and again so we can destructure it
const {name, price, instructor, duration} = course; // Destructuring the course object
console.log(name); // Displaying the course name
console.log(price); // Displaying the course price
console.log(instructor); // Displaying the course instructor
console.log(duration); // Displaying the course duration

// Destructuring with renaming
const {name: courseName, price: coursePrice} = course; // Destructuring with renaming
console.log(courseName); // Displaying the renamed course name
console.log(coursePrice); // Displaying the renamed course price

// Destructuring with default values
const {name: courseTitle, price: courseCost, rating = 4.5} = course; // Destructuring with default value for rating
console.log(courseTitle); // Displaying the course title
console.log(courseCost); // Displaying the course cost
console.log(rating); // Displaying the rating (default value if not present in course object)

//JSON (JavaScript Object Notation)
//{
//    "name": "Tanish",
//    "age": 20,
//    "isLoggedIn": false,
//    "lastLoginDays": ['Monday', 'Tuesday', 'Wednesday'],
//}

//API Response Example
// set of rules for JSON