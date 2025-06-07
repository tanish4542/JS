function sayMyname()
{
    console.log("My name is John Doe");
    console.log("Welcome to the JavaScript Basics course!");  
}

//sayMyname(); // Calling the function to display the name and welcome message

function addNumbers(a, b) { //parameters
    console.log(a+b);
    return a + b; // Returning the sum of two numbers
    
}

//addNumbers(5, 10); // Calling the function to add two numbers 
// Calling the function with arguments 5 and 10

const result = addNumbers(5, 10); // Calling the function and storing the result
console.log(result); // Displaying the result of the addition

function loggedinuser(username)
{
    if(!username)
    {
        console.log("Username is undefined.please provide a valid username.");
        return;
        
    }
    return `${username} Just logged in`;
}
console.log(loggedinuser("John Doe")); // Calling the function with a username
console.log(loggedinuser()); // Calling the function without a username, which will return "undefined" for the username parameter

//rest operator
function addAllNumbers(...num) { // Using rest operator to accept multiple arguments
    return num;
}
console.log(addAllNumbers(1, 2, 3, 4, 5)); // Calling the function with multiple arguments

//objects as parameters
const user = {
    name: "John Doe",
    age: 30,
}
function displayUserInfo(anyobject) {
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}`);
}
displayUserInfo(user);
displayUserInfo({name: "Jane Doe", age: 25}); // Calling the function with an object literal
function displayUserInfo2({name, age}) { // Destructuring the object parameter
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUserInfo2(user); // Calling the function with the user object

//arrays as parameters
function displayArrayElements(arr) {
        console.log(arr[0]); // Displaying the first element of the array
}
const myArray = [1, 2, 3, 4, 5];
displayArrayElements(myArray); // Calling the function with an array