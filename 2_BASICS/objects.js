//singleton 
const myS=Symbol("mySymbol");
 
//object literal
Object.create // constructor method
const jsUser = {
    name:"Tanish",
    "full name": "Tanish Arora",
    [myS]:"Yoyo", // property with a symbol as key
    age: 20,
    marks: 90,
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
} // object literal

console.log(jsUser.name); // Accessing property using dot notation
console.log(jsUser['age']); // Accessing property using bracket notation
console.log(jsUser); // Displaying the entire object
console.log(jsUser['full name']); // Accessing an element in the array property
console.log(typeof jsUser[myS]); // Accessing property with a symbol as key

jsUser.isLoggedIn = true; // Updating a property
//Object.freeze(jsUser); // Freezing the object to prevent further modifications
jsUser.isLoggedIn = false; // This will not change the property because the object is frozen
console.log(jsUser.isLoggedIn); // Checking the value of isLoggedIn property
console.log(jsUser); // Displaying the object after attempting to modify it
jsUser.greet = function() { // Adding a method to the object
    console.log(`Hello, my name is Tanish`);
};
jsUser.greet(); // Calling the method to greet
