const useremail = ""

if (useremail) {
  console.log("User email is set.");
}else {
  console.log("User email is not set.");
}
// The above code will output "User email is not set." because useremail is an empty string, which is falsy.
// Truthy and Falsy values
// In JavaScript, values that evaluate to true in a boolean context are called truthy, while those that evaluate to false are called falsy.
// Falsy values include: false, 0,-0, "", null, undefined, and NaN.
// Truthy values include: any non-zero number, non-empty strings, objects, arrays, and functions.
// Example of truthy and falsy values
const truthyValue = "Hello"; // Non-empty string (truthy)
const falsyValue = 0; // Zero (falsy)
if (truthyValue) {
  console.log("This is a truthy value.");
}
if (!falsyValue) {
  console.log("This is a falsy value.");
}
// The above code will output "This is a truthy value." and "This is a falsy value." because the conditions evaluate to true.


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
// It is used to provide a default value when dealing with potentially null or undefined values.
const userName = null;
const displayName = userName ?? "Guest";
console.log(displayName); // Output: "Guest"
// The above code will output "Guest" because userName is null, so the right-hand operand is returned.
// The nullish coalescing operator is particularly useful when you want to handle cases where a variable might be null or undefined, without affecting other falsy values like 0 or "".
console.log("Hello" ?? "World"); // Output: "Hello"
console.log(0 ?? "World"); // Output: 0
console.log(null ?? "World"); // Output: "World"
console.log(undefined ?? "World"); // Output: "World"   

//Ternary Operator
// The ternary operator is a shorthand for the if-else statement.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
const age = 18;
const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."
